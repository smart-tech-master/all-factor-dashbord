import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';

import TokenStorage from 'utils/TokenStorage';
import Text from '../Text';
import Alerts from '../Alerts';
import './Header.scss';

import featureActions from 'redux/feature/actions';

const Header = ({ title, children }) => {
  // alert
  const [alertsHuh, setAlertsHuh] = React.useState(false);
  const domains = useSelector((state) => state.Feature.domains);
  const hosts = useSelector((state) => state.Feature.hosts);

  const dispatch = useDispatch();
  // domains init 
  useEffect(() => {
    dispatch(featureActions.getDomains());
  }, [])

  // profile
  function onVisibleChange(visible) {
    console.log(visible);
  }

  // on logout
  const history = useHistory();

  const handleLogout = () => {
    TokenStorage.clearToken();
    history.push('/auth/login');
  };

  const menuProfile = (
    <>
      <div className="c-header-profile-menu" onClick={handleLogout}>
        Logout
      </div>
    </>
  );

  const onHandleChange = (e) => {
    dispatch(featureActions.updateHostId(e.target.value));
  }

  return (
    <header className="c-header">
      <div className="c-header__inner">
        <div className="c-header__col-title">
          <div>
            <Text size="28px">{title}</Text>
          </div>
          {/* <div>
            <select onChange={onHandleChange}>
              {
                hosts.map((each, index) => { return ( <option key={index}>{each.hostname}</option> ) })
              }
            </select>
          </div> */}
        </div>
        <div className="c-header__col-content">
          <div className="c-header__col-alerts">
            <Dropdown
              trigger={['click']}
              onVisibleChange={setAlertsHuh}
              visible={alertsHuh}
              closeOnSelect={false}
              overlay={Alerts}
              animation="slide-up"
            >
              <div className="mouse-pointer">
                <IconContext.Provider
                  value={{
                    color: '#C5C7CD',
                    size: '22px',
                    className: 'global-class-name',
                  }}
                >
                  <div>
                    <FaBell />
                  </div>
                </IconContext.Provider>
              </div>
            </Dropdown>
          </div>
          <Dropdown
            trigger={['click']}
            overlay={menuProfile}
            animation="slide-up"
            onVisibleChange={onVisibleChange}
          >
            <div className="c-header__col-name">{children}</div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
