import React from 'react';

import './MyText.scss';

export default function MyText({ type = 'default', children, ...props }) {
  return (
    <div className={`my_text--${type}`} {...props}>
      {children}
    </div>
  );
}
