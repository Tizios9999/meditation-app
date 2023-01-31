import { useContext } from 'react';
import styles from './ConfirmSettings.module.css'
import { AppContext } from '../../contexts/AppContext'

/* This component will allow the user to access the meditation mode.
   But before that it will check for any errors and prevent to continue
   if any of those are found */

export default function ConfirmSettings() {
  
  const [appState, setAppState, state, dispatch] = useContext(AppContext);

  function checkForErrors() {
    let message = "";
    let isErrorTriggered = false;

    if (state.activeTimer) {

      if (isNaN(Number(state.timerSeconds))) {
        message = message + (isErrorTriggered ? ", " : "") + "Please insert a number";
        isErrorTriggered = true;
      };

      if (state.timerSeconds <= 0) {
        message = message + (isErrorTriggered ? ", " : "") + "Please insert a number higher than 0";
        isErrorTriggered = true;
      }

    }

    if (state.selectedCard === null) {
      message = message + (isErrorTriggered ? ", " : "") + "Please select a card";
      isErrorTriggered = true;
    };

    
      dispatch(
        {
          type: "TRIGGER_ERROR_BOX", 
          payload: {
            message: message, isErrorTriggered: isErrorTriggered
          }
        }
      )

    return isErrorTriggered;
  }

  function handleClick() {

    if (checkForErrors()) {
      return
    } else dispatch({type: "SWITCH_MODE"});

}

  return (
    <div className={styles["confirm-settings-wrapper"]}>
      <button style={{backgroundColor: state.themeAppBg, color: "white"}} onClick={handleClick}>Start meditation</button>
    </div>
  )
}