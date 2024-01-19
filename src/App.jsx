import { useState } from 'react'

import './Components/Topbar.css'
import Topbar from './Components/Topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/> 
    </>
  )
}

export default App
