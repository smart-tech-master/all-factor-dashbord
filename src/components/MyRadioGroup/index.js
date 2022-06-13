import React, { useState } from 'react';
import './MyRadioGroup.scss';

export default function MyRadioGroup({ types, handleRadio = () => {} }) {
  const [pick, setPick] = useState('');
  types = ['Latte', 'Flat White', 'Decaf', 'Long Black', 'Soy Cap', 'Mocha'];
  const handleRadioChange = (e) => {
    setPick(e.target.value);
    handleRadio(e.target.value);
  };
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          {types.map((type, key) => {
            const isCurrent = pick === type;
            return (
              <div key={key} className="radioPad">
                <div>
                  <label
                    className={
                      isCurrent
                        ? 'radioPad__wrapper radioPad__wrapper--selected'
                        : 'radioPad__wrapper'
                    }
                  >
                    <input
                      className="radioPad__radio"
                      type="radio"
                      name="coffeeTypes"
                      id={type}
                      value={type}
                      onChange={handleRadioChange}
                    />
                    {type}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
