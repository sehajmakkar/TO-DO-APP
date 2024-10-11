import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  // here we write all of the logic

  // props to pass to the children
  // const todos =[
  //   { input : 'Buy milk', complete : false },
  //   { input : 'Buy eggs', complete : true },
  //   { input : 'Buy bread', complete : false },
  //   { input : 'Buy cheese', complete : false },
  // ]

  // react hooks
  const [todos, setTodos] = useState([
    { input : 'Add your first task!', complete : false },
  ])

  const [selectedtab, setselectedtab] = useState('Open')


  // handler function
  function addTask(newTodo) {
    // overwriting the exisiting todo list with the new one
    // immutable
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)

    saveData(newTodoList)
  }

  function doneTask(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)

    saveData(newTodoList)
  }

  // chatgpt this
  function delTask(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)

    saveData(newTodoList)
  }

  function saveData(currTodos){
    localStorage.setItem('todo-app', JSON.stringify({todos : currTodos}))
  }

  // callback + dependencies
  useEffect(() => {
    // guard clause
    if(!localStorage) {return}

    let db = []
    if(localStorage.getItem('todo-app')){
      db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
    }

  }, [])

  return (
    <>
      <Header todos = {todos} />
      <Tabs todos = {todos} selectedtab={selectedtab} setselectedtab={setselectedtab} />
      <TodoList todos = {todos} selectedtab={selectedtab} delTask = {delTask} doneTask = {doneTask} />
      <TodoInput addTask = {addTask} />
    </>
  )
}

export default App
