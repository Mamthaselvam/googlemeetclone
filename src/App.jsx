import { useState } from 'react'
import './Components/Topbar.css'
import Home from './Pages/Home'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home/>
    </>
  )
}

export default App
