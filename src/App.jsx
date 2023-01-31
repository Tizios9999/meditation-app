import { useRef, useContext, useEffect } from 'react'
import Menu from './components/Menu/Menu'
import MeditationSection from './components/MeditationSection/MeditationSection'
import { AppContext } from './contexts/AppContext'
import BgAudio from './components/BgAudio/BgAudio'
import BgVideo from './components/BgVideo/BgVideo'

function App() {
  const [state, dispatch] = useContext(AppContext);

  const audioRef = useRef(null);

  function playback(bgSrc) {
    audioRef.current.pause();
    audioRef.current.src = bgSrc;
    audioRef.current.volume = state.volume / 100;
    audioRef.current.play();
  }

  function changeVolume() {
    audioRef.current.volume = state.volume / 100
  }

  function toggleBg() {
    if (state.bgVideoSrc === null && state.selectedCard !== null) {
      document.body.classList.add("background-effect");
    } else {
      document.body.classList.remove("background-effect");
    }
  }

  useEffect(() => {
    toggleBg()
  }, [state.selectedCard])

  useEffect(() => {
    changeVolume()
  }, [state.volume])



  return (
    <section>
      <div className="App">
          {state.bgVideoSrc && <BgVideo />}
          <BgAudio ref={audioRef} />
          {state.meditationMode ? <MeditationSection /> : <Menu playback={playback} /> }
      </div>
      </section>
  )
}

export default App
