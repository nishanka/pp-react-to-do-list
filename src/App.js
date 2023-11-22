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
  INITIAL_NOTIFICATION,
} from './util/data';
import NotificationBar from './components/UI/NotificationBar';

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [completedTodos, setCompletedTodos] = useState(INITIAL_COMPLETED_TODOS);
  const [notification, setNotification] = useState(INITIAL_NOTIFICATION);

  const [isAdding, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState('');

  const setNotificationData = (todoName, type, userAction) => {
    setNotification({
      type: type,
      message: `Todo "${todoName}" - ${userAction}...! `,
      visibility: true,
    });

    setTimeout(() => {
      setNotification(INITIAL_NOTIFICATION);
    }, 2000);
  };

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
    setNotificationData(todoName, 'danger', 'DELETED');

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
    setNotificationData(todoName, 'primary', 'ADDED');
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
    setNotificationData(prevname, 'info', 'EDITED');
  };

  const onComplete = (todoName) => {
    const newStoredTodos = filterTodosData('todos', todoName);
    setTodos(newStoredTodos);

    setCompletedTodos((prevCompletedTodos) => {
      return [...prevCompletedTodos, todoName];
    });
    setNotificationData(todoName, 'success', 'COMPLETED');
  };

  return (
    <>
      {notification.visibility && (
        <NotificationBar
          notificationType={notification.type}
          notificationMessage={notification.message}
        />
      )}

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
            You have no tasks to do...
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
    </>
  );
}

export default App;
