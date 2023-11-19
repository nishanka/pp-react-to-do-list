import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainContent from './components/UI/MainContent';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';
import CompletedTodos from './components/CompletedTodos';

const INITIAL_VALUE = JSON.parse(localStorage.getItem('todos')) || [];
const INITIAL_COMPLETED_TODOS =
  JSON.parse(localStorage.getItem('completed-todos')) || [];

function App() {
  // const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState(INITIAL_VALUE);
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false);
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [editingItem, setEditingItem] = useState('');
  const [completedTodos, setCompletedTodos] = useState(INITIAL_COMPLETED_TODOS);

  useEffect(() => {
    // console.log('useEffect... Setting to localStorage...');
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completed-todos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  useEffect(() => {
    // console.log('useEffect... Getting from localStorage...');
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  const openNewTodoForm = () => {
    setIsAddingNewTodo(true);
  };

  const closeNewTodoForm = () => {
    setIsAddingNewTodo(false);
  };

  const onDeleteTodo = (key) => {
    if (completedTodos.includes(key)) {
      const newCompletedTodos = completedTodos.filter((item) => item !== key);
      setCompletedTodos(newCompletedTodos);

      return;
    }

    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const newStoredTodos = storedTodos.filter((item) => item !== key);
    setTodos(newStoredTodos);
  };

  const openEditTodoForm = (key) => {
    setIsEditingTodo(true);
    setEditingItem(key);
  };

  const closeEditTodoForm = () => {
    setIsEditingTodo(false);
  };

  const onSubmitTodo = (todoName) => {
    setTodos((prevTodos) => [...prevTodos, todoName]);
  };

  const onUpdateTodo = (prevname, updatedname) => {
    // console.log('Editing todo Previous Value...' + prevname);
    // console.log('Editing todo New Value...' + updatedname);

    // Lets Update localStorage
    const storedTodos = JSON.parse(localStorage.getItem('todos'));

    const updatedTodos = storedTodos.map((item) => {
      if (item === prevname) {
        return updatedname;
      }

      return item;
    });

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const onCompleteTodo = (todoName) => {
    // console.log('Completed ... ' + todoName);

    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const newStoredTodos = storedTodos.filter((item) => item !== todoName);
    setTodos(newStoredTodos);

    setCompletedTodos((prevCompletedTodos) => {
      return [...prevCompletedTodos, todoName];
    });
  };

  return (
    <MainContent>
      <Header onClickAddTodo={openNewTodoForm} />
      {isAddingNewTodo && (
        <NewTodo onCancel={closeNewTodoForm} onSubmit={onSubmitTodo} />
      )}
      {isEditingTodo && (
        <EditTodo
          onCancel={closeEditTodoForm}
          onSubmit={onUpdateTodo}
          editingItem={editingItem}
        />
      )}
      <Todos
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        openEditTodo={openEditTodoForm}
        onCompleteTodo={onCompleteTodo}
      />
      <CompletedTodos todos={completedTodos} onDeleteTodo={onDeleteTodo} />
    </MainContent>
  );
}

export default App;
