import { useEffect, useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext'
import zeroFill from '../../../assets/js/zeroFill'
import styles from '../Timer.module.css';
import playSound from '../../../assets/js/playSound'
import bellSound from '../../../assets/audio/bell.mp3'

// This is the counter inside the timer component

function TimerCounter() {
    
  const [state, dispatch] = useContext(AppContext);

  let timerMinutes = zeroFill(Math.floor((state.timerSeconds - state.elapsedSeconds) / 60), 2);
  let timerSeconds = zeroFill((state.timerSeconds - state.elapsedSeconds) % 60, 2);

  function updateTimer() {
    // Setting the time elapsed since the timer started.

    dispatch({type: "TICK"});

    if (state.timerSeconds - state.elapsedSeconds == 1) {
    // Here is the "ding" sound as a reminder that the timer has stopped.
    // The sound won't play immediately so there's a 1 second offset. Need to fix this.
      playSound(bellSound);
    }

    // Check if the elapsed time has reached the timer set by the user so the countdown will stop.
    if (state.timerSeconds - state.elapsedSeconds == 0) {

      // Stop the timer and reset the time elapsed
      
      dispatch({type: "CHANGE_TIMER_STATUS", payload: "stop"});
      
    }
  };

  useEffect(() => {

    if (state.timerStatus === "play") {

    state.elapsedSeconds == 0 && playSound(bellSound);

    const interval = setInterval(updateTimer, 1000); 

    return () => clearInterval(interval);

}
  }, [state.timerStatus, state.elapsedSeconds]);
  
  return (
    <div className={styles["timer-counter-wrapper"]}>
        <div className={styles["timer-counter"]}>{`${timerMinutes}:${timerSeconds}`}</div>
    </div>
  );

}

export default TimerCounter;