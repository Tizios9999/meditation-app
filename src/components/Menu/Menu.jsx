import Volume from '../Volume/Volume';
import Settings from '../Settings/Settings'
import Card from '../Card/Card'
import styles from './Menu.module.css'

function Menu() {

  return (
    <div className={styles["menu-container"]}>

     {/* // Logo */}

     {/* // Volume component */}
     <Volume />


     {/* // Settings */}
     <Settings />

     {/* // Cards section */}
     <section className={styles["cards-section"]}>
       <Card />
       <Card />
       <Card />
     </section>

     {/* // Bottom section with start button */}

    </div>
  )
}

export default Menu;