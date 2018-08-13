import { combineReducers } from "redux";
import todos from "./todos.reducer";
import visibilityFilter from "./visibilityFilter.reducer";
export default combineReducers({
  todos,
  visibilityFilter
});
