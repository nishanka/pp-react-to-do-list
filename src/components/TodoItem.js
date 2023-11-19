import React from 'react';
import Button from './UI/Button';

import classes from './TodoItem.module.css';

const TodoItem = ({ item, onDelete, onEdit, onComplete, category }) => {
  return (
    <li className={`${classes['todo-item']} list-group-item d-md-flex`}>
      <span className='flex-grow-1 ms-2'>{item}</span>
      <div className={`${classes['todo-actions']} actions`}>
        {category !== 'completed' && (
          <Button btnClasses='btn-success' onClick={() => onComplete(item)}>
            Complete
          </Button>
        )}
        {category !== 'completed' && (
          <Button btnClasses='btn-warning' onClick={() => onEdit(item)}>
            Edit
          </Button>
        )}
        <Button btnClasses='btn-danger' onClick={() => onDelete(item)}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
