import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olea Computer | Mindful Technology for Human Flourishing</title>
        <meta name="description" content="Pioneering ethical AI hardware that puts humans first, inspired by nature's wisdom." />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.heroSection} ${styles.homeHero}`}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/waterripple.jpg"
              alt="Water ripples representing the fluid harmony of our technology"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn>
              <h1 className={styles.title}>
                Human-First <span className={styles.highlight}>AI</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className={styles.tagline}>
                Where ancient wisdom meets ethical innovation
              </p>
            </FadeIn>
          </div>
        </div>

        <div className={styles.content}>
          <FadeIn delay={0.3}>
            <div className={styles.hero}>
              <p className={styles.description}>
                In a world of artificial intelligence, we choose authentic connection. 
                Inspired by the olive tree's enduring wisdom, we're creating AI companions 
                that enhance human potential rather than replace it. Our custom OS and 
                ethical AI put you in control, ensuring technology serves humanity's 
                true needs.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.featured}>
              <Image
                src="/images/pictures/stillsea.jpg"
                alt="Calm waters reflecting our balanced approach to technology"
                width={800}
                height={400}
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--space-lg)',
                  objectFit: 'cover'
                }}
                quality={90}
              />
              <h2>Meet Olive v1</h2>
              <p>A revolutionary AI companion that respects your autonomy and grows with your values</p>
              <a href="https://olivedevice.com" className={styles.cta} target="_blank" rel="noopener noreferrer">
                Discover Olive v1
              </a>
            </div>
          </FadeIn>

          <div className={styles.grid}>
            {[
              {
                href: "/philosophy",
                title: "Our Philosophy",
                desc: "See how we're building AI that amplifies human wisdom rather than replacing it."
              },
              {
                href: "/products",
                title: "Products",
                desc: "Experience technology designed to enhance your natural intelligence, not compete with it."
              },
              {
                href: "/technology",
                title: "Technology",
                desc: "Explore our revolutionary OS and ethical AI architecture built for human flourishing."
              },
              {
                href: "/contact",
                title: "Connect",
                desc: "Join a community that's shaping a more mindful future of technology."
              }
            ].map((card, i) => (
              <FadeIn key={card.href} delay={0.5 + (i * 0.1)}>
                <Link href={card.href} className={styles.card}>
                  <h3>{card.title} &rarr;</h3>
                  <p>{card.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>"Technology should enhance our humanity, not replace it. We're building AI that grows alongside us, guided by timeless wisdom."</p>
        <span>© {new Date().getFullYear()} Olea Computer</span>
      </footer>
    </div>
  );
}