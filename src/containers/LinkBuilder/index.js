import React from 'react';
import { useSelector } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import FilterDate from 'components/FilterDate';

import LinksTable from './LinksTable';

const LinkBuilder = () => {
  const user = useSelector((state) => state.Feature.user);
  return (
    <>
      <Header title="Link Builder">{user.name}</Header>
      <ActionsBar>
        <div></div>
        <FilterDate />
      </ActionsBar>

      <LinksTable />
    </>
  );
};

export default LinkBuilder;
