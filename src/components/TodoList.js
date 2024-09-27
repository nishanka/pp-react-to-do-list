import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, status }) => {
  return (
    <ol className='todos list-group list-group-numbered mt-3'>
      {todos.map((item) => (
        <TodoItem key={item} item={item} status={status} />
      ))}
    </ol>
  );
};

export default TodoList;
