import { todoProps } from '@/types'
import React from 'react'
import ChangeTodo from './ChangeTodo'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}:{todo: todoProps}) => {
  const todoStyle ={
    textDecoration: todo.isCompleted ? 'line-through' :'none',
    opacity: todo.isCompleted ? 0.5 : 1,
  }
  return (
    <div
    style={todoStyle}
     className=' w-10/12 mx-auto py-4 px-20 rounded-2xl flex items-center justify-between bg-slate-900 '>
      <ChangeTodo todo={todo}/>
      <span className=' text-center grow font-bold  uppercase'>{todo.title}</span>
      <div className="flex items-center mx-2"><EditTodo todo={todo}/></div>
      <div className="flex items-center"><DeleteTodo id={todo.id}></DeleteTodo></div>
    </div>
  )
}

export default Todo