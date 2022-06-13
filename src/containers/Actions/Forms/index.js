import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Progress from 'components/Progress';
import MyText from 'components/MyText';
import MyTable from 'components/MyTable';

import './index.scss';

const ActionsForms = () => {
  const history = useHistory();
  // const dateRange = useSelector((state) => state.Feature.dateRange);
  // console.log('dateRange', dateRange);

  const handleClick = () => {
    // redux
    history.push('/actions/forms/sources');
  };

  const data = React.useMemo(
    () => [
      {
        number: '1',
        page: 'Android',
        button: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '24',
        conversionRate: 54,
      },
      {
        number: '',
        page: '',
        button: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '24',
        conversionRate: 54,
      },
      {
        number: '',
        page: '',
        button: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '24',
        conversionRate: 54,
      },
      {
        number: '2',
        page: 'Android',
        button: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '24',
        conversionRate: 44,
      },
      {
        number: '',
        page: '',
        button: 'Chrome',
        label: 'Label',
        users: '578',
        conversions: '24',
        conversionRate: 44,
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '',
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
        Header: 'Button',
        accessor: 'button',
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
      },
      {
        Header: 'Conversions',
        accessor: 'conversions',
        style: {
          width: 150,
        },
        Cell: (data) => {
          return (
            <MyText type="link" onClick={handleClick}>
              {data.value}
            </MyText>
          );
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
    //eslint-disable-next-line
    [],
  );

  return (
    <>
      <MyTable title="Forms" data={data} columns={columns} />
    </>
  );
};

export default ActionsForms;
