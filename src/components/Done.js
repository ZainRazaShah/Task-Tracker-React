import React from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { leftArrowDone } from "../redux/actions/index";

export default function Done() {
  const myState = useSelector((state) => state.leftRight);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="card-title">Done</h2>
      {myState.done.length > 0 &&
        myState.done.map((x) => (
          <Task
            title={x}
            leftArrow={() => {
              dispatch(leftArrowDone(x));
            }}
          ></Task>
        ))}
    </div>
  );
}
