import React from 'react';

const Header = ({ onClickAddTodo }) => {
  return (
    <div className='add-todo mb-3 d-flex justify-content-between align-items-center'>
      <h3 className='text-center text-primary-emphasis fw-bold m-0'>
        ToDo List
      </h3>
      <button className='btn btn-primary' onClick={onClickAddTodo}>
        + Add Todo
      </button>
    </div>
  );
};

export default Header;
