import Volume from '../Volume/Volume';
import Settings from '../Settings/Settings'
import Card from '../Card/Card'
import styles from './Menu.module.css'
import cardData from '../../data/cards'
import ConfirmSettings from '../ConfirmSettings/ConfirmSettings'

function Menu() {

const cardElements =  cardData.map((card) => {
  return (
    <Card 
      key={card.id} 
      style={card.theme} 
      title={card.title}
      image={card.imageUrl} />
    )
    }
  )

  return (
    <div className={styles["menu-container"]}>

     {/* // Logo */}

    <h1>Meditation App</h1>

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