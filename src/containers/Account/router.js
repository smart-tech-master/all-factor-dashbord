import React from 'react';

import { Route, useRouteMatch } from 'react-router-dom';

import AccountUsers from './Users';
import AccountInvoices from './Invoices';
import AccountSubscriptions from './Subscriptions';
import AccountProfile from './Profile';

export default function AccountRouter() {
  const match = useRouteMatch();
  return (
    <>
      <Route path={`${match.path}/users`} component={AccountUsers} />
      <Route path={`${match.path}/invoices`} component={AccountInvoices} />
      <Route
        path={`${match.path}/subscriptions`}
        component={AccountSubscriptions}
      />
      <Route path={`${match.path}/profile`} component={AccountProfile} />
    </>
  );
}
