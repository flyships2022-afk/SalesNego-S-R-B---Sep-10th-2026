import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds (default: 700)
  distance?: number; // in px (default: 28)
  threshold?: number; // 0 to 1 (default: 0.12)
  rootMargin?: string; // default: '0px 0px -40px 0px'
  as?: React.ElementType;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  distance = 28,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <Component
      id={id}
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
};

interface ScrollRevealGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // delay between each child in ms (default: 100)
  baseDelay?: number; // base delay in ms (default: 0)
  as?: React.ElementType;
  id?: string;
}

export const ScrollRevealGroup: React.FC<ScrollRevealGroupProps> = ({
  children,
  className = '',
  staggerDelay = 120,
  baseDelay = 0,
  as: Component = 'div',
  id,
}) => {
  return (
    <Component id={id} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <ScrollReveal delay={baseDelay + index * staggerDelay}>
            {child}
          </ScrollReveal>
        );
      })}
    </Component>
  );
};
