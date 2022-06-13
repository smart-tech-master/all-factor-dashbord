import React from 'react';
import Select from 'react-select';

import './Input.scss';

function Input({
  label,
  labelColor,
  labelFontWeight,
  type,
  placeholder,
  id,
  width,
  name,
  inputRef,
  children,
  ...props
}) {
  return (
    <div style={{ width }}>
      {(type === 'text' || type === 'password') && (
        <div className="input-with--label">
          {label && (
            <label
              htmlFor={id}
              className={`c-text--color-${labelColor} c-text--font-weight-${labelFontWeight}`}
            >
              {label}
            </label>
          )}
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            ref={inputRef}
            {...props}
          />
        </div>
      )}

      {(type === 'radio' || type === 'checkbox') && (
        <div className="input-radio">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            ref={inputRef}
            {...props}
          />
          {children ? (
            <label htmlFor={id}>{children}</label>
          ) : (
            <label htmlFor={id}>{label}</label>
          )}
        </div>
      )}

      {type === 'select' && (
        <div className="input-with--label">
          {label && (
            <label htmlFor={id} className={`c-text--color-${labelColor}`}>
              {label}
            </label>
          )}
          <Select
            className="input-select"
            components={{
              IndicatorSeparator: () => null,
            }}
            {...props}
          />
        </div>
      )}
    </div>
  );
}

export default Input;
