
import { useState } from "react"
import React from 'react'

function TodoList({ id, todoText, todoStatus, enableEdit, deleteTodoHander, saveTodoStatus }) {

    const todoStatusText = todoStatus ? "Completed" : "Progress"
    const [checked, setChecked] = useState(todoStatus)

    const bgColor = todoStatus ? "bg-green-200" : "bg-yellow-200"

    function todoStatusHandler(e) {
        setChecked(!checked)
        saveTodoStatus(id)
    }

    return (
        <li key={id} className='flex flex-wrap flex-row justify-center my-5 p-2 space-x-1 bg-gray-100 rounded'>
            <input type='checkbox' className='w-6 p-2 my-2 cursor-pointer' checked={checked} onChange={(e) => todoStatusHandler(e)} />
            <p className='w-1/3  p-2 my-3  break-words'>{todoText}</p>
            <div className="min-w-1 sm:min-w-28 p-1 space-x-3">
                <span className={`p-2 rounded text-blue-700 my-3 ${bgColor}`}>{todoStatusText}</span>
                <button className='bg-red-400 text-white rounded my-3 p-2' onClick={() => enableEdit(id)}>Edit</button>
                <button className='bg-gray-400 text-white rounded my-3 p-2' onClick={() => deleteTodoHander(id)}>Delete</button>
            </div>
        </li>
    )
}

export default TodoList