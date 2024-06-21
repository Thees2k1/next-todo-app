import React from 'react'
import { Input } from '../input/input'
import Button from '../button/Button'
import Form from '../form/Form'
import { FaTrash } from 'react-icons/fa'
import * as actions from "@/actions";

const DeleteTodo = ({id}  : {id:string}) => {
  return (
    <Form action={actions.deleteTodo}>
        <Input name='inputId' value={id} type='hidden'></Input>
        <Button 
        text={<FaTrash/>}
        actionButton
        type='submit'
        bgColor=" bg-red-400"
        ></Button>
    </Form>
  )
}

export default DeleteTodo