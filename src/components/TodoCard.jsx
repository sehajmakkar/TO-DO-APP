import React from 'react'

const TodoCard = (props) => {
  // cant destructure the key from props

  // todos -> array
  // todos[todoIndex] -> accesing object in the array
  const {todo, deltask, todoIndex, doneTask} = props

  return (
    <div className='card todo-item'>

      <p>{todo.input}</p>

      <div className='todo-buttons'>
      <button onClick={() => {
                    doneTask(todoIndex)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
        
        <button 
          onClick={() => {
            deltask(todoIndex)
          }}
          >
          <h6>Delete</h6>
        </button>

      </div>
    </div>
  )
}

export default TodoCard