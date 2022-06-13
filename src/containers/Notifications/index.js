import React from 'react';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';

import Pagination from 'components/Pagination';
import Container from 'components/Container';
import Header from 'components/Header';

import './Notifications.scss';

export default function Notifications() {
  const user = useSelector((state) => state.Feature.user);

  const notificationsData = [
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
    <div className="notifications-page">
      <Header title="Notifications">{user.name}</Header>
      <Container type="medium">
        <div className="box-container">
          {notificationsData ? (
            notificationsData.map((alert, index) => {
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
                  {notificationsData.length - 1 !== index && <hr />}
                </div>
              );
            })
          ) : (
            <div className="no-alerts">No alerts</div>
          )}
        </div>
        <Pagination current={1} total={55} pageSize={10} onChange={null} />
      </Container>
    </div>
  );
}
