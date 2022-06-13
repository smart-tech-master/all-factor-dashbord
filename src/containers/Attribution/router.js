import React from 'react';

import { Route, useRouteMatch } from 'react-router-dom';

import AttributionAllPages from './AllPages';
import AttributionTrackableLinks from './TrackableLinks';
import AttributionAdvertisements from './Advertisements';
import AttributionAdCampaign from './AdCampaign';
import AttributionKeywords from './Keywords';
import AttributionUsersProceededTo from './UsersProceededTo';

export default function AttributionRouter() {
  const match = useRouteMatch();
  return (
    <>
      <Route path={`${match.path}/all-pages`} component={AttributionAllPages} />
      <Route
        path={`${match.path}/trackable-links`}
        component={AttributionTrackableLinks}
      />
      <Route
        path={`${match.path}/advertisements`}
        component={AttributionAdvertisements}
      />
      <Route
        path={`${match.path}/ad-campaign`}
        component={AttributionAdCampaign}
      />
      <Route path={`${match.path}/keywords`} component={AttributionKeywords} />
      <Route
        path={`${match.path}/users-proceeded-to`}
        component={AttributionUsersProceededTo}
      />
    </>
  );
}
