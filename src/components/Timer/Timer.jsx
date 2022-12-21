import styles from './Timer.module.css';
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'
import StopButton from './buttons/StopButton'
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'
import zeroFill from '../../assets/js/zeroFill'

export default function Timer() {

  const [appState, setAppState] = useContext(AppContext)

  let timerMinutes = zeroFill(Math.floor((appState.timerSeconds - appState.elapsedSeconds) / 60), 2);
  let timerSeconds = zeroFill((appState.timerSeconds - appState.elapsedSeconds) % 60, 2);
  

  function handleClick(status) {
    console.log(status)
    setAppState(prevState => {
      return {
        ...prevState,
        timerStatus: status
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
                    <div className={styles["timer-counter-wrapper"]}>
                      <div className={styles["timer-counter"]}>{`${timerMinutes}:${timerSeconds}`}</div>
                    </div>
                </div>
            </div>
        </div>
        )
}