import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainContent from './components/UI/MainContent';
import Header from './components/Header';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';

const INITIAL_TODOS = JSON.parse(localStorage.getItem('todos')) || [];
const INITIAL_COMPLETED_TODOS =
  JSON.parse(localStorage.getItem('completed-todos')) || [];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [completedTodos, setCompletedTodos] = useState(INITIAL_COMPLETED_TODOS);

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completed-todos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  const toggleNewTodoForm = () => {
    setIsAddingNew(!isAddingNew);
  };

  const onDelete = (todoName) => {
    if (completedTodos.includes(todoName)) {
      const newCompletedTodos = completedTodos.filter(
        (item) => item !== todoName
      );
      setCompletedTodos(newCompletedTodos);

      return;
    }

    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const newStoredTodos = storedTodos.filter((item) => item !== todoName);
    setTodos(newStoredTodos);
  };

  const toggleEditTodoForm = (todoName) => {
    setIsEditing(!isEditing);
    setEditingItem(todoName);
  };

  const onSubmitTodo = (todoName) => {
    setTodos((prevTodos) => [...prevTodos, todoName]);
  };

  const onUpdate = (prevname, updatedname) => {
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

  const onComplete = (todoName) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const newStoredTodos = storedTodos.filter((item) => item !== todoName);
    setTodos(newStoredTodos);

    setCompletedTodos((prevCompletedTodos) => {
      return [...prevCompletedTodos, todoName];
    });
  };

  return (
    <MainContent>
      <Header onClickAddTodo={toggleNewTodoForm} />

      {isAddingNew && (
        <NewTodo onSubmit={onSubmitTodo} onCancel={toggleNewTodoForm} />
      )}

      {isEditing && (
        <EditTodo
          onSubmit={onUpdate}
          onCancel={toggleEditTodoForm}
          editingItem={editingItem}
        />
      )}

      {!todos.length > 0 && (
        <div className='alert alert-danger text-center fw-bold' role='alert'>
          You have no ToDos...
        </div>
      )}

      {todos.length > 0 && (
        <Todos
          todos={todos}
          onDelete={onDelete}
          openEdit={toggleEditTodoForm}
          onComplete={onComplete}
        />
      )}

      {completedTodos.length > 0 && (
        <CompletedTodos todos={completedTodos} onDelete={onDelete} />
      )}
    </MainContent>
  );
}

export default App;
