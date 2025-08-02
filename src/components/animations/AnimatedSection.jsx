import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useReducedMotion } from '../../hooks/useScrollAnimation';

// Predefined animation variants
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  
  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  
  scaleInRotate: {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  },
  
  // Slide animations
  slideInUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  
  slideInDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  
  // Complex animations
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  },
  
  flipIn: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 }
  }
};

// Main animated section component
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

  // Use simple fade for reduced motion
  const selectedAnimation = prefersReducedMotion ? 'fadeIn' : animation;
  const variant = animationVariants[selectedAnimation] || animationVariants.fadeInUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variant}
      transition={{
        duration: prefersReducedMotion ? 0.2 : duration,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
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
  const selectedAnimation = prefersReducedMotion ? 'fadeIn' : animation;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay
      }
    }
  };

  const [ref, shouldAnimate] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={animationVariants[selectedAnimation]}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.6 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Hover animation wrapper
export function HoverAnimation({ 
  children, 
  scale = 1.05, 
  y = -5,
  transition = { type: "spring", stiffness: 400, damping: 17 },
  className = '',
  ...props 
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? {} : { scale, y }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          transition={{ duration: prefersReducedMotion ? 0.2 : duration }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}