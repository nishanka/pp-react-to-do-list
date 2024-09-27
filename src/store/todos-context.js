import { createContext } from 'react';

const TodosContext = createContext({
  todos: [],
  completedTodos: [],
  notification: {},
  addTodo: (itemValue) => {},
  updateTodo: (itemId, itemValue) => {},
  completeTodo: (itemId) => {},
  deleteTodo: (itemId) => {},
});

export default TodosContext;
