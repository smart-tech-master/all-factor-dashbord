import React from 'react';
import Text from '../Text';

import './Card.scss';

export default function Card({ title, high = 0, low = 0 }) {
  return (
    <div className="card">
      <div className="card-title">
        <Text size="22px" color="primary" fontWeight="medium">
          {title}
        </Text>
      </div>
      <div className="card-row">
        <div className="card-row-name">High readership</div>
        <div className="card-row-high card-row-value">{high}</div>
      </div>
      <hr />
      <div className="card-row">
        <div className="card-row-name">Low readership</div>
        <div className="card-row-low card-row-value">{low}</div>
      </div>
    </div>
  );
}
