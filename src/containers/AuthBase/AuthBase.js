import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Login from './Login';
import ResetPassword from './ResetPassword';
import TokenStorage from 'utils/TokenStorage';

import Logo from 'assets/images/Logo';
import './AuthBase.scss';

const AuthBase = () => {
  if (TokenStorage.isAuthenticated()) return <Redirect to="/" />;
  return (
    <div className="dashboard-base">
      <div className="dashboard-content">
        <div className="container">
          <Logo className="logo" />
          <div className="auth-base">
            <Switch>
              <Redirect exact from="/auth" to="/auth/login" />
              <Route exact path="/auth/login" component={Login} />
              <Route
                exact
                path="/auth/reset-password"
                component={ResetPassword}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBase;
