import styled from "styled-components";
import AppController from "../../AppController";
import {useEffect, useState} from "react";
import CardUI from "../CardUI/CardUI";
import Clearfix from "../Base/Clearfix/Clearfix";
import Card from "../../logic/Card/Card";
import Center from "../Base/Center/Center";

const Container = styled.div`
  width: 800px;
  height: 600px;
  
  //background-color: green;
  float: left;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
`;

function BlackjackUI(props: any) {
    const [playerCards, setPlayerCards] = useState<Card[]>([]);
    const [dealerCards, setDealerCards] = useState<Card[]>([]);
    const [gameId, setGameId] = useState<number>(0);

    useEffect(() => {
        AppController.onGameStart = gameStart;
        AppController.onHit = hit;
        AppController.onDealerHit = dealerHit;
    }, []);

    const gameStart = () => {
        // clear
        setGameId(gameId => gameId + 1);
        setPlayerCards([]);
        setDealerCards([]);

        for (let i = 0; i < AppController.blackjack.playerCards.length; i++) {
            addPlayerCard(AppController.blackjack.playerCards[i]);
        }

        for (let i = 0; i < AppController.blackjack.dealerCards.length; i++) {
            addDealerCard(AppController.blackjack.dealerCards[i]);
        }
    }

    const hit = () => {
        addPlayerCard(AppController.blackjack.playerCards[AppController.blackjack.playerCards.length - 1]);
    }

    const dealerHit = () => {
        addDealerCard(AppController.blackjack.dealerCards[AppController.blackjack.dealerCards.length - 1])
    }

    const addPlayerCard = (card: Card) => {
        setPlayerCards(playerCards => [...playerCards, card])
    }

    const addDealerCard = (card: Card) => {
        setDealerCards(dealerCards => [...dealerCards, card])
    }


    return (
        <Container>
            <Center><h2>Dealer {AppController.blackjack.dealerPointsParsed}</h2></Center>
            <Clearfix />
            <CardsContainer>
                <div>
                    {
                        dealerCards.map(
                            (card, index) => <CardUI key={gameId + "-" + index} number={card.value} name={card.name} />
                        )
                    }
                </div>
            </CardsContainer>

            <Clearfix />

            <Center><h2>Player {AppController.blackjack.playerPointsParsed}</h2></Center>
            <Clearfix />
            <CardsContainer>
                <div>
                    {
                        playerCards.map(
                            (card, index) => <CardUI key={gameId + "-" + index} number={card.value} name={card.name} />
                        )
                    }
                </div>
            </CardsContainer>
        </Container>
    )
}

export default BlackjackUI;