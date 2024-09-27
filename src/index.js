import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodosContextProvider from './store/TodosProvider';
import FormContextProvider from './store/FormsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodosContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </TodosContextProvider>
  </React.StrictMode>
);
