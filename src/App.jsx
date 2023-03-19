import { useState } from 'react'
import './App.css'
import MainView from './components/MainView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainView />
    </div>
  )
}

export default App
