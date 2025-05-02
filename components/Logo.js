import Link from 'next/link';
import { m } from 'framer-motion';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoLink}>
      <m.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={styles.logoWrapper}
      >
        <Image
          src="/images/OleaLogoTransparent250x100.svg"
          alt="Olea Computer Logo"
          width={200}
          height={80}
          priority
          className={styles.logoImage}
          style={{ 
            objectFit: 'contain',
            objectPosition: 'left center'
          }}
        />
      </m.div>
    </Link>
  );
}