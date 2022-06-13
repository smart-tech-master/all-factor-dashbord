import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ActionsBar from 'components/ActionsBar';
import FilterDate from 'components/FilterDate';
import Header from 'components/Header';
import NavBack from 'components/NavBack';

import OverviewRouter from './router';

const Overview = () => {
  const location = useLocation();
  const user = useSelector((state) => state.Feature.user);

  // title and back path for sub pages
  const { pathname } = location;
  const [title, setTitle] = React.useState('Overview');
  const [backPath, setBackPath] = React.useState('');

  const slugsArr = [
    '/overview/pages',
    '/overview/sources',
    '/overview/devices',
    '/overview/geo-locations/country',
    '/overview/geo-locations/city',
  ];
  const titlesArr = [
    'Overview - Pages',
    'Overview - Sources',
    'Overview - Devices',
    'Overview - Geo Locations',
    'Overview - Geo Locations - Country -  City',
  ];

  React.useEffect(() => {
    if (pathname === '/') {
      setTitle('Overview');
      setBackPath('');
      return;
    }
    const slugId = slugsArr.indexOf(pathname);
    setTitle(slugId === -1 ? 'Overview' : titlesArr[slugId]);
    setBackPath(slugId === -1 ? '' : '/');
  }, [pathname, slugsArr, titlesArr]);

  return (
    <>
      <Header title={title}>{user.name}</Header>
      {backPath && (
        <ActionsBar>
          <NavBack path={backPath} />
          <FilterDate />
        </ActionsBar>
      )}
      <OverviewRouter />
    </>
  );
};

export default Overview;
