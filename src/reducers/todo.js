import { ADD_TODO, TOGGLE_TODO } from "constants/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case TOGGLE_TODO:
      if (action.id !== state.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};
