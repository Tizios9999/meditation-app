import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

// This component is responsible for loading the video background

export default function BgVideo() {

  const [appState, setAppState] = useContext(AppContext);

  return (
    <video src={appState.bgVideoSrc} autoPlay loop muted />
        )
}