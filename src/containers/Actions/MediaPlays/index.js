import React from 'react';
import Progress from 'components/Progress';
import MyTable from 'components/MyTable';

const ActionsMediaPlays = () => {
  const data = React.useMemo(
    () => [
      {
        number: '1',
        page: 'Android',
        media: 'Chrome',
        label: 'Label',
        users: '578',
        plays: '00:07:20',
        conversionRate: '4',
        avgListenThrough: 34,
      },
      {
        number: '2',
        page: 'Android',
        media: 'Chrome',
        label: 'Label',
        users: '578',
        plays: '00:07:20',
        conversionRate: '44',
        avgListenThrough: 34,
      },
      {
        number: '',
        page: '',
        media: 'Chrome',
        label: 'Label',
        users: '578',
        plays: '00:07:20',
        conversionRate: '44',
        avgListenThrough: 34,
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'number',
        style: {
          width: '30px',
        },
        className: 'table_cell-border',
      },
      {
        Header: 'Page',
        accessor: 'page',
        style: {
          width: 500,
        },
        className: 'table_cell-border u-text-align-left',
      },
      {
        Header: 'Media',
        accessor: 'media',
        className: 'u-text-align-left',
      },
      {
        Header: 'Label',
        accessor: 'label',
        className: 'u-text-align-left',
      },
      {
        Header: 'Users',
        accessor: 'users',
        style: {
          width: 100,
        },
      },
      {
        Header: 'Plays',
        accessor: 'plays',
        style: {
          width: 100,
        },
      },
      {
        Header: 'Conversion rate',
        accessor: 'conversionRate',
        style: {
          width: 150,
        },
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
      {
        Header: 'Avg. listen Through',
        accessor: 'avgListenThrough',
        style: {
          width: 150,
        },
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
    ],
    [],
  );

  return (
    <>
      <MyTable title="Media Plays" data={data} columns={columns} />
    </>
  );
};

export default ActionsMediaPlays;
