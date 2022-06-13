import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';

export default function AFReturningUsers() {
  const data = React.useMemo(
    () => [
      {
        first: '41% cpc-google',
        second: '30% google search',
        third: '10% facebook',
      },
      {
        first: '29% twitter',
        second: '30% google search',
        third: '',
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
        Cell: data => {
          return <div>{data.row.index + 1}</div>;
        },
      },
      {
        Header: 'First Vist',
        accessor: 'first',
        width: 300,
        className: 'u-text-align-left',
      },
      {
        Header: 'Second Vist',
        accessor: 'second',
        width: 300,
        className: 'u-text-align-left',
      },
      {
        Header: 'Third Vist',
        accessor: 'third',
        width: 300,
        className: 'u-text-align-left',
      },
    ],
    [],
  );
  return (
    <div>
      <MyText type="content-title-bg">50 Returning Users</MyText>
      <MyTable
        title="28 Second visit conversions"
        data={data}
        columns={columns}
      />
      <MyTable
        title="22 Third visit conversions"
        data={data}
        columns={columns}
      />
    </div>
  );
}
