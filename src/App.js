import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainContent from './components/UI/MainContent';
import Header from './components/Header';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';
import {
  getStoredData,
  setStoredData,
  filterTodosData,
  INITIAL_TODOS,
  INITIAL_COMPLETED_TODOS,
} from './util/data';

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [completedTodos, setCompletedTodos] = useState(INITIAL_COMPLETED_TODOS);

  const [isAdding, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState('');

  useEffect(() => {
    setStoredData('todos', todos);
    setStoredData('completed-todos', completedTodos);
  }, [todos, completedTodos]);

  useEffect(() => {
    setTodos(getStoredData('todos'));
  }, []);

  const toggleNewTodoForm = () => {
    setIsAddingNew(!isAdding);
  };

  const onDelete = (todoName) => {
    if (completedTodos.includes(todoName)) {
      const newCompletedTodos = completedTodos.filter(
        (item) => item !== todoName
      );
      setCompletedTodos(newCompletedTodos);
      return;
    }
    const newStoredTodos = filterTodosData('todos', todoName);
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
    const storedTodos = getStoredData('todos');
    const updatedTodos = storedTodos.map((item) => {
      if (item === prevname) {
        return updatedname;
      }
      return item;
    });
    setStoredData('todos', updatedTodos);
    setTodos(updatedTodos);
  };

  const onComplete = (todoName) => {
    const newStoredTodos = filterTodosData('todos', todoName);
    setTodos(newStoredTodos);

    setCompletedTodos((prevCompletedTodos) => {
      return [...prevCompletedTodos, todoName];
    });
  };

  return (
    <MainContent>
      <Header onClickAddTodo={toggleNewTodoForm} />

      {isAdding && (
        <NewTodo
          onSubmit={onSubmitTodo}
          onCancel={toggleNewTodoForm}
          isAdding={isAdding}
        />
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
