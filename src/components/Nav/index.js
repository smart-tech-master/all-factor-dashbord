import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { Globe as GlobeIcon } from 'react-feather';
import featureActions from 'redux/feature/actions';

import Logo from 'assets/images/Logo';
import Icons from 'assets/images/icons';

import './Nav.scss';

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  const domains = useSelector((state) => state.Feature.domains);
  const domain = useSelector((state) => state.Feature.currentDomainId);

  // domains select
  const OptionsLabel = (icon, alt, label) => {
    return (
      <div className="u-flex-hcenter">
        {icon ? <img src={icon} alt={alt} /> : <GlobeIcon color="#598CFF" />}
        <span className="u-margin-left-medium">{label}</span>
      </div>
    );
  };

  // init default
  const initOption = (domain) => {
    const label = OptionsLabel(
      `https://www.google.com/s2/favicons?domain=${domain}`,
      domain,
      domain,
    );
    handleChange({label: label, value: domain})
  }

  useEffect(
    () => {
      if(!domain){
        dispatch(featureActions.getDomains());
      }
      // console.log(domains)
      if(domain){
        initOption(domain)
      }
    },
    // eslint-disable-next-line
    [domain],
  );



  // top side nav
  const routes = [
    {
      to: '/',
      className: 'c-nav__primary-link',
      icon: <Icons name="overview" />,
      text: 'Overview',
    },
    {
      to: '/actions/forms',
      className: 'c-nav__primary-link',
      icon: <Icons name="actions" />,
      text: 'Actions',
    },
    {
      to: '/content',
      className: 'c-nav__primary-link',
      icon: <Icons name="content" />,
      text: 'Content',
    },
    {
      to: '/attribution/all-pages',
      className: 'c-nav__primary-link',
      icon: <Icons name="attribution" />,
      text: 'Attribution',
    },
    {
      to: '/link-builder',
      className: 'c-nav__primary-link',
      icon: <Icons name="link-builder" />,
      text: 'Link Builder',
    },
  ];

  // bottom side nav
  const secondRoutes = [
    {
      to: '/account/users',
      className: 'c-nav__secondary-link',
      icon: null,
      text: 'Account',
    },
    {
      to: '/settings/domains',
      className: 'c-nav__secondary-link',
      icon: null,
      text: 'Settings',
    },
  ];

  // active route background
  const handleClassName = (route) => {
    if (pathname === '/') {
      return route === '/' ? 'c-nav-active' : '';
    }

    const splitPathArr = pathname.split('/');
    if (route.includes(splitPathArr[1])) {
      return 'c-nav-active';
    }

    return '';
  };



  const getOptions = () => {
    if (domains) {
      const options = domains.map((domain) => {
        return {
          value: domain.domain,
          label: OptionsLabel(
            `https://www.google.com/s2/favicons?domain=${domain.domain}`,
            domain.domain_name,
            domain.domain,
          ),
        };
      });
      return options;
    } else {
      return [];
    }
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      flexDirection: 'row-reverse',
    }),
  };


  const [selectedOption, setSelectedOption] = React.useState('');
  // const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (option) => {
    // console.log(option)
    if (option) {
      dispatch(featureActions.updateDomainId(option.value));
      dispatch(featureActions.getHosts(option.value));
    }
    setSelectedOption(option);
  };

  
  // const domain = useSelector((state) => state.Feature.domains);
  // console.log('domain : ', domain);

  return (
    <nav className="c-nav">
      <div className="c-nav__logo">
        <Link to="/">
          <Logo width="188" height="47" type="white" />
        </Link>
      </div>
      <ul className="c-nav__list">
        <li>
          <Select
            styles={customStyles}
            className="react-select-container"
            classNamePrefix="react-select"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            value={selectedOption}
            onChange={handleChange}
            options={getOptions()}
          />
        </li>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <Link
                to={route.to}
                className={`${route.className} ${handleClassName(route.to)}`}
              >
                {route.icon}
                <span>{route.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="c-nav__list">
        {secondRoutes.map((sRoute, idx) => {
          return (
            <li key={idx}>
              <Link
                to={sRoute.to}
                className={`${sRoute.className} ${handleClassName(sRoute.to)}`}
              >
                <span>{sRoute.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
