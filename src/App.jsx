import { useState, useContext } from 'react'
import Menu from './components/Menu/Menu'
import MeditationSection from './components/MeditationSection/MeditationSection'
import { AppContext } from './contexts/AppContext'

function App() {
  const [appState, setAppState] = useContext(AppContext);

  return (
    <section>
      
      <div className="App">
          
          {appState.meditationMode ? <MeditationSection /> : <Menu /> }
          
      </div>
      </section>
  )
}

export default App
