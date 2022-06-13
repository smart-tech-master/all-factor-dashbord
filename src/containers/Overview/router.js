import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import Home from './Home';
import OverviewPages from './OverviewPages';
import OverviewSources from './OverviewSources';
import OverviewDevices from './OverviewDevices';
import OverviewGeoCountry from './OverviewGeoCountry';
import OverviewGeoCity from './OverviewGeoCity';

export default function OverviewRouter() {
  const match = useRouteMatch();
  const { path } = match;

  const routes = [
    { path: `overview/pages`, component: OverviewPages },
    { path: `overview/sources`, component: OverviewSources },
    { path: `overview/devices`, component: OverviewDevices },
    { path: `overview/geo-locations/country`, component: OverviewGeoCountry },
    { path: `overview/geo-locations/city`, component: OverviewGeoCity },
    { path: ``, component: Home },
  ];

  return (
    <div>
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
    </div>
  );
}
