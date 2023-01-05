import { useContext } from 'react';
import styles from './ConfirmSettings.module.css'
import { AppContext } from '../../contexts/AppContext'

export default function ConfirmSettings() {
  
  const [appState, setAppState] = useContext(AppContext);

  function handleClick() {

    let message = "";
    let isErrorTriggered = false;

    if (appState.activeTimer) {

      if (isNaN(Number(appState.timerSeconds))) {
        message = message + (isErrorTriggered ? ", " : "") + "Please insert a number";
        isErrorTriggered = true;
      };

      if (appState.timerSeconds == 0) {
        message = message + (isErrorTriggered ? ", " : "") + "Please insert a number higher than 0";
        isErrorTriggered = true;
      }

      if (appState.selectedCard === null) {
        message = message + (isErrorTriggered ? ", " : "") + "Please select a card";
        isErrorTriggered = true;
      };

    }

    setAppState(prevState => {
        return {
          ...prevState,
          meditationMode: isErrorTriggered ? prevState.meditationMode : !prevState.meditationMode,
          errorMsg: message,
          triggeredError: isErrorTriggered
        };
      })
    
}

  return (
    <div className={styles["confirm-settings-wrapper"]}>
      <button style={{backgroundColor: appState.themeAppBg, color: "white"}} onClick={handleClick}>Start meditation</button>
    </div>
  )
}