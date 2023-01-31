import { useContext } from 'react'
import styles from './MeditationSection.module.css'
import Volume from '../Volume/Volume'
import Timer from '../Timer/Timer'
import { AppContext } from '../../contexts/AppContext'

// This is the meditation section, available after user settings confirmation

export default function MeditationSection() {

    const [appState, setAppState, state, dispatch] = useContext(AppContext);

    function handleClick() {
        dispatch({type: "SWITCH_MODE"});
        dispatch({type: "STOP_TIMER"});
    }
    

    return (
        <div className={styles["meditation-section"]}>
            <button className={styles["menu-button"]} style={{backgroundColor: appState.themeAppBg, color: "white"}} onClick={handleClick}>Settings</button>
            {state.activeTimer ? <Timer /> : <div />}
            <Volume />
            <div/>
        </div>
            )
    
}