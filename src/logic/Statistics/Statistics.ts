import {GAME_STATUS} from "../Blackjack/Blackjack";

class Statistics {
    games: number;
    wins: number;
    regularWins: number;
    doubleDownWins: number;
    blackjackWins: number;
    draws: number;
    loses: number;
    regularLoses: number;
    bustLoses: number;
    doubleDownLoses: number;
    netProfit: number;

    constructor() {
        this.games = 0;
        this.wins = 0;
        this.regularWins = 0;
        this.doubleDownWins = 0;
        this.blackjackWins = 0;
        this.draws = 0;
        this.loses = 0;
        this.regularLoses = 0;
        this.bustLoses = 0;
        this.doubleDownLoses = 0;
        this.netProfit = 0;
    }

    handleGameEnd(gameStatus: GAME_STATUS) {
        this.games++;

        switch (gameStatus) {
            case GAME_STATUS.NORMAL_WIN:
                this.wins++;
                this.regularWins++;
                this.netProfit += 1;
                break;
            case GAME_STATUS.BLACKJACK_WIN:
                this.wins++;
                this.blackjackWins++
                this.netProfit += 1.5; // blackjack pays 3 to 2
                break;
            case GAME_STATUS.DOUBLE_DOWN_WIN:
                this.wins++;
                this.doubleDownWins++;
                this.netProfit += 2;
                break;
            case GAME_STATUS.DRAW:
                this.draws++;
                break;
            case GAME_STATUS.NORMAL_LOSE:
                this.loses++;
                this.regularLoses++;
                this.netProfit -= 1;
                break;
            case GAME_STATUS.DOUBLE_DOWN_LOSE:
                this.loses++;
                this.doubleDownLoses++;
                this.netProfit -= 2;
                break;
            case GAME_STATUS.BUST_LOSE:
                this.loses++;
                this.bustLoses++;
                this.netProfit -= 1;
                break;
            default:

        }
    }
}

export default Statistics;