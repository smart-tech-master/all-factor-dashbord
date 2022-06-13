import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';
import NavBack from 'components/NavBack';

import AccountRouter from './router';

export default function Account() {
  const history = useHistory();
  const match = useRouteMatch();
  const pathname = history.location.pathname;
  const user = useSelector((state) => state.Feature.user);

  const [activeRoute, setActiveRoute] = React.useState(`${match.url}/users`);

  const handleRadioChange = (event, value) => {
    if (value) {
      history.push(value);
      setActiveRoute(value);
    }
  };
  return (
    <>
      <Header title="Account">{user.name}</Header>
      <ActionsBar>
        {pathname !== '/account/profile' ? (
          <ActionsBar.Item>
            <div className="u-display-flex u-flex-align-center">
              <div>
                <RadioGroup
                  name="radio"
                  value={activeRoute}
                  onChange={handleRadioChange}
                >
                  <RadioGroup.Item value={`${match.url}/users`} label="Users" />
                  <RadioGroup.Item
                    value={`${match.url}/subscriptions`}
                    label="Subscriptions"
                  />
                  <RadioGroup.Item
                    value={`${match.url}/invoices`}
                    label="Invoices"
                  />
                </RadioGroup>
              </div>
            </div>
          </ActionsBar.Item>
        ) : (
          <NavBack path="/account/users" />
        )}
        <div></div>
      </ActionsBar>

      <AccountRouter />
    </>
  );
}
