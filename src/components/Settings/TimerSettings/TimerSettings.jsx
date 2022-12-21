import styles from '../Settings.module.css'
import { AppContext } from '../../../contexts/AppContext'
import { useContext } from 'react'

export default function TimerSettings() {

    return (

    <div className={styles["timer--settings"]}>

        <label htmlFor="input-minutes">
            Minutes: 
        </label>
        
        <input 
            id="input-minutes"
            name="input-minutes" 
            className={styles["input-minutes"]}/>

        <label htmlFor="input-countdown">
            Countdown seconds: 
        </label>
        
        <input 
            id="input-countdown"
            name="input-countdown" 
            className={styles["input-countdown"]}/>

        </div>
        )
}