import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <>
    {/* <h3>{props.todos.title}</h3> */}
    {props.todos.map((todo) => {
        return <TodoItem todo={todo} />
    })}
    {/* {props.todos.map = (todo) => 
        <TodoItem todo={todo} />
    } */}
    </>
  )
}

export default TodoList