import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'

function Submittion() {
    const {user}=useContext(UserContext)
    if(!user) return <div>fill form first</div>
    return (
        <div>welcome {user.username}</div>
    )
}

export default Submittion
