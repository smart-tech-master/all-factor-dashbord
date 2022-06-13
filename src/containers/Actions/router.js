import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import ActionsForms from './Forms';
import AFPreviousPages from './Forms/AFPreviousPages';
import AFReturningUsers from './Forms/AFReturningUsers';
import AFSources from './Forms/AFSources';
import AFUsers from './Forms/AFUsers';
import ActionsLinks from './Links';
import ActionsMediaPlays from './MediaPlays';

export default function ActionsRouter() {
  const match = useRouteMatch();
  const { path } = match;
  const routes = [
    { path: `/forms`, exact: true, component: ActionsForms },
    { path: `/forms/returning-users`, component: AFReturningUsers },
    { path: `/forms/sources`, component: AFSources },
    { path: `/forms/previous-pages`, component: AFPreviousPages },
    { path: `/forms/users`, component: AFUsers },
    { path: `/links`, component: ActionsLinks },
    { path: `/media-plays`, component: ActionsMediaPlays },
  ];

  return (
    <>
      {routes.map((route, index) => {
        const { exact } = route;
        return (
          <Route
            key={index}
            exact={exact === false ? false : true}
            path={`${path}${route.path}`}
            component={route.component}
          />
        );
      })}
    </>
  );
}
