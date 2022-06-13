import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Text from '../Text';
import './Progress.scss';

const Progress = ({ value, className, ...restProps }) => {
  const classes = classNames('c-progress', className);

  return (
    <div className={classes} {...restProps}>
      <Text
        size="14px"
        fontWeight="medium"
        color={value >= 10 ? 'green' : 'orange'}
      >
        {value}%
      </Text>
      <div className="c-progress__bar">
        <div
          className={classNames('c-progress__bar-value', {
            'c-progress__bar-value-low': value < 10,
          })}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

Progress.propTypes = {
  /**
   * Progress value in %, from 0 to 100
   */
  // value: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Progress.defaultProps = {
  className: '',
};

export default Progress;
