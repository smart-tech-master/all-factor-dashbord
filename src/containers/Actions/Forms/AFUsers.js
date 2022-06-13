import React from 'react';
import { ExportToCsv } from 'export-to-csv';
import MyTable from 'components/MyTable';

const getExportDate = () => new Date().toISOString().slice(0, 10);

export default function AFUsers() {
  const DEFAULT_FILENAME_PREFIX = 'allfactors_export';

  const defaultOptions = {
    showLabels: true,
    useBom: false,
    useKeysAsHeaders: true,
  };

  const date = getExportDate();
  const options = {};
  const exportOptions = {
    filename: `${DEFAULT_FILENAME_PREFIX}_${date}`,
    ...defaultOptions,
    ...options,
  };
  const csvExporter = new ExportToCsv(exportOptions);

  const data = React.useMemo(
    () => [
      {
        emails: 'thisisanemail@gmail.com',
      },
      {
        emails: 'email@email.com',
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
        Header: 'Emails',
        accessor: 'emails',
        className: 'u-text-align-left',
        width: 1000,
      },
    ],
    [],
  );

  const handleActionClick = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <>
      <MyTable
        title="Users from Facebook"
        data={data}
        columns={columns}
        action={`Export Emails`}
        onActionClick={handleActionClick}
      />
    </>
  );
}
