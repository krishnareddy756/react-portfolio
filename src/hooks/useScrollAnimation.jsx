import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for scroll-triggered animations
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -100px 0px',
    delay = 0
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return [ref, shouldAnimate];
}

// Hook for staggered animations
export function useStaggeredAnimation(itemCount, options = {}) {
  const {
    staggerDelay = 100,
    threshold = 0.1,
    triggerOnce = true
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  const [animatedItems, setAnimatedItems] = useState(new Set());

  useEffect(() => {
    if (inView) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setAnimatedItems(prev => new Set([...prev, i]));
        }, i * staggerDelay);
      }
    }
  }, [inView, itemCount, staggerDelay]);

  return [ref, animatedItems];
}

// Hook for parallax scrolling effect
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [elementRef, offset];
}

// Hook for mouse tracking
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}