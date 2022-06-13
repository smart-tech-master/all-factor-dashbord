import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import featureActions from 'redux/feature/actions';
import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';

import { IconContext } from 'react-icons';
import { RiErrorWarningFill } from 'react-icons/ri';

export default function ContentBlog() {
  const domainId = useSelector((state) => state.Feature.currentDomainId);
  const hostId = useSelector((state) => state.Feature.currentHostId);
  const start = useSelector((state) => state.Feature.dateRange.start);
  const end = useSelector((state) => state.Feature.dateRange.end);
  const filter = useSelector((state) => state.Feature.filter);
  const tableData = useSelector((state) => state.Feature.tableData);

  const dispatch = useDispatch();
  
  useEffect(
    () => {
      if(domainId && hostId && start && end){
        dispatch(
          featureActions.getContentRequest({
            domainId,
            hostId,
            start,
            end,
            filter,
          }),
        );
      }
    },
    // eslint-disable-next-line
    [domainId, hostId, start, end, filter],
  );

  const onConnectSearchConsole = (e) => {
    // redux dispatch goes here
    // console.log('content blog')
  };

  const data = React.useMemo(
    () => [
      {
        page: {
          title: 'The Art of Creating an Investor Pitch Deck',
          url: 'blogs/blake-armstrong/how-to-create-investor-pitch',
        },
        keywords: '643',
        users: '164',
        pageViews: '25.5%',
        onPageReadership: '24',
        sources: '6',
        avgPagesPerSession: '6',
        published: 'Aug 5, 2020',
        warning: true,
      },
      {
        page: { title: 'Page 1', url: 'https://url.com' },
        keywords: '643',
        users: '164',
        pageViews: '25.5%',
        onPageReadership: '26',
        sources: '6',
        avgPagesPerSession: '6',
        published: 'Aug 5, 2020',
        warning: true,
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        id: 'row',
        accessor: 'no',
        style: {
          width: '10px'
        },
        Cell: (data) => {
          return <div className="cell-page-url" >{data.row.index + 1}</div>;
        },
      },
      {
        Header: 'Page',
        accessor: 'path',
        width: 400,
        className: 'u-text-align-left',
        Cell: (data) => {
          return (
            <div>
              <div >{data.value}</div>
            </div>
          );
        },
      },
      {
        Header: 'Keywords',
        accessor: 'keywords',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Visitors',
        accessor: 'users',
        width: 80,
      },
      {
        Header: 'Page Views',
        accessor: 'page_views',
        width: 80,
      },
      {
        Header: 'Avg. Time on Page',
        accessor: 'avgPagesPer',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Readership',
        accessor: 'score',
        Cell: (data) => {
          return <Progress value={data.value} />;
        },
      },
      {
        Header: 'Sources',
        accessor: 'sources',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      {
        Header: 'Action Conversions',
        accessor: 'avgPagesPerSession',
        width: 80,
        Cell: (data) => {
          return <MyText type="link">{data.value}</MyText>;
        },
      },
      // {
      //   Header: 'Published',
      //   accessor: 'published',
      // },
      // {
      //   Header: '',
      //   accessor: 'warning',
      //   width: 80,
      //   Cell: (data) => {
      //     return data.value ? (
      //       <IconContext.Provider
      //         value={{
      //           color: '#FF774D',
      //           size: '18px',
      //           className: 'global-class-name',
      //         }}
      //       >
      //         <div>
      //           <RiErrorWarningFill />
      //         </div>
      //       </IconContext.Provider>
      //     ) : (
      //       ''
      //     );
      //   },
      // },
    ],
    [],
  );
  return (
    <MyTable
      title="All Pages"
      data={tableData}
      columns={columns}
      // action="Connect Search Console"
      // onActionClick={onConnectSearchConsole}
    />
  );
}
