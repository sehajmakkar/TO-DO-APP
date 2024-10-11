import React from 'react'

const Header = (props) => {

  // to access info from props
  const {todos} = props

  const count = todos.length
  let txt = "tasks"
  if (count === 1){
    txt = "task"
  }

  return (
    <h1 className="text-gradient">You have {count} active {txt}.</h1>
  )
}

export default Header