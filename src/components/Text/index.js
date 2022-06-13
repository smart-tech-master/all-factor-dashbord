import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Text.scss';

const Text = ({
  size,
  fontWeight,
  color,
  tag,
  display,
  align,
  marginBottom,
  padding,
  className,
  children,
}) => {
  const classes = classNames(
    'c-text',
    {
      [`c-text--font-weight-${fontWeight}`]: fontWeight,
      [`c-text--color-${color}`]: color,
      [`c-text--margin-${marginBottom}`]: marginBottom,
      [`c-text--display-${display}`]: display,
      [`c-text--align-${align}`]: align,
    },
    className,
  );

  const TextTag = tag;

  return (
    <TextTag className={classes} style={{ fontSize: size, padding: padding }}>
      {children}
    </TextTag>
  );
};

Text.propTypes = {
  size: PropTypes.string,
  fontWeight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold']),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'light',
    'gray',
    'green',
    'orange',
    'inputLabel',
  ]),
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'div',
    'span',
    'cite',
    'label',
    'legend',
  ]),
  marginBottom: PropTypes.string,
  display: PropTypes.oneOf(['block', 'inline']),
  align: PropTypes.oneOf(['start', 'center', 'end', 'fill']),
  children: PropTypes.any,
};

Text.defaultProps = {
  size: '16px',
  fontWeight: 'regular',
  color: 'default',
  tag: 'p',
  marginBottom: 'none',
  display: 'block',
};

export default Text;
