import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';

export default function AttributionAdvertisements() {
  const onConnectAdsPlatform = (e) => {
    // redux dispatch goes here
  };

  const data = React.useMemo(
    () => [
      {
        page: { title: 'Page 1', url: 'https://url.com' },
        medium: 'Direct - entred directly',
        newUsers: '164',
        returningUsers: '25.5%',
        avgReadership: '34',
        usersProceededTo: '6 pages',
      },
      {
        page: { title: 'Page 1', url: 'https://url.com' },
        medium: 'Direct - entred directly',
        newUsers: '164',
        returningUsers: '25.5%',
        avgReadership: '20',
        usersProceededTo: '6 pages',
      },
      {
        page: { title: 'Page 1', url: 'https://url.com' },
        medium: 'Direct - entred directly',
        newUsers: '164',
        returningUsers: '25.5%',
        avgReadership: '88',
        usersProceededTo: '6 pages',
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
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
      {
        Header: 'Page',
        accessor: 'page',
        width: 300,
        className: 'u-text-align-left',
        Cell: (data) => {
          return (
            <div>
              <div className="cell-page-title">{data.value.title}</div>
              <div className="cell-page-url">{data.value.url}</div>
            </div>
          );
        },
      },
      {
        Header: 'Medium - Source - Campaign',
        accessor: 'medium',
        width: 400,
        className: 'u-text-align-left',
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'New Users',
        accessor: 'newUsers',
        width: 80,
      },
      {
        Header: 'Returning Users',
        accessor: 'returningUsers',
        width: 80,
      },
      {
        Header: 'Avg. Readership',
        accessor: 'avgReadership',
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
      {
        Header: 'Users proceeded to',
        accessor: 'usersProceededTo',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    [],
  );
  return (
    <MyTable
      title="Advertisements"
      data={data}
      columns={columns}
      // action="Connect Ads Platform"
      // onActionClick={onConnectAdsPlatform}
    />
  );
}
