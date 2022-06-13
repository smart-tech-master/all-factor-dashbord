import React from 'react';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import FilterDate from 'components/FilterDate';
import NavBack from 'components/NavBack';

import TrackableLinksTable from './TrackableLinksTable';

const TrackableLinks = () => {
  const user = useSelector((state) => state.Feature.user);
  return (
    <>
      <Header title="Link Builder">{user.name}</Header>
      <ActionsBar>
        <NavBack path="/link-builder" />
        <FilterDate />
      </ActionsBar>

      <TrackableLinksTable />
    </>
  );
};
export default TrackableLinks;
