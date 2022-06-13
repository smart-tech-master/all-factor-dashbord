import React from 'react';
import Progress from 'components/Progress';
import MyText from 'components/MyText';
import MyTable from 'components/MyTable';

const ActionsLinks = () => {
  const data = React.useMemo(
    () => [
      {
        number: '1',
        page: 'Android',
        linkText: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '32',
        conversionRate: '4',
      },
      {
        number: '',
        page: '',
        linkText: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '32',
        conversionRate: '4',
      },
      {
        number: '2',
        page: 'Android',
        linkText: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '32',
        conversionRate: '44',
      },
      {
        number: '',
        page: '',
        linkText: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '32',
        conversionRate: '44',
      },
      {
        number: '',
        page: '',
        linkText: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '32',
        conversionRate: '44',
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
        Header: 'Link text',
        accessor: 'linkText',
        className: 'u-text-align-left',
      },
      {
        Header: 'Label',
        accessor: 'label',
        style: {
          width: 350,
        },
        className: 'u-text-align-left',
      },
      {
        Header: 'Users',
        accessor: 'users',
        style: {
          width: 100,
        },
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Conversions',
        accessor: 'conversions',
        style: {
          width: 150,
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
    ],
    [],
  );

  return (
    <>
      <MyTable title="Links" data={data} columns={columns} />
    </>
  );
};

export default ActionsLinks;
