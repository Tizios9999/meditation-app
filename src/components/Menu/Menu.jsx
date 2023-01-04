import Volume from '../Volume/Volume';
import Settings from '../Settings/Settings'
import Card from '../Card/Card'
import styles from './Menu.module.css'
import cardData from '../../data/cards'
import ConfirmSettings from '../ConfirmSettings/ConfirmSettings'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'

function Menu(props) {

  const [appState, setAppState] = useContext(AppContext);

  

  const cardElements = cardData.map((card) => {
    
    const cardProps = {
      key: card.id,
      id: card.id,
      style: card.style,
      title: card.title,
      image: card.imageUrl,
      theme: card.theme,
      playback: props.playback
    }
    
    return (
      <Card {...cardProps} />
      )
      }
    )

  return (
    <div className={styles["menu-container"]} style={{backgroundColor: appState.themeMenuBg }}>

     <h1 className={styles["app-title"]}>Meditation App</h1>

     {/* // Volume component */}
     <Volume />

     {/* // Settings */}
     <Settings />

     {/* // Cards section */}
     <section className={styles["cards-section"]}>
     {cardElements}
     </section>
  
     {/* // Bottom section with start button */}
     <ConfirmSettings />
    </div>
  )
}

export default Menu;