import React from 'react';
import TodoList from './TodoList';
import ToDoCount from './ToDoCount';

const Todos = ({ todos, onDelete, openEdit, onComplete }) => {
  const toDosCount = todos.length;

  return (
    <div className='todos'>
      <h3 className='text-center mb-3'>ToDo List</h3>
      <ToDoCount count={toDosCount} alertType='primary' info='tasks left' />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        openEdit={openEdit}
        onComplete={onComplete}
      />
    </div>
  );
};
export default Todos;
