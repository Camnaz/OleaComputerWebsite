import Head from 'next/head';
import FadeIn from '../../components/FadeIn';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

export default function OliveV1() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olive v1 | Olea Computer</title>
        <meta name="description" content="Discover Olive v1 - The mindful AI companion that grows with you." />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroProduct}>
          <div className={styles.heroBackground}>
            <Image 
              src="/images/pictures/waterripple.jpg"
              alt="Water ripples symbolizing fluid AI interaction"
              fill
              style={{ objectFit: 'cover' }}
              priority
              quality={90}
            />
          </div>
          <FadeIn>
            <h1 className={styles.title}>Olive v1</h1>
            <p className={styles.subtitle}>Your mindful AI companion</p>
          </FadeIn>
        </div>

        <div className={styles.content}>
          <FadeIn delay={0.2}>
            <div className={styles.productImage}>
              <Image
                src="/images/pictures/stillsea.jpg"
                alt="Olive v1 Device"
                width={800}
                height={500}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.features}>
              <h2>Features</h2>
              <ul>
                <li>Custom silicon optimized for on-device AI</li>
                <li>Natural language understanding</li>
                <li>Contextual awareness</li>
                <li>Privacy-first design</li>
                <li>All-day battery life</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.specs}>
              <h2>Technical Specifications</h2>
              <div className={styles.specGrid}>
                <div>
                  <h3>Processor</h3>
                  <p>Olea Neural Engine v1</p>
                </div>
                <div>
                  <h3>Memory</h3>
                  <p>8GB LPDDR5</p>
                </div>
                <div>
                  <h3>Storage</h3>
                  <p>128GB NVMe</p>
                </div>
                <div>
                  <h3>Display</h3>
                  <p>5.5" OLED</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}