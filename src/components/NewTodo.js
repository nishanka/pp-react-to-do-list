import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';

import classes from './NewTodo.module.css';
import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';

const NewTodo = ({ onCancel, onSubmit }) => {
  const [todoText, setTodoText] = useState('');
  const textInputRef = useRef();

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todoText);
    setTodoText('');
    textInputRef.current.focus();
  };

  return (
    <Modal onClose={onCancel}>
      <div className={`${classes['new-todo']} position-relative`}>
        <h3 className='text-sm-center'>Add ToDo</h3>
        <CloseButton onClick={onCancel} />
        <ToDoForm
          onCancel={onCancel}
          onSubmit={handleSubmit}
          textInputRef={textInputRef}
          onChangeText={onChangeText}
          todoText={todoText}
        />
      </div>
    </Modal>
  );
};

export default NewTodo;
