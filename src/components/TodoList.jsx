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
        <li key={id} className='flex flex-wrap flex-row my-3 px-2   bg-gray-100 rounded'>
            <div className="flex flex-wrap flex-row">
                <input type='checkbox' className='w-5 p-4 cursor-pointer' checked={checked} onChange={(e) => todoStatusHandler(e)} />
                <p className='w-80 content-center mx-2 my-4 break-words'>{todoText}</p>
            </div>
            <div className="w-5 h-20 p-4 space-x-2 flex flex-wrap flex-col">
                <span className={`rounded text-blue-700 p-2 ${bgColor}`}>{todoStatusText}</span>
                <button className='bg-red-400 hover:bg-red-500 p-2 text-white rounded ' onClick={() => enableEdit(id)}>Edit</button>
                <button className='bg-gray-400 hover:bg-gray-500 p-2 text-white rounded ' onClick={() => deleteTodoHander(id)}>Delete</button>
            </div>
        </li>
    )
}

export default TodoList