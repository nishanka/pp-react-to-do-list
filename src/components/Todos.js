import React, { useContext } from 'react';
import TodoList from './TodoList';
import ToDoCount from './ToDoCount';
import TodosContext from '../store/todos-context';

const Todos = () => {
  const todosCtx = useContext(TodosContext);
  const toDosCount = todosCtx.todos.length;

  return (
    <div className='todos'>
      <ToDoCount count={toDosCount} alertType='primary' info='tasks left' />
      <TodoList todos={todosCtx.todos} />
    </div>
  );
};
export default Todos;
