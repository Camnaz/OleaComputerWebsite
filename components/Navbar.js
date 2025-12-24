import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { m } from 'framer-motion';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Logo from './Logo';

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

  useEffect(() => {
    // Always scroll to the top of the page after a route finishes changing.
    // This prevents the new page from inheriting the previous scroll position
    // which is especially noticeable on mobile devices.
    const handleRouteComplete = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    router.events.on('routeChangeComplete', handleRouteComplete);
    return () => router.events.off('routeChangeComplete', handleRouteComplete);
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
          <Logo />
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