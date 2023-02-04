import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(192, 192, 192, 0.59);
  border-radius: 10px;
  padding: 10px;
  padding-top: 14px;
  margin: 8px 0;
  margin-top: 10px;
  position: relative;
  border: 1px solid silver;
`;

const Title = styled.div`
  position: absolute;
  top: -10px;
  left: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #5e5e5e;
  background-color: inherit;
  padding: 0 3px;
`;

function Subsection(props: any) {
    return (
        <Container>
            <Title>
                {props.title}
            </Title>

            {props.children}
        </Container>
    );
}

export default Subsection;