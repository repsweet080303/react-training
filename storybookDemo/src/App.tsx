import { useState } from 'react'
import Count from './components/Count'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Count/>
    </div>
  )
}

export default App
