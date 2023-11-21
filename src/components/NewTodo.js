import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';

import classes from './NewTodo.module.css';
import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';
import { isValidTodo } from '../util/validation.js';

const NewTodo = ({ onCancel, onSubmit }) => {
  const [todoText, setTodoText] = useState('');
  const [taskIsInvalid, setTaskIsInvalid] = useState(false);
  const textInputRef = useRef();

  const onChangeText = (e) => {
    setTodoText(e.target.value);
    setTaskIsInvalid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidTodo(textInputRef)) {
      setTaskIsInvalid(true);
      textInputRef.current.focus();
      return;
    }

    setTaskIsInvalid(false);
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
          taskIsInvalid={taskIsInvalid}
        />
      </div>
    </Modal>
  );
};

export default NewTodo;
