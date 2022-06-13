import React from 'react';
import { DateRangePicker as DRP } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Button from '../Button';

import './DateRangePicker.scss';

export default function DateRangePicker({
  closeDateRangePicker,
  sendDateRange,
}) {
  const today = new Date();
  // const endDate = new Date();
  // const startDate =  endDate.setDate(endDate.getDate() - 30);
  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const closeDRP = () => {
    closeDateRangePicker();
  };

  const handleSave = () => {
    closeDateRangePicker();
    sendDateRange(state);

    // redux dispatch goes here
  };

  return (
    <div className="drp-box">
      <DRP
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={false}
        showMonthAndYearPickers={false}
        moveRangeOnFirstSelection={false}
        showDateDisplay={false}
        staticRanges={[]}
        inputRanges={[]}
        months={2}
        ranges={state}
        maxDate={today}
        direction="horizontal"
      />
      <div className="drp-box-footer">
        <div onClick={closeDRP} className="u-margin-right-large mouse-pointer">
          Close
        </div>
        <Button className="default" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
