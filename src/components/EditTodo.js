import React, { useRef, useState, useContext } from 'react';
import Modal from './UI/Modal';

import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';
import { isValidTodo } from '../util/validation.js';
import FormContext from '../store/form-context.js';
import TodosContext from '../store/todos-context.js';

const EditTodo = () => {
  const formCtx = useContext(FormContext);
  const todosCtx = useContext(TodosContext);
  const initialTodotxt = formCtx.formInfo.editingItem;

  const [todoText, setTodoText] = useState(initialTodotxt);
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

    todosCtx.updateTodo(initialTodotxt, todoText);
    setTodoText('');
    textInputRef.current.focus();
    formCtx.closeTodoForm();
  };

  return (
    <Modal onClose={formCtx.closeTodoForm}>
      <div className='edit-todo position-relative'>
        <h3 className='text-sm-center'>Edit ToDo</h3>
        <CloseButton onClick={formCtx.closeTodoForm} />
        <ToDoForm
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
