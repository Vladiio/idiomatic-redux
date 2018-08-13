import React from "react";
import { connect } from "react-redux";
import { addTodo } from "actions/todos.actions";

const AddTodo = ({ onAddTodo }) => {
  let input;

  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button
        onClick={() => {
          onAddTodo(input.value);
          input.value = "";
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default connect(
  null,
  { onAddTodo: addTodo }
)(AddTodo);
