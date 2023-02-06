import Screen from "../../components/Screen/Screen";
import ScreenCloseButton from "../../components/ScreenCloseButton/ScreenCloseButton";
import {useContext, useReducer} from "react";
import {AppContext} from "../../App";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import SettingsController, {CARD_TYPE, DEALER_SOFT_17_ACTION} from "../../SettingsController";
import Clearfix from "../../components/Base/Clearfix/Clearfix";
import Center from "../../components/Base/Center/Center";
import Logo from "../../components/Logo/Logo";

const Wrapper = styled.div`
  width: 500px;
  padding: 30px 0;
`;

const SelectButton = styled(Button)<{selected?: boolean}>`
  ${props => props.selected ? "" : "border-style: dotted;"}
`;

const SettingsBigSelectButton = styled(SelectButton)`
  width: 120px;
  height: 120px;
  text-align: center;
  position: relative;
  margin: 0 8px;
  padding-bottom: 20px;
`;

const SettingsBigSelectButtonText = styled.span`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
`;

function SettingsView() {
    const appContext = useContext(AppContext);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const setCardDetails = (cardDetails: CARD_TYPE) => {
        SettingsController.cardType = cardDetails;
        SettingsController.saveSettings();
        forceUpdate();
    }

    const setDealerSoft17Action = (dealerSoft17Action: DEALER_SOFT_17_ACTION) => {
        SettingsController.dealerSoft17Action = dealerSoft17Action;
        SettingsController.saveSettings();
        forceUpdate();
    }

    return(
        <Screen screenId={0}>
            <ScreenCloseButton onClick={() => appContext.setScreenVisibility(0, false)} />
            <Wrapper>
                <Center>
                    <Logo isVisible={true}>Blackjack simulator</Logo>
                </Center>
                <h2>Settings</h2>
                <h3>Card look details</h3>
                <SettingsBigSelectButton onClick={() => setCardDetails(CARD_TYPE.SIMPLIFIED)} selected={SettingsController.cardType === CARD_TYPE.SIMPLIFIED} style={{marginLeft: 0}}>
                    <span style={{fontSize: 48}}>10</span>
                    <SettingsBigSelectButtonText>Simplified</SettingsBigSelectButtonText>
                </SettingsBigSelectButton>
                <SettingsBigSelectButton onClick={() => setCardDetails(CARD_TYPE.FULL)} selected={SettingsController.cardType === CARD_TYPE.FULL}>
                    <span style={{fontSize: 48}}>K</span>
                    <SettingsBigSelectButtonText>Detailed</SettingsBigSelectButtonText>
                </SettingsBigSelectButton>

                <Clearfix />
                <br />
                <h3>Dealer on soft 17</h3>
                <p>
                    <i>Soft 17 is when the dealer has an ace in his hand that can be valued as 11 or 1.</i>
                </p>
                <SelectButton onClick={() => setDealerSoft17Action(DEALER_SOFT_17_ACTION.HIT)} selected={SettingsController.dealerSoft17Action === DEALER_SOFT_17_ACTION.HIT}>Hit</SelectButton>
                <SelectButton onClick={() => setDealerSoft17Action(DEALER_SOFT_17_ACTION.STAND)} selected={SettingsController.dealerSoft17Action === DEALER_SOFT_17_ACTION.STAND}>Stand</SelectButton>
            </Wrapper>
        </Screen>
    )
}

export default SettingsView