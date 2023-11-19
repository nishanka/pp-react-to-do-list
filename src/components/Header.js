import React from 'react';

const Header = ({ onClickAddTodo }) => {
  return (
    <div className='add-todo mb-4 d-flex justify-content-end'>
      <button className='btn btn-primary' onClick={onClickAddTodo}>
        + Add Todo
      </button>
    </div>
  );
};

export default Header;
