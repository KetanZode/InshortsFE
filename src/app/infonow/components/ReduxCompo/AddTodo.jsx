import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addval, addvar, decvar } from '../../features/todo/TodoSlice'

function AddTodo() {
    const dispatch = useDispatch()
    const vari = useSelector((state)=> state.todo.var)
  return (
    <div>
      Add Todo
      <button className='border' onClick={()=>dispatch(addvar())}>Add Val</button>
      <button className='border' onClick={()=>dispatch(addval(5))}>Add Var</button>
      <button className='border' onClick={()=>dispatch(decvar())}>Dec Var</button>
    </div>
  )
}

export default AddTodo
