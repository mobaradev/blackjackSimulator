import styled from "styled-components";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";
import Subsection from "../Subsection/Subsection";
import Clearfix from "../Base/Clearfix/Clearfix";
import LogoAuthor from "../LogoAuthor/LogoAuthor";
import {PanelTable, PanelTd} from "../PanelTable/PanelTable";
import {useContext, useEffect, useReducer} from "react";
import AppController from "../../AppController";
import {AppContext} from "../../App";
import Logo from "../Logo/Logo";

const Container = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 20px;
  display: flex;
  padding: 20px 0;
  overflow: auto;
  z-index: 10;
  float: left;
`;

const Wrapper = styled.div`
  margin: auto;
  overflow: auto;
`;

function PanelLeft(props: any) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const appContext = useContext(AppContext);

    useEffect(() => {
        AppController.updateListeners.push(update);
    }, []);

    const update = () => {
        forceUpdate();
    }

    return(
        <Container style={props.style ? props.style : null}>
            <Wrapper>
                <Logo isVisible={true}>Blackjack simulator</Logo>

                <Clearfix />
                <Subsection title="Statistics">
                    <PanelTable>
                        <tr>
                            <PanelTd bold>Games</PanelTd>
                            <PanelTd center>{AppController.statistics.games}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Wins</PanelTd>
                            <PanelTd center>{AppController.statistics.wins}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Regular</PanelTd>
                            <PanelTd center>{AppController.statistics.regularWins}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Double down</PanelTd>
                            <PanelTd center>{AppController.statistics.doubleDownWins}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Blackjack</PanelTd>
                            <PanelTd center>{AppController.statistics.blackjackWins}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Draws</PanelTd>
                            <PanelTd center>{AppController.statistics.draws}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Loses</PanelTd>
                            <PanelTd center>{AppController.statistics.loses}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Regular</PanelTd>
                            <PanelTd center>{AppController.statistics.regularLoses}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Bust</PanelTd>
                            <PanelTd center>{AppController.statistics.bustLoses}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Dealer blackjack</PanelTd>
                            <PanelTd center>{AppController.statistics.dealerBlackjackLoses}</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Net profit</PanelTd>
                            <PanelTd center>{AppController.statistics.netProfit}</PanelTd>
                        </tr>
                    </PanelTable>
                </Subsection>
                <Button>Settings</Button>
                <Button onClick={() => appContext.setScreenVisibility(1, true)}>About</Button>
                <Clearfix />
                <LogoAuthor style={{marginTop: "10px"}} />
            </Wrapper>
        </Container>
    )
}

export default PanelLeft;