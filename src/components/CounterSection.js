// CounterSection.js
import React, { useState, useEffect, useRef } from 'react';
import CounterItem from './CounterItem';

const CounterSection = () => {
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
    { count: 10, text: 'Years of <br />Experience' },
    { count: 18, text: 'Skilled <br /> Performance' },
    { count: 32, text: 'Visited <br /> Conference' },
    { count: 20, text: 'Years of <br />Experience' }, // Adjusted to 1000 for '1k'
  ];

  return (
    <div className="row gy-lg-0 gy-4" ref={sectionRef}>
      {counters.map((counter, index) => (
        <CounterItem
          key={index}
          count={counter.count}
          start={start}
          text={counter.text}
        />
      ))}
    </div>
  );
};

export default CounterSection;
