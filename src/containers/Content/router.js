import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import ContentBlog from './Blog';
import ContentAllPages from './AllPages';
import ContentKeywords from './Keywords';
import ContentSources from './Sources';
import ContentActionConversions from './ActionConversions';

export default function ContentRouter() {
  const match = useRouteMatch();
  return (
    <>
      <Route path={`${match.path}`} component={ContentBlog} />
      <Route path={`${match.path}/all-pages`} component={ContentAllPages} />
      <Route path={`${match.path}/keywords`} component={ContentKeywords} />
      <Route path={`${match.path}/sources`} component={ContentSources} />
      <Route
        path={`${match.path}/action-conversions`}
        component={ContentActionConversions}
      />
    </>
  );
}
