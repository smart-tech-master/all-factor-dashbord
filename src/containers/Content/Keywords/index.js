import React from 'react';

import MyTable from 'components/MyTable';

export default function ContentKeywords() {
  const data = React.useMemo(
    () => [
      {
        keywords: '643',
        position: '164',
        impressions: '25.5%',
        ctr: '24',
        clicks: '6',
      },
      {
        keywords: '643',
        position: '164',
        impressions: '25.5%',
        ctr: '26',
        clicks: '6',
      },
      {
        keywords: '643',
        position: '164',
        impressions: '25.5%',
        ctr: '24',
        clicks: '6',
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
        Header: 'Position',
        accessor: 'position',
        width: 80,
      },
      {
        Header: 'Impressions',
        accessor: 'impressions',
        width: 80,
      },
      {
        Header: 'CTR',
        accessor: 'ctr',
        width: 80,
      },
      {
        Header: 'Clicks',
        accessor: 'clicks',
        width: 80,
      },
    ],
    [],
  );
  return (
    <MyTable title="Silicon Valley Bank: Home" data={data} columns={columns} />
  );
}
