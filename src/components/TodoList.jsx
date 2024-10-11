import React from 'react'
import TodoCard from './TodoCard'

// this is to show todocards
// we can implement the same logic of mapping as we want to show multiple cards with repeated fields

const TodoList = (props) => {
  const {todos, selectedtab, delTask, doneTask} = props

  // const tab = "All"

  const filterTodos = selectedtab === 'All' ? todos 
  : selectedtab === 'Completed' ? todos.filter((todo) => todo.complete) 
  : todos.filter((todo) => !todo.complete)


  return (
    <>
    {
      filterTodos.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todos.findIndex(val => val.input == todo.input)}
            {...props}
            deltask={delTask}
            doneTask={doneTask}
            todo={todo}
             />
        )

      })
    }

    </>
  )
}

export default TodoList