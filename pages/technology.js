import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';

export default function Technology() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Technology | Olea Computer</title>
        <meta name="description" content="Discover our custom silicon architecture and operating systems built for the next generation of AI devices." />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.heroSection} ${styles.technologyHero}`}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/domeepic.jpg"
              alt="Architectural dome symbolizing our structured approach to technology"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn>
              <h1 className={styles.title}>
                Intelligent <span className={styles.highlight}>Architecture</span>
              </h1>
              <p className={styles.tagline}>
                Building ethical AI systems with the precision of ancient architecture 
                and the flexibility of natural systems
              </p>
            </FadeIn>
          </div>
        </div>

        <div className={styles.grid}>
          <FadeIn delay={0.2}>
            <div className={styles.card}>
              <h3>Custom Silicon</h3>
              <p>Our proprietary chips are designed from the ground up for advanced AI processing,
                optimized for natural language understanding and real-time learning while maintaining
                energy efficiency.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.card}>
              <h3>Operating System</h3>
              <p>Built on principles of simplicity and wisdom, our OS creates a seamless bridge
                between human intention and technological capability, evolving alongside our users.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.card}>
              <h3>AI Architecture</h3>
              <p>Our unique approach to artificial intelligence emphasizes gradual learning and
                deep understanding, inspired by the patient growth of nature's most enduring species.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className={styles.card}>
              <h3>Privacy by Design</h3>
              <p>Security and privacy are deeply rooted in our architecture, ensuring your
                personal data remains as protected as the heart of an ancient olive tree.</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className={styles.techSection}>
            <h2>The Heart of Olive v1</h2>
            <p className={styles.description}>Experience the convergence of our technological innovations in our first AI companion.</p>
            <div className={styles.techSpecs}>
              <ul>
                <li>Next-generation neural processing unit</li>
                <li>Advanced natural language understanding</li>
                <li>On-device AI learning capabilities</li>
                <li>Encrypted personal data vault</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Olea Computer. Drawing wisdom from nature.</p>
      </footer>
    </div>
  );
}