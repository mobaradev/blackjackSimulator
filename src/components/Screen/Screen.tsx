import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../App";
import ScreenContainer from "../ScreenContainer/ScreenContainer";

function Screen(props: any) {
    const [isVisible, setIsVisible] = useState(true);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const appContext = useContext(AppContext);

    useEffect(() => {
        if (appContext.visibleScreens.includes(props.screenId)) {
            setIsDisplayed(true);
            setTimeout(() => {
                setIsVisible(true);
            }, 20)

        } else {
            setIsVisible(false);
            setTimeout(() => {
                setIsDisplayed(false);
            }, 500)
        }
    }, [appContext.visibleScreens]);

    return (
        <ScreenContainer isVisible={isVisible} isDisplayed={isDisplayed} isCenteredVertically={props.isCenteredVertically}>
            {props.children}
        </ScreenContainer>
    )
}

export default Screen;