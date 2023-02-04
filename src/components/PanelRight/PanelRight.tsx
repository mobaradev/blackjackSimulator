import styled from "styled-components";
import Subsection from "../Subsection/Subsection";
import Clearfix from "../Base/Clearfix/Clearfix";
import Button from "../Button/Button";
import {PanelTable, PanelTd} from "../PanelTable/PanelTable";

const Container = styled.div`
  width: 200px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  z-index: 10;
  float: left;
`;

function PanelRight(props: any) {
    return(
        <Container style={props.style ? props.style : null}>
            <Subsection title="Predictions">
                <PanelTable>
                    <tr>
                        <PanelTd bold>On Hit</PanelTd>
                        <PanelTd></PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>To 21</PanelTd>
                        <PanelTd center>8%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>To 20</PanelTd>
                        <PanelTd center>8%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>To 19</PanelTd>
                        <PanelTd center>8%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Bust</PanelTd>
                        <PanelTd center>38%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd bold>On Stand</PanelTd>
                        <PanelTd></PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Dealer bust</PanelTd>
                        <PanelTd center>40%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Dealer {"<"} 19</PanelTd>
                        <PanelTd center>40%</PanelTd>
                    </tr>
                    <tr>
                        <PanelTd subelement>Draw</PanelTd>
                        <PanelTd center>40%</PanelTd>
                    </tr>
                </PanelTable>
            </Subsection>
            <Button>Cheat sheet</Button>
        </Container>
    )
}

export default PanelRight;