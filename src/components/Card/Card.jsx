import styles from './Card.module.css'

function Card() {

const styleClass = "red-bg"

    return (
        <div className={styles["card"]}>
         <div className={styles["top--card"]}></div>
         <div className={`${styles["title--card"]} ${styles[`${styleClass}`]}`}>Something</div>
        </div>
    )
}

export default Card;