import styles from './Settings.module.css'
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'


function Settings() {
    
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
      <div className={styles["settings-container"]}>
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
        
        
        {appState.activeTimer && <div className={styles["timer--settings"]}>

        <label htmlFor="input-minutes">
            Minutes: 
        </label>
        
        <input 
            id="input-minutes"
            name="input-minutes" 
            className={styles["input-minutes"]}/>

        <label htmlFor="input-countdown">
            Countdown seconds: 
        </label>
        
        <input 
            id="input-countdown"
            name="input-countdown" 
            className={styles["input-countdown"]}/>

        </div>
        }
      </div>
      )
}

export default Settings;