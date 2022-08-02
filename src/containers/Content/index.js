import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/Header';
import ActionsBar from 'components/ActionsBar';
import RadioGroup from 'components/RadioGroup';
import NavBack from 'components/NavBack';
import FilterDate from 'components/FilterDate';
import Text from 'components/Text';

import ContentRouter from './router';
import featureActions from 'redux/feature/actions';

export default function Content() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const match = useRouteMatch();
  const user = useSelector((state) => state.Feature.user);
  const domainId = useSelector((state) => state.Feature.domainId);
  const currentHostId = useSelector((state) => state.Feature.currentHostId);
  const hosts = useSelector((state) => state.Feature.hosts);
  const [filter, setFilter] = React.useState('');
  
  // const filter = useSelector((state) => state.Feature.filter);

  // for active radio button
  // const [activeRoute, setActiveRoute] = React.useState(`${match.url}/blog`);

  const handleRadioChange = (event, value) => {
    if (value) {
      history.push(value);
      setActiveRoute(value);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const handleFilterKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(featureActions.updateFilter(e.target.value));
    } 
  }

  const onHandleChange = (e) => {    
    dispatch(featureActions.updateHostId(e.target.value));
  }

  // title and back path for sub pages
  const pathname = history.location.pathname;
  const [title, setTitle] = React.useState('Content');
  const [backPath, setBackPath] = React.useState('');

  const slugsArr = [
    '/content/sources',
    '/content/keywords',
    '/content/action-conversions',
  ];
  const titlesArr = [
    'Content - Sources',
    'Content - Keywords',
    'Content - Action Conversions',
  ];

  React.useEffect(() => {
    const slugId = slugsArr.indexOf(pathname);
    setTitle(slugId === -1 ? 'Content' : titlesArr[slugId]);
    setBackPath(slugId === -1 ? '' : '/content/blog');
  }, [pathname, slugsArr, titlesArr]);

  const hostOptions = hosts.map((each, index) => {
    return ( <option key={index}>{each.hostname}</option> )
  })

  return (
    <>
      <Header title={title}>{user.name}</Header>
      <ActionsBar>
        {!backPath ? (
          <ActionsBar.Item>
            <div className="u-display-flex u-flex-align-center">
              <div>
                <select value={currentHostId} onChange={onHandleChange}>
                  {
                    hostOptions
                  }
                </select>
              </div>
            </div>
          </ActionsBar.Item>
        ) : (
          <NavBack path={backPath} />
        )}
        <FilterDate />
      </ActionsBar>
      <div className="u-display-flex  u-filter-margin-bottom">
        <div className="u-filter-margin-right">
          <Text size="10px" color="primary" fontWeight="medium">
            Filter
          </Text>
          <input value={filter} onChange={handleFilterChange} onKeyDown={handleFilterKeyDown} placeholder="After enter text, press Enter button"/>
          <button className="u-close" onClick={() => {setFilter(''); dispatch(featureActions.updateFilter(''))}}>
            X
          </button>
        </div>
        <div>
          <Text size="10px" color="primary" fontWeight="medium">
            Engaged at least
          </Text>
          <select className="u-drop-box-height">
            <option>
              30 seconds
            </option>
          </select>
        </div>
      </div>
      <ContentRouter />
    </>
  );
}
