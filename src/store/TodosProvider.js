import { useReducer } from 'react';
import TodosContext from './todos-context';
import { getStoredData, setStoredData, filterTodosData } from '../util/data';

const INITIAL_STATE = {
  // todos: JSON.parse(localStorage.getItem('todos')),
  todos: getStoredData('todos'),
  completedTodos: getStoredData('completed-todos'),
  notification: {
    type: '',
    message: '',
  },
};

const todosReducerFn = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedTodos = [...state.todos, action.payloadItem];
      setStoredData('todos', updatedTodos);
      // localStorage.setItem('todos', JSON.stringify(updatedTodos));

      return {
        ...state,
        todos: updatedTodos,
        notification: {
          type: 'primary',
          message: `Todo "${action.payloadItem}" ADDED ...! `,
        },
      };

    case 'UPDATE':
      let prevValue = state.todos.filter((item) => item === action.payload.id);
      const nonUpdatedList = state.todos.filter(
        (item) => item !== action.payload.id
      );
      const updatedList = [...nonUpdatedList, action.payload.value];
      setStoredData('todos', updatedList);
      // localStorage.setItem('todos', JSON.stringify(updatedList));

      return {
        ...state,
        todos: updatedList,
        notification: {
          type: 'info',
          message: `Todo "${prevValue}" EDITED as "${action.payload.value}" ...!`,
        },
      };

    case 'COMPLETE':
      const completedTodoItem = action.payloadItem;
      const incompleteTodos = state.todos.filter(
        (item) => item !== completedTodoItem
      );

      const updatedCompletedTodos = [
        ...state.completedTodos,
        completedTodoItem,
      ];
      setStoredData('todos', incompleteTodos);
      setStoredData('completed-todos', updatedCompletedTodos);
      // localStorage.setItem('todos', JSON.stringify(incompleteTodos));
      // localStorage.setItem(
      //   'completed-todos',
      //   JSON.stringify(updatedCompletedTodos)
      // );

      return {
        todos: incompleteTodos,
        completedTodos: updatedCompletedTodos,
        notification: {
          type: 'success',
          message: `Todo "${action.payloadItem}" COMPLETED ...! `,
        },
      };

    case 'DELETE':
      const deletedItem = action.payloadItem;

      if (state.todos.includes(deletedItem)) {
        const remainingTodos = state.todos.filter(
          (item) => item !== action.payloadItem
        );
        setStoredData('todos', remainingTodos);
        // localStorage.setItem('todos', JSON.stringify(remainingTodos));
        return {
          ...state,
          todos: remainingTodos,
          notification: {
            type: 'danger',
            message: `Todo "${action.payloadItem}" DELETED ...! `,
          },
        };
      } else if (state.completedTodos.includes(deletedItem)) {
        const remainingTodos = state.completedTodos.filter(
          (item) => item !== action.payloadItem
        );
        setStoredData('completed-todos', remainingTodos);
        // localStorage.setItem('completed-todos', JSON.stringify(remainingTodos));
        return {
          ...state,
          completedTodos: remainingTodos,
          notification: {
            type: 'danger',
            message: `Todo "${action.payloadItem}" DELETED from Completed Todos ...!`,
          },
        };
      } else {
        console.log('not found');
      }

      return;

    default:
      return INITIAL_STATE;
  }
};

const TodosContextProvider = ({ children }) => {
  const [todosState, dispatchTodosActions] = useReducer(
    todosReducerFn,
    INITIAL_STATE
  );

  const handleAddTodo = (itemValue) => {
    dispatchTodosActions({ type: 'ADD', payloadItem: itemValue });
  };

  const handleUpdateTodo = (itemId, itemValue) => {
    dispatchTodosActions({
      type: 'UPDATE',
      payload: { id: itemId, value: itemValue },
    });
  };

  const handleCompleteTodo = (itemId) => {
    dispatchTodosActions({ type: 'COMPLETE', payloadItem: itemId });
  };

  const handleDeleteTodo = (itemId) => {
    dispatchTodosActions({ type: 'DELETE', payloadItem: itemId });
  };

  const todosContext = {
    todos: todosState.todos,
    completedTodos: todosState.completedTodos,
    notification: todosState.notification,
    addTodo: handleAddTodo,
    updateTodo: handleUpdateTodo,
    completeTodo: handleCompleteTodo,
    deleteTodo: handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
