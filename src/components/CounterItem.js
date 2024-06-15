// CounterItem.js
import React from 'react';
import OdometerComponent from './OdometerComponent';

const CounterItem = ({ count, start, text }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="counter-item">
        <h3 className="title">
          <OdometerComponent value={count} start={start} />
        </h3>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
};

export default CounterItem;
