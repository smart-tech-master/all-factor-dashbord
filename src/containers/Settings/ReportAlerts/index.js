import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import MySwitch from 'components/MySwitch';

import Alert from './Alert.js';

export default function SettingsReportAlerts() {
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleAlertEdit = (e) => {
    setOpenAlert(e);
  };

  const data = React.useMemo(
    () => [
      {
        number: '1',
        title: {
          title: 'Daily Digest',
          description: '(previous day performance)',
        },
        email: 'jone@doe.com',
        frequency: 'Daily',
        slack: true,
        actionEdit: 'Edit',
      },
      {
        number: '',
        title: '',
        email: 'jane@doe.com',
        frequency: '',
        slack: '',
        actionEdit: '',
      },
      {
        number: '',
        title: '',
        email: 'jane@doe.com',
        frequency: '',
        slack: '',
        actionEdit: '',
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
        Header: 'Report Title',
        accessor: 'title',
        width: 300,
        className: 'table_cell-border u-text-align-left',
        Cell: (data) => {
          return (
            <div>
              <div className="cell-page-title">{data.value.title}</div>
              <div className="cell-page-title">{data.value.description}</div>
            </div>
          );
        },
      },
      {
        Header: 'Email',
        accessor: 'email',
        width: 200,
        className: 'u-text-align-left',
      },
      {
        Header: 'Frequency',
        accessor: 'frequency',
        width: 300,
        className: 'table_cell-border u-text-align-left',
      },
      {
        Header: 'Slack',
        accessor: 'slack',
        width: 100,
        className: 'table_cell-border',
        Cell: (data) => {
          return data.value && <MySwitch />;
        },
      },
      {
        Header: '',
        accessor: 'actionEdit',
        width: 80,
        className: 'table_cell-border u-border-right-none',
        Cell: (data) => {
          return (
            <MyText type="link" onClick={handleAlertEdit}>
              {data.value}
            </MyText>
          );
        },
      },
    ],
    [],
  );
  return (
    <>
      {openAlert && (
        <Alert visibility={openAlert} setVisibility={handleAlertEdit} />
      )}
      <MyTable title="Alerts" data={data} columns={columns} />
    </>
  );
}
