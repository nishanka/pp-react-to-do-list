import React from 'react';
import TodoList from './TodoList';
import ToDoCount from './ToDoCount';

const Todos = ({ todos, onDeleteTodo, openEditTodo, onCompleteTodo }) => {
  const toDosCount = todos.length;

  return (
    <div className='todos'>
      <h3 className='text-center'>ToDo List</h3>
      <ToDoCount count={toDosCount} alertType='warning' info='tasks left' />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        openEditTodo={openEditTodo}
        onCompleteTodo={onCompleteTodo}
      />
    </div>
  );
};
export default Todos;
