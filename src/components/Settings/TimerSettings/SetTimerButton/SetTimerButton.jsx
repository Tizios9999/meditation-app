import styles from '../../Settings.module.scss'
import { AppContext } from '../../../../contexts/AppContext'
import { useContext } from 'react'

// This component is used to set a fixed value on the timer

export default function SetTimerButton(props) {

    const [state, dispatch] = useContext(AppContext);

    function handleClick() {
        dispatch({type: "SET_TIMER_MINUTES", payload: props.value * 60 })
      }


    return (

    <button className={styles["timer--settings"]} style={{backgroundColor: state.themeAppBg, color: "white"}} onClick={handleClick}>
      Set {props.value} minute{props.value > 1 ? "s" : ""}
     </button>

        )
}