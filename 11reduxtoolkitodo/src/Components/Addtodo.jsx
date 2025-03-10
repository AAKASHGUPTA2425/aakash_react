import React, { useState } from 'react'
import { addTodo } from '../features/Todo/TodoSlice'
import {useDispatch} from 'react-redux'

function Addtodo() {
    const [input,setinput]=useState('')
    const dispatch=useDispatch()

    const addTodoHolder=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setinput('')
    }
    return (
        <div>
<form onSubmit={addTodoHolder} className='space-x-3 mt-12'>
<input
 type="text" 
 placeholder='write todo...'
 value={input}
 className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
 focus:ring-2 focus :ring -indigo-900 text-base outline-none text-gray-100
 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
onChange={(e)=>setinput(e.target.value)}
/>
<button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
</form>
</div>
    )
}

export default Addtodo
