import React from 'react';
import ReactTooltip from 'react-tooltip';

import './MyTooltip.scss';

export default function MyTooltip({ type, tooltipId, children }) {
  return (
    <>
      <ReactTooltip
        id={tooltipId}
        className={`custom-tooltip-${type}`}
        place="right"
        effect="solid"
        border
        borderColor="#dfe0eb"
        arrowColor="#ffffff"
      >
        {children}
      </ReactTooltip>
    </>
  );
}
