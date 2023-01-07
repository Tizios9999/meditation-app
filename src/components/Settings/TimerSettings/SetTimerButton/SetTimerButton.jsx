import styles from '../../Settings.module.css'
import { AppContext } from '../../../../contexts/AppContext'
import { useContext } from 'react'

// This component is used to set a fixed value on the timer

export default function SetTimerButton(props) {

    const [appState, setAppState] = useContext(AppContext);

    function handleClick(e) {

        setAppState(prevState => {
          return {
            ...prevState,
            timerSeconds: props.value * 60
          };
        })
      }


    return (

    <button className={styles["timer--settings"]} style={{backgroundColor: appState.themeAppBg, color: "white"}} onClick={handleClick}>
      Set {props.value} minute{props.value > 1 ? "s" : ""}
     </button>

        )
}