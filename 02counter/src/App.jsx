import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  const addvalue=()=>{
    if(counter<20){
    console.log("value added");
    
    counter=counter+1
   setcounter(counter)
  }}
  const removevalue=()=>{
    if(counter>0){
    console.log("value remove")
   
    counter=counter-1
    setcounter(counter)
  }}
  return (
    <>
    <h1>chai aur code</h1>    
    <h2>counter {counter} </h2>
    <button
    onClick={addvalue}>add value</button>
    <br/>
    <button
    onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
