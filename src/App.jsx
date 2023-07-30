// import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import { Home, Order } from './page'


function App() {

  const [ishome, setIsHome] = useState(true)

  function isHome() {
    console.log('first')
    if(ishome) {
      setIsHome(false)
    } else {
      setIsHome(true)
    }
  }

  return (
    <>
    {ishome ? <Home isHome={isHome}/> : <Order isHome={isHome}/>}      
    </>
  )
}

export default App
