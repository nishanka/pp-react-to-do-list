import React from 'react';
import Button from './UI/Button';

const ToDoForm = ({
  onSubmit,
  onCancel,
  textInputRef,
  onChangeText,
  todoText,
  taskIsInvalid,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='mb-3'>
        <label htmlFor='title' className='mb-2'>
          Title
        </label>
        <input
          id='title'
          type='text'
          className='form-control'
          ref={textInputRef}
          onChange={onChangeText}
          value={todoText}
          required
        />
        {taskIsInvalid && (
          <div className='text-danger mt-2'>Please enter a valid task.</div>
        )}
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
