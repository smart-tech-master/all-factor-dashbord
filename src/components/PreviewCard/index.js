import React from 'react';
import { Link } from 'react-router-dom';
import Text from '../Text';

import './style.scss';

export default function PreviewCard({ title, link, data }) {
  return (
    <div className="card">
      <div className="card-title">
        <Text size="22px" color="primary" fontWeight="medium">
          {title}
        </Text>
        <Link to={link}>View all</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => {
              return (
                <tr key={index}>
                  {row.map((item, idx) => {
                    const temp = +item;
                    let cn = '';
                    if (isNaN(temp) === false) {
                      cn = 'number';
                    }
                    if (idx === 0) {
                      cn = 'first-item';
                    }

                    return (
                      <td key={idx} className={cn}>
                        {item}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
        {!data && title === 'Top Links' && (
          <div className="top-links-no-data">
            <span>
              Get started by{' '}
              <Link to="/link-builder">creating your first trackable link</Link>
            </span>
          </div>
        )}
      </table>
    </div>
  );
}
