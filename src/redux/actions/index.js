export const rightArrowTodo = (task) => {
  return {
    type: "Todo_Right",
    payload: task,
  };
};

export const leftArrowProgress = (task) => {
  return {
    type: "In_Progress_Left",
    payload: task,
  };
};

export const rightArrowProgress = (task) => {
  return {
    type: "In_Progress_Right",
    payload: task,
  };
};

export const leftArrowDone = (task) => {
  return {
    type: "Done_Left",
    payload: task,
  };
};

export const Insert_Todo = (task) => {
  return {
    type: "Insert_Task",
    payload: task,
  };
};
