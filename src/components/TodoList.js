import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodoItem from './TodoItem';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

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
class VisibleTodoList extends React.Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(todos)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filter !== this.props.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(todos)
      );
    }
  }
  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(VisibleTodoList);
