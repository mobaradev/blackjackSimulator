import styled from "styled-components";
import {useContext} from "react";
import {AppContext} from "../../App";
import Screen from "../../components/Screen/Screen";
import ScreenCloseButton from "../../components/ScreenCloseButton/ScreenCloseButton";
import Center from "../../components/Base/Center/Center";
import Clearfix from "../../components/Base/Clearfix/Clearfix";

const Wrapper = styled.div`
  width: 700px;
  padding: 30px 0;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 10px;
`;

const Td = styled.td`
    text-align: center;
`;

enum CELL_TYPE {
    HIT,
    DOUBLE,
    STAND,
    SPLIT
}

const CellTd = styled.td<{type: CELL_TYPE}>`
  text-align: center;
  ${props => props.type === CELL_TYPE.HIT ? "background-color: #61dafb;" : ""}
  ${props => props.type === CELL_TYPE.DOUBLE ? "background-color: #70ec70;" : ""}
  ${props => props.type === CELL_TYPE.SPLIT ? "background-color: #d5d500;" : ""}
  ${props => props.type === CELL_TYPE.STAND ? "background-color: #ffb329;" : ""}
`;


function Cell(props: any) {
    return(
        <CellTd type={props.type} style={props.style ? props.style : null}>
            {props.type === CELL_TYPE.HIT ? "H" : ""}
            {props.type === CELL_TYPE.DOUBLE ? "D" : ""}
            {props.type === CELL_TYPE.STAND ? "S" : ""}
            {props.type === CELL_TYPE.SPLIT ? "SP" : ""}
        </CellTd>
    )
}

function CheatSheetView(props: any) {
    const appContext = useContext(AppContext);

    return(
        <Screen screenId={2}>
            <ScreenCloseButton onClick={() => appContext.setScreenVisibility(2, false)} />
            <Wrapper>
                <h2>Blackjack cheat sheet</h2>
                <Table>
                    <tbody>
                        <tr>
                            <Td></Td>
                            <Td>2</Td>
                            <Td>3</Td>
                            <Td>4</Td>
                            <Td>5</Td>
                            <Td>6</Td>
                            <Td>7</Td>
                            <Td>8</Td>
                            <Td>9</Td>
                            <Td>10</Td>
                            <Td>A</Td>
                        </tr>
                        <tr>
                            <Td>5-7</Td>
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>8</Td>
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>9</Td>
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>10</Td>
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>11</Td>
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                            <Cell type={CELL_TYPE.DOUBLE} />
                        </tr>
                        <tr>
                            <Td>12</Td>
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>13</Td>
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>14</Td>
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>15</Td>
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>16</Td>
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                            <Cell type={CELL_TYPE.HIT} />
                        </tr>
                        <tr>
                            <Td>17+</Td>
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                            <Cell type={CELL_TYPE.STAND} />
                        </tr>
                    </tbody>
                </Table>
                <Clearfix />
                <br />
                <table>
                    <tbody>
                        <tr>
                            <Cell type={CELL_TYPE.HIT} style={{padding: "4px 12px"}} />
                            <td>- hit</td>
                        </tr>
                        <tr>
                            <Cell type={CELL_TYPE.DOUBLE} style={{padding: "4px 12px"}} />
                            <td>- double down</td>
                        </tr>
                        <tr>
                            <Cell type={CELL_TYPE.STAND} style={{padding: "4px 12px"}} />
                            <td>- stand</td>
                        </tr>
                        <tr>
                            <Cell type={CELL_TYPE.SPLIT} style={{padding: "4px 12px"}} />
                            <td>- split <i>(currently unavailable)</i></td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>
        </Screen>
    )
}

export default CheatSheetView;