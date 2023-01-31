import Blackjack from "./logic/Blackjack/Blackjack";

class AppController {
    static blackjack: Blackjack;
    static onStart: () => void;
    static onHit: () => void;

    static init() {
        AppController.blackjack = new Blackjack();
    }
}

export default AppController;