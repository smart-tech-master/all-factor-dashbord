import React from 'react';

import MyTable from 'components/MyTable';

export default function ContentSources() {
  const data = React.useMemo(
    () => [
      {
        source: 'Entered directly',
        users: '164',
      },
      {
        source: 'Entered directly',
        users: '164',
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
        Header: 'Source',
        accessor: 'source',
        width: 400,
        className: 'u-text-align-left',
      },
      {
        Header: 'Users',
        accessor: 'users',
        width: 500,
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
