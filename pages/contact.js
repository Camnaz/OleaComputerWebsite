import Head from 'next/head';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | Olea Computer</title>
        <meta name="description" content="Get in touch with us to learn more about our vision for mindful technology." />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.heroSection} ${styles.contactHero}`}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/stillsea.jpg"
              alt="Calm waters representing open communication"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn>
              <h1 className={styles.title}>
                Let's Grow <span className={styles.highlight}>Together</span>
              </h1>
              <p className={styles.tagline}>
                Like the olive branch that symbolizes peace and connection, we believe in 
                fostering meaningful relationships with our community.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <FadeIn delay={0.2}>
            <div className={styles.contactCard}>
              <h3>Early Access</h3>
              <p>Join our waiting list to be among the first to experience Olive v1.</p>
              <a href="https://olivedevice.com" className={styles.cta} target="_blank" rel="noopener noreferrer">
                Join Waitlist
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.contactCard}>
              <h3>Press Inquiries</h3>
              <p>For media and press inquiries, please reach out to:</p>
              <a href="mailto:press@oleacomputer.com" className={styles.link}>
                press@oleacomputer.com
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.contactCard}>
              <h3>Partnerships</h3>
              <p>Interested in partnering with us? Let's explore possibilities:</p>
              <a href="mailto:partners@oleacomputer.com" className={styles.link}>
                partners@oleacomputer.com
              </a>
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