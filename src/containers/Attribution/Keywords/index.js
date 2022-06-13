import React from 'react';

import MyTable from 'components/MyTable';

export default function AttributionKeywords() {
  const data = React.useMemo(
    () => [
      {
        keywords: '643',
        users: '164',
      },
      {
        keywords: '643',
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
        Header: 'Keywords',
        accessor: 'keywords',
        width: 400,
        className: 'u-text-align-left',
      },
      {
        Header: 'Users',
        accessor: 'users',
        width: 500,
        className: 'u-text-align-left',
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
