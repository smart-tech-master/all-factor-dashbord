import React from 'react';

import ActionsBar from 'components/ActionsBar';
import Chart from 'components/Chart';
import Link from 'components/Link';
import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';
import RadioGroup from 'components/RadioGroup';
import Text from 'components/Text';

export default function AFSources() {
  const data = React.useMemo(
    () => [
      {
        Sources: 'Ad campaign #1',
        Users: 643,
        Conversions: 164,
        ReturningUsers: 164,
        NewUsers: 164,
        ConversionRate: 34,
      },
      {
        Sources: 'Facebook',
        Users: 643,
        Conversions: 164,
        ReturningUsers: 164,
        NewUsers: 164,
        ConversionRate: 34,
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
        Header: 'Sources',
        accessor: 'Sources',
        className: 'u-text-align-left',
        width: 400,
      },
      {
        Header: 'Users',
        accessor: 'Users',
        width: 80,
        Cell: data => {
          return (
            <Link to={`/actions/forms/users`} type="link">
              {data.value}
            </Link>
          );
        },
      },
      {
        Header: 'Conversions',
        accessor: 'Conversions',
        width: 100,
      },
      {
        Header: 'Returning Users',
        accessor: 'ReturningUsers',
        width: 80,
        Cell: data => {
          return (
            <Link to={`/actions/forms/returning-users`} type="link">
              {data.value}
            </Link>
          );
        },
      },
      {
        Header: 'New Users',
        accessor: 'NewUsers',
        width: 100,
      },
      {
        Header: 'Conversion Rate',
        accessor: 'ConversionRate',
        Cell: data => {
          return <Progress value={data.value} />;
        },
      },
    ],
    [],
  );
  const data2 = React.useMemo(
    () => [
      {
        PreviousPages: '/hey',
        Users: 643,
        Conversions: 164,
        ConversionRate: 34,
      },
      {
        PreviousPages: '/blog',
        Users: 643,
        Conversions: 164,
        ConversionRate: 34,
      },
    ],
    [],
  );
  const columns2 = React.useMemo(
    () => [
      {
        Header: '#',
        id: 'row',
        width: 50,
        Cell: data => {
          return <div>{data.row.index + 1}</div>;
        },
      },
      {
        Header: 'Previous Pages',
        accessor: 'PreviousPages',
        className: 'u-text-align-left',
        width: 400,
      },
      {
        Header: 'Users',
        accessor: 'Users',
        width: 80,
        Cell: data => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Conversions',
        accessor: 'Conversions',
        width: 100,
      },
      {
        Header: 'Conversion Rate',
        accessor: 'ConversionRate',
        Cell: data => {
          return <Progress value={data.value} />;
        },
      },
    ],
    [],
  );

  const [sources, setSources] = React.useState('sources');

  const handleSources = e => {
    setSources(e.target.value);
  };
  return (
    <div>
      <div className="u-display-flex">
        <Text
          size="22px"
          color="primary"
          fontWeight="medium"
          className="u-margin-right-xlarge"
        >
          Page: svb.com
        </Text>
        <Text
          size="22px"
          color="primary"
          fontWeight="medium"
          className="u-margin-left-xlarge"
        >
          Button: Get Demo
        </Text>
      </div>
      <ActionsBar background={false}>
        <ActionsBar.Item className="c-actions-bar_align_left">
          <Chart />
        </ActionsBar.Item>
      </ActionsBar>
      <ActionsBar background={false}>
        <ActionsBar.Item className="c-actions-bar_align_left">
          <RadioGroup name="radio" value={sources} onChange={handleSources}>
            <RadioGroup.Item value="sources" label="Sources" />
            <RadioGroup.Item value="previousPages" label="Previous Pages" />
          </RadioGroup>
        </ActionsBar.Item>
      </ActionsBar>
      <MyTable
        title={sources === 'sources' ? 'Sources' : 'Previous Pages'}
        data={sources === 'sources' ? data : data2}
        columns={sources === 'sources' ? columns : columns2}
      />
    </div>
  );
}
