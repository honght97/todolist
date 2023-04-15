import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
const TODO_APP_STORAGE_KEY = "TODO_APP";
const DivApp = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;
const Input = styled.input`
  border-radius: 3px 0px 0px 3px;
  padding: 8px 15px;
  border: 1px solid #de6590;
  outline: none;
  box-shadow: none;
  width: 100%;
  font-family: inherit;
  color: #8a8a8a;
  transition: 0.5s ease-out;
  &::placeholder {
    color: rgba(222, 101, 144, 0.4);
  }
`;
const Button = styled.button`
  background-color: #de6590;
  padding: 9px 50px;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  font-family: inherit;
  cursor: pointer;
  transition: 0.5s ease-out;
`;
const App = () => {
  const [texInput, setTextInput] = useState("");
  const [todolist, setTodoList] = useState([]);
  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todolist));
  }, [todolist]);

  const onChangeTextInput = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onClickButtonAdd = useCallback(() => {
    setTodoList([
      {
        id: uuidv4(),
        name: texInput,
        isCompleted: false,
      },
      ...todolist,
    ]);
    setTextInput("");
  }, [texInput, todolist]);
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      setTodoList([
        {
          id: uuidv4(),
          name: texInput,
          isCompleted: false,
        },
        ...todolist,
      ]);
      setTextInput("");
    }
  };
  const onClickButtonCheck = useCallback((id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: true } : todo;
      });
    });
  }, []);
  const onClickButtonRemove = useCallback((id) => {
    setTodoList((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].id === id) {
          prevState.splice(i, 1);
        }
      }
      return prevState.map((todo) => {
        return todo;
      });
    });
  }, []);
  return (
    <DivApp>
      <h3 style={{ textAlign: "center" }}>TO-DO LIST</h3>
      <div className="form-group">
        <Input
          type="text"
          value={texInput}
          onChange={onChangeTextInput}
          placeholder="ADD TODO HERE..."
          onKeyDown={onKeyDownEnter}
        />
        <Button onClick={onClickButtonAdd}>+</Button>
      </div>
      <p>YOUR TODOS:</p>
      <TodoList
        todolist={todolist}
        onClickButtonCheck={onClickButtonCheck}
        onClickButtonRemove={onClickButtonRemove}
      />
    </DivApp>
  );
};

export default App;
