import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';

import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';

const EditTodo = ({ onCancel, onSubmit, editingItem }) => {
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
      <div className='edit-todo position-relative'>
        <h3 className='text-sm-center'>Edit ToDo</h3>
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

export default EditTodo;
