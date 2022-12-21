import styles from '../Settings.module.css'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

export default function TimerSettings() {

    const [appState, setAppState] = useContext(AppContext);

    function handleChange(e) {

        setAppState(prevState => {
          return {
            ...prevState,
            timerSeconds: e.target.value * 60
          };
        })
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
            value={appState.timerSeconds/60}
            onChange={handleChange}
            className={styles["input-minutes"]}/>
        
      </div>

      <div>
        <label htmlFor="input-countdown">
            Countdown seconds: 
        </label>
        
        <input 
            id="input-countdown"
            name="input-countdown"
            className={styles["input-countdown"]}/>
      </div>

        </div>

        )
}