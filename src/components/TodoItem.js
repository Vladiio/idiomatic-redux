import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos.actions';

const TodoItem = ({
  children,
  onTodoClick,
  completed,
  id
}) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={() => onTodoClick(id)}
  >
    {children}
  </li>
);

export default connect(
  null,
  { onTodoClick: toggleTodo }
)(TodoItem);
