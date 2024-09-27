import { useContext, useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MainContent from './components/UI/MainContent';
import Header from './components/Header';
import Todos from './components/Todos';
import CompletedTodos from './components/CompletedTodos';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';
import NotificationBar from './components/UI/NotificationBar';

import FormContext from './store/form-context';
import TodosContext from './store/todos-context';

function App() {
  const formCtx = useContext(FormContext);
  const todosCtx = useContext(TodosContext);

  const isAdding = formCtx.formInfo.isAdding;
  const isEditing = formCtx.formInfo.isEditing;
  const notification = todosCtx.notification;

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!notification.message.trim().length > 0) return;

    if (notification.message.trim().length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }

    return;
  }, [notification.message]);

  return (
    <>
      {showNotification && <NotificationBar />}

      <MainContent>
        <Header onClickAddTodo={formCtx.openNewTodoForm} />

        {isAdding && <NewTodo />}

        {isEditing && <EditTodo />}

        {!todosCtx.todos.length > 0 && (
          <div className='alert alert-danger text-center fw-bold' role='alert'>
            You have no tasks to do...
          </div>
        )}

        {todosCtx.todos.length > 0 && <Todos />}

        {todosCtx.completedTodos.length > 0 && <CompletedTodos />}
      </MainContent>
    </>
  );
}

export default App;
