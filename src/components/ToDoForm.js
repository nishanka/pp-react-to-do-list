import React, { useContext } from 'react';
import Button from './UI/Button';
import FormContext from '../store/form-context';

const ToDoForm = ({
  onSubmit,
  textInputRef,
  onChangeText,
  todoText,
  taskIsInvalid,
}) => {
  const formCtx = useContext(FormContext);

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
        <Button
          type='button'
          btnClasses='btn-secondary'
          onClick={formCtx.closeTodoForm}
        >
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
