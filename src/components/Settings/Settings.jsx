import styles from './Settings.module.css'
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'
import TimerToggle from './TimerToggle/TimerToggle'
import TimerSettings from './TimerSettings/TimerSettings'


function Settings() {
    
  const [appState, setAppState] = useContext(AppContext);

    return (
      <div className={styles["settings-container"]}>
        
        <TimerToggle />

        {appState.activeTimer && <TimerSettings />}
        
      </div>
      )
}

export default Settings;