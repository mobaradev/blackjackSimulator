import Deck from "../Deck/Deck";
import Card from "../Card/Card";
import AppController from "../../AppController";

class Blackjack {
    deck: Deck;
    playerCards: Card[];
    dealerCards: Card[];
    isLocked: boolean;

    constructor() {
        this.deck = new Deck();
        this.isLocked = false;

        this.playerCards = [];
        this.dealerCards = [];
    }

    start() {
        this.clear();
        this.playerCards.push(this.deck.getCard())
        this.playerCards.push(this.deck.getCard())
        this.dealerCards.push(this.deck.getCard())

        AppController.onGameStart();
    }

    clear() {
        this.deck = new Deck();
        this.playerCards = [];
        this.dealerCards = [];
    }

    hit() {
        if (this.isLocked) return;
        this.playerCards.push(this.deck.getCard())

        AppController.onHit();

        if (this.playerPoints > 21) {
            AppController.onGameEnd();
        }
    }

    dealerHit() {
        if (this.isLocked) return;
        this.dealerCards.push(this.deck.getCard())

        AppController.onDealerHit();

        if (this.dealerPoints > 21) {
            AppController.onGameEnd();
        }
    }

    stand() {
        while (this.dealerPoints < 17) {
            this.dealerHit();
        }

        AppController.onGameEnd();
    }

    get playerPoints() : number {
        let playerPoints = 0;
        this.playerCards.forEach(card => playerPoints += card.value);

        return playerPoints;
    }

    get dealerPoints() : number {
        let dealerPoints = 0;
        this.dealerCards.forEach(card => dealerPoints += card.value);

        return dealerPoints;
    }

}

export default Blackjack;