import React from 'react'

const Tabs = (props) => {
  const tabs= ["All", "Open", "Completed"]
  const {todos, selectedtab, setselectedtab} = props
  return (
    <nav className="tab-container">
      {/* MAPPING : when you have repeating sections */}
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = tab === "All" ? todos.length 
        : tab === "Open" ? todos.filter((todo) => !todo.complete).length 
        : todos.filter((todo) => todo.complete).length

        return(
          <button 
            onClick={() => setselectedtab(tab)}
            key={tabIndex} 
          // dynamic className for styling here
            className={"tab-button " + (tab == selectedtab ? ' tab-selected' : ' ') }>
            <h4>{tab}
              <span>
                ({numOfTasks})
              </span>
            </h4>
          </button>
        )
      })}
      <hr />
    </nav>
    
  )
}

export default Tabs