import Blackjack from "./logic/Blackjack/Blackjack";
import Statistics from "./logic/Statistics/Statistics";
import Predictions from "./logic/Predictions/Predictions";
import SettingsController from "./SettingsController";

class AppController {
    static statistics: Statistics;
    static predictions: Predictions;
    static blackjack: Blackjack;
    static onGameStart: () => void;
    static onHit: () => void;
    static onStand: () => void;
    static onDealerHit: () => void;
    static updateListeners: (() => void)[];
    static onUpdate() {
        this.updateListeners.forEach(updateListener => updateListener());
    }

    static version: string;
    static releaseDate: string;

    static init() {
        AppController.version = "1.00";
        AppController.releaseDate = "February 5, 2023";

        SettingsController.init();

        AppController.updateListeners = [];
        AppController.statistics = new Statistics();
        AppController.predictions = new Predictions();

        AppController.blackjack = new Blackjack();
    }
}

export default AppController;