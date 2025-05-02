import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';

export default function Philosophy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Philosophy | Olea Computer</title>
        <meta name="description" content="Drawing wisdom from the ancient olive tree to create mindful technology for the future." />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.heroSection} ${styles.philosophyHero}`}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/hillylandscape.jpg"
              alt="Serene hillside landscape"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn>
              <h1 className={styles.title}>
                Ancient Wisdom, <span className={styles.highlight}>Modern Innovation</span>
              </h1>
              <p className={styles.tagline}>
                The olive tree, with its centuries of growth and resilience, teaches us patience, 
                wisdom, and the importance of deep roots.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Mindful Design</h3>
            <p>Every product we create is thoughtfully designed to enhance human connection rather than replace it.</p>
          </div>

          <div className={styles.card}>
            <h3>Sustainable Growth</h3>
            <p>Like the olive tree's slow, steady growth, we believe in building technology that stands the test of time.</p>
          </div>

          <div className={styles.card}>
            <h3>Natural Intelligence</h3>
            <p>Our AI systems are designed to complement human wisdom, not compete with it.</p>
          </div>

          <div className={styles.card}>
            <h3>Deep Roots</h3>
            <p>We build on foundations of proven technology while pioneering new frontiers.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Olea Computer. Drawing wisdom from nature.</p>
      </footer>
    </div>
  );
}