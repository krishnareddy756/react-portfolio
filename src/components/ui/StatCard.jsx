import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './StatCard.css';

const StatCard = ({ 
  icon, 
  value, 
  label, 
  color = 'primary', 
  className = '',
  animated = true,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  delay = 0
}) => {
  return (
    <div className={`stat-card stat-card-${color} ${className}`}>
      <div className="stat-card-content">
        <div className="stat-icon">
          {icon}
        </div>
        <div className="stat-info">
          <div className="stat-value">
            {animated ? (
              <AnimatedCounter 
                value={value}
                prefix={prefix}
                suffix={suffix}
                decimals={decimals}
                duration={duration}
                delay={delay}
                className="animated-counter-large"
              />
            ) : (
              `${prefix}${value}${suffix}`
            )}
          </div>
          <div className="stat-label">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;