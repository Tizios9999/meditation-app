import Volume from '../Volume/Volume';
import Settings from '../Settings/Settings'
import Card from '../Card/Card'
import styles from './Menu.module.css'
import cardData from '../../data/cards'
import ConfirmSettings from '../ConfirmSettings/ConfirmSettings'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import ErrBox from '../ErrBox/ErrBox'

/* The menu component is responsible to set up the meditation section and let
   the user choose their own settings before starting to meditate */

function Menu(props) {

  const [state, dispatch] = useContext(AppContext);

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

    useEffect(() => {
      if (state.triggeredError) {
        window.scrollTo({top: 0, behavior: 'smooth' })
      }
      
    }, [state.errorMsg])
    
    

  return (
    <div className={styles["menu-container"]} style={{backgroundColor: state.themeMenuBg }}>

     <h1 className={styles["app-title"]}>Meditation App</h1>

     {/* // Volume component */}
     <Volume />

    {/* Error Box */}
    {state.triggeredError && <ErrBox />}

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