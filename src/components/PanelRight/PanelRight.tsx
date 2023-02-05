import styled from "styled-components";
import Subsection from "../Subsection/Subsection";
import Clearfix from "../Base/Clearfix/Clearfix";
import Button from "../Button/Button";
import {PanelTable, PanelTd} from "../PanelTable/PanelTable";
import {useContext, useEffect, useReducer} from "react";
import AppController from "../../AppController";
import {AppContext} from "../../App";

const Container = styled.div`
  width: 200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  z-index: 10;
  float: left;
`;

enum PREDICTION_TYPES {
    HIT_TO_21,
    HIT_TO_19_20,
    HIT_BUST,
    STAND_DEALER_BUST,
    STAND_DEALER_REGULAR_WIN,
    STAND_DEALER_REGULAR_LOSE,
    STAND_DRAW
}

function PanelRight(props: any) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const appContext = useContext(AppContext);

    useEffect(() => {
        AppController.updateListeners.push(update);
    }, []);

    const update = () => {
        AppController.predictions.calculatePredictions();
        forceUpdate();
    }

    const getPredictionValue = (predictionType: PREDICTION_TYPES) : string => {
        if (!AppController.blackjack.isGameActive) {
            return "-";
        }

        switch (predictionType) {
            case PREDICTION_TYPES.HIT_TO_21:
                return (AppController.predictions.hitTo21 * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.HIT_TO_19_20:
                return (AppController.predictions.hitTo1920 * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.HIT_BUST:
                return (AppController.predictions.hitBust * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.STAND_DEALER_BUST:
                return (AppController.predictions.standDealerBust * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.STAND_DEALER_REGULAR_LOSE:
                return (AppController.predictions.standDealerRegularLose * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.STAND_DEALER_REGULAR_WIN:
                return (AppController.predictions.standDealerRegularWin * 100).toFixed(0) + "%";
            case PREDICTION_TYPES.STAND_DRAW:
                return (AppController.predictions.standDraw * 100).toFixed(0) + "%";
            default:
                return "-";
        }
    }

    return(
        <Container style={props.style ? props.style : null}>
            <Subsection title="Predictions">
                <PanelTable>
                    <tr>
                        <PanelTd bold>On Hit</PanelTd>
                        <PanelTd></PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>To 21</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.HIT_TO_21)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>To 19-20</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.HIT_TO_19_20)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Bust</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.HIT_BUST)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd bold>On Stand</PanelTd>
                        <PanelTd></PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Dealer win</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.STAND_DEALER_REGULAR_WIN)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Dealer bust</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.STAND_DEALER_BUST)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Dealer {"<"} {AppController.blackjack.playerPoints}</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.STAND_DEALER_REGULAR_LOSE)}</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Draw</PanelTd>
                        <PanelTd center>{getPredictionValue(PREDICTION_TYPES.STAND_DRAW)}</PanelTd>
                    </tr>
                </PanelTable>
            </Subsection>
            <Button onClick={() => appContext.setScreenVisibility(2, true)}>Cheat sheet</Button>
        </Container>
    )
}

export default PanelRight;