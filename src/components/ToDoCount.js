import React from 'react';

const ToDoCount = ({ alertType, count, info }) => {
  return (
    <div className='summary'>
      <div
        className={`alert alert-${alertType} text-center fw-bold`}
        role='alert'
      >
        {count} {info}
      </div>
    </div>
  );
};

export default ToDoCount;
