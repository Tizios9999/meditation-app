import styles from './Card.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import playSound from '../../assets/js/playSound';

function Card(props) {

    const [appState, setAppState, changeTrack] = useContext(AppContext);

    function handleClick() {

    console.log(props.theme.bgMusicSrc);

        setAppState(prevState => {
          return (
            {
              ...prevState,
              selectedCard: props.id,
              themeAppBg: props.theme.backgroundColor,
              themeMenuBg: props.theme.color,
              bgVideoSrc: props.theme.bgVideoSrc,
            }
          )
        })

        props.playback(props.theme.bgMusicSrc);

      }

      // changeTrack(appState.audioRef, props.theme.bgAudioSrc);


    return (
        <div className={`${styles["card"]} ${props.id == appState.selectedCard ? styles["highlighted"] : ""}`} onClick={handleClick}>
         <div className={styles["top--card"]} style={{backgroundImage: "url(" + props.image + ")"}}></div>
         <div style={props.style} className={`${styles["title--card"]}`}>{props.title}</div>
        </div>
    )
}

export default Card;