import React from 'react';

import Spinner from './Spinner';

const NotificationBar = ({ notificationType, notificationMessage }) => {
  return (
    <div
      className={`notification position-fixed min-vw-100 m-0 left-0 top-0 p-2 pt-0 bg-${notificationType} text-white text-center fs-5 fst-italic z-3`}
    >
      <Spinner spinnerType='light' />
      <p className='m-0 fs-6'>{notificationMessage}</p>
    </div>
  );
};

export default NotificationBar;
