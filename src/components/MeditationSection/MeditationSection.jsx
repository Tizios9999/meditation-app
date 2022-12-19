import styles from './MeditationSection.module.css';
import Volume from '../Volume/Volume'
import Timer from '../Timer/Timer'

export default function MeditationSection() {
    return (
        <div className={styles["meditation-section"]}>
            <button>Menu</button>
            <Timer />
            <Volume />
        </div>
            )
    
}