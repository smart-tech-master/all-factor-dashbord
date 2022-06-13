import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';

export default function SettingsInvoices() {
  const data = React.useMemo(
    () => [
      {
        Month: '1',
        Transaction: 'Daily Digest',
        Amount: '$44',
        Status: 'pending',
        Action: 'Download',
        actionEdit: 'Edit',
        actionDelete: 'Delete',
      },
      {
        Month: '2',
        Transaction: 'Daily Digest',
        Amount: '$44',
        Status: 'pending',
        Action: 'Download',
        actionEdit: 'Edit',
        actionDelete: 'Delete',
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
        Header: 'Month',
        accessor: 'Month',
        width: 400,
        className: 'u-text-align-left',
      },
      {
        Header: 'Transaction',
        accessor: 'Transaction',
      },
      {
        Header: 'Amount',
        accessor: 'Amount',
      },
      {
        Header: 'Status',
        accessor: 'Status',
      },
      {
        Header: '',
        accessor: 'Action',
        width: 100,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    [],
  );
  return <MyTable title="Invoices" data={data} columns={columns} />;
}
