import { useState } from 'react';
import FormContext from './form-context';

const FormContextProvider = ({ children }) => {
  const [formProgress, setFormProgress] = useState({
    isAdding: false,
    isEditing: false,
    editingItem: '',
  });

  function openNewTodoForm() {
    setFormProgress((prevState) => {
      return { ...prevState, isAdding: true };
    });
  }

  function openEditTodoForm(item) {
    setFormProgress((prevState) => {
      return { ...prevState, isEditing: true, editingItem: item };
    });
  }

  function closeTodoForm() {
    setFormProgress((prevState) => {
      return { ...prevState, isAdding: false, isEditing: false };
    });
  }

  const formContext = {
    formInfo: formProgress,
    openNewTodoForm,
    openEditTodoForm,
    closeTodoForm,
  };

  return (
    <FormContext.Provider value={formContext}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
