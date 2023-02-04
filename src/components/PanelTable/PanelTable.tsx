import styled from "styled-components";

export const PanelTable = styled.table`
  width: 100%;
`;

export const PanelTd = styled.td<{bold?: boolean, subelement?: boolean, center?: boolean}>`
  ${props => props.center ? "text-align: center;" : ""}
  ${props => props.bold ? "font-weight: bold;" : ""}
  ${props => props.subelement ? `font-style: italic;` : ""}
  ${props => props.subelement ? `padding-left: 16px;` : ""}
`;