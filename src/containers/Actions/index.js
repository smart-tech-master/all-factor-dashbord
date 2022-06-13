import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ActionsBar from 'components/ActionsBar';
import FilterDate from 'components/FilterDate';
import Header from 'components/Header';
import NavBack from 'components/NavBack';
import RadioGroup from 'components/RadioGroup';

import ActionsRouter from './router';

export default function Actions() {
  const history = useHistory();
  const match = useRouteMatch();
  const user = useSelector((state) => state.Feature.user);

  // for active radio button
  const [activeRoute, setActiveRoute] = React.useState(`${match.url}/forms`);

  const handleRadioChange = (event, value) => {
    if (value) {
      history.push(value);
      setActiveRoute(value);
    }
  };

  // title and back path for sub pages
  const pathname = history.location.pathname;
  const [title, setTitle] = React.useState('Actions');
  const [backPath, setBackPath] = React.useState('');

  const slugsArr = [
    '/actions/forms/returning-users',
    '/actions/forms/sources',
    '/actions/forms/previous-pages',
    '/actions/forms/users',
  ];
  const titlesArr = [
    'Actions - Form Details / Facebook / Returning Users',
    'Actions - Forms',
    'Actions - Form Details',
    'Actions - Form Details / Facebook / Users',
  ];

  React.useEffect(() => {
    const slugId = slugsArr.indexOf(pathname);
    setTitle(slugId === -1 ? 'Actions' : titlesArr[slugId]);
    setBackPath(slugId === -1 ? '' : '/actions/forms');
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
                  <RadioGroup.Item value={`${match.url}/forms`} label="Forms" />
                  <RadioGroup.Item
                    value={`${match.url}/media-plays`}
                    label="Media Plays"
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

      <ActionsRouter />
    </>
  );
}
