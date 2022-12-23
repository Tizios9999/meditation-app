import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

export default function BgVideo() {

  const [appState, setAppState] = useContext(AppContext);

  return (
    <video src={appState.bgVideoSrc} autoPlay loop muted />
        )
}