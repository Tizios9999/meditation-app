import { useContext } from 'react'
import styles from './MeditationSection.module.scss'
import Volume from '../Volume/Volume'
import Timer from '../Timer/Timer'
import { AppContext } from '../../contexts/AppContext'

// This is the meditation section, available after user settings confirmation

export default function MeditationSection() {

    const [state, dispatch] = useContext(AppContext);

    function handleClick() {
        dispatch({type: "SWITCH_MODE"});
        dispatch({type: "CHANGE_TIMER_STATUS", payload: "stop"});
    }
    

    return (
        <div className={styles["meditation-section"]}>
            <button className={styles["menu-button"]} style={{backgroundColor: state.themeAppBg, color: "white"}} onClick={handleClick}>Settings</button>
            {state.activeTimer ? <Timer /> : <div />}
            <Volume />
            <div/>
        </div>
            )
    
}