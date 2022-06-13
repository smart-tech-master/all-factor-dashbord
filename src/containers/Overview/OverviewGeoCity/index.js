import React from 'react';

import Progress from 'components/Progress';
import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Text from 'components/Text';

export default function OverviewGeoCity() {
  const geoData = React.useMemo(
    () => [
      {
        city: 'San Jose',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
      },
      {
        city: 'Santa Clara',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 55,
      },
    ],
    [],
  );

  const geoColumns = React.useMemo(
    () => [
      {
        Header: 'hidden',
        className: 'u-visible--hidden',
        columns: [
          {
            Header: '',
            id: 'row',
            accessor: 'no',
            style: {
              width: '30px',
            },
            Cell: (data) => {
              return <div>{data.row.index + 1}</div>;
            },
          },
        ],
      },

      {
        Header: ' ',
        columns: [
          {
            Header: 'City',
            accessor: 'city',
            className: 'u-text-align-left',
            Cell: (data) => {
              return <MyText type="link">{data.value}</MyText>;
            },
          },
        ],
      },

      {
        Header: 'NEW USERS',
        columns: [
          {
            Header: 'New Users',
            accessor: 'newUsers',
            width: 80,
          },
          {
            Header: 'Avg. Time on Page',
            accessor: 'avgTimeOnPage',
            width: 100,
          },
          {
            Header: 'Avg. Pages per Session',
            accessor: 'avgPagesPerSession',
            width: 100,
          },
          {
            Header: 'Avg. Readership',
            accessor: 'avgReadership',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },
        ],
      },
      {
        Header: 'RETURNING USERS',
        columns: [
          {
            Header: 'Returning Users',
            accessor: 'returningUsers',
            width: 80,
          },
          {
            Header: 'Page Views',
            accessor: 'returningPageViews',
          },
          {
            Header: 'Avg. Time on Page',
            accessor: 'avgReturningTimeOnPage',
            width: 100,
          },
          {
            Header: 'Avg. Pages per Session',
            accessor: 'avgReturningPagesPerSession',
            width: 100,
          },
          {
            Header: 'Avg. Readership',
            accessor: 'avgReturningReadership',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },
        ],
      },
    ],
    [],
  );
  return (
    <>
      <div className="u-display-flex">
        <Text size="22px" color="primary" fontWeight="medium">
          Country:&nbsp;
        </Text>
        <Text size="22px" color="primary" fontWeight="regular">
          United States
        </Text>
      </div>
      <MyTable data={geoData} columns={geoColumns} />
    </>
  );
}
