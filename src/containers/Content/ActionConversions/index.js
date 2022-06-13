import React from 'react';

import MyTable from 'components/MyTable';
import Progress from 'components/Progress';

export default function ContentActionConversions() {
  const data = React.useMemo(
    () => [
      {
        actionName: 'Get Demo',
        label: 'Product Long Name',
        conversions: '25',
        users: '24',
        conversionRate: '36',
      },
      {
        actionName: 'Get Demo',
        label: 'Product Long Name',
        conversions: '25',
        users: '24',
        conversionRate: '36',
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
        Header: 'Action Name',
        accessor: 'actionName',
        width: 300,
        className: 'u-text-align-left',
      },
      {
        Header: 'Label',
        accessor: 'label',
        width: 350,
        className: 'u-text-align-left',
      },
      {
        Header: 'Conversions',
        accessor: 'conversions',
      },
      {
        Header: 'Users',
        accessor: 'users',
        width: 100,
      },
      {
        Header: 'Conversion rate',
        accessor: 'conversionRate',
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
