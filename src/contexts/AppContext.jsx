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
            themeMenuBg: "rgba(0, 0, 0, 0.5)",
            bgVideoSrc:  null,
        }
    )

    const changeTrack = (ref, src) => {
        
        if (ref.current.isPlaying) {
            ref.current.pause();
            ref.current.isPlaying = false;
        }
        ref.current.src = src.toString();
        ref.current.play();
        ref.current.isPlaying = true;
        ref.current.volume = appState.volume / 100;
        console.log(ref);
        console.log("click!");
      }

    return (
        <AppContext.Provider value={[appState, setAppState, changeTrack]}>
            {props.children}
        </AppContext.Provider>
    )
}