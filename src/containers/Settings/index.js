import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';

import SettingsRouter from './router';

export default function Settings() {
  const history = useHistory();
  const match = useRouteMatch();
  const user = useSelector((state) => state.Feature.user);

  const [activeRoute, setActiveRoute] = React.useState(`${match.url}/domains`);

  const handleRadioChange = (event, value) => {
    if (value) {
      history.push(value);
      setActiveRoute(value);
    }
  };
  return (
    <>
      <Header title="Settings">{user.name}</Header>
      <ActionsBar>
        <ActionsBar.Item>
          <div className="u-display-flex u-flex-align-center">
            <div>
              <RadioGroup
                name="radio"
                value={activeRoute}
                onChange={handleRadioChange}
              >
                <RadioGroup.Item
                  value={`${match.url}/domains`}
                  label="Domains"
                />
                <RadioGroup.Item
                  value={`${match.url}/report-alerts`}
                  label="Report Alerts"
                />
                <RadioGroup.Item
                  value={`${match.url}/configurations`}
                  label="Configurations"
                />
              </RadioGroup>
            </div>
          </div>
        </ActionsBar.Item>

        <div></div>
      </ActionsBar>

      <SettingsRouter />
    </>
  );
}
