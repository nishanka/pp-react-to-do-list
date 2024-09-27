import { createContext } from 'react';

const FormContext = createContext({
  formInfo: {
    isAdding: false,
    isEditing: false,
    editingItem: '',
  },
  openNewTodoForm: () => {},
  openEditTodoForm: (item) => {},
  closeTodoForm: () => {},
});

export default FormContext;
