import React from 'react';
import Button from './UI/Button';

const ToDoForm = ({
  onSubmit,
  onCancel,
  textInputRef,
  onChangeText,
  todoText,
}) => {
  return (
    <form onSubmit={onSubmit}>
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
        <Button type='button' btnClasses='btn-secondary' onClick={onCancel}>
          Cancel
        </Button>
        <Button type='submit' btnClasses='btn-primary ms-2'>
          Save
        </Button>
      </div>
    </form>
  );
};

export default ToDoForm;
