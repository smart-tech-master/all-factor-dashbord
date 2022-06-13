import React from 'react';
import Text from '../Text';
import './StatisticsCard.scss';

export default function StatisticsCard({ title, value }) {
  return (
    <>
      <div className="chart-right-card">
        <div className="chart-right-card-title">{title}</div>
        <div className="chart-right-card-value">
          <Text size="22px" color="primary" fontWeight="medium">
            {value}
          </Text>
        </div>
      </div>
    </>
  );
}
