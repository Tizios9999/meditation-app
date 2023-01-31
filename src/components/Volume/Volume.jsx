import styles from './Volume.module.css'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

// This is the volume component for the background audio music.

function Volume() {
    
    const [appState, setAppState, state, dispatch] = useContext(AppContext);

    return (
        <div className={styles["volume-container"]}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => dispatch({type: "SET_VOLUME", payload: 0})}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                <path d="M16 10l4 4m0 -4l-4 4" />
            </svg>

            <input type="range" min="1" max="100" value={state.volume} className={styles["volume-slider"]} id="myRange" onChange={(e)=> dispatch({type: "SET_VOLUME", payload: e.target.value})}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => dispatch({type: "SET_VOLUME", payload: 100})}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 8a5 5 0 0 1 0 8" />
                <path d="M17.7 5a9 9 0 0 1 0 14" />
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            </svg>
        </div>
    )
}

export default Volume;