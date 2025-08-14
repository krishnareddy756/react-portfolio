import React from 'react';
import './ProgressRing.css';

const ProgressRing = ({ 
  value = 0, 
  max = 100, 
  size = 120, 
  strokeWidth = 8, 
  color = 'var(--primary-color)', 
  label = '', 
  showPercentage = true,
  className = '' 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`progress-ring ${className}`} style={{ width: size, height: size }}>
      <svg
        className="progress-ring-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          className="progress-ring-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="var(--glass-border, rgba(255, 255, 255, 0.1))"
        />
        
        {/* Progress circle */}
        <circle
          className="progress-ring-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      
      <div className="progress-ring-content">
        {showPercentage && (
          <div className="progress-ring-percentage">
            {percentage.toFixed(1)}%
          </div>
        )}
        {label && (
          <div className="progress-ring-label">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressRing;