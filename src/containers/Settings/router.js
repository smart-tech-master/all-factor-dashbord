import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import SettingsDomains from './Domains';
import SettingsReportAlerts from './ReportAlerts';
import SettingsConfigurations from './Configurations';

export default function SettingsRouter() {
  const match = useRouteMatch();
  return (
    <>
      <Route path={`${match.path}/domains`} component={SettingsDomains} />
      <Route
        path={`${match.path}/report-alerts`}
        component={SettingsReportAlerts}
      />
      <Route
        path={`${match.path}/configurations`}
        component={SettingsConfigurations}
      />
    </>
  );
}
