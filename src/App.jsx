import { useRef, useContext, useEffect } from 'react'
import Menu from './components/Menu/Menu'
import MeditationSection from './components/MeditationSection/MeditationSection'
import { AppContext } from './contexts/AppContext'
import BgAudio from './components/BgAudio/BgAudio'
import BgVideo from './components/BgVideo/BgVideo'

function App() {
  const [appState, setAppState] = useContext(AppContext);

  const audioRef = useRef(null);

  function playback(bgSrc) {
    audioRef.current.pause();
    audioRef.current.src = bgSrc;
    audioRef.current.volume = appState.volume / 100;
    audioRef.current.play();
  }

  function changeVolume() {
    audioRef.current.volume = appState.volume / 100
  }

  useEffect(() => {
    changeVolume()
  }, [appState.volume])

  return (
    <section>
      
      <div className="App">
          {appState.bgVideoSrc && <BgVideo />}
          <BgAudio ref={audioRef} />
          {appState.meditationMode ? <MeditationSection /> : <Menu playback={playback} /> }
          
      </div>
      </section>
  )
}

export default App
