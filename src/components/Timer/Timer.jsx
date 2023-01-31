import styles from './Timer.module.css';
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'
import StopButton from './buttons/StopButton'
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'
import TimerCounter from './counter/TimerCounter'

// This is the timer component in the meditation section

export default function Timer() {

  const [appState, setAppState, state, dispatch] = useContext(AppContext)

  function handleClick(status) {

    dispatch({type: "CHANGE_TIMER_STATUS", payload: status})

  }

    return (
        <div className={styles["timer-wrapper"]}>
            <div className={styles["timer-element"]}>
                <div className={styles["timer-box"]}>
                  <div className={styles["timer-buttons-wrapper"]}>
                    {state.timerStatus !== "play" && <PlayButton onClick={() => handleClick("play")}/>}
                    {state.timerStatus === "play" && <PauseButton onClick={() => handleClick("pause")} />}
                    {state.timerStatus !== "stop" && <StopButton onClick={() => handleClick("stop")}/>}
                  </div>
                    <TimerCounter />
                </div>
            </div>
        </div>
        )
}