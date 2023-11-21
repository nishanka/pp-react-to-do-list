import React from 'react';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`btn ${props.btnClasses} align-self-center`}
    >
      {props.children}
    </button>
  );
};

export default Button;
