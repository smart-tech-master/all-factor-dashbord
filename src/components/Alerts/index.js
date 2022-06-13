import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';

import './Alerts.scss';

export default function Alerts() {
  const alertData = [
    {
      text:
        'Conversions from Download Marketing Template landing page increased today by 28%',
      datetime: 'Jan 12, 2020 · 13:00 PM',
    },
    {
      text:
        'Conversions from Download Marketing Template landing page increased today by 28%',
      datetime: 'Jan 12, 2020 · 13:00 PM',
    },
    {
      text:
        'Conversions from Download Marketing Template landing page increased today by 28%',
      datetime: 'Jan 12, 2020 · 13:00 PM',
    },
  ];
  return (
    <div className="alerts-box">
      <div className="alerts-box-header">
        <div className="alerts-box-header-alerts">Notifications</div>
        <Link to="/notifications">
          <div className="alerts-box-header-view-all">View All</div>
        </Link>
      </div>
      <hr />
      <div className="alerts-box-content">
        {alertData ? (
          alertData.map((alert, index) => {
            return (
              <div key={index}>
                <div className="alerts-box-content-item">
                  <div className="alerts-box-content-left">
                    <div className="alerts-box-content-left-text">
                      {alert.text}
                    </div>
                    <div className="alerts-box-content-left-datetime">
                      {alert.datetime}
                    </div>
                  </div>
                  <div className="alerts-box-content-right">
                    <IconContext.Provider
                      value={{
                        color: '#5E6375',
                        size: '20px',
                        className: 'global-class-name',
                      }}
                    >
                      <RiArrowRightSLine />
                    </IconContext.Provider>
                  </div>
                </div>
                {alertData.length - 1 !== index && <hr />}
              </div>
            );
          })
        ) : (
          <div className="no-alerts">No alerts</div>
        )}
      </div>
    </div>
  );
}
