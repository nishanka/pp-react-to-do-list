import React from 'react';

const Spinner = ({ spinnerType }) => {
  return (
    <div
      className={`spinner-border spinner-border-sm text-${spinnerType}`}
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Spinner;
