import React ,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Authlayout({children,authentication=true}){
const Navigate=useNavigate()
const [loader,setLoader]=useState(true)
const authStatus=useSelector(state=>state.auth.status)
useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }
    
    //let authValue = authStatus === true ? true : false

    if(authentication && authStatus !== authentication){
        Navigate("/login")
    } else if(!authentication && authStatus !== authentication){
        Navigate("/")
    }
    setLoader(false)
}, [authStatus, Navigate, authentication])

return loader ? <h1>Loading...</h1> : <>{children}</>
}
