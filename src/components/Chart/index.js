import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ResponsiveLine } from '@nivo/line';
import featureActions from 'redux/feature/actions';
import { filterTooltipData } from 'utils/chartDataConvert';

import StatisticsCard from './StatisticsCard';
import Tooltip from './Tooltip';
import './Chart.scss';

export default function Chart({ isStatistics = false }) {
  const dispatch = useDispatch();

  // init filter value
  const domainId = useSelector((state) => state.Feature.currentDomainId);
  const hostId = useSelector((state) => state.Feature.currentHostId);
  const start = useSelector((state) => state.Feature.dateRange.start);
  const end = useSelector((state) => state.Feature.dateRange.end);

  // init chartData
  useEffect(()=>{
    if(domainId && hostId && start && end){
      dispatch( featureActions.getChartDataRequest({ domainId, hostId, start, end }) );
      dispatch( featureActions.getTooltipPageDataRequest({ domainId, hostId, start, end }) );
      dispatch( featureActions.getTooltipDeviceDataRequest({ domainId, hostId, start, end }) );
      dispatch( featureActions.getTopCountryDataRequest({ domainId, hostId, start, end }) );
    }
  }, [domainId, hostId, start, end]);

  // chart data

  const chartData = useSelector((state) => state.Feature.chartData);
  const tooltipPageData = useSelector((state) => state.Feature.tooltipPageData);
  const tooltipDeviceData = useSelector((state) => state.Feature.tooltipDeviceData);

  const month = chartData.length? chartData[0].id: '';
  
  const MyResponsiveLine = () => (
    <ResponsiveLine
      data={chartData}
      margin={{ top: 50, right: 50, bottom: 60, left: 80 }}
      enableGridX={false}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        type: 'xRange',
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 30,
        tickRotation: 0,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 0,
        tickPadding: 40,
        tickRotation: 0,
      }}
      colors="#598CFF"
      pointSize={10}
      pointColor="#FFFFFF"
      pointBorderWidth={2}
      pointBorderColor="#598CFF"
      pointLabelYOffset={-12}
      useMesh={true}
      tooltip={(data) => {
        return <Tooltip data = {data} xRange = {chartData[0].data.length} pageData = {filterTooltipData(data.point.data.date, tooltipPageData)} deviceData = {filterTooltipData(data.point.data.date, tooltipDeviceData)} />;
      }}
    />
  );

  const totalVisitors = chartData.length? chartData[0].data.reduce((a,b) => a + b.y, 0): 0;
  const topCountry =  useSelector((state) => state.Feature.topCountry);

  const cardData = [
    { title: 'Total Visitors', value: totalVisitors },
    { title: 'Desktop', value: '1029' },
    { title: 'Mobile & Tablets', value: 'iOS' },
    { title: 'Top Source', value: 'Organic' },
    { title: 'Top Country', value: topCountry },
  ];

  return (
    <div className="chart">
      <div
        className={`chart-chart ${!isStatistics && 'chart-remove-statistics'}`}
      >
        {MyResponsiveLine()}
        <div className="chart-chart-month">{month}</div>
      </div>
      {isStatistics && (
        <div className="chart-statistics">
          {cardData.map((card, index) => {
            return (
              <StatisticsCard
                key={index}
                title={card.title}
                value={card.value}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
