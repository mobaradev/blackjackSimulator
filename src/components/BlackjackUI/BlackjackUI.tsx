import styled from "styled-components";
import AppController from "../../AppController";
import {useEffect, useState} from "react";
import CardUI from "../CardUI/CardUI";
import Clearfix from "../Base/Clearfix/Clearfix";
import Card from "../../logic/Card/Card";

const Container = styled.div`
  width: 800px;
  height: 600px;
  
  background-color: green;
  float: left;
`;

function BlackjackUI(props: any) {
    const [playerCards, setPlayerCards] = useState<Card[]>([]);
    const [dealerCards, setDealerCards] = useState<Card[]>([]);
    const [gameId, setGameId] = useState<number>(0);

    useEffect(() => {
        AppController.onGameStart = gameStart;
        AppController.onGameEnd = gameEnd;
        AppController.onHit = hit;
        AppController.onDealerHit = dealerHit;
    }, []);

    const gameStart = () => {
        // clear
        setGameId(gameId => gameId + 1);
        setPlayerCards([]);
        setDealerCards([]);

        console.log(AppController.blackjack.playerCards)
        for (let i = 0; i < AppController.blackjack.playerCards.length; i++) {
            addPlayerCard(AppController.blackjack.playerCards[i]);
        }

        for (let i = 0; i < AppController.blackjack.dealerCards.length; i++) {
            addDealerCard(AppController.blackjack.dealerCards[i]);
        }

        console.log(AppController.blackjack.dealerCards)

    }

    const gameEnd = () => {
        setTimeout(() => {

            // instant blackjack check
            if (AppController.blackjack.playerPoints === 21 && AppController.blackjack.dealerPoints !== 21) {
                alert("Blackjack!");
                return;
            }

            if (AppController.blackjack.playerPoints > 21) {
                alert("Player busted!");
            } else {
                if (AppController.blackjack.dealerPoints > 21) {
                    alert("Dealer busted!");
                } else {
                    if (AppController.blackjack.dealerPoints > AppController.blackjack.playerPoints) {
                        alert("Dealer won!")
                    } else if (AppController.blackjack.dealerPoints < AppController.blackjack.playerPoints) {
                        alert("Player won!")
                    } else {
                        alert("Draw!")
                    }
                }
            }
        }, 600);
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
            Blackjack
            <Clearfix />

            <h2>Dealer {AppController.blackjack.dealerPointsParsed}</h2>
            <Clearfix />
            <>
            {
                dealerCards.map(
                    (card, index) => <CardUI key={gameId + "-" + index} number={card.value} />
                )
            }
            </>

            <Clearfix />

            <h2>Player {AppController.blackjack.playerPointsParsed}</h2>
            <Clearfix />
            <>
            {
                playerCards.map(
                    (card, index) => <CardUI key={gameId + "-" + index} number={card.value} />
                )
            }
            </>
        </Container>
    )
}

export default BlackjackUI;