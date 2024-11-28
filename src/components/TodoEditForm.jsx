import React, { useState } from 'react'

function TodoEditForm({ id, todoText, saveTodoHandler, enableEdit }) {

    const [todoValue, setTodoValue] = useState(todoText)

    function saveTodoText() {
        if (todoValue.trim()) {
            saveTodoHandler(id, todoValue);
            setTodoValue('')
        }
        else {
            return
        }
    }

    function cancelUpdate() {
        setTodoValue(todoText)
        saveTodoText()
    }

    return (
        <li key={id} className='flex  flex-row justify-start my-5 mx-10 p-2 space-x-2 space-y-2 bg-gray-100 rounded'>
            <input type='text' className='min-w-1 p-2 mx-5' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button className='bg-blue-500 hover:bg-blue-700 text-white rounded p-2' onClick={saveTodoText}>Save</button>
            <button className='bg-gray-400 hover:bg-gray-500 text-white rounded my-3 p-2' onClick={cancelUpdate}>Cancel</button>
        </li>
    )
}

export default TodoEditForm