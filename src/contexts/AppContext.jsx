import {useState, createContext, useReducer } from 'react'

export const AppContext = createContext();

function reducer(state, action) {
    switch (action.type) {
     case "SET_VOLUME":
       return {
        ...state,
        volume: action.payload
        };

     case "SELECT_CARD":
       return {
        ...state,
        selectedCard: action.payload.selectedCard,
        themeAppBg: action.payload.themeAppBg,
        themeMenuBg: action.payload.themeMenuBg,
        bgVideoSrc: action.payload.bgVideoSrc
       }

     case "SWITCH_MODE":
        return {
            ...state,
            meditationMode: !state.meditationMode,
        }

     case "STOP_TIMER":
        return {
            ...state,
            timerStatus: "stop",
            elapsedSeconds: 0
        }

     case "TRIGGER_ERROR_BOX":
        return {
            ...state,
            errorMsg: action.payload.message,
            triggeredError: action.payload.isErrorTriggered
        }

     case "TOGGLE_TIMER":
        return {
            ...state,
            activeTimer: !state.activeTimer
     }

     case "SET_TIMER_MINUTES":
        return {
            ...state,
            timerSeconds: action.payload
        }

     default: {
        throw Error('Unknown action: ' + action.type);
     }
    } 
   }

export function AppProvider(props) {

    const [appState, setAppState] = useState(
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
    )

    const [state, dispatch] = useReducer(reducer, appState);

    return (
        <AppContext.Provider value={[appState, setAppState, state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}