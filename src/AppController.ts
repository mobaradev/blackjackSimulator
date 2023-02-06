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


    // static onPanelUpdate(): () => void;
    // static onPlayerBust: () => void;
    // static onDealerBust: () => void;

    static init() {
        SettingsController.init();

        AppController.updateListeners = [];
        AppController.statistics = new Statistics();
        AppController.predictions = new Predictions();

        AppController.blackjack = new Blackjack();
    }
}

export default AppController;