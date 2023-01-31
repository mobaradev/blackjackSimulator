import styled from "styled-components";
import {useEffect, useState} from "react";

const Container = styled.div<{isVisible: boolean}>`
  width: 100px;
  height: 200px;
  margin: 10px 20px;
  border: 1px solid black;
  transition: 1s;
  opacity: ${props => props.isVisible ? "1" : "0"};
  
  float: left;
`;

function CardUI(props: any) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100);
    }, []);

    return(
        <Container isVisible={isVisible}>
            Card {props.number}
        </Container>
    )
}

export default CardUI;