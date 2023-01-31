import Card from "../Card/Card";

class Deck {
    cards: Card[];

    constructor() {
        this.cards = [];

        for (let i = 0; i < 52; i++) {
            this.cards.push(new Card(i % 13));
        }

        this.shuffle();
    }

    shuffle() {
        const shuffled = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = [...shuffled];
    }

    getCard() {
        let cardToReturn = this.cards[0];
        this.cards.splice(0, 1);

        return cardToReturn;
    }
}

export default Deck;