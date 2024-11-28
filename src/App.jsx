import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'
import TodoAddForm from './components/TodoAddForm'
import TodoList from './components/TodoList'
import TodoEditForm from './components/TodoEditForm'

function App() {

  const [todoList, setTodoList] = useState([])

  const addNewTodoItem = useCallback((todoText) => setTodoList([...todoList, {
    "id": uuid(),
    "todoText": todoText,
    "editingEnabled": false,
    "todoStatus": false
  }]), [todoList])

  const enableEdit = (id) => {
    let newTodoList = [...todoList]
    newTodoList.forEach((todo) => {
      todo.id === id ? todo.editingEnabled = true : todo.editingEnabled = false
    })
    setTodoList(newTodoList)
    // setTodoList((prevList) => prevList.map(todo => todo.id === id ? { ...todo, "editingEnabled": !todo.editingEnabled } : todo))
  }


  const saveTodoText = (id, todoText) => {

    let newTodoList = [...todoList]
    let idx = newTodoList.findIndex(t => t.id === id);
    newTodoList[idx] = { ...newTodoList[idx], "todoText": todoText, "editingEnabled": false }

    setTodoList(newTodoList);

    // setTodoList((prevList) => prevList.map(todo =>
    //   todo.id === id ? { ...todo, "todoText": todoText, "editingEnabled": !todo.editingEnabled } : todo
    // ));
  }

  const deleteTodoHandler = (id) => {
    setTodoList((prevList) => prevList.filter(todo => todo.id != id))
  }


  const saveTodoStatus = (id) => {
    setTodoList((prevList) => prevList.map(todo =>
      todo.id === id ? { ...todo, "todoStatus": !todo.todoStatus, } : todo
    ))
  }


  return (
    <>
      <div className='container h-full  py-5 bg-slate-200'>
        <div className='container w-1/2 mx-auto bg-slate-50 p-5 rounded '>
          <TodoAddForm addTodoItem={addNewTodoItem} />

          <ul className='h-screen overflow-y-auto'>
            {
              [...todoList].reverse().map((todo, index) => (
                todo.editingEnabled ?
                  <TodoEditForm key={index}
                    id={todo.id}
                    todoText={todo.todoText}
                    saveTodoHandler={saveTodoText}
                    enableEdit={enableEdit}
                  />
                  : <TodoList key={index} id={todo.id}
                    todoText={todo.todoText}
                    todoStatus={todo.todoStatus}
                    enableEdit={enableEdit}
                    deleteTodoHander={deleteTodoHandler}
                    saveTodoStatus={saveTodoStatus}
                  />
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
