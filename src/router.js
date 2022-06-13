import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Account from './containers/Account';
import Actions from './containers/Actions';
import Attribution from './containers/Attribution';
import AuthBase from './containers/AuthBase';
import Content from './containers/Content';
import LinkBuilder from './containers/LinkBuilder';
import Logout from './containers/AuthBase/Logout';
import Notifications from './containers/Notifications';
import Overview from './containers/Overview';
import Settings from './containers/Settings';
import TrackableLinks from './containers/LinkBuilder/TrackableLinks';

import Authorized from './components/Authorized';
import Layout from './components/Layout';
import Nav from './components/Nav';

export default function Router({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/auth/logout">
          <Logout />
        </Route>
        <Route path="/auth">
          <AuthBase />
        </Route>
      </Switch>
      <Authorized>
        <Layout>
          <Layout.Sidebar>
            <Nav />
          </Layout.Sidebar>
          <Layout.Main>
            <Switch>
              <Route path="/actions">
                <Actions />
              </Route>
              <Route path="/content">
                <Content />
              </Route>
              <Route path="/attribution">
                <Attribution />
              </Route>
              <Route exact path="/link-builder">
                <LinkBuilder />
              </Route>
              <Route path="/link-builder/trackable-links">
                <TrackableLinks />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/notifications">
                <Notifications />
              </Route>
              <Route path="/">
                <Overview />
              </Route>
            </Switch>
            <ToastContainer />
          </Layout.Main>
        </Layout>
      </Authorized>
    </ConnectedRouter>
  );
}
