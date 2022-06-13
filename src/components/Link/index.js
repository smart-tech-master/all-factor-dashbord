import React from 'react';
import { Link as BaseLink } from 'react-router-dom';

import './Link.scss';

const Link = ({ to, type = 'view-more', children }) => (
  <BaseLink to={to} className={`c-link-${type}`}>
    {children}
  </BaseLink>
);

export default Link;
