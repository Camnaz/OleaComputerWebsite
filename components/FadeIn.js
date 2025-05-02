import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ClientWrapper from './ClientWrapper';

export default function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  if (!isMounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <ClientWrapper>
      <LazyMotion features={domAnimation}>
        <m.div
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {children}
        </m.div>
      </LazyMotion>
    </ClientWrapper>
  );
}