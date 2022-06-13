import React from 'react';
import PropTypes from 'prop-types';
import './ActionsBar.scss';

const ActionsBar = ({
  background = true,
  children,
  marginBottom = true,
  className,
}) => (
  <section
    className={`c-actions-bar ${className} ${
      !background && 'c-actions-bar_no_background'
    } ${!marginBottom && 'c-actions-bar_no_bottom_margin'}`}
  >
    {children}
  </section>
);

ActionsBar.propTypes = {
  children: PropTypes.any,
};

const ActionsBarItem = ({ children, className }) => (
  <section className={`c-actions-bar__item ${className}`}>{children}</section>
);

ActionsBarItem.propTypes = {
  children: PropTypes.any,
};

ActionsBar.Item = ActionsBarItem;

export default ActionsBar;
