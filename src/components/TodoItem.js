import React from 'react';

export default ({
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
