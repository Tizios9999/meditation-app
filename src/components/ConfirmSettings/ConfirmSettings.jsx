import { useContext } from 'react';
import styles from './ConfirmSettings.module.css'
import { AppContext } from '../../contexts/AppContext'

export default function ConfirmSettings() {
  
  const [appState, setAppState] = useContext(AppContext);
 
  function handleClick() {
    setAppState(prevState => {
        return {
          ...prevState,
          meditationMode: !prevState.meditationMode
        };
      })
}

  return (
    <div className={styles["confirm-settings-wrapper"]}>
      <button className={styles["confirm-button"]} onClick={handleClick}>Start meditation</button>
    </div>
  )
}