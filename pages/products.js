import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Home.module.css';

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products | Olea Computer</title>
        <meta name="description" content="Discover Olive v1, our revolutionary AI handheld companion, and other mindfully crafted devices." />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.heroSection} ${styles.productsHero}`}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/openfields.jpg"
              alt="Open fields representing endless possibilities"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn>
              <h1 className={styles.title}>
                Mindfully Crafted <span className={styles.highlight}>Devices</span>
              </h1>
              <p className={styles.tagline}>
                Technology that grows with you, designed for human flourishing
              </p>
            </FadeIn>
          </div>
        </div>

        <div className={styles.content}>
          <FadeIn delay={0.3}>
            <div className={styles.featured}>
              <Image
                src="/images/pictures/waterripple.jpg"
                alt="Water ripples representing the fluid interaction with Olive v1"
                width={800}
                height={400}
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--space-lg)',
                  objectFit: 'cover'
                }}
                quality={90}
              />
              <h2>Olive v1</h2>
              <p>A revolutionary AI companion that grows with you</p>
              <div className={styles.productFeatures}>
                <ul>
                  <li>Custom Olea Silicon for advanced AI processing</li>
                  <li>Thoughtfully designed interface for natural interaction</li>
                  <li>Adaptive learning that respects privacy</li>
                  <li>Beautiful, sustainable materials</li>
                </ul>
              </div>
              <a href="https://olivedevice.com" className={styles.cta} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.comingSoon}>
              <h3>Future Innovations</h3>
              <p>We're cultivating more mindful technology solutions. Stay connected to learn about upcoming products.</p>
              <Link href="/contact" className={styles.cta}>
                Join Our Community
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Olea Computer. Drawing wisdom from nature.</p>
      </footer>
    </div>
  );
}