import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Text from '../Text';
import Link from '../Link';
import Button from '../Button';
import { getLabelFromDateRange } from 'utils/getLabelFromDateRange';

// import iconLinkBuilder from '../../assets/images/Nav/icon-link-builder.svg';

import './Table.scss';

const Table = ({ name, to, children, action, onActionClick, data }) => {
  const [connected, setConnected] = React.useState('');

  const dateRange = useSelector((state) => state.Feature.dateRange);

  const handleActionClick = () => {
    onActionClick(true);
    if (action === 'Connect Search Console') {
      setConnected('c-table__button-connected');
    } else {
      setConnected('');
    }
  };

  return (
    <section className="c-table">
      <div className="c-table__header">
        <Text size="22px" color="primary" fontWeight="medium">
          {name}{' '}
          <span className="date-range">
            {getLabelFromDateRange(dateRange, 'mdy')}
          </span>
        </Text>
        {data && (
          <div className="link-data">
            {Object.keys(data).map((key) => {
              return (
                <div key={key} className="link-data--item">
                  <div className="key">{key}:</div>
                  <div className="value"> {data[key]}</div>
                </div>
              );
            })}
          </div>
        )}
        {to && (
          <div className="u-margin-left-medium">
            <Link to={to}>View more</Link>
          </div>
        )}
        {action && (
          <Button
            className={`c-table__button default ${connected}`}
            onClick={handleActionClick}
          >
            {/* <img src={iconLinkBuilder} alt="" /> */}
            {action}
          </Button>
        )}
      </div>
      <div className="c-table__main">{children}</div>
    </section>
  );
};

Table.propTypes = {
  /**
   * Section name
   */
  name: PropTypes.string,
  /**
   * View more href
   */
  to: PropTypes.string,
  children: PropTypes.any,
};

export default Table;
