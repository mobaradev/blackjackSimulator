import styled from "styled-components";
import AppController from "../../AppController";
import {useEffect, useReducer} from "react";
import {ACTION_STATUS} from "../../logic/Blackjack/Blackjack";
import GameResultInfo from "../GameResultInfo/GameResultInfo";

const Container = styled.div`
  width: 100%;
  height: 120px;
  //background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  float: left;
`;

const PanelButton = styled.button`
  width: auto;
  height: 100%;
  margin: 8px 6px;
  font-size: 22px;
  cursor: pointer;
  background: none;
  color: #5d5d5d;
  transition: 0.5s;
  font-weight: 600;
  text-align: left;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 10px;
  float: left;

  &:hover {
    background-color: silver;
    color: black;
  }
  
  &:disabled {
    color: silver;
    cursor: not-allowed;
  }
`;

const GameResultInfoContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  //background-color: green;
`;

function PanelBottom() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        AppController.updateListeners.push(update);
    }, []);

    const update = () => {
        forceUpdate();
    }

    const isButtonAvailable = (buttonName: string) => {
        if (buttonName === "Start") {
            return !AppController.blackjack.isGameActive;
        } else if (buttonName === "Hit" || buttonName === "Stand") {
            return AppController.blackjack.isGameActive;
        } else if (buttonName === "Double") {
            return AppController.blackjack.isGameActive && AppController.blackjack.doubleActionStatus === ACTION_STATUS.AVAILABLE;
        } else if (buttonName === "Split") {
            if (!AppController.blackjack.isGameActive) return false;
            return AppController.blackjack.splitActionStatus !== ACTION_STATUS.AVAILABLE;
        }
    }

    return (
        <Container>
            <div>
                <PanelButton onClick={() => AppController.blackjack.start()} disabled={!isButtonAvailable("Start")}>Start</PanelButton>
                <PanelButton onClick={() => AppController.blackjack.hit()} disabled={!isButtonAvailable("Hit")}>Hit</PanelButton>
                <PanelButton onClick={() => AppController.blackjack.stand()} disabled={!isButtonAvailable("Stand")}>Stand</PanelButton>
                <PanelButton onClick={() => AppController.blackjack.hitDouble()} disabled={!isButtonAvailable("Double")}>Double</PanelButton>
                {/*<PanelButton disabled={!isButtonAvailable("Split")}>Split</PanelButton>*/}
            </div>
            <GameResultInfoContainer>
                <GameResultInfo gameStatus={AppController.blackjack.gameStatus} />
            </GameResultInfoContainer>
        </Container>
    )

}

export default PanelBottom;