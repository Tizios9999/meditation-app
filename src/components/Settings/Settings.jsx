import styles from './Settings.module.css'

function Settings() {
    
    return (
      <div className={styles["settings-container"]}>
        <div className="timer-checkbox--container">
          <span className="timer-checkbox">
          <input
            type="checkbox"
            id="timer-toggle"
            name="timer-toggle"
            checked={true}
            />
          </span>

          <label htmlFor="timer-toggle">
            Set Timer
          </label>
        </div>
        
        
        <div className="timer--settings">

        <label htmlFor="input-minutes">
            Minutes: 
        </label>
        
        <input 
            id="input-minutes"
            name="input-minutes" />

        <label htmlFor="input-countdown">
            Countdown seconds: 
        </label>
        
        <input 
            id="input-countdown"
            name="input-countdown" />

        </div>
      </div>
      )
}

export default Settings;