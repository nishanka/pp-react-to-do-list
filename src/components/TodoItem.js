import React from 'react';
import Button from './UI/Button';

import classes from './TodoItem.module.css';

const TodoItem = () => {
  return (
    <li className={`${classes['todo-item']} list-group-item d-md-flex`}>
      <span className='flex-grow-1 ms-2'>title</span>
      <span>Status: Status</span>
      <div className={`${classes['todo-actions']} actions`}>
        <Button btnClasses='btn-success'>Complete</Button>
        <Button btnClasses='btn-warning'>Edit</Button>
        <Button btnClasses='btn-danger'>Delete</Button>
      </div>
    </li>
  );
};

export default TodoItem;
