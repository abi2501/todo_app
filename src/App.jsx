import { useEffect, useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'
import TodoAddForm from './components/TodoAddForm'
import TodoList from './components/TodoList'
import TodoEditForm from './components/TodoEditForm'

function App() {

  const [todoList, setTodoList] = useState([])

  let addNewTodoItem = (todoText) => setTodoList([...todoList, {
    "id": uuid(),
    "todoText": todoText,
    "editingEnabled": false,
    "todoStatus": false
  }])


  function enableEdit(id) {
    setTodoList((prevList) => prevList.map(todo => todo.id === id ? { ...todo, "editingEnabled": !todo.editingEnabled } : todo))
    console.log(todoList)
  }


  function saveTodoText(id, todoText) {
    setTodoList((prevList) => prevList.map(todo =>
      todo.id === id ? { ...todo, "todoText": todoText, "editingEnabled": !todo.editingEnabled } : todo
    ));
  }


  function deleteTodoHandler(id) {
    setTodoList((prevList) => prevList.filter(todo => todo.id != id))
  }

  function saveTodoStatus(id) {
    setTodoList((prevList) => prevList.map(todo =>
      todo.id === id ? { ...todo, "todoStatus": !todo.todoStatus, } : todo
    ))
    todoListItems();
  }


  const todoListItems = () => (
    todoList.map((todo, index) => (
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
  );

  useEffect(() => {
    todoListItems();
  }, [todoList])



  return (
    <>
      <div className='container h-screen py-5 bg-slate-200'>
        <div className='container w-1/2 mx-auto bg-slate-50 p-5 rounded'>
          <TodoAddForm addTodoItem={addNewTodoItem} />

          <ul className=''>
            {todoListItems()}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
