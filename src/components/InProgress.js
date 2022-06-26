import React from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { leftArrowProgress, rightArrowProgress } from "../redux/actions/index";

export default function InProgress() {
  const myState = useSelector((state) => state.leftRight);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="card-title">In Progress</h2>
      {myState.inProgress.length > 0 &&
        myState.inProgress.map((x) => (
          <Task
            title={x}
            leftArrow={() => {
              dispatch(leftArrowProgress(x));
            }}
            rightArrow={() => {
              dispatch(rightArrowProgress(x));
            }}
          ></Task>
        ))}
    </div>
  );
}
