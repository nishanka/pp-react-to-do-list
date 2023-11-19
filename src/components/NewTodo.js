import React, { useState } from 'react';
import Modal from './UI/Modal';

import classes from './NewTodo.module.css';

const NewTodo = ({ onCancel }) => {
  const [todoText, setTodoText] = useState('');

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle todo data
  };

  return (
    <Modal onClose={onCancel}>
      <div className={classes['new-todo']}>
        <h3 className='text-sm-center'>Add ToDo</h3>

        <button
          type='button'
          className={`btn-close ${classes['close']}`}
          data-bs-dismiss='modal'
          aria-label='Close'
          onClick={onCancel}
        ></button>

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              type='text'
              className='form-control'
              onChange={onChangeText}
              value={todoText}
            />
          </div>
          <div className='actions d-flex justify-content-end'>
            <button
              type='submit'
              className='btn btn-secondary align-self-center'
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-primary align-self-center ms-2'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewTodo;
