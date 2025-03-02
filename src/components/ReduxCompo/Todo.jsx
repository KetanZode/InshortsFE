import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    const val = useSelector((state) => state.todo.var)
  return (
    <div>
      Todo {val}
    </div>
  )
}

export default Todo
