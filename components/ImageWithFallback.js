import { useState } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...props
}) {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <Image
        src={error ? '/images/fallback.svg' : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        onError={() => setError(true)}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </m.div>
  );
}