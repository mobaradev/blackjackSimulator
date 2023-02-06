
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
        this.cardType = CARD_TYPE.FULL;
        this.dealerSoft17Action = DEALER_SOFT_17_ACTION.STAND;
    }
}

export default SettingsController;