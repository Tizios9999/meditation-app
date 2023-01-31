import {useState, createContext, useReducer } from 'react'

export const AppContext = createContext();

function reducer(state, action) {
    switch (action.type) {
     case "SET_VOLUME":
       return {
        ...state,
        volume: action.payload
        };
     case "SELECTED_CARD": {
       console.log(state.selectedCard);
     };
     default: {
        throw Error('Unknown command: ' + action.type);
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