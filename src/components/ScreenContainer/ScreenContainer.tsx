import styled from "styled-components";

const ScreenContainer = styled.div<{isVisible?: boolean, isDisplayed?: boolean, isCenteredVertically?: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  overflow: auto;
  color: black;
  transition: opacity 0.5s linear;
  display: flex;
  align-items: ${props => props.isCenteredVertically ? "center" : "start"};
  justify-content: center;
  z-index: 20;

  opacity: ${props => props.isVisible ? "1" : "0"};
  ${props => props.isDisplayed ? "" : "display: none;"}
`;

export default ScreenContainer;