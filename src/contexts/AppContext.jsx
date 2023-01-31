import { createContext, useReducer } from 'react'

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

     case "CHANGE_TIMER_STATUS": 
        return {
            ...state,
            timerStatus: action.payload,
            elapsedSeconds: action.payload === "stop" ? 0 : state.elapsedSeconds
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

     case "TICK":
        return {
            ...state,
            elapsedSeconds: state.elapsedSeconds + 1
        }

     default: {
        throw Error('Unknown action: ' + action.type);
     }
    } 
   }

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