import { useRouter } from 'next/router';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import '../styles/globals.css';  // Make sure this is first
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <AnimatePresence mode="wait">
        <m.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;