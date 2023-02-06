
export enum CARD_TYPE {
    FULL,
    SIMPLIFIED
}

export enum DEALER_SOFT_17_ACTION {
    STAND,
    HIT
}

class SettingsController {
    static cardType: CARD_TYPE;
    static dealerSoft17Action: DEALER_SOFT_17_ACTION;

    static init() {
        // set default settings at the beginning
        this.cardType = CARD_TYPE.FULL;
        this.dealerSoft17Action = DEALER_SOFT_17_ACTION.STAND;

        // try to load settings from browser's local storage, if possible
        // otherwise, the default settings set above will be used
        SettingsController.loadSettings();
    }

    static loadSettings() {
        // load settings from browser's local storage
        if (localStorage.getItem("settings_card_type")) {
            SettingsController.cardType = parseInt(localStorage.getItem("settings_card_type") as string);
        }

        if (localStorage.getItem("settings_dealer_soft_17_action")) {
            SettingsController.dealerSoft17Action = parseInt(localStorage.getItem("settings_dealer_soft_17_action") as string);
        }
    }

    static saveSettings() {
        // save settings to browser's local storage
        localStorage.setItem("settings_card_type", SettingsController.cardType.toString());
        localStorage.setItem("settings_dealer_soft_17_action", SettingsController.dealerSoft17Action.toString());
    }
}

export default SettingsController;