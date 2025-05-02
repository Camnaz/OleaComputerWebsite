import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { m } from 'framer-motion';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logoStyles from './Logo.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      document.body.classList.remove('scrollLock');
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('scrollLock');
  };

  const links = [
    { href: '/philosophy', text: 'Philosophy' },
    { href: '/products', text: 'Products' },
    { href: '/technology', text: 'Technology' },
    { href: '/contact', text: 'Contact' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`menuBackdrop ${isOpen ? 'visible' : ''}`} 
        onClick={toggleMenu}
        aria-hidden="true"
      />
      
      {/* Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContent}>
          {/* Integrated Logo Content Start */}
          <Link href="/" className={logoStyles.logoLink}>
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={logoStyles.logo}
            >
              <Image
                src="/images/OleaLogoTransparent250x100.svg"
                alt="Olea Computer Logo"
                width={160}
                height={64}
                fetchPriority="high"
                className={logoStyles.logoImage}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  width: '100%',
                  height: 'auto',
                }}
                unoptimized
              />
            </m.div>
          </Link>
          {/* Integrated Logo Content End */}
          
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div 
            className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
            role="navigation"
          >
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                style={{ '--index': i }}
                aria-current={router.pathname === link.href ? 'page' : undefined}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}