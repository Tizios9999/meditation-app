import styles from './MeditationSection.module.css';
import Volume from '../Volume/Volume'
import Timer from '../Timer/Timer'

export default function MeditationSection() {
    return (
        <div className={styles["meditation-section"]}>
            <button className={styles["menu-button"]}>Settings</button>
            <Timer />
            <Volume />
        </div>
            )
    
}