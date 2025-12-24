import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoLink}>
      <div className={styles.logo}>
        <Image
          src="/images/OleaLogoTransparent250x100.svg"
          alt="Olea Computer Logo"
          width={160}
          height={64}
          priority
          className={styles.logoImage}
          unoptimized
        />
      </div>
    </Link>
  );
}