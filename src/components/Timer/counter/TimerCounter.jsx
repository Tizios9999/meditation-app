import { useEffect, useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext'
import zeroFill from '../../../assets/js/zeroFill'
import styles from '../Timer.module.css';

function TimerCounter() {
  
  const [appState, setAppState] = useContext(AppContext);

  let timerMinutes = zeroFill(Math.floor((appState.timerSeconds - appState.elapsedSeconds) / 60), 2);
  let timerSeconds = zeroFill((appState.timerSeconds - appState.elapsedSeconds) % 60, 2);

  function updateTimer() {
    // Setting the time elapsed since the timer started.
    setAppState((prevState) => ({ ...prevState, elapsedSeconds: prevState.elapsedSeconds + 1 }));

    // Check if the elapsed time has reached the timer set by the user so the countdown will stop.
    if (appState.timerSeconds - appState.elapsedSeconds == 0) {
      
      // Stop the timer and reset the time elapsed
      setAppState((prevState) => ({ ...prevState, timerStatus: "stop", elapsedSeconds: 0 }));;

      // Put here the "ding" sound as a reminder that the timer has stopped.

    }
  };

  useEffect(() => {

    if (appState.timerStatus === "play") {
    const interval = setInterval(updateTimer, 1000); 

    return () => clearInterval(interval);

}
  }, [appState.timerStatus, appState.elapsedSeconds]);
  
  return (
    <div className={styles["timer-counter-wrapper"]}>
        <div className={styles["timer-counter"]}>{`${timerMinutes}:${timerSeconds}`}</div>
    </div>
  );

}

export default TimerCounter;