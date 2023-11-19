import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainContent from './components/UI/MainContent';
import Header from './components/Header';
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

function App() {
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false);

  const openNewTodoForm = () => {
    setIsAddingNewTodo(true);
  };

  const closeNewTodoForm = () => {
    setIsAddingNewTodo(false);
  };

  return (
    <MainContent>
      <Header onClickAddTodo={openNewTodoForm} />
      {isAddingNewTodo && <NewTodo onCancel={closeNewTodoForm} />}
      <Todos />
    </MainContent>
  );
}

export default App;
