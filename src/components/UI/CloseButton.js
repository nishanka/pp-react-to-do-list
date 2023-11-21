import React from 'react';

import classes from './CloseButton.module.css';

const CloseButton = ({ onClick }) => {
  return (
    <button
      type='button'
      className={`btn-close ${classes['close']}`}
      data-bs-dismiss='modal'
      aria-label='Close'
      onClick={onClick}
    ></button>
  );
};

export default CloseButton;
