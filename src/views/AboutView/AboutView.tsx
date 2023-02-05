import Separator from "../../components/Separator/Separator";
import A from "../../components/Base/A/A";
import ScreenCloseButton from "../../components/ScreenCloseButton/ScreenCloseButton";
import Center from "../../components/Base/Center/Center";
import {useContext} from "react";
import styled from "styled-components";
import Clearfix from "../../components/Base/Clearfix/Clearfix";
import Screen from "../../components/Screen/Screen";
import {AppContext} from "../../App";
import LogoAuthor from "../../components/LogoAuthor/LogoAuthor";
import Logo from "../../components/Logo/Logo";
import License from "../../components/License/License";

const Wrapper = styled.div`
  width: 700px;
  padding: 30px 0;
`;

function AboutView(props: any) {
    const appContext = useContext(AppContext);

    return(
        <Screen screenId={1}>
            <ScreenCloseButton onClick={() => appContext.setScreenVisibility(1, false)} />
            <Wrapper>
                <Center>
                    <Logo isVisible={true}>Blackjack simulator</Logo>
                </Center>
                <h2>About</h2>
                <p>
                    This simulator is made to demonstrate and simulate the Blackjack game.
                </p>
                <p>
                    <b>This is not a gambling game</b>, the purpose of this app is to let you practice blackjack as well as learn the odds and rules of the game.
                </p>
                <h2>How to play</h2>
                <p>
                    Click <b>Start</b> button located on the bottom panel.
                </p>
                <p>
                    One card for the dealer and two cards for the player will be dealt.
                </p>
                <p>
                    Then, you can make your next movements:
                </p>

                <ul>
                    <li>Hit</li>
                    <li>Stand</li>
                    <li>Double down</li>
                    <li>Split*</li>
                </ul>

                <i>* Split is not implemented in the current version</i>

                <Separator />
                <h2>Actions</h2>
                <h3>Hit</h3>
                <p>Requests an extra card to player's hand</p>

                <h3>Double down</h3>
                <p>Requests an extra card to player's hand and doubles the stake.</p>
                <p>This action can be used only as the first action and after using it, player cannot perform any other action</p>

                <h3>Stand</h3>
                <p>End the game with the amount of points you have.</p>

                <h3>Split*</h3>
                <p>If you have two cards with the same amount of points, you can split them into 2 hands.</p>
                <p>Two additional cards will be dealt for you - one for each new hand.</p>
                <p>
                    <i>* Split is not implemented in the current version</i>
                </p>

                <Separator />
                <h2>Statistics and predictions</h2>
                <h3>Statistics</h3>
                <p>
                    On the left panel, you can see detailed statistics of your games.
                </p>
                <h3>Predictions</h3>
                <p>
                    During the game, on the right panel the predictions are shown. These are odds of outcome, that may happen after choosing an action.
                </p>

                <Separator />
                <h2>Author</h2>
                <p>
                    Michal Obara
                    <br/>
                    <A href="https://github.com/mobaradev" target="_blank">mobaradev on Github</A>
                </p>

                <Separator />
                <h2>License</h2>
                <p>
                    <License />
                </p>
            </Wrapper>
        </Screen>
    )
}

export default AboutView;