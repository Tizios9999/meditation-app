import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext'
import zeroFill from '../../assets/js/zeroFill'
import styles from './Timer.module.css';

function TimerCounter() {
  
  const [appState, setAppState] = useContext(AppContext);

  let timerMinutes = zeroFill(Math.floor((appState.timerSeconds - appState.elapsedSeconds) / 60), 2);
  let timerSeconds = zeroFill((appState.timerSeconds - appState.elapsedSeconds) % 60, 2);

  function updateTimer() {
    // Decrement the time by 1
    setAppState((prevState) => ({ ...prevState, elapsedSeconds: prevState.elapsedSeconds + 1 }));

    console.log("elapsed: " , appState.elapsedSeconds)
    // Check if the time has reached 0
    if (appState.timerSeconds - appState.elapsedSeconds == 1) {
      // Stop the timer
      setAppState((prevState) => ({ ...prevState, timerStatus: "stop", elapsedSeconds: 0 }));

      // Perform any necessary actions, such as resetting the time or displaying a message
      // ...
    }
  };

  useEffect(() => {

    if (appState.timerStatus === "play") {
    const interval = setInterval(updateTimer, 1000); 

    // const interval = setInterval(() => {
    //     setAppState((prevState) => {
    //         return {
    //             ...prevState, 
    //             [elapsedSeconds]: prevState.elapsedSeconds - counterSpeed}}); 
    //   }, 1000);

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