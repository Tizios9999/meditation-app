import styles from './TimerButtons.module.css';

export default function StopButton() {
    return (
        <span className={styles["timer-buttons"]}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-stop" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="5" y="5" width="14" height="14" rx="2"></rect>
            </svg>
        </span>
        )
}