import styles from './Timer.module.css';
import PlayButton from './buttons/PlayButton'
import PauseButton from './buttons/PauseButton'
import StopButton from './buttons/StopButton'

export default function Timer() {
    return (
        <div className={styles["timer-wrapper"]}>
            <div className={styles["timer-element"]}>
                <div className={styles["timer-box"]}>
                <div className={styles["timer-buttons-wrapper"]}>
                    <PlayButton />
                    <PauseButton />
                    <StopButton />
                </div>
                <div className={styles["timer-counter-wrapper"]}><div className={styles["timer-counter"]}>{`00:00`}</div></div>
                </div>
                
            </div>
        </div>
        )
}