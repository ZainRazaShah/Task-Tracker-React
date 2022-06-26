import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Insert_Todo } from "../redux/actions/index";

export default function AddTask() {
  const dispatch = useDispatch();
  const [inputText, setText] = useState("");

  const whenClicked = () => {
    inputText.length > 0 && dispatch(Insert_Todo(inputText));
    setText("");
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      whenClicked();
    }
  };

  return (
    <div className="add-container">
      <input
        className="add-task-input"
        type="text"
        minLength={5}
        maxLength={60}
        required={true}
        value={inputText}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeypress}
        placeholder="Add a task to the todo tab"
      />
      <button className="btn-add-task" onClick={whenClicked}>
        Add Task
      </button>
    </div>
  );
}
