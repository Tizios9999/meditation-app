import styles from './ErrBox.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'


function ErrBox() {

const [appState, setAppState] = useContext(AppContext);

  return (
          <div className={styles["error-box"]}>
            {appState.errorMsg}
          </div>
        )
}

export default ErrBox;