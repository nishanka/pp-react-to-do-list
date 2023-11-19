import React from 'react';
import TodoList from './TodoList';
import ToDoCount from './ToDoCount';

const Todos = () => {
  const toDosCount = 5;

  const todos = ['Learn React', 'Learn JavaScript', 'Learn Unit Tests'];

  return (
    <div className='todos'>
      <h3 className='text-center'>ToDo List</h3>
      <ToDoCount count={toDosCount} />
      <TodoList todos={todos} />
    </div>
  );
};
export default Todos;
