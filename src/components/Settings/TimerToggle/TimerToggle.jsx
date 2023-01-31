import styles from '../Settings.module.css'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

// The timer toggle component activates or deactivates the timer on the meditation section

function TimerToggle() {
  
  const [state, dispatch] = useContext(AppContext);

  function handleChange() {
     dispatch({type: "TOGGLE_TIMER"});
  }

  return (
    
    <div className={styles["timer-checkbox--wrapper"]}>
      <label className={styles["checkbox-container"]}>Set timer
        <input type="checkbox" 
               checked={state.activeTimer} 
               id="timer-toggle"
               name="timer-toggle"
               onChange={handleChange} />
        <span className={styles["checkmark"]} style={{backgroundColor: state.themeAppBg, color: "white"}}></span>
      </label>
    </div>
    )

}

export default TimerToggle;