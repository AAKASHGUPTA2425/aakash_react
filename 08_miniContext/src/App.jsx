import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

import Submittion from './Components/submittion'
import Form from './Components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h2>AAKASH GUPTA</h2>
    <Form/>
    <Submittion/>
    </UserContextProvider>
  )
}

export default App
