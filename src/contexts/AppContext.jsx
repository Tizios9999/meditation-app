import {useState, createContext} from 'react'

export const AppContext = createContext();

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
            themeMenuBg: "rgba(150, 150, 150, 0.5)",
            bgVideoSrc:  './video/Fireplace.mp4'
        }
    )

    return (
        <AppContext.Provider value={[appState, setAppState]}>
            {props.children}
        </AppContext.Provider>
    )
}