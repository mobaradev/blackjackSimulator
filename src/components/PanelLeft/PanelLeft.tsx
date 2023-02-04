import styled from "styled-components";
import Button from "../Button/Button";
import Separator from "../Separator/Separator";
import Subsection from "../Subsection/Subsection";
import Clearfix from "../Base/Clearfix/Clearfix";
import LogoAuthor from "../LogoAuthor/LogoAuthor";
import {PanelTable, PanelTd} from "../PanelTable/PanelTable";

const Container = styled.div`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 20px;
  display: flex;
  padding: 20px 0;
  overflow: auto;
  z-index: 10;
  float: left;
`;

const Wrapper = styled.div`
  margin: auto;
  overflow: auto;
`;


const Logo = styled.div<{isVisible: boolean}>`
  text-align: center;
  font-size: 36px;
  line-height: 2.5rem;
  margin-bottom: 28px;
  font-weight: bold;
  opacity: ${props => props.isVisible ? "1" : "0"};

  transition: opacity 2s, transform 0.5s;
  cursor: default;

  background-image: linear-gradient(-225deg,
  #d92727 0%,
  black 50%,
  #d92727 100%);
  background-clip: border-box;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textClip 3s linear infinite;

  //&:hover {
  //  transform: scale(108%);
  //}
}

@keyframes textClip {
  to {
    background-position: 200% center;
  }
`;

function PanelLeft(props: any) {
    return(
        <Container style={props.style ? props.style : null}>
            <Wrapper>
                <Logo isVisible={true}>Blackjack simulator</Logo>

                <Clearfix />
                <Subsection title="Statistics">
                    <PanelTable>
                        <tr>
                            <PanelTd bold>Games</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Wins</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Regular</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Double down</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Blackjack</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Draws</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Loses</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Regular</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Bust</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd subelement>Dealer blackjack</PanelTd>
                            <PanelTd>0</PanelTd>
                        </tr>
                        <tr>
                            <PanelTd bold>Net profit</PanelTd>
                            <PanelTd center>0</PanelTd>
                        </tr>
                    </PanelTable>
                </Subsection>
                <Button>Settings</Button>
                <Button>About</Button>
                <Clearfix />
                <LogoAuthor style={{marginTop: "10px"}} />
            </Wrapper>
        </Container>
    )
}

export default PanelLeft;