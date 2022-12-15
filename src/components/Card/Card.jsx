import styles from './Card.module.css'

function Card(props) {

    return (
        <div className={styles["card"]}>
         <div className={styles["top--card"]} style={{backgroundImage: "url(" + props.image + ")"}}></div>
         <div style={props.style} className={`${styles["title--card"]}`}>{props.title}</div>
        </div>
    )
}

export default Card;