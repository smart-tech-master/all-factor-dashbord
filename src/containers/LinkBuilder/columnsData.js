import React from 'react';
import MyText from '../../components/MyText';

const columnsData = [
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
    Header: 'Short name',
    accessor: 'short_name',
    className: 'u-text-align-left',
    Cell: (data) => {
      return <MyText type="link">{data.value}</MyText>;
    },
  },
  {
    Header: 'Destination URL',
    accessor: 'page_url',
    width: 500,
    className: 'u-border-left-none u-text-align-left',
  },
  {
    Header: 'Clicks',
    accessor: 'clicks',
    className: 'u-border-left-none',
    Cell: (data) => {
      return <MyText type="link">{data.value}</MyText>;
    },
  },
  {
    Header: 'Created',
    accessor: 'created',
    className: 'u-border-left-none',
  },
];

export default columnsData;
