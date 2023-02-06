import React, {createContext, useState} from 'react';
import styled from "styled-components";
import Panel from "./components/Panel/Panel";
import BlackjackUI from "./components/BlackjackUI/BlackjackUI";
import Center from "./components/Base/Center/Center";
import Clearfix from "./components/Base/Clearfix/Clearfix";
import PanelLeft from "./components/PanelLeft/PanelLeft";
import PanelRight from "./components/PanelRight/PanelRight";
import AboutView from "./views/AboutView/AboutView";
import CheatSheetView from "./views/CheatSheetView/CheatSheetView";
import SettingsView from "./views/SettingsView/SettingsView";

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

type AppContextType = {
    visibleScreens: number[],
    setScreenVisibility: (id: number, visibility: boolean) => void
};

export const AppContext = createContext<AppContextType>({
    visibleScreens: [],
    setScreenVisibility: (id, visibility) => {}
});

function App() {
    const [visibleScreens, setVisibleScreens] = useState<number[]>([]);

    const setScreenVisibility = (id: number, visibility: boolean) => {
        setVisibleScreens(visibleScreens => {
            if (visibility) {
                if (visibleScreens.indexOf(id) === -1) visibleScreens.push(id);
            } else {
                if (visibleScreens.indexOf(id) !== -1) visibleScreens.splice(visibleScreens.indexOf(id), 1);
            }
            return [...visibleScreens]
        });
    }
  return (
    <Container>
        <AppContext.Provider value={{visibleScreens: visibleScreens, setScreenVisibility: setScreenVisibility}}>
            <PanelLeft />
            <Content>
                <Wrapper>
                    <BlackjackUI />
                </Wrapper>
            </Content>
            <PanelRight />
            <Panel />

            <SettingsView />
            <AboutView />
            <CheatSheetView />
        </AppContext.Provider>
    </Container>
  );
}

export default App;
