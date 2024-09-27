import React, { useRef, useState, useContext } from 'react';
import Modal from './UI/Modal';

import classes from './NewTodo.module.css';
import CloseButton from './UI/CloseButton';
import ToDoForm from './ToDoForm';
import { isValidTodo } from '../util/validation.js';
import TodosContext from '../store/todos-context.js';
import FormContext from '../store/form-context.js';

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const formCtx = useContext(FormContext);

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
    todosCtx.addTodo(todoText);
    setTodoText('');
    textInputRef.current.focus();
  };

  return (
    <Modal onClose={formCtx.closeTodoForm}>
      <div className={`${classes['new-todo']} position-relative`}>
        <h3 className='text-sm-center'>Add ToDo</h3>
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

export default NewTodo;
