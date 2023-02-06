import styled from "styled-components";
import {useEffect, useState} from "react";
import Random from "../../logic/Random/Random";
import SettingsController, {CARD_TYPE} from "../../SettingsController";

const Container = styled.div<{isVisible: boolean, rotation: number, verticalMargins: number}>`
  width: 84px;
  height: 140px;
  font-size: 48px;
  font-weight: 500;
  padding-bottom: 40px;
  background-color: white;
  margin: 10px ${props => props.verticalMargins}px;
  margin-top: -60px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s, opacity 1s;
  transform: rotate(${props => props.rotation}deg);
  opacity: ${props => props.isVisible ? "1" : "0"};
  user-select: none;
  user-focus: none;
  
  float: left;

  &:hover {
    transform: scale(108%);
  }
`;

function CardUI(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [verticalMargins, setVerticalMargins] = useState(20);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
        setRotation(Random.getRandomNumber(-16, 16));
        setVerticalMargins(Random.getRandomNumber(10, 30));
    }, []);

    return(
        <Container isVisible={isVisible} rotation={rotation} verticalMargins={verticalMargins}>
            {
                SettingsController.cardType === CARD_TYPE.SIMPLIFIED
                ?
                    props.number
                :
                    ""
            }

            {
                SettingsController.cardType === CARD_TYPE.FULL
                    ?
                    props.name
                    :
                    ""
            }
        </Container>
    )
}

export default CardUI;