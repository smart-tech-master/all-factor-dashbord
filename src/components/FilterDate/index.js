import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';
import FeatureActions from 'redux/feature/actions';
import DateRangePicker from '../DateRangePicker';
import { getLabelFromDateRange } from 'utils/getLabelFromDateRange';

export default function FilterDate() {
  const dispatch = useDispatch();

  const [dateFilter, setDateFilter] = React.useState('30 Days');

  // getting month and date in 2 digit format
  const convertIn2DF = (date) => {
    return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);
  }

  useEffect(() => {
    handleDateFilter({target:{value:'30 Days'}})
  }, []);

  let start, end;
  const handleDateFilter = (e) => {
    const value = e.target.value;
    setDateFilter(value);

    if (value !== 'custom') {
      let today = new Date();
      
      switch(value) {
        case "Today":
          start= end = convertIn2DF(today);
          break;
        case "Yesterday":
          end = convertIn2DF(today);
          // getting date 1 day ago
          today.setDate(today.getDate() - 1);
          start = convertIn2DF(today);
          break;
        case "7 Days":
          end = convertIn2DF(today);
          // getting date 7 day ago
          today.setDate(today.getDate() - 7);
          start = convertIn2DF(today);
          break;
        case "30 Days":
          end = convertIn2DF(today);
          // getting date 30 day ago
          today.setDate(today.getDate() - 30);
          start = convertIn2DF(today);
          break;
      }
  
      dispatch(
        FeatureActions.updateDateRange({
          start,
          end,
        }),
      );
    }
  };

  const [openDateRangePicker, setOpenDateRangePicker] = React.useState(false);
  const closeDateRangePicker = () => {
    setOpenDateRangePicker(false);
  };
  const handleCustom = () => {
    setOpenDateRangePicker(!openDateRangePicker);
  };

  const [customLabel, setCustomLabel] = React.useState('Custom');
  const handleDateRange = (dateRange) => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const start = new Date(dateRange[0].startDate);
    const tempStart = monthNames[start.getMonth()];
    const end = new Date(dateRange[0].endDate);
    const tempEnd = monthNames[end.getMonth()];

    console.log('start: ', start, ' end: ', end);

    setCustomLabel(
      `${tempStart} ${start.getDate()} - ${tempEnd} ${end.getDate()}`,
    );

    dispatch(
      FeatureActions.updateDateRange({
        // start: dateRange[0].startDate,
        // end: dateRange[0].endDate,
        start: convertIn2DF(start),
        end: convertIn2DF(end),
      }),
    );
  };

  return (
    <div className="drp-relative">
      <ActionsBar.Item>
        <RadioGroup
          name="dateFilter"
          value={dateFilter}
          onChange={handleDateFilter}
        >
          <RadioGroup.Item
            value="Today"
            label={getLabelFromDateRange('Today', 'md')}
          />
          <RadioGroup.Item
            value="Yesterday"
            label={getLabelFromDateRange('Yesterday', 'md')}
          />
          <RadioGroup.Item
            value="7 Days"
            label={getLabelFromDateRange('7 Days', 'md')}
          />
          <RadioGroup.Item
            value="30 Days"
            label={getLabelFromDateRange('30 days', 'md')}
          />
          <RadioGroup.Item
            value="custom"
            label={customLabel}
            onClick={handleCustom}
          />
        </RadioGroup>
      </ActionsBar.Item>
      {openDateRangePicker && (
        <DateRangePicker
          closeDateRangePicker={closeDateRangePicker}
          sendDateRange={handleDateRange}
        />
      )}
    </div>
  );
}
