
/*
    0 - 2
    1 - 3
    2 - 4
    3 - 5
    4 - 6
    5 - 7
    6 - 8
    7 - 9
    8 - 10
    9 - J
    10 - Q
    11 - K
    12 - A
*/

class Card {
    number: number;
    value: number;
    isAce: boolean;

    constructor(number: number) {
        this.number = number;
        this.isAce = (number === 12);

        const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

        this.value = CARD_VALUES[number];
    }
}

export default Card;