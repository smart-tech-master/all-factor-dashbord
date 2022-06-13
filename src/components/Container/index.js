import React from 'react';

import './Container.scss';

export default function Container({ type, children }) {
  return <div className={`container container-${type}`}>{children}</div>;
}
