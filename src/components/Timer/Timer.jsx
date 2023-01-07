import styles from './Timer.module.css';
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'
import StopButton from './buttons/StopButton'
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'
import TimerCounter from './counter/TimerCounter'

// This is the timer component in the meditation section

export default function Timer() {

  const [appState, setAppState] = useContext(AppContext)

  function handleClick(status) {
    console.log(status)
    setAppState(prevState => {
      return {
        ...prevState,
        timerStatus: status,
        elapsedSeconds: status == "stop" ? 0 : prevState.elapsedSeconds
      };
    })
  }

    return (
        <div className={styles["timer-wrapper"]}>
            <div className={styles["timer-element"]}>
                <div className={styles["timer-box"]}>
                  <div className={styles["timer-buttons-wrapper"]}>
                    {appState.timerStatus !== "play" && <PlayButton onClick={() => handleClick("play")}/>}
                    {appState.timerStatus === "play" && <PauseButton onClick={() => handleClick("pause")} />}
                    {appState.timerStatus !== "stop" && <StopButton onClick={() => handleClick("stop")}/>}
                  </div>
                    <TimerCounter />
                </div>
            </div>
        </div>
        )
}