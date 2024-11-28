

import React, { useState } from 'react'

function TodoAddForm({ todoVaue = "", addTodoItem }) {

    const [todoText, setTodoText] = useState(todoVaue)

    function sumbitHandler(e) {
        e.preventDefault();
        if (todoText.trim()) {
            addTodoItem(todoText);
            setTodoText('');
        }
        else {
            setTodoText('');
            return
        }
    }

    function changeHandler(e) {
        setTodoText(e.target.value)
    }

    return (
        <form onSubmit={(e) => sumbitHandler(e)}>
            <div className='flex flex-wrap flex-row border justify-center p-2 space-y-1'>
                <input type='text' className='min-w-1 p-2 mx-5' value={todoText} onChange={(e) => changeHandler(e)} placeholder='New Todo ' />
                <button className='bg-blue-500 hover:bg-blue-700 text-white rounded p-2'>Add Task</button>
            </div>
        </form >
    )
}

export default TodoAddForm
