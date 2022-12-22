import { useState, useContext } from 'react'
import Menu from './components/Menu/Menu'
import MeditationSection from './components/MeditationSection/MeditationSection'
import { AppContext } from './contexts/AppContext'

function App() {
  const [appState, setAppState] = useContext(AppContext);

  return (
      <div className="App" style={{background: appState.themeAppBg}}>
          {appState.meditationMode ? <MeditationSection /> : <Menu /> }
          
      </div>
  )
}

export default App
