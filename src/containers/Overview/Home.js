import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import featureActions from 'redux/feature/actions';
import { useHistory } from 'react-router-dom';

import ActionsBar from 'components/ActionsBar';
import PreviewCard from 'components/PreviewCard';
import Chart from 'components/Chart';
import FilterDate from 'components/FilterDate';
import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import Progress from 'components/Progress';
import RadioGroup from 'components/RadioGroup';
import Text from 'components/Text';
// import Placeholder from 'components/Placeholder';

export default function Home() {
  const history = useHistory();

  React.useEffect(() => {
    // dispatch / useSelector to get data from redux
  }, []);

  const handleClick = () => {
    // redux
    history.push('/overview/geo-locations/city');
  };

  const dispatch = useDispatch();

  // init filter value
  const domainId = useSelector((state) => state.Feature.currentDomainId);
  const hostId = useSelector((state) => state.Feature.currentHostId);
  const start = useSelector((state) => state.Feature.dateRange.start);
  const end = useSelector((state) => state.Feature.dateRange.end);

  useEffect(()=>{
    if(domainId && hostId && start && end){
      dispatch( featureActions.getPageDataRequest({ domainId, hostId, start, end }) );
    }
  }, [domainId, hostId, start, end]);

  // table limit count
  const tableLimit = 10;

  const pagesData = useSelector((state) => state.Feature.pagesData).slice(0, tableLimit);

  const pagesColumns = React.useMemo(
    () => [

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
            Header: 'Pages',
            accessor: 'path',
            width: 300,
            className: 'u-text-align-left',
            Cell: (data) => {
              return (
                <div>
                  <div>{data.value}</div>
                </div>
              );
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
          },
          {
            Header: 'Avg. Time on Page',
            accessor: 'avgReturningTimeOnPage',
            width: 100,
          },

          {
            Header: 'Avg. Readership',
            accessor: 'score',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },

    ],
    [],
  );

  const sourcesData = React.useMemo(
    () => [
      {
        sources: 'Android',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
        avgSessionsperVisitor: 5,
      },
      {
        sources: 'Android',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 55,
        avgSessionsperVisitor: 5,
      },
      {
        sources: 'Android',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 64,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
        avgSessionsperVisitor: 5,
      },
    ],
    [],
  );

  const sourcesColumns = React.useMemo(
    () => [
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
            Header: 'Sources',
            accessor: 'sources',
            width: 300,
            className: 'u-text-align-left',
            Cell: (data) => {
              return (
                <div>
                  <div className="cell-page-url">{data.value}</div>
                </div>
              )
            },
          },
          {
            Header: 'Visitors',
            accessor: 'newUsers',
            width: 80,
          },
          {
            Header: 'Sessions',
            accessor: 'avgPagesPerSession',
            width: 100,
          },
          {
            Header: 'Avg. Sessions per Visitor',
            accessor: 'avgSessionsperVisitor',
            width: 100,
          },
          {
            Header: 'Avg. Time per Session',
            accessor: 'avgTimeOnPage',
            width: 100,
          },
          {
            Header: 'Avg. Readership',
            accessor: 'avgReadership',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },
    ],
    [],
  );

  const devicesData = React.useMemo(
    () => [
      {
        os: 'Android',
        browser: 'Chrome',
        newUsers: '578',
        sessions: '700',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
      },
    ],
    [],
  );

  const devicesColumns = React.useMemo(
    () => [

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
            Header: 'OS',
            accessor: 'os',
            className: 'u-text-align-left',
          },
          {
            Header: 'Browser',
            accessor: 'browser',
            className: 'u-text-align-left',
          },
          {
            Header: 'Visitors',
            accessor: 'newUsers',
          },
          {
            Header: 'Sessions',
            accessor: 'sessions',
          },
          {
            Header: 'Avg. Session per Visitor',
            accessor: 'avgPagesPerSession',
            width: 100,
          },
          {
            Header: 'Avg. Time per Session',
            accessor: 'avgTimeOnPage',
            width: 100,
          },
          {
            Header: 'Avg. Readership',
            accessor: 'avgReadership',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },
        
    ],
    [],
  );

  const geoData = React.useMemo(
    () => [
      {
        country: 'United States',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
        sessions:500
      },
      {
        country: 'Sweden',
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 55,
        sessions:500
      },
    ],
    [],
  );

  const geoColumns = React.useMemo(
    () => [
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
            Header: 'Country',
            accessor: 'country',
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
            Header: 'Visitors',
            accessor: 'newUsers',
          },
          {
            Header: 'Sessions',
            accessor: 'sessions',
          },
          {
            Header: 'Avg. Time on Page',
            accessor: 'avgTimeOnPage',
            width: 100,
          },
          {
            Header: 'Avg. Pages per Session',
            accessor: 'avgPagesPerSession',
            width: 100,
          },
          {
            Header: 'Avg. Readership',
            accessor: 'avgReadership',
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },
    ],
    // eslint-disable-next-line
    [],
  );

  const [readership, setReadership] = React.useState('high');
  const [visitors, setVisitors] = React.useState('all');

  const handleReadership = (e) => {
    setReadership(e.target.value);
  };

  const handleVisitors = (e) => {
    setVisitors(e.target.value);
  };

  const previewCardData = {
    'Top Actions': [
      ['Forms', 'Get Demo', 'Product name', '67'],
      ['Links', 'Check out', 'Blog', '103'],
      ['Media', 'Intro', 'How it works', '543'],
    ],
    'Top Content': [
      ['The Art of Creating an Investor Pitch Deck', '67'],
      ['How to Pick a Cofounder', '103'],
      ['How to Tell the Story of Your Startup’s Cap Table', '543'],
    ],
    'Top Attribution': [
      ['svb.com', 'email - apple email - signature tracking', '67'],
      ['/blog/how-to-do-what', 'social - referral - fecbook.com', '103'],
      ['/product-abc-new', 'Paid search - cpc - google', '543'],
    ],
    'Top Links': [
      ['top10', 'https://svb.com/blog/top-10-tips', '67'],
      ['product123', 'https://svb.com/blog/new-product-launch', '103'],
      ['template', 'https://svb.com/resources/new-template', '543'],
    ],
  };

  const Links = {
    'Top Actions': '/actions/forms',
    'Top Content': '/content/blog',
    'Top Attribution': '/attribution/all-pages',
    'Top Links': '/link-builder',
  };



  return (
    <>
      <ActionsBar background={false} marginBottom={false}>
        <ActionsBar.Item>
          <Text size="22px" color="primary" fontWeight="medium">
            Visitor Growth
          </Text>
        </ActionsBar.Item>
        <FilterDate />
      </ActionsBar>
      <ActionsBar background={false}>
        <ActionsBar.Item className="c-actions-bar_align_left">
          <Chart isStatistics={true} />
        </ActionsBar.Item>
      </ActionsBar>
      <ActionsBar background={false} className="c-actions-bar-preview-card">
        {Object.keys(previewCardData).map((key, index) => {
          return (
            <ActionsBar.Item key={index} className="c-actions-preview-card">
              <PreviewCard
                title={key}
                link={Links[key]}
                data={previewCardData[key]}
              />
            </ActionsBar.Item>
          );
        })}
      </ActionsBar>
      <ActionsBar>
        <ActionsBar.Item className="c-actions-bar_align_left u-full-width">
          <Text size="22px" color="primary" fontWeight="medium">
            Highlights
          </Text>
          <div class="c-actions-bar_text_align_right">
            <Text size="10px" color="primary" fontWeight="medium">
              Engaged at least
            </Text>
          </div>
          <div className="u-display-flex u-flex-align-center">
            <div>
              <Text color="primary" className="u-margin-right-medium">
                Filter by
              </Text>
            </div>
            <div className="u-display-flex u-flex-nowrap u-flex-justify-between u-fill-width">
              <div>
                <RadioGroup
                  name="readership"
                  value={readership}
                  onChange={handleReadership}
                >
                  <RadioGroup.Item value="high" label="High Readership" />
                  <RadioGroup.Item value="low" label="Low Readership" />
                </RadioGroup>
              </div>
              <div>
                <RadioGroup
                  name="Visitors"
                  value={visitors}
                  onChange={handleVisitors}
                >
                  <RadioGroup.Item value="all" label="All Visitors" />
                  <RadioGroup.Item value="new" label="New Visitors" />
                  <RadioGroup.Item value="returning" label="Returing Visitors" />
                </RadioGroup>
              </div>
              <div>
                <select className="u-drop-box-height">
                  <option>
                    10 seconds
                  </option>
                </select>
              </div>
            </div>
          </div>
        </ActionsBar.Item>
      </ActionsBar>
      <MyTable
        title="Pages"
        to="/overview/pages"
        data={pagesData}
        columns={pagesColumns}
      />
      <MyTable
        title="Sources"
        to="/overview/sources"
        data={sourcesData}
        columns={sourcesColumns}
      />
      <MyTable
        title="Devices"
        to="/overview/devices"
        data={devicesData}
        columns={devicesColumns}
      />
      <MyTable
        title="Geo Locations"
        to="/overview/geo-locations/country"
        data={geoData}
        columns={geoColumns}
      />
    </>
  );
}
