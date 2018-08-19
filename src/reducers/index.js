import todos, * as fromTodos from './todos.reducer';
import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter.reducer';

export default combineReducers({
  todos,
  visibilityFilter
});

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
