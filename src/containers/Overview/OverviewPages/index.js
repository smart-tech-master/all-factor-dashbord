import React from 'react';

import Progress from 'components/Progress';
import MyTable from 'components/MyTable';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';
import Text from 'components/Text';

export default function OverviewPages() {
  const [readership, setReadership] = React.useState('high');
  const [visitors, setVisitors] = React.useState('all');

  const handleReadership = (e) => {
    setReadership(e.target.value);
  };

  const handleVisitors = (e) => {
    setVisitors(e.target.value);
  };

  const pagesData = React.useMemo(
    () => [
      {
        pages: { title: 'Page 1', url: 'https://url.com' },
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 34,
      },
      {
        pages: { title: 'Page 2', url: 'https://url.com' },
        newUsers: '578',
        avgTimeOnPage: '00:07:20',
        avgPagesPerSession: '4',
        avgReadership: 34,
        returningUsers: '679',
        returningPageViews: '854',
        avgReturningTimeOnPage: '00:06:10',
        avgReturningPagesPerSession: '4',
        avgReturningReadership: 55,
      },
    ],
    [],
  );

  const pagesColumns = React.useMemo(
    () => [

          {
            Header: '',
            id: 'row',
            accessor: 'no',
            accessor: 'no',
            style: {
              width: '5px',
            },
            Cell: (data) => {
              return <div>{data.row.index + 1}</div>;
            },
          },
          {
            Header: 'Pages',
            accessor: 'pages',
            width: 300,
            className: 'u-text-align-left',
            Cell: (data) => {
              return (
                <div>
                  <div className="cell-page-title">{data.value.title}</div>
                  <div className="cell-page-url">{data.value.url}</div>
                </div>
              );
            },
          },
          {
            Header: 'Visitors',
            accessor: 'returningUsers',
            width: 80,
          },
          {
            Header: 'Page Views',
            accessor: 'returningPageViews',
          },
          {
            Header: 'Avg. Time on Page',
            accessor: 'avgReturningTimeOnPage',
            width: 100,
          },

          {
            Header: 'Avg. Readership',
            accessor: 'avgReturningReadership',
            width: 150,
            Cell: (data) => {
              return <Progress value={data.value} />;
            },
          },

    ],
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
      <MyTable data={pagesData} columns={pagesColumns} />
    </>
  );
}
