import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import NavBack from 'components/NavBack';
import RadioGroup from 'components/RadioGroup';
import FilterDate from 'components/FilterDate';

import AttributionRouter from './router';

export default function Attribution() {
  const history = useHistory();
  const match = useRouteMatch();
  const user = useSelector((state) => state.Feature.user);

  // for active radio button
  const [activeRoute, setActiveRoute] = React.useState(
    `${match.url}/all-pages`,
  );

  const handleRadioChange = (event, value) => {
    if (value) {
      history.push(value);
      setActiveRoute(value);
    }
  };

  // title and back path for sub pages
  const pathname = history.location.pathname;
  const [title, setTitle] = React.useState('Attribution');
  const [backPath, setBackPath] = React.useState('');

  const slugsArr = [
    '/attribution/ad-campaign',
    '/attribution/keywords',
    '/attribution/users-proceeded-to',
  ];
  const titlesArr = [
    'Attribution - Ad Campaign',
    'Attribution - Keywords',
    'Attribution - Users proceeded to',
  ];

  React.useEffect(() => {
    const slugId = slugsArr.indexOf(pathname);
    setTitle(slugId === -1 ? 'Attribution' : titlesArr[slugId]);
    setBackPath(slugId === -1 ? '' : '/attribution/all-pages');
  }, [pathname, slugsArr, titlesArr]);

  return (
    <>
      <Header title={title}>{user.name}</Header>
      <ActionsBar>
        {!backPath ? (
          <ActionsBar.Item>
            <div className="u-display-flex u-flex-align-center">
              <div>
                <RadioGroup
                  name="radio"
                  value={activeRoute}
                  onChange={handleRadioChange}
                >
                  <RadioGroup.Item
                    value={`${match.url}/all-pages`}
                    label="All"
                  />
                  <RadioGroup.Item
                    value={`${match.url}/trackable-links`}
                    label="Trackable links"
                  />
                  <RadioGroup.Item
                    value={`${match.url}/advertisements`}
                    label="Advertisements"
                  />
                </RadioGroup>
              </div>
            </div>
          </ActionsBar.Item>
        ) : (
          <NavBack path={backPath} />
        )}

        <FilterDate />
      </ActionsBar>

      <AttributionRouter />
    </>
  );
}
