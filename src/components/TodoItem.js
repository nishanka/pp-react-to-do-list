import React, { useContext } from 'react';
import Button from './UI/Button';

import classes from './TodoItem.module.css';
import TodosContext from '../store/todos-context';
import FormContext from '../store/form-context';

const TodoItem = ({ item, status }) => {
  const todosCtx = useContext(TodosContext);
  const formCtx = useContext(FormContext);

  return (
    <li
      className={`${classes['todo-item']} list-group-item d-md-flex align-items-center`}
    >
      <span className='flex-grow-1 ms-2'>{item}</span>
      <div className={`${classes['todo-actions']} actions flex-shrink-0`}>
        {status !== 'completed' && (
          <Button
            btnClasses='btn-outline-success btn-sm'
            onClick={() => todosCtx.completeTodo(item)}
          >
            Complete
          </Button>
        )}
        {status !== 'completed' && (
          <Button
            btnClasses='btn-outline-info btn-sm'
            onClick={() => formCtx.openEditTodoForm(item)}
          >
            Edit
          </Button>
        )}
        <Button
          btnClasses='btn-outline-danger btn-sm'
          onClick={() => todosCtx.deleteTodo(item)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
