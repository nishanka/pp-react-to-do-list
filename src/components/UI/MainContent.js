import React from 'react';
import classes from './MainContent.module.css';

const MainContent = ({ children }) => {
  return (
    <div className={classes['main-content']}>
      <div className='container p-4 bg-white bg-opacity-50 rounded'>
        {children}
      </div>
    </div>
  );
};

export default MainContent;
