import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeButton"
import { ThemeProvider } from "./Context/Theme"
import {useState,useEffect} from 'react'
function App() {
  const [ThemeMode,setThemeMode]=useState("light")
 const lightTheme=()=>{
  setThemeMode("light")
 }
 const darkTheme=()=>{
  setThemeMode("dark")
 }

 //actual theme change
 useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector("html").classList.add(ThemeMode)
 },[ThemeMode])
  return (
   <ThemeProvider value={{darkTheme,lightTheme,ThemeMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
