import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ol className='todos list-group list-group-numbered'>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </ol>
  );
};

export default TodoList;
