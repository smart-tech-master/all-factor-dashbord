import React from 'react';
import Switch from 'react-switch';

import './MySwitch.scss';

export default function MySwitch() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (check) => {
    setChecked(check);
  };
  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        uncheckedIcon={<div className="react-switch-icon-off">OFF</div>}
        checkedIcon={<div className="react-switch-icon-on">ON</div>}
        handleDiameter={20}
        className="react-switch"
        onColor="#598CFF"
        offColor="#fff"
        offHandleColor="#7B84A4"
        id="icon_switch"
      />
    </div>
  );
}
