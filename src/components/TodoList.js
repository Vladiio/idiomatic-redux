import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem completed={todo.completed} id={todo.id} key={todo.id}>
        {todo.text}
      </TodoItem>
    ))}
  </ul>
);

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "all":
      return todos;
    case "active":
      return todos.filter(t => !t.completed);
    case "completed":
      return todos.filter(t => t.completed);
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
});

export default connect(mapStateToProps)(TodoList);
