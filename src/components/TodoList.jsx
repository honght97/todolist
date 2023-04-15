import React from "react";
import Todo from "./Todo";

const TodoList = ({ todolist, onClickButtonCheck, onClickButtonRemove }) => {
  return (
    <>
      {todolist.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onClickButtonCheck={onClickButtonCheck}
          onClickButtonRemove={onClickButtonRemove}
        />
      ))}
    </>
  );
};

export default TodoList;
