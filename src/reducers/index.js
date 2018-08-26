import todos, * as fromTodos from './todos.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todos
});

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);

export const getIsFetching = (state, filter) =>
  fromTodos.getIsFetching(state.todos, filter);

export const getErrorMessage = (state, filter) =>
  fromTodos.getErrorMessage(state.todos, filter);
