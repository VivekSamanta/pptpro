// OdometerComponent.js
import React, { useEffect, useRef } from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';

const OdometerComponent = ({ value, start }) => {
  const odometerRef = useRef(null);
  const odometerInstance = useRef(null);

  useEffect(() => {
    if (odometerRef.current) {
      odometerInstance.current = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: '(,ddd)', // Customize as needed
        theme: 'default'
      });
    }
  }, []);

  useEffect(() => {
    if (odometerInstance.current && start) {
      odometerInstance.current.update(value);
    }
  }, [value, start]);

  return <span ref={odometerRef} className="odometer">0</span>;
};

export default OdometerComponent;
