"use client";
import { todoProps } from "@/types";
import React, { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import { Input } from "../input/input";
import * as actions from "@/actions";
import Form from "../form/Form";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editState, setEditState] = useState(false);
  const handleEdit = () => {
    if(todo.isCompleted){
        return;
    }
    setEditState(!editState);
  };
  const handleSubmit = () => {
    setEditState(false);
  };
  return (
    <div className=" gap-5 flex items-center">
      <Button text={<MdEdit />} onClick={handleEdit} />
      {editState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center">
            {"  "}
            <Input
              name="newTitle"
              placeholder="edit todo..."
              type="text"
            ></Input>
            <Button type="submit" text="Save"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
