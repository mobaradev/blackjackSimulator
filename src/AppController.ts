import Blackjack from "./logic/Blackjack/Blackjack";

class AppController {
    static blackjack: Blackjack;
    static onGameStart: () => void;
    static onHit: () => void;
    static onStand: () => void;
    static onDealerHit: () => void;
    static onGameEnd: () => void;
    // static onPlayerBust: () => void;
    // static onDealerBust: () => void;

    static init() {
        AppController.blackjack = new Blackjack();
    }
}

export default AppController;