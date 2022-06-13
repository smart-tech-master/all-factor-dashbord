import React from 'react';
import { Radio as RadioBase, RadioGroup as RadioGroupBase } from 'react-icheck';

import './RadioGroup.scss';

const RadioGroup = ({ children, ...props }) => {
  return (
    <>
      <RadioGroupBase {...props} className="c-radio-group">
        {children}
      </RadioGroupBase>
    </>
  );
};

const Radio = ({ props }) => {
  return <RadioBase {...props} />;
};

RadioGroup.Item = Radio;

export default RadioGroup;
