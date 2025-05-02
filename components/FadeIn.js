import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ClientWrapper from './ClientWrapper';

export default function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  if (!isMounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <ClientWrapper>
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          {children}
        </m.div>
      </LazyMotion>
    </ClientWrapper>
  );
}