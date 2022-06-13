import React from 'react';
import './ValidationError.scss';

export default function ValidationError({ children }) {
  return <div className="error"><span>{children}</span></div>;
}
