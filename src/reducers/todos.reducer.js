import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO
} from 'constants/actionTypes';
import todo from './todo';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const ids = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  ids
});

const getAllTodos = state =>
  state.ids.map(id => state.byId[id]);

export const getVisibleTodos = (
  state,
  visibilityFilter
) => {
  const allTodos = getAllTodos(state);
  switch (visibilityFilter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(t => !t.completed);
    case 'completed':
      return allTodos.filter(t => t.completed);
    default:
      throw new Error(
        'Unknown visibility filter: ' + visibilityFilter
      );
  }
};
