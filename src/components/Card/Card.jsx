import styles from './Card.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames'

function Card(props) {

    const [state, dispatch] = useContext(AppContext);

    const cardClasses = classNames(styles["card"], {[styles["highlighted"]]: props.id == state.selectedCard})

    function handleClick() {

        dispatch (
           {
            type: "SELECT_CARD", 
              payload: {
                selectedCard: props.id,
                themeAppBg: props.theme.backgroundColor,
                themeMenuBg: props.theme.color,
                bgVideoSrc: props.theme.bgVideoSrc
              }
          }
        ) 

        props.playback(props.theme.bgMusicSrc);

      }


    return (
        <div className={cardClasses} onClick={handleClick}>
         <div className={styles["top--card"]} style={{backgroundImage: "url(" + props.image + ")"}}></div>
         <div style={props.style} className={`${styles["title--card"]}`}>{props.title}</div>
        </div>
    )
}

export default Card;