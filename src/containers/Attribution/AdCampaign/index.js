import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';

export default function AttributionAdCampaign() {
  const data = React.useMemo(
    () => [
      {
        page: 'https://xyz.com',
        users: '33',
        device: 'Desktop',
        cost: '$643',
        conversion: '164',
        conversionRate: '25.5',
        cpa: '$24',
        keywords: '6',
      },
      {
        page: 'https://xyz.com',
        users: '33',
        device: 'Desktop',
        cost: '$643',
        conversion: '164',
        conversionRate: '25.5',
        cpa: '$24',
        keywords: '6',
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
        Header: 'Page',
        accessor: 'page',
        width: 400,
        className: 'u-text-align-left',
      },
      {
        Header: 'Users',
        accessor: 'users',
        width: 80,
      },
      {
        Header: 'Device',
        accessor: 'device',
        width: 100,
      },
      {
        Header: 'Cost',
        accessor: 'cost',
        width: 80,
      },
      {
        Header: 'Conversion',
        accessor: 'conversion',
        width: 100,
      },
      {
        Header: 'Conversion Rate',
        accessor: 'conversionRate',
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
      {
        Header: 'CPA',
        accessor: 'cpa',
        width: 80,
      },
      {
        Header: 'Keywords',
        accessor: 'keywords',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
