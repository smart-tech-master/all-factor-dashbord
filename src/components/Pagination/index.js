import React from 'react';
import { default as PaginationBase } from 'rc-pagination';
import './Pagination.scss';

const Pagination = ({ ...props }) => (
  <PaginationBase
    className="c-pagination"
    {...props}
  />
);

export default Pagination;
