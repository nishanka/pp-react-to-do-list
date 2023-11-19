import React from 'react';

const ToDoCount = ({ count }) => {
  return (
    <div className='summary'>
      <div className='alert alert-info text-center fw-bold' role='alert'>
        {count} tasks left
      </div>
    </div>
  );
};

export default ToDoCount;
