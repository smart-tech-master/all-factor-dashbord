import React from 'react';
import { IconContext } from 'react-icons';
import { ImLink } from 'react-icons/im';
import { RiShareBoxFill } from 'react-icons/ri';

import './Button.scss';

export default function Button({ className, iconType, children, ...props }) {
  let hasIcon = 'no-icon';
  if (children === 'Connect Search Console' || children === 'Export Emails') {
    hasIcon = 'has-icon';
  }

  return (
    <div className="c-button">
      <button className={`${className} btn btn-default ${hasIcon}`} {...props}>
        {children === 'Connect Search Console' && (
          <IconContext.Provider
            value={{
              color: '#FFFFFF',
              size: '18px',
              className: 'global-class-name',
            }}
          >
            <ImLink />
          </IconContext.Provider>
        )}
        {children === 'Export Emails' && (
          <IconContext.Provider
            value={{
              color: '#FFFFFF',
              size: '18px',
              className: 'global-class-name',
            }}
          >
            <RiShareBoxFill />
          </IconContext.Provider>
        )}
        <span>{children}</span>
      </button>
    </div>
  );
}
