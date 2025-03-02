import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const[username,setusername]=useState(" ")
    const[password,setpassword]=useState(" ")

    const {setuser}=useContext(UserContext)
    const holdclick=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }
    return (
        <div>
            <h2>LOG IN</h2>
            <input
            type='text'
            onChange={(e)=>setusername(e.target.value)}
            placeholder='username'/>
            <input
            type='text'
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='password'/>
            <button onClick={holdclick}>SUBMIT</button>
        </div>
    )
}

export default Login
