import { createContext, useReducer } from 'react'
import { reducer } from '../reducers/reducer'

export const AppContext = createContext();

export function AppProvider(props) {

const initialState = 
        {
            activeTimer: true,
            timerStatus: "stop",
            timerSeconds: 60,
            elapsedSeconds: 0,
            timerCountdown: 0,
            meditationMode: false,
            volume: 50,
            selectedCard: null,
            themeAppBg: "navy",
            themeMenuBg: "rgba(0, 0, 0, 0.5)",
            bgVideoSrc:  null,
            triggeredError: false,
            errorMsg: "Any error will be shown here in this div",
        }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}