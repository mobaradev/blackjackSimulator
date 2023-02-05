import styled from "styled-components";
import {useEffect, useState} from "react";

const Container = styled.div<{isVisible: boolean, styleIndex: number}>`
  background-color: rgba(255, 255, 255, .15);

  //backdrop-filter: blur(2px);
  border-radius: 12px;
  font-size: 32px;
  font-weight: bold;
  opacity: ${props => props.isVisible ? "1" : "0"};

  transition: opacity 2s, transform 0.5s;
  cursor: default;

  ${props => props.styleIndex === 0 ? "background-image: linear-gradient(-225deg, #563eb0 0%, #44107a 29%, #ff1361 67%, #563eb0 100%);" : ""}
  ${props => props.styleIndex === 1 ? "background-image: linear-gradient(-225deg, red 0%, #27153a 29%, #460721 67%, red 100%);" : ""}
  
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textClip 2s linear infinite;

  &:hover {
    transform: scale(108%);
  }
}

@keyframes textClip {
  to {
    background-position: 200% center;
  }
`;

function GameResultInfo(props: any) {
    const [isVisible, setIsVisible] = useState(false);
    const texts = ["", "", "Player wins!", "Double win!", "Blackjack!", "Dealer wins", "Dealer wins", "Player busted", "Dealer blackjack", "Draw"]

    useEffect(() => {
        if (props.gameStatus !== 0 && props.gameStatus !== 1) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [props.gameStatus]);

    return(
        <Container isVisible={isVisible} styleIndex={(props.gameStatus === 5 || props.gameStatus === 6 || props.gameStatus === 7 || props.gameStatus === 8) ? 1 : 0}>
            {
                props.gameStatus !== null
                ?
                    texts[props.gameStatus]
                :
                    ""
            }
        </Container>
    )
}

export default GameResultInfo;