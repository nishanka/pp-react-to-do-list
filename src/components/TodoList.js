import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onDeleteTodo,
  openEditTodo,
  onCompleteTodo,
  category,
}) => {
  return (
    <ol className='todos list-group list-group-numbered'>
      {todos.map((item) => (
        <TodoItem
          key={item}
          item={item}
          onDelete={onDeleteTodo}
          onEdit={openEditTodo}
          onComplete={onCompleteTodo}
          category={category}
        />
      ))}
    </ol>
  );
};

export default TodoList;
