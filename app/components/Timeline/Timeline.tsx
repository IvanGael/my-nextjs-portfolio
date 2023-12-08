// Timeline.tsx
import React from 'react';
import './timeline_style.css';
import AcademicBackground from './AcademicBackground';

interface TimelineProps {
  data: AcademicBackground[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="timeline-container">
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.degree}</p>
            <p className="text-gray-600">{item.institution}</p>
            <p className="text-gray-500">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
