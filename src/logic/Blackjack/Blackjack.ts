import Deck from "../Deck/Deck";
import Card from "../Card/Card";
import AppController from "../../AppController";
import SettingsController, {DEALER_SOFT_17_ACTION} from "../../SettingsController";

export enum GAME_STATUS {
    NOT_STARTED,
    IN_PROGRESS,
    NORMAL_WIN,
    DOUBLE_DOWN_WIN,
    BLACKJACK_WIN,
    NORMAL_LOSE,
    DOUBLE_DOWN_LOSE,
    BUST_LOSE,
    DRAW
}

export enum ACTION_STATUS {
    AVAILABLE,
    NOT_AVAILABLE,
    USED
}

class Blackjack {
    deck: Deck;
    playerCards: Card[];
    dealerCards: Card[];
    isGameActive: boolean;
    gameStatus: GAME_STATUS;
    isLocked: boolean;
    doubleActionStatus: ACTION_STATUS;
    splitActionStatus: ACTION_STATUS;

    constructor() {
        this.deck = new Deck();
        this.isGameActive = false;
        this.gameStatus = GAME_STATUS.NOT_STARTED;
        this.isLocked = false;

        this.doubleActionStatus = ACTION_STATUS.AVAILABLE;
        this.splitActionStatus = ACTION_STATUS.NOT_AVAILABLE;

        this.playerCards = [];
        this.dealerCards = [];
    }

    start() {
        this.clear();
        this.gameStatus = GAME_STATUS.IN_PROGRESS;

        this.playerCards.push(this.deck.getCard())
        this.playerCards.push(this.deck.getCard())
        this.dealerCards.push(this.deck.getCard())

        if (this.playerCards[0].value === this.playerCards[1].value) {
            this.splitActionStatus = ACTION_STATUS.AVAILABLE;
        }

        this.doubleActionStatus = ACTION_STATUS.AVAILABLE;

        if (this.playerPoints === 21) {
            this.dealerCards.push(this.deck.getCard())
            this.gameEnd();
        }

        AppController.onGameStart();
        AppController.onUpdate();
    }

    clear() {
        this.deck = new Deck();
        this.isGameActive = true;
        this.playerCards = [];
        this.dealerCards = [];

        AppController.onUpdate();
    }

    hit() {
        if (this.isLocked) return;
        this.doubleActionStatus = ACTION_STATUS.NOT_AVAILABLE;
        this.playerCards.push(this.deck.getCard())

        AppController.onHit();

        if (this.playerPoints >= 21) {
            this.stand();
        }

        AppController.onUpdate();
    }

    hitDouble() {
        if (this.isLocked) return;
        this.playerCards.push(this.deck.getCard())

        AppController.onHit();

        if (this.playerPoints >= 21) {
            this.gameEnd();
        }

        AppController.onUpdate();
        this.doubleActionStatus = ACTION_STATUS.USED;
        this.stand();
    }

    dealerHit() {
        if (this.isLocked) return;
        this.dealerCards.push(this.deck.getCard())

        AppController.onDealerHit();
        AppController.onUpdate();
    }

    stand() {
        let dealerStandPoints = 17;

        while (this.dealerPoints < dealerStandPoints) {
            if (SettingsController.dealerSoft17Action === DEALER_SOFT_17_ACTION.HIT && this.isDealerWithSoftAce) {
                dealerStandPoints = 18;
            } else dealerStandPoints = 17;

            this.dealerHit();
        }

       this.gameEnd();
        AppController.onUpdate();
    }

    gameEnd() {
        this.isGameActive = false;
        this.gameStatus = this.determineGameStatus();
        AppController.statistics.handleGameEnd(this.gameStatus);
        AppController.onUpdate();
    }
    
    determineGameStatus() : GAME_STATUS {
        // instant blackjack check
        if (this.playerPoints === 21 && this.playerCards.length === 2 && this.dealerPoints !== 21) {
            return GAME_STATUS.BLACKJACK_WIN;
        }

        if (this.playerPoints > 21) {
            return (this.doubleActionStatus === ACTION_STATUS.USED ? GAME_STATUS.DOUBLE_DOWN_LOSE : GAME_STATUS.BUST_LOSE);
        } else {
            if (this.dealerPoints > 21) {
                return (this.doubleActionStatus === ACTION_STATUS.USED ? GAME_STATUS.DOUBLE_DOWN_WIN : GAME_STATUS.NORMAL_WIN);
            } else {
                if (this.dealerPoints > this.playerPoints) {
                    return (this.doubleActionStatus === ACTION_STATUS.USED ? GAME_STATUS.DOUBLE_DOWN_LOSE : GAME_STATUS.NORMAL_LOSE);
                } else if (this.dealerPoints < this.playerPoints) {
                    return (this.doubleActionStatus === ACTION_STATUS.USED ? GAME_STATUS.DOUBLE_DOWN_WIN : GAME_STATUS.NORMAL_WIN);
                } else {
                    return GAME_STATUS.DRAW;
                }
            }
        }
    }

    get numberOfPlayerAces() : number {
        let numberOfAces = 0;

        this.playerCards.forEach(card => {
            if (card.isAce) numberOfAces++;
        });

        return numberOfAces;
    }

    get playerPoints() : number {
        let playerPoints = 0;
        let numberOfAces = this.numberOfPlayerAces;

        this.playerCards.forEach(card => {
            playerPoints += card.value;
        });

        for (let i = 0; i < numberOfAces; i++) {
            if (playerPoints > 21) {
                playerPoints -= 10;
            }
        }

        return playerPoints;
    }

    get isDealerWithSoftAce() : boolean {
        let dealerPoints = this.dealerPoints;
        let dealerTotalPoints = 0; // total points always takes 11 from ace
        let numberOfAces = 0;

        this.dealerCards.forEach(card => {
            dealerTotalPoints += card.value;
            if (card.isAce) numberOfAces++;
        });

        if (numberOfAces > 0 && dealerTotalPoints === dealerPoints) return true;
        else return false;
    }

    get isHardAceUsed() : boolean {
        let playerPoints = this.playerPoints;
        let numberOfAces = this.numberOfPlayerAces;

        for (let i = 0; i < numberOfAces; i++) {
            if (playerPoints > 21) {
                return true;
            }
        }
        return false;
    }

    get playerPointsParsed() : string {
        const realPoints = this.playerPoints;
        let totalPoints = 0;
        let isAce = false;

        this.playerCards.forEach(card => {
            totalPoints += card.value;
            if (card.isAce) isAce = true;
        });

        if (isAce && totalPoints < 21) {
            return `${realPoints - 10} / ${realPoints}`;
        } else {
            return realPoints.toString();
        }
    }

    get dealerPoints() : number {
        let dealerPoints = 0;
        let numberOfAces = this.numberOfPlayerAces;

        this.dealerCards.forEach(card => {
            dealerPoints += card.value;
            if (card.isAce) numberOfAces++;
        });

        for (let i = 0; i < numberOfAces; i++) {
            if (dealerPoints > 21) {
                dealerPoints -= 10;
            }
        }

        return dealerPoints;
    }

    get dealerPointsParsed() : string {
        return this.dealerPoints.toString();
    }

}

export default Blackjack;