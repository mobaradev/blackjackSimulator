import styled from "styled-components";
import AppController from "../../AppController";

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
`;

function Panel() {
    return (
        <Container>
            <div>
                <Button onClick={() => AppController.blackjack.start()}>Start</Button>
                <Button onClick={() => AppController.blackjack.hit()}>Hit</Button>
                <Button onClick={() => AppController.blackjack.stand()}>Stand</Button>
                <Button>Double</Button>
                <Button>Split</Button>
            </div>
        </Container>
    )

}

export default Panel;