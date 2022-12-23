import styles from './Card.module.css'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

function Card(props) {

    const [appState, setAppState] = useContext(AppContext);

    function handleClick() {

        setAppState(prevState => {
          return (
            {
              ...prevState,
              selectedCard: props.id,
              themeAppBg: props.theme.backgroundColor,
              themeMenuBg: props.theme.color,
              bgVideoSrc: props.theme.bgVideoSrc
            }
          )
        })
      }

    return (
        <div className={`${styles["card"]} ${props.id == appState.selectedCard ? styles["highlighted"] : ""}`} onClick={handleClick}>
         <div className={styles["top--card"]} style={{backgroundImage: "url(" + props.image + ")"}}></div>
         <div style={props.style} className={`${styles["title--card"]}`}>{props.title}</div>
        </div>
    )
}

export default Card;