import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import styles from './Navbar.module.css';

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
          <Logo />
          
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