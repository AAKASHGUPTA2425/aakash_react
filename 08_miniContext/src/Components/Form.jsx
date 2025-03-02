import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
function Form() {
    const [username,setusername]=useState(" ")
    const [emailid,setemailid]=useState(" ")
    const [phoneno,setphoneno]=useState()
    const{setuser}=useContext(UserContext)
    const handlebotton=(e)=>{
      e.preventDefault()
      setuser({username,emailid,phoneno})
    }
    return (
        <div>
            <div>username</div>
            <input
            type='text'
            value={username}
            placeholder='username'
            onChange={(e)=>setusername(e.target.value)}
            />
            <div>email id</div>
            <input
            type='text'
            value={emailid}
            placeholder='emailid'
            onChange={(e)=>setemailid(e.target.value)}/>
            <div>phone no</div>
            <input
            type='integer'
            value={phoneno}
            placeholder='phoneno'
            onChange={(e)=>setphoneno(e.target.value)}/>
            <button onClick={handlebotton}>submit</button>
        </div>
    )
}

export default Form
