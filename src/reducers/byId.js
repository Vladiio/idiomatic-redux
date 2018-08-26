export default (state = {}, action) =>
  action.response
    ? { ...state, ...action.response.entities.todos }
    : state;
export const getTodo = (state, id) => state[id];
