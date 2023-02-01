import styles from './ErrBox.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

// This is the error box that will be shown on the top of the page 
// in case some errors are found

function ErrBox() {

const [state] = useContext(AppContext);

  return (
          <div className={styles["error-box"]}>
            {state.errorMsg}
          </div>
        )
}

export default ErrBox;