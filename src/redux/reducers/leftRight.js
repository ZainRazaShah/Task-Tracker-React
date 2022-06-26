const initialState = {
  todo: [],
  inProgress: [],
  done: [],
};

const leftRight = (state = initialState, action) => {
  switch (action.type) {
    case "Todo_Right":
      return {
        ...state,
        inProgress: [...state.inProgress, action.payload],
        todo: state.todo.filter((item) => item !== action.payload),
      };

    case "In_Progress_Left":
      return {
        ...state,
        todo: [...state.todo, action.payload],
        inProgress: state.inProgress.filter((item) => item !== action.payload),
      };

    case "In_Progress_Right":
      return {
        ...state,
        done: [...state.done, action.payload],
        inProgress: state.inProgress.filter((item) => item !== action.payload),
      };

    case "Done_Left":
      return {
        ...state,
        inProgress: [...state.inProgress, action.payload],
        done: state.done.filter((item) => item !== action.payload),
      };

    case "Insert_Task":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    default:
      return state;
  }
};

export default leftRight;
