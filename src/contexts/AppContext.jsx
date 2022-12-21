import {useState, createContext} from 'react'

export const AppContext = createContext();

export function AppProvider(props) {

    const [appState, setAppState] = useState(
        {
            activeTimer: true,
            timerStatus: "stop",
            timerSeconds: 60,
            timerCountdown: 0,
            meditationMode: false,
            volume: 50,
        }
    )

    return (
        <AppContext.Provider value={[appState, setAppState]}>
            {props.children}
        </AppContext.Provider>
    )
}