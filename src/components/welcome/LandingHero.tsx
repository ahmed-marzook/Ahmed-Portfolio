import type { CSSProperties } from "react";
import styles from "./LandingHero.module.css";
import heroPortrait from "../../assets/images/me.png";

const heroStats = [
  {
    value: "6+",
    label: "Years shipping enterprise SaaS",
    delay: "0.1s",
  },
  {
    value: "10+",
    label: "Cloud-native services launched",
    delay: "0.15s",
  },
  {
    value: "Mentor",
    label: "Coaching teams on clean delivery",
    delay: "0.2s",
  },
];

const LandingHero = () => (
  <section className={styles.hero}>
    <div className="container">
      <div className={styles.heroContent}>
        <div className={styles.heroText} data-reveal>
          <span className={styles.heroEyebrow}>Full-stack software engineer</span>
          <h1 className={styles.heroTitle}>Ahmed Marzook Portfolio</h1>
          <p className={styles.heroDescription}>
            Curious individual, always seeking to build, learn, and explore new ideas.
          </p>
          <div
            className={styles.heroActions}
            data-reveal
            style={{ "--reveal-delay": "0.05s" } as CSSProperties}
          >
            <a href="#projects" className={`${styles.button} ${styles.primaryButton}`}>
              View featured work
            </a>
            <a href="#contact" className={`${styles.button} ${styles.secondaryButton}`}>
              Let's collaborate
            </a>
          </div>
          <div className={styles.heroStats}>
            {heroStats.map(({ value, label, delay }) => (
              <div
                key={label}
                className={styles.stat}
                data-reveal
                style={{ "--reveal-delay": delay } as CSSProperties}
              >
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.heroVisual}
          data-reveal="zoom"
          style={{ "--reveal-delay": "0.15s" } as CSSProperties}
        >
          <div className={styles.heroProfile}>
            <img src={heroPortrait} alt="Portrait of Ahmed Marzook" loading="eager" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero;
