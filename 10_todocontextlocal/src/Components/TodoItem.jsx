import React, { useState } from 'react'
import { usetodo } from '../Context/TodoContext';

function TodoItem({ todo }) {
    const [TodoEditable, setTodoEditable] = useState(false)
    const [todomsg, settodomsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, togglecomplete} = usetodo()

    const edittodo = () => {
        updateTodo(todo.id, { ...todo, todo: todomsg })
        setTodoEditable(false)
    }
    const toggleCompleted = () => {
        togglecomplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${TodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todomsg}
                onChange={(e) => settodomsg(e.target.value)}
                readOnly={!TodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (TodoEditable) {
                        edittodo();
                    } else setTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {TodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}
export default TodoItem
