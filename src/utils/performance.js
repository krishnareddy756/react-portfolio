// Performance Monitoring and Web Vitals
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Performance metrics storage
const performanceMetrics = {
  cls: null,
  inp: null,
  fcp: null,
  lcp: null,
  ttfb: null
};

// Performance thresholds (Google recommendations)
const PERFORMANCE_THRESHOLDS = {
  cls: { good: 0.1, poor: 0.25 },
  inp: { good: 200, poor: 500 },
  fcp: { good: 1800, poor: 3000 },
  lcp: { good: 2500, poor: 4000 },
  ttfb: { good: 800, poor: 1800 }
};

// Send metrics to analytics (placeholder for future integration)
function sendToAnalytics(metric) {
  // Store in localStorage for development
  const metrics = JSON.parse(localStorage.getItem('performance-metrics') || '[]');
  metrics.push({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    timestamp: Date.now()
  });
  localStorage.setItem('performance-metrics', JSON.stringify(metrics));
  
  // Log to console in development
  if (__DEV__) {
    console.log('Performance Metric:', metric);
  }
  
  // Future: Send to analytics service
  // analytics.track('performance', metric);
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  // Core Web Vitals
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  
  // Custom performance observers
  initCustomPerformanceObservers();
}

// Custom performance observers
function initCustomPerformanceObservers() {
  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            sendToAnalytics({
              name: 'long-task',
              value: entry.duration,
              rating: entry.duration > 100 ? 'poor' : 'needs-improvement'
            });
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.warn('Long task observer not supported');
    }
    
    // Monitor layout shifts
    try {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            sendToAnalytics({
              name: 'layout-shift',
              value: entry.value,
              rating: entry.value > 0.1 ? 'poor' : 'good'
            });
          }
        }
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('Layout shift observer not supported');
    }
  }
}

// Performance budget checker
export function checkPerformanceBudget() {
  const metrics = JSON.parse(localStorage.getItem('performance-metrics') || '[]');
  const budget = {
    passed: 0,
    failed: 0,
    warnings: []
  };
  
  metrics.forEach(metric => {
    const threshold = PERFORMANCE_THRESHOLDS[metric.name];
    if (threshold) {
      if (metric.value <= threshold.good) {
        budget.passed++;
      } else if (metric.value <= threshold.poor) {
        budget.warnings.push(`${metric.name}: ${metric.value} (needs improvement)`);
      } else {
        budget.failed++;
        budget.warnings.push(`${metric.name}: ${metric.value} (poor)`);
      }
    }
  });
  
  return budget;
}

// Performance monitoring hook for React components
export function usePerformanceMonitoring(componentName) {
  const startTime = performance.now();
  
  return {
    // Mark component render complete
    markRenderComplete: () => {
      const renderTime = performance.now() - startTime;
      sendToAnalytics({
        name: 'component-render',
        value: renderTime,
        rating: renderTime > 16 ? 'poor' : 'good',
        component: componentName
      });
    },
    
    // Mark interaction complete
    markInteractionComplete: (interactionName) => {
      const interactionTime = performance.now() - startTime;
      sendToAnalytics({
        name: 'interaction',
        value: interactionTime,
        rating: interactionTime > 100 ? 'poor' : 'good',
        component: componentName,
        interaction: interactionName
      });
    }
  };
}

// Device performance detection
export function getDevicePerformance() {
  // Estimate device performance based on various factors
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const memory = navigator.deviceMemory || 4; // Default to 4GB if not available
  const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores
  
  let performanceScore = 0;
  
  // Memory score (0-40 points)
  if (memory >= 8) performanceScore += 40;
  else if (memory >= 4) performanceScore += 30;
  else if (memory >= 2) performanceScore += 20;
  else performanceScore += 10;
  
  // CPU cores score (0-30 points)
  if (cores >= 8) performanceScore += 30;
  else if (cores >= 4) performanceScore += 25;
  else if (cores >= 2) performanceScore += 15;
  else performanceScore += 5;
  
  // Connection score (0-30 points)
  if (connection) {
    if (connection.effectiveType === '4g') performanceScore += 30;
    else if (connection.effectiveType === '3g') performanceScore += 20;
    else if (connection.effectiveType === '2g') performanceScore += 10;
    else performanceScore += 5;
  } else {
    performanceScore += 25; // Assume good connection if not available
  }
  
  // Categorize performance
  if (performanceScore >= 80) return 'high';
  else if (performanceScore >= 50) return 'medium';
  else return 'low';
}

// Adaptive performance settings
export function getAdaptiveSettings() {
  const devicePerformance = getDevicePerformance();
  
  return {
    // Animation settings
    enableHeavyAnimations: devicePerformance === 'high',
    enableParticleEffects: devicePerformance !== 'low',
    animationDuration: devicePerformance === 'high' ? 1 : devicePerformance === 'medium' ? 0.8 : 0.5,
    
    // 3D settings
    enable3D: devicePerformance !== 'low',
    particleCount: devicePerformance === 'high' ? 100 : devicePerformance === 'medium' ? 50 : 25,
    
    // Image settings
    imageQuality: devicePerformance === 'high' ? 'high' : 'medium',
    lazyLoadThreshold: devicePerformance === 'high' ? '200px' : '100px'
  };
}