// AboutCounter.js
import React, { useState, useEffect, useRef } from 'react';
import OdometerComponent from './OdometerComponent';

const AboutCounter = () => {
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const counters = [
    { count: 25, icon: 'assets/img/icon/about-3.png', text: 'Years on the market' },
    { count: 375, icon: 'assets/img/icon/about-4.png', text: 'Projects delivered so far' },
  ];

  return (
    <div className="about-counter-wrap" ref={sectionRef}>
      {counters.map((counter, index) => (
        <div className="about-counter" key={index}>
          <div className="icon">
            <img src={counter.icon} alt="icon" />
          </div>
          <div className="content">
            <h3 className="title">
              <OdometerComponent value={counter.count} start={start} />+
            </h3>
            <p>{counter.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCounter;
