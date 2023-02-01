import Deck from "../Deck/Deck";
import Card from "../Card/Card";
import AppController from "../../AppController";

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
    isLocked: boolean;
    doubleActionStatus: ACTION_STATUS
    splitActionStatus: ACTION_STATUS

    constructor() {
        this.deck = new Deck();
        this.isGameActive = false;
        this.isLocked = false;

        this.doubleActionStatus = ACTION_STATUS.AVAILABLE;
        this.splitActionStatus = ACTION_STATUS.NOT_AVAILABLE;

        this.playerCards = [];
        this.dealerCards = [];
    }

    start() {
        this.clear();
        this.playerCards.push(this.deck.getCard())
        this.playerCards.push(this.deck.getCard())
        this.dealerCards.push(this.deck.getCard())

        if (this.playerCards[0].value === this.playerCards[1].value) {
            this.splitActionStatus = ACTION_STATUS.AVAILABLE;
        }

        if (this.playerPoints === 21) {
            this.dealerCards.push(this.deck.getCard())
            AppController.onGameEnd();
            this.isGameActive = false;
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
        this.playerCards.push(this.deck.getCard())

        AppController.onHit();

        if (this.playerPoints > 21) {
            this.isGameActive = false;
            AppController.onGameEnd();
            AppController.onUpdate();
        }

        AppController.onUpdate();
    }

    dealerHit() {
        if (this.isLocked) return;
        this.dealerCards.push(this.deck.getCard())

        AppController.onDealerHit();
        AppController.onUpdate();
    }

    stand() {
        while (this.dealerPoints < 17) {
            this.dealerHit();
        }

        AppController.onGameEnd();
        this.isGameActive = false;
        AppController.onUpdate();
    }

    get playerPoints() : number {
        let playerPoints = 0;
        let numberOfAces = 0;
        this.playerCards.forEach(card => {
            playerPoints += card.value;
            if (card.isAce) numberOfAces++;
        });

        for (let i = 0; i < numberOfAces; i++) {
            if (playerPoints > 21) {
                playerPoints -= 10;
            }
        }

        return playerPoints;
    }

    get dealerPoints() : number {
        let dealerPoints = 0;
        this.dealerCards.forEach(card => dealerPoints += card.value);

        return dealerPoints;
    }

}

export default Blackjack;