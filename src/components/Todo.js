import React from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { rightArrowTodo } from "../redux/actions/index";

export default function Todo() {
  const myState = useSelector((state) => state.leftRight);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="card-title">Todo</h2>
      {myState.todo.length > 0 &&
        myState.todo.map((x) => (
          <Task
            title={x}
            rightArrow={() => {
              dispatch(rightArrowTodo(x));
            }}
          ></Task>
        ))}
      <br />
    </div>
  );
}
