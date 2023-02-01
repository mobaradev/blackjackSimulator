import React from 'react';
import styled from "styled-components";
import Panel from "./components/Panel/Panel";
import BlackjackUI from "./components/BlackjackUI/BlackjackUI";
import Center from "./components/Base/Center/Center";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: aliceblue;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  float: left;
`;

function App() {
  return (
    <Container>
        <Content>
            <Center>
                <BlackjackUI />
            </Center>
        </Content>
        <Panel />
    </Container>
  );
}

export default App;
