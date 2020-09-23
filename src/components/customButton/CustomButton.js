import React from 'react';
//import './customButton.scss';

import { CustomButtonContainer } from './customButtonStyles';

const CustomButton = ({
  children,

  ...props
}) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;
