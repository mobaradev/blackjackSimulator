import AppController from "../../AppController";

class Predictions {
    hitTo21: number;
    hitTo1920: number;
    hitBust: number;
    standDealerBust: number;
    standDealerRegularLose: number;
    standDealerRegularWin: number;
    standDraw: number;

    constructor() {
        this.hitTo21 = 0;
        this.hitTo1920 = 0;
        this.hitBust = 0;
        this.standDealerBust = 0;
        this.standDealerRegularLose = 0;
        this.standDealerRegularWin = 0;
        this.standDraw = 0;
    }

    calculatePredictions() {
        const playerPoints = AppController.blackjack.playerPoints;

        this.hitBust = Math.max(0, (playerPoints - 11 + 3) / 13);

        if (playerPoints <= 11) {
            this.hitBust = 0;
        } else {
            // 10 J Q K -> bust always starting from 12 points
            // each 1 point more, then next card will bust (e.g. 13 points -> 9 10 J Q K -> bust)
            this.hitBust = (4 + playerPoints - 12) / 13;
        }

        this.hitTo21 = (playerPoints >= 10 ? 1 / 13 : 0);

        if (playerPoints < 8) {
            this.hitTo1920 = 0;
        } else if (playerPoints === 8) {
            this.hitTo1920 = 1 / 13; // A
        } else if (playerPoints === 9) {
            this.hitTo1920 = 5 / 13; // 10 J Q K A
        } else if (playerPoints === 10) {
            this.hitTo1920 = 4 / 13; // 10 J Q K
        } else if (playerPoints > 10 && playerPoints <= 18) {
            this.hitTo1920 = 2 / 13;
        } else if (playerPoints === 19) {
            this.hitTo1920 = 1 / 13;
        } else {
            this.hitTo1920 = 0;
        }

        // dealer's
        const dealerPoints = AppController.blackjack.dealerPoints;

        // percentages, when dealer stands on all 17 (including soft 17)
        if (dealerPoints === 2) this.standDealerBust = 0.353;
        else if (dealerPoints === 3) this.standDealerBust = 0.3756;
        else if (dealerPoints === 4) this.standDealerBust = 0.4028;
        else if (dealerPoints === 5) this.standDealerBust = 0.4289;
        else if (dealerPoints === 6) this.standDealerBust = 0.4208;
        else if (dealerPoints === 7) this.standDealerBust = 0.2599;
        else if (dealerPoints === 8) this.standDealerBust = 0.2386;
        else if (dealerPoints === 9) this.standDealerBust = 0.2334;
        else if (dealerPoints === 10) this.standDealerBust = 0.2143;
        else if (dealerPoints === 11) this.standDealerBust = 0.1165;

        // draw
        this.standDraw = this._getDealersFinalResultPercentages(dealerPoints, playerPoints);

        // dealer regular lose
        if (playerPoints <= 17) this.standDealerRegularLose = 0;
        else {
            let chances = 0;
            for (let i = 17; i < playerPoints; i++) {
                chances += this._getDealersFinalResultPercentages(dealerPoints, i);
            }
            this.standDealerRegularLose = chances;
        }

        // dealer regular win
        if (playerPoints < 17) {
            this.standDealerRegularWin = 1 - this.standDealerBust;
        } else {
            let chances = 0;
            for (let i = 21; i > playerPoints; i--) {
                chances += this._getDealersFinalResultPercentages(dealerPoints, i);
            }
            this.standDealerRegularWin = chances;
        }
    }


    _getDealersFinalResultPercentages(dealerStartPoints: number, dealerFinalPoints: number) : number {
        if (dealerFinalPoints < 17 || dealerFinalPoints > 21) return 0;
        if (dealerStartPoints < 2 || dealerStartPoints > 12) return 0;

        // data based on:
        // https://probability.infarom.ro/blackjack.html
        const data = [
            [0.1398, 0.1350, 1.305, 0.1223, 0.1654, 0.3686, 0.1286, 0.1200, 0.1114, 0.1308], // final = 17
            [0.1349, 0.1305, 0.1259, 0.1223, 0.1063, 0.1378, 0.3593, 0.1200, 0.1114, 0.1308], // final = 18
            [0.1297, 0.1256, 0.1214, 0.1177, 0.1063, 0.0786, 0.1286, 0.3508, 0.1114, 0.1308], // final = 19
            [0.1240, 0.1203, 0.1165, 0.1131, 0.1017, 0.0786, 0.0694, 0.1200, 0.3422, 0.1308], // final = 20
            [0.1180, 0.1147, 0.112, 0.1082, 0.0972, 0.0741, 0.0694, 0.0608, 0.0345, 0.0539] // final = 21
        ]

        return data[dealerFinalPoints - 17][dealerStartPoints - 2];
    }
}

export default Predictions;