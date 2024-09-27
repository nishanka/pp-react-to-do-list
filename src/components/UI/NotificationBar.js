import React, { useContext } from 'react';

import Spinner from './Spinner';
import TodosContext from '../../store/todos-context';

const NotificationBar = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <div
      className={`notification position-fixed min-vw-100 m-0 left-0 top-0 p-2 pt-0 bg-${todosCtx.notification.type} text-white text-center fs-5 fst-italic z-3`}
    >
      <Spinner spinnerType='light' />
      <p className='m-0 fs-6'>{todosCtx.notification.message}</p>
    </div>
  );
};

export default NotificationBar;
