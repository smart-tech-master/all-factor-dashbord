import React from 'react';

import './Tooltip.scss';

export default function Tooltip({ data , xRange ,  pageData, deviceData }) {
  const { point } = data;
  
  let style = {
    position: 'absolute',
    minWidth: '350px',
    padding: '30px',
    background: '#ffffff',
    border: '1px solid #dfe0eb',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
    zIndex: '102',
  };

  if(point.index > xRange / 2) {
    style.right = 0;
  }

  return (
    <div className="nivo-chart-tooltip" style={style}>
      <div className="nivo-chart-tooltip-header">
        <div className="nivo-chart-tooltip-header-title">
          {point.data.title}
        </div>
        <div className="nivo-chart-tooltip-header-content">{point.data.y} Visitors</div>
      </div>
      <hr />
      <div className="nivo-chart-tooltip-body">
        <div className="nivo-chart-tooltip-body-block">
          <div className="nivo-chart-tooltip-body-title">Top Pages</div>
          <div className="nivo-chart-tooltip-body-content">
            {pageData.map((each) => {
                return (
                  <div className="nivo-chart-tooltip-body-content-detail">
                    <div className="nivo-chart-tooltip-body-content-detail-num">{each.page_views}</div>
                    <div className="nivo-chart-tooltip-body-content-detail-text">{each.page}</div>
                  </div>
                )
            })}
          </div>
        </div>
        <div className="nivo-chart-tooltip-body-block">
          <div className="nivo-chart-tooltip-body-title">Top Sources</div>
          <div className="nivo-chart-tooltip-body-content">
            <div className="nivo-chart-tooltip-body-content-detail">
              <div className="nivo-chart-tooltip-body-content-detail-num">410</div>
              <div className="nivo-chart-tooltip-body-content-detail-text">Visitors</div>
            </div>
            <div className="nivo-chart-tooltip-body-content-detail">
              <div className="nivo-chart-tooltip-body-content-detail-num">410</div>
              <div className="nivo-chart-tooltip-body-content-detail-text">Visitors</div>
            </div>
          </div>
        </div>
        <div className="nivo-chart-tooltip-body-block">
          <div className="nivo-chart-tooltip-body-title">Device</div>
          <div className="nivo-chart-tooltip-body-content">
            {deviceData.map((each) => {
              return (
                <div className="nivo-chart-tooltip-body-content-detail">
                  <div className="nivo-chart-tooltip-body-content-detail-num">{each.device_count}</div>
                  <div className="nivo-chart-tooltip-body-content-detail-text">{each.device}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
