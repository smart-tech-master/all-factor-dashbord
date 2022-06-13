import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';

export default function ContentAllPages() {
  const onConnectSearchConsole = (e) => {
    // redux dispatch goes here
  };

  const data = React.useMemo(
    () => [
      {
        page: {
          title: 'The Art of Creating an Investor Pitch Deck',
          url: 'blogs/blake-armstrong/how-to-create-investor-pitch',
        },
        keywords: '643',
        users: '164',
        pageViews: '25.5%',
        onPageReadership: '34',
        sources: '6',
        avgPagesPerSession: '6',
        actionConversions: '56',
      },
      {
        page: {
          title: 'The Art of Creating an Investor Pitch Deck',
          url: 'blogs/blake-armstrong/how-to-create-investor-pitch',
        },
        keywords: '643',
        users: '164',
        pageViews: '25.5%',
        onPageReadership: '20',
        sources: '6',
        avgPagesPerSession: '6',
        actionConversions: '56',
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
        Header: 'Keywords',
        accessor: 'keywords',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Users',
        accessor: 'users',
        width: 80,
      },
      {
        Header: 'Page Views',
        accessor: 'pageViews',
        width: 80,
      },
      {
        Header: 'On Page Readership',
        accessor: 'onPageReadership',
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
      {
        Header: 'Sources',
        accessor: 'sources',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Action Conversions',
        accessor: 'actionConversions',
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
      title="All Pages"
      data={data}
      columns={columns}
      // action="Connect Search Console"
      // onActionClick={onConnectSearchConsole}
    />
  );
}
