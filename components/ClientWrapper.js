import { useState, useEffect } from 'react';

export default function ClientWrapper({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return children;
}