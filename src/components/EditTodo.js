import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';

import classes from './NewTodo.module.css';

const EditTodo = ({ onCancel, onSubmit, editingItem }) => {
  //   return <div>Populate Edit form here.... {editingItem}</div>;

  const [todoText, setTodoText] = useState(editingItem);
  const textInputRef = useRef();

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editingItem, todoText);
    setTodoText('');
    textInputRef.current.focus();
    onCancel();
  };

  return (
    <Modal onClose={onCancel}>
      <div className={classes['new-todo']}>
        <h3 className='text-sm-center'>Edit ToDo</h3>

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
              ref={textInputRef}
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

export default EditTodo;
