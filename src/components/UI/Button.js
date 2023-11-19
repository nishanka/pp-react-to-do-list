import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.btnClasses} btn-sm align-self-center`}>
      {props.children}
    </button>
  );
};

export default Button;
