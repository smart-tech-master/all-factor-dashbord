import React from 'react';

import MyTable from 'components/MyTable';
import MyText from 'components/MyText';

import InviteUsers from './InviteUsers';

export default function SettingsUsers() {
  const [openInviteUsers, setOpenInviteUsers] = React.useState(false);

  const onInviteUsers = (e) => {
    setOpenInviteUsers(e);
  };

  const data = React.useMemo(
    () => [
      {
        name: 'me',
        email: 'helloworld@wonderfulcompany.com',
        role: 'Owner',
        status: 'pending',
        action: 'Delete',
      },
      {
        name: 'me',
        email: 'https://somthing.com',
        role: 'User',
        status: 'pending',
        action: 'Delete',
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
        Header: 'Name',
        accessor: 'name',
        className: 'u-text-align-left',
        width: 400,
      },
      {
        Header: 'Email',
        accessor: 'email',
        className: 'u-text-align-left',
        width: 250,
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: '',
        accessor: 'action',
        width: 100,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
    ],
    [],
  );
  return (
    <>
      {openInviteUsers && (
        <InviteUsers
          visibility={openInviteUsers}
          setVisibility={onInviteUsers}
        />
      )}
      <MyTable
        title="Users"
        data={data}
        columns={columns}
        action="Invite Users"
        onActionClick={onInviteUsers}
      />
    </>
  );
}
