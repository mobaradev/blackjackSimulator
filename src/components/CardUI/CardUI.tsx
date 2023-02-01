import styled from "styled-components";
import {useEffect, useState} from "react";
import Random from "../../logic/Random/Random";

const Container = styled.div<{isVisible: boolean, rotation: number}>`
  width: 84px;
  height: 140px;
  font-size: 48px;
  font-weight: 500;
  padding-bottom: 40px;
  background-color: white;
  margin: 10px 20px;
  margin-top: -60px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
  transform: rotate(${props => props.rotation}deg);
  opacity: ${props => props.isVisible ? "1" : "0"};
  
  float: left;
`;

function CardUI(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
        setRotation(Random.getRandomNumber(-16, 16));
    }, []);

    return(
        <Container isVisible={isVisible} rotation={rotation}>
            {props.number}
        </Container>
    )
}

export default CardUI;