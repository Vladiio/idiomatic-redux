import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todos.actions";

const TodoItem = ({ children, onTodoClick, completed }) => (
  <li
    style={{ textDecoration: completed ? "line-through" : "none" }}
    onClick={onTodoClick}
  >
    {children}
  </li>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTodoClick: () => dispatch(toggleTodo(ownProps.id))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
