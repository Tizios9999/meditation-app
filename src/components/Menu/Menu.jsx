import Volume from '../Volume/Volume';
import Settings from '../Settings/Settings'
import Card from '../Card/Card'
import styles from './Menu.module.css'
import cardData from '../../data/cards'
import ConfirmSettings from '../ConfirmSettings/ConfirmSettings'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

function Menu() {

  const [appState, setAppState] = useContext(AppContext);

  

  const cardElements = cardData.map((card) => {
    
    const props = {
      key: card.id,
      id: card.id,
      style: card.style,
      title: card.title,
      image: card.imageUrl,
      theme: card.theme
    }
    
    return (
      <Card {...props} />
      )
      }
    )

  return (
    <div className={styles["menu-container"]} style={{backgroundColor: appState.themeMenuBg }}>
    <video src={appState.bgVideoSrc} autoPlay loop muted />
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