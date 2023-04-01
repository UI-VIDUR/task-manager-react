import React from 'react'

const TodoItem = (todo) => {
  return (
    <div className="d-flex flex-column task_card">
        <h3 className="title">{todo.title}</h3>
        <p className="task">{todo.task}</p>
        <div className="button_wrapper">
            <button className="primary" id="edit-btn">EDIT</button>
            <button className="secondary" id="delete-btn">DELETE</button>
        </div>
    </div>
  )
}

export default TodoItem