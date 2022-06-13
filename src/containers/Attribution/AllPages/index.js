import React from 'react';
import { useHistory } from 'react-router-dom';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';

export default function AttributionAllPages() {
  const history = useHistory();
  const onConnectAdsPlatform = (e) => {
    // redux dispatch goes here
  };

  const handleClick = () => {
    // redux
    history.push('/attribution/ad-campaign');
  };

  const data = React.useMemo(
    () => [
      {
        page: { title: 'Page 1', url: 'https://url.com' },
        medium: 'Direct - entred directly',
        newUsers: '164',
        returningUsers: '25.5%',
        avgReadership: '34',
        usersProceededTo: '32 pages',
      },
      {
        page: { title: 'Page 2', url: 'https://url.com' },
        medium: 'Direct - entred directly',
        newUsers: '164',
        returningUsers: '25.5%',
        avgReadership: '20',
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
        width: 200,
        className: 'u-text-align-left',
        Cell: (data) => {
          return (
            <MyText type="link" onClick={handleClick}>
              {data.value}
            </MyText>
          );
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
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    // eslint-disable-next-line
    [],
  );
  return (
    <MyTable
      title="All"
      data={data}
      columns={columns}
      // action="Connect Ads Platform"
      // onActionClick={onConnectAdsPlatform}
    />
  );
}
