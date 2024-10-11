import React, { useState } from 'react'

const TodoInput = (props) => {

  const {addTask} = props
  const [input, setInput] = useState('')

  return (
    <>
    <div className="input-container">

      <input 
      value={input} 
      onChange={(e) => {
        setInput(e.target.value)
      }}  
      type="text" 
      placeholder="What needs to be done?" />

      <button onClick={()=>{
        if(!input) return
        addTask(input)
        setInput('')
      }}>

        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
    </>
  )
}

export default TodoInput