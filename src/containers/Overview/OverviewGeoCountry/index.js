import React from 'react';
import { useHistory } from 'react-router-dom';

import Progress from 'components/Progress';
import MyTable from 'components/MyTable';
import MyText from 'components/MyText';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';
import Text from 'components/Text';

export default function OverviewGeoCountry() {
  const [readership, setReadership] = React.useState('high');
  const [visitors, setVisitors] = React.useState('all');

  const handleReadership = (e) => {
    setReadership(e.target.value);
  };

  const handleVisitors = (e) => {
    setVisitors(e.target.value);
  };
  
  const history = useHistory();

  const handleClick = () => {
    // redux
    history.push('/attribution/ad-campaign');
  };

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

  return (
    <>
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
      <MyTable data={geoData} columns={geoColumns} />
    </>
  );
}
