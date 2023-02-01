import styles from '../Settings.module.scss'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'
import SetTimerButton from './SetTimerButton/SetTimerButton'

/* This component is responsible for setting the timer value on the meditation section */

export default function TimerSettings() {

    const [state, dispatch] = useContext(AppContext);

    function handleChange(e) {

    // Checking length of input value
      if (e.target.value.length > 3) {
        e.target.value = e.target.value.slice(0,3);
      }

    // Every float value will be truncated from here
      if (e.target.value % 1 !== 0) {
        e.target.value.truncate(0);
      }

    // Removing any 0 before the actual number, if it's not zero already
      if (e.target.value >= 0 && e.target.value.charAt(0) == '0') {
        e.target.value = e.target.value.substring(1);
      }

        dispatch({type: "SET_TIMER_MINUTES", payload: e.target.value * 60})
      }

    return (

    <div className={styles["timer--settings"]}>
    
      <div>
        <label htmlFor="input-minutes">
            Minutes: 
        </label>
        
        <input 
            id="input-minutes"
            name="input-minutes"
            type="number"
            min="1"
            max="999"
            size="3"
            maxLength="3"
            value={state.timerSeconds/60}
            onChange={handleChange}
            className={styles["input-minutes"]}/>

      </div>

      <div className={styles["timer-buttons-wrapper"]}>
       <SetTimerButton value={1} />
       <SetTimerButton value={3} />
       <SetTimerButton value={5} />
       <SetTimerButton value={10} />
     </div>
      
     </div>

        )
}