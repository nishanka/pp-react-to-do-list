import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, openEdit, onComplete, category }) => {
  return (
    <ol className='todos list-group list-group-numbered'>
      {todos.map((item) => (
        <TodoItem
          key={item}
          item={item}
          onDelete={onDelete}
          onEdit={openEdit}
          onComplete={onComplete}
          category={category}
        />
      ))}
    </ol>
  );
};

export default TodoList;
