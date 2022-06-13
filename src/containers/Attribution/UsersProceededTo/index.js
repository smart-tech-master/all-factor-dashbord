import React from 'react';

import MyTable from 'components/MyTable';

export default function AttributionUsersProceededTo() {
  const data = React.useMemo(
    () => [
      {
        proceeded: '643',
        newUsers: '164',
        returningUsers: '25.5%',
      },
      {
        proceeded: '643',
        newUsers: '164',
        returningUsers: '25.5%',
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
        Header: 'Users proceeded to',
        accessor: 'proceeded',
        width: 400,
        className: 'u-text-align-left',
      },
      {
        Header: 'New Users',
        accessor: 'newUsers',
      },
      {
        Header: 'Returning Users',
        accessor: 'returningUsers',
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
