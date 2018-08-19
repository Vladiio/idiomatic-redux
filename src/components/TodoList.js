import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoItem from './TodoItem';
import { getVisibleTodos } from '../reducers';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        completed={todo.completed}
        id={todo.id}
        key={todo.id}
      >
        {todo.text}
      </TodoItem>
    ))}
  </ul>
);

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state,
    match.params.filter || 'all'
  )
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(TodoList);
