import styled from "styled-components";
import AppController from "../../AppController";
import {useEffect, useReducer} from "react";
import {ACTION_STATUS} from "../../logic/Blackjack/Blackjack";

const Container = styled.div`
  width: 100%;
  height: 120px;
  //background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

const Button = styled.button`
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

function Panel() {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        AppController.onUpdate = update;
    }, []);

    const update = () => {
        forceUpdate();
    }

    const isButtonAvailable = (buttonName: string) => {
        if (buttonName === "Start") {
            return !AppController.blackjack.isGameActive;
        } else if (buttonName === "Hit" || buttonName === "Stand") {
            return AppController.blackjack.isGameActive;
        } else if (buttonName === "Split") {
            if (!AppController.blackjack.isGameActive) return false;
            return AppController.blackjack.splitActionStatus !== ACTION_STATUS.AVAILABLE;
        }
    }

    return (
        <Container>
            <div>
                <Button onClick={() => AppController.blackjack.start()} disabled={!isButtonAvailable("Start")}>Start</Button>
                <Button onClick={() => AppController.blackjack.hit()} disabled={!isButtonAvailable("Hit")}>Hit</Button>
                <Button onClick={() => AppController.blackjack.stand()} disabled={!isButtonAvailable("Stand")}>Stand</Button>
                <Button>Double</Button>
                <Button disabled={!isButtonAvailable("Split")}>Split</Button>
            </div>
        </Container>
    )

}

export default Panel;