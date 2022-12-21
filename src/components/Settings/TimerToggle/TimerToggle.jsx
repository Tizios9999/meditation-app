import styles from '../Settings.module.css'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

function TimerToggle() {
  
  const [appState, setAppState] = useContext(AppContext);

  function handleChange() {
    setAppState(prevState => {
      return {
        ...prevState,
        activeTimer: !prevState.activeTimer
      };
    })
  }

  return (
    
    <div className={styles["timer-checkbox--container"]}>
          <span className={styles["timer-checkbox"]}>
          <input
            type="checkbox"
            id="timer-toggle"
            name="timer-toggle"
            checked={appState.activeTimer}
            onChange={handleChange}
            />
          </span>

          <label htmlFor="timer-toggle">
            Set Timer
          </label>
        </div>

    )

}

export default TimerToggle;