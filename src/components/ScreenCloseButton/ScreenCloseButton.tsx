import styled from "styled-components";
import Button from "../Button/Button";

const CloseButton = styled(Button)`
  width: 36px;
  text-align: center;
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;
`

function ScreenCloseButton(props: any) {
    return (
        <CloseButton onClick={props.onClick ? props.onClick : null} style={props.style ? props.style : null}>X</CloseButton>
    )
}


export default ScreenCloseButton;