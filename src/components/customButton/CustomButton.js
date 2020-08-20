import React from 'react';
import './customButton.scss';
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className='custom-button' {...otherProps}>
      {children}
    </div>
  );
};

export default CustomButton;
