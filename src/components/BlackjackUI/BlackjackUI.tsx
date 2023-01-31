import styled from "styled-components";
import AppController from "../../AppController";
import {useEffect, useState} from "react";
import CardUI from "../CardUI/CardUI";

const Container = styled.div`
  width: 800px;
  height: 600px;
  
  background-color: green;
  float: left;
`;

function BlackjackUI(props: any) {
    const [playerCards, setPlayerCards] = useState<number[]>([]);
    const [dealerCards, setDealerCards] = useState<number[]>([]);

    useEffect(() => {
        AppController.onStart = start;
        AppController.onHit = hit;
    }, []);

    const start = () => {
        console.log(AppController.blackjack.playerCards)
        for (let i = 0; i < AppController.blackjack.playerCards.length; i++) {
            addPlayerCard(AppController.blackjack.playerCards[i].number);
        }
        console.log(AppController.blackjack.dealerCards)

    }

    const hit = () => {
        addPlayerCard(AppController.blackjack.playerCards[AppController.blackjack.playerCards.length - 1].number);
    }

    const addPlayerCard = (number: number) => {
        setPlayerCards(playerCards => [...playerCards, number])
    }


    return (
        <Container>
            Blackjack

            Cards:
            {
                playerCards.map(
                    (card, index) => <CardUI key={index} number={card} />
                )
            }
        </Container>
    )
}

export default BlackjackUI;