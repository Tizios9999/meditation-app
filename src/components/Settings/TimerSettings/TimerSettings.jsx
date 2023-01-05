import styles from '../Settings.module.css'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

export default function TimerSettings() {

    const [appState, setAppState] = useContext(AppContext);

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
      if (e.target.value > 0 && e.target.value.charAt(0) == '0') {
        e.target.value = e.target.value.substring(1);
      }

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
            type="number"
            min="1"
            max="999"
            size="3"
            maxlength="3"
            value={appState.timerSeconds/60}
            onChange={handleChange}
            className={styles["input-minutes"]}/>

      </div>
      
     </div>

        )
}