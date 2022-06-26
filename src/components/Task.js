import React from "react";
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";

export default function Task(props) {
  return (
    <div className="each-task">
      <button onClick={props.leftArrow} className="btn-left">
        <img
          src={leftArrow}
          className="left-img"
          alt="PNG of an arrow pointed to the left"
        />
      </button>
      <p className="task-text">{props.title}</p>
      <button onClick={props.rightArrow} className="btn-right">
        <img
          src={rightArrow}
          className="right-img"
          alt="PNG of an arrow pointed to the right"
        />
      </button>
    </div>
  );
}
