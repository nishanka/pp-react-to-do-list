import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={`${classes.backdrop} z-2`} onClick={props.onClose}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`${classes.modal} bg-white rounded p-4 col-10 col-md-6 col-sm-8 z-2`}
    >
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
