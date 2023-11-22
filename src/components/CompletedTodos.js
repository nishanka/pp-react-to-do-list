import React, { useState } from 'react';
import ToDoCount from './ToDoCount';
import TodoList from './TodoList';

const CompletedTodos = ({ todos, onDelete }) => {
  const toDosCount = todos.length;
  const category = 'completed';
  const [toggleList, setToggleList] = useState(false);

  const toggleTodoList = () => {
    setToggleList(!toggleList);
  };

  return (
    <div className='completed-todos mt-4 p-3 bg-success bg-opacity-50 rounded position-relative'>
      <ToDoCount count={toDosCount} alertType='info' info='completed' />
      <button
        className='position-absolute top-0 end-0 btn btn-outline-success border-3 m-3'
        type='button'
        onClick={toggleTodoList}
      >
        {toggleList ? '^' : '>'}
      </button>
      {toggleList && (
        <TodoList todos={todos} onDelete={onDelete} category={category} />
      )}
    </div>
  );
};

export default CompletedTodos;
