import React from 'react';
import styled from "styled-components";
import Panel from "./components/Panel/Panel";
import BlackjackUI from "./components/BlackjackUI/BlackjackUI";
import Center from "./components/Base/Center/Center";
import Clearfix from "./components/Base/Clearfix/Clearfix";
import PanelLeft from "./components/PanelLeft/PanelLeft";
import PanelRight from "./components/PanelRight/PanelRight";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: aliceblue;
`;

const Wrapper = styled.div`
  margin: auto;
  overflow: auto;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  overflow: auto;
  display: flex;
  float: left;
`;

function App() {
  return (
    <Container>
        <PanelLeft />
        <Content>
            <Wrapper>
                <BlackjackUI />
            </Wrapper>
        </Content>
        <PanelRight />
        <Panel />
    </Container>
  );
}

export default App;
