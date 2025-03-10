import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Components/Todos'
import Addtodo from './Components/Addtodo'

function App() {
  
  return (
    <>
     <h1>react redux</h1>
     <Addtodo/>
     <Todos/>
    
    </>
  )
}

export default App
