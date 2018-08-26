import { v4 } from 'node-uuid';

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true
    },
    {
      id: v4(),
      text: 'ho',
      completed: true
    },
    {
      id: v4(),
      text: 'lets go',
      completed: false
    }
  ]
};

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    // if (Math.random() > 0.5) throw new Error('Boom!');
    const { todos } = fakeDatabase;
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        throw new Error('Unknown filter ', filter);
    }
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      completed: false,
      text
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(
      todo => todo.id === id
    );
    todo.completed = !todo.completed;
    return todo;
  });
