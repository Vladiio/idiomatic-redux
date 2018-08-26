import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/todos.actions';
import TodoItem from './TodoItem';
import FetchError from './FetchError';
import {
  getVisibleTodos,
  getIsFetching,
  getErrorMessage
} from '../reducers';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        completed={todo.completed}
        id={todo.id}
        key={todo.id}
        onTodoClick={onTodoClick}
      >
        {todo.text}
      </TodoItem>
    ))}
  </ul>
);
class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }
  render() {
    const {
      toggleTodo,
      todos,
      isFetching,
      errorMessage
    } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          onRetry={() => this.props.fetchTodos(this.props.filter)}
          message={errorMessage}
        />
      );
    }
    return (
      <TodoList onTodoClick={toggleTodo} todos={todos} />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    actions
  )
)(VisibleTodoList);
