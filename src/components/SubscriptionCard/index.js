import React from 'react';

import Button from '../Button';

import './SubscriptionCard.scss';

export default function SubscriptionCard({
  plan,
  type = 'mo',
  price,
  button,
  buttonStyle,
  children,
}) {
  return (
    <div className="box-container subscription-card">
      <div className="subscription-card-plan u-margin-bottom-medium">
        {plan}
      </div>
      <div className="u-display-flex u-flex-align-end">
        <div className="subscription-card-price">{price} </div>
        {type !== 'support' && (
          <div className="subscription-card-type">/{type}</div>
        )}
      </div>
      <div className="subscription-card-content u-padding-top-large u-padding-bottom-large">
        {children}
      </div>
      <div className="subscription-card-button">
        <Button
          className={buttonStyle}
          style={{ width: '100%', padding: '20px 36px' }}
        >
          {button}
        </Button>
      </div>
    </div>
  );
}
