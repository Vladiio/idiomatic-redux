import { SET_VISIBILITY_FILTER } from "constants/actionTypes";

export default (state = "all", action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
