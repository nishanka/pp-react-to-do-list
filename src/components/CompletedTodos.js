import React from 'react';
import ToDoCount from './ToDoCount';
import TodoList from './TodoList';

const CompletedTodos = ({ todos, onDeleteTodo }) => {
  const toDosCount = todos.length;
  const category = 'completed';

  return (
    <div className='completed-tasks mt-5 p-3 bg-success bg-opacity-25 rounded'>
      <ToDoCount count={toDosCount} alertType='info' info='completed' />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} category={category} />
    </div>
  );
};

export default CompletedTodos;
