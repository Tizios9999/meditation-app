import { useContext } from 'react';
import styles from './ConfirmSettings.module.css'
import { AppContext } from '../../contexts/AppContext'

export default function ConfirmSettings() {
  
  const [appState, setAppState] = useContext(AppContext);

  function handleClick() {

    if (isNaN(Number(appState.timerSeconds))) return;

    setAppState(prevState => {
        return {
          ...prevState,
          meditationMode: !prevState.meditationMode
        };
      })

}

  return (
    <div className={styles["confirm-settings-wrapper"]}>
      <button style={{backgroundColor: appState.themeAppBg, color: "white"}} onClick={handleClick}>Start meditation</button>
    </div>
  )
}