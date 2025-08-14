import React from 'react';
import { useScrollAnimation, useReducedMotion } from '../../hooks/useScrollAnimation';
import './AnimatedSection.css';

// Main animated section component using CSS animations
export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp',
  duration = 0.6,
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  ...props 
}) {
  const [ref, shouldAnimate] = useScrollAnimation({ 
    threshold, 
    triggerOnce, 
    delay: delay * 1000 
  });
  const prefersReducedMotion = useReducedMotion();

  const animationClass = shouldAnimate ? 'animate-in' : 'animate-out';
  const motionClass = prefersReducedMotion ? 'reduce-motion' : '';

  return (
    <div
      ref={ref}
      className={`animated-section ${animationClass} ${motionClass} ${className}`}
      style={{
        '--animation-duration': `${duration}s`,
        '--animation-delay': `${delay}s`
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Staggered children animation component
export function StaggeredContainer({ 
  children, 
  staggerDelay = 0.1,
  animation = 'fadeInUp',
  className = '',
  ...props 
}) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, shouldAnimate] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`staggered-container ${shouldAnimate ? 'animate-in' : 'animate-out'} ${className}`}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="staggered-item"
          style={{
            '--stagger-delay': `${index * (prefersReducedMotion ? 0 : staggerDelay)}s`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Hover animation wrapper
export function HoverAnimation({ 
  children, 
  className = '',
  ...props 
}) {
  return (
    <div
      className={`hover-animation ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Text reveal animation
export function TextReveal({ 
  text, 
  delay = 0,
  duration = 0.8,
  className = '',
  ...props 
}) {
  const [ref, shouldAnimate] = useScrollAnimation({ delay: delay * 1000 });
  const prefersReducedMotion = useReducedMotion();

  const words = text.split(' ');

  return (
    <div
      ref={ref}
      className={`text-reveal ${shouldAnimate ? 'animate-in' : 'animate-out'} ${className}`}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="text-reveal-word"
          style={{
            '--word-delay': `${index * (prefersReducedMotion ? 0 : 0.1)}s`,
            '--word-duration': `${duration}s`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}