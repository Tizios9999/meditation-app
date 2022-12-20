import {useState, createContext} from 'react'

export const AppContext = createContext();

export function AppProvider(props) {

    const [appState, setAppState] = useState(
        {
            activeTimer: true,
            timerStatus: "stop",
            meditationMode: false
        }
    )

    return (
        <AppContext.Provider value={[appState, setAppState]}>
            {props.children}
        </AppContext.Provider>
    )
}