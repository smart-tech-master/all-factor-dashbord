import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTable , useSortBy } from 'react-table';
import PulseLoader from 'react-spinners/PulseLoader';

import Table from 'components/Table';
import Pagination from 'components/Pagination';
import MyText from 'components/MyText';
// import MyTooltip from '../MyTooltip';
import LinkBuilderPlacehoder from 'assets/images/placeholders/LinkBuilderPlaceholder';
import './MyTable.scss';

const PAGE_SIZE = 250;
const LINKBUILDER_PATH = '/link-builder';

const MyTable = ({
  isLoading = false,
  title,
  to,
  data,
  columns,
  trackableParentData,
  action,
  onActionClick,
  rowClick,
  onRowClick = () => {},
}) => {
  const match = useRouteMatch();
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 120,
      maxWidth: 500,
    }),
    [],
  );

  const [currentPage, setCurrentPage] = React.useState(1);

  const [filteredData, setFilteredData] = React.useState(data);
  React.useEffect(() => {
    if (data) {
      setFilteredData(
        data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
      );
    }
  }, [data, currentPage]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: filteredData, defaultColumn }, useSortBy);

  const getClassNames = (className, cellValue) => {
    if (!className) return;
    let returnVal = className;
    if (className.includes('table_cell-border') && cellValue === '') {
      returnVal += ' table_cell-borderboth--none';
      return returnVal;
    }

    if (className.includes('table_cell-border')) {
      returnVal += ' table_cell-borderbottom--none';
      return returnVal;
    }
    return returnVal;
  };

  return (
    <>
      <Table
        name={title}
        to={to}
        action={action}
        onActionClick={onActionClick}
        data={trackableParentData}
      >
        <table {...getTableProps()} className="my-table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      className={column.className || ''}
                      style={column.style || null}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div data-tip={column.id} data-for={column.id}>
                        {typeof column.Header === 'object' &&
                        column.Header !== null
                          ? column.Header.data
                          : column.Header}
                      </div>
                      {/* {typeof column.Header === 'object' &&
                        column.Header !== null && (
                          <MyTooltip type="table" tooltipId={column.id}>
                            <span>{column.Header.tooltip}</span>
                          </MyTooltip>
                        )} */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ''
                              : ''
                            : ''}
                        </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          {!isLoading && (
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => onRowClick(row)}
                    className={rowClick ? 'mouse-pointer' : ''}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className={getClassNames(
                            cell.column.className,
                            cell.value,
                          )}
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </Table>
      {isLoading && (
        <div className="loader">
          <PulseLoader color={'#598CFF'} loading={isLoading} size={30} />
        </div>
      )}
      {match.path === LINKBUILDER_PATH && !isLoading && !data.length && (
        <div>
          <div className="loader">
            <LinkBuilderPlacehoder />
          </div>
          <div className="loader_text">
            Get started by&nbsp;
            <MyText type="link" onClick={() => onActionClick(true)}>
              creating your first link
            </MyText>
          </div>
        </div>
      )}
      {data.length > PAGE_SIZE && !isLoading && (
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={PAGE_SIZE}
          onChange={setCurrentPage}
        />
      )}
    </>
  );
};

export default MyTable;
