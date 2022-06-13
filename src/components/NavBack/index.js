import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiArrowLeftSLine } from 'react-icons/ri';

import './NavBack.scss';

export default function NavBack({ path }) {
  const history = useHistory();
  //   const match = useRouteMatch();

  const handleBack = () => {
    history.push(path);
  };
  return (
    <div onClick={handleBack} className="navback">
      <div className="navback-left-arrow">
        <IconContext.Provider
          value={{
            color: '#4A4F62',
            size: '32px',
            className: 'global-class-name',
          }}
        >
          <RiArrowLeftSLine />
        </IconContext.Provider>
      </div>
      <div>Back</div>
    </div>
  );
}
