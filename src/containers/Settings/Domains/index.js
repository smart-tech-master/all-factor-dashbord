import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';

export default function SettingsDomains() {
  const onAddNewWebsite = (e) => {
    // redux dispatch goes here
  };

  const data = React.useMemo(
    () => [
      {
        destination: 'https://somthing.com',
        type: 'Owner',
        action: 'Delete',
      },
      {
        destination: 'https://somthing.com',
        type: 'User',
        action: 'Delete',
      },
      {
        destination: 'https://somthing.com',
        type: 'User',
        action: 'Delete',
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        id: 'row',
        style: {
          width: '30px',
        },
        Cell: (data) => {
          return <div>{data.row.index + 1}</div>;
        },
      },
      {
        Header: 'Destination URL',
        accessor: 'destination',
        className: 'u-text-align-left',
        width: 600,
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: '',
        accessor: 'action',
        width: 100,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    [],
  );
  return (
    <MyTable
      title="Domains"
      data={data}
      columns={columns}
      action="Add New Website"
      onActionClick={onAddNewWebsite}
    />
  );
}
