import { useContext } from 'react'
import styles from './MeditationSection.module.css'
import Volume from '../Volume/Volume'
import Timer from '../Timer/Timer'
import { AppContext } from '../../contexts/AppContext'

export default function MeditationSection() {

    const [appState, setAppState] = useContext(AppContext);

    function handleClick() {
        setAppState(prevState => {
            return {
              ...prevState,
              meditationMode: !prevState.meditationMode,
              timerStatus: "stop",
              elapsedSeconds: 0
            };
          })
    }
    

    return (
        <div className={styles["meditation-section"]}>
            <button className={styles["menu-button"]} onClick={handleClick}>Settings</button>
            {appState.activeTimer ? <Timer /> : <div />}
            <Volume />
        </div>
            )
    
}