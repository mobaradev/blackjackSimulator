import Deck from "../Deck/Deck";
import Card from "../Card/Card";
import AppController from "../../AppController";

class Blackjack {
    deck: Deck;
    playerCards: Card[];
    dealerCards: Card[];

    constructor() {
        this.deck = new Deck();

        this.playerCards = [];
        this.dealerCards = [];

        console.log(this.deck.getCard());
        console.log(this.deck.getCard());
        console.log(this.deck.getCard());
    }

    start() {
        this.playerCards.push(this.deck.getCard())
        this.playerCards.push(this.deck.getCard())
        this.dealerCards.push(this.deck.getCard())

        AppController.onStart();
    }

    hit() {
        this.playerCards.push(this.deck.getCard())

        AppController.onHit();
    }

}

export default Blackjack;