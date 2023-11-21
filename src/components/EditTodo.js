import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';

import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';
import { isValidTodo } from '../util/validation.js';

const EditTodo = ({ onCancel, onSubmit, editingItem }) => {
  const [todoText, setTodoText] = useState(editingItem);
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

    onSubmit(editingItem, todoText);
    setTodoText('');
    textInputRef.current.focus();
    onCancel();
  };

  return (
    <Modal onClose={onCancel}>
      <div className='edit-todo position-relative'>
        <h3 className='text-sm-center'>Edit ToDo</h3>
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

export default EditTodo;
