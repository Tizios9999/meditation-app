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
    
    <div className={styles["timer-checkbox--wrapper"]}>
      <label className={styles["checkbox-container"]}>Set timer
        <input type="checkbox" 
               checked={appState.activeTimer} 
               id="timer-toggle"
               name="timer-toggle"
               onChange={handleChange} />
        <span className={styles["checkmark"]} style={{backgroundColor: appState.themeAppBg, color: "white"}}></span>
      </label>
    </div>
    )

}

export default TimerToggle;