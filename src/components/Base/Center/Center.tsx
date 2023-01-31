import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
`;

const Wrapper = styled.div`
  width: auto;
  height: auto;
`;

function Center(props: any) {
    return(
        <Container style={props.style ? props.style : null}>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Container>
    )
}

export default Center;