import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import CrossIcon from "@atlaskit/icon/glyph/cross";
const DivTodo = styled.div`
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(138, 138, 138, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: 0.5s ease-out;
  height: 30px;
  &:hover {
    background-color: rgba(138, 138, 138, 0.2);
    .check-icon,
    .remove-icon {
      display: inline-block;
    }
  }
  &,
  &:hover {
    ${(props) =>
      props.isCompleted &&
      css`
        text-decoration: line-through;
      `}
  }
`;
const ButtonChecked = styled.button`
  background: rgba(3, 201, 136, 0.3);
  cursor: pointer;
  border: none;
  box-shadow: none;
  outline: none;
  color: rgba(3, 201, 136, 1);
  display: none;
`;
const ButonRemove = styled.button`
  background: rgba(244, 80, 80, 0.3);
  display: inline-block;
  border: none;
  box-shadow: none;
  outline: none;
  color: rgba(244, 80, 80, 1);
  display: none;
  cursor: pointer;
`;
const Todo = ({ todo, onClickButtonCheck, onClickButtonRemove }) => {
  return (
    <DivTodo isCompleted={todo.isCompleted}>
      <span>{todo.name}</span>
      <div className="action-box">
        {!todo.isCompleted && (
          <ButtonChecked
            className="check-icon"
            onClick={() => onClickButtonCheck(todo.id)}
          >
            <CheckIcon />
          </ButtonChecked>
        )}
        <ButonRemove
          className="remove-icon"
          onClick={() => onClickButtonRemove(todo.id)}
        >
          <CrossIcon />
        </ButonRemove>
      </div>
    </DivTodo>
  );
};

export default Todo;
