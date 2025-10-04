import type { CSSProperties } from "react";
import styles from "./AboutMeSection.module.css";
import heroPortrait from "../../assets/images/me.png";

const aboutPills = [
  "System Design",
  "Microservices",
  "Cloud Infrastructure",
  "Developer Experience",
];

const highlights = [
  {
    title: "Platform Modernization",
    description:
      "Transforming legacy monoliths into secure, observable, and scalable service architectures.",
    delay: "0.05s",
  },
  {
    title: "Automation at Scale",
    description:
      "Designing CI/CD pipelines, cloud infrastructure, and guardrails that keep delivery moving fast.",
    delay: "0.1s",
  },
  {
    title: "People & Culture",
    description:
      "Leading squads, mentoring developers, and energizing teams with workshops and pairing sessions.",
    delay: "0.15s",
  },
];

const AboutMeSection = () => (
  <section id="about" className={styles.about}>
    <div className="container">
      <h2 className={styles.sectionTitle} data-reveal>
        About Me
      </h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutVisual} data-reveal="left">
          <img
            src={heroPortrait}
            alt="Ahmed smiling"
            className={styles.aboutImage}
            loading="lazy"
          />
          <div className={styles.aboutQuote}>
            Always curious about the next clever workflow, the next elegant architecture, and the people who make both
            possible.
          </div>
        </div>
        <div
          className={styles.aboutText}
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as CSSProperties}
        >
          <p>
            Experienced software developer with <strong>6+ years</strong> building and scaling enterprise SaaS platforms.
            I'm fluent in Java (8 through 21) and the Spring ecosystem, delivering resilient APIs, modern front-ends, and
            thoughtful developer experiences.
          </p>
          <p>
            I thrive in cross-functional environments—pairing with product, design, and ops to design secure cloud
            infrastructure, enable CI/CD automation, and guide teams through modernization initiatives. Mentorship and
            knowledge-sharing are core to how I operate.
          </p>
          <div className={styles.aboutPills}>
            {aboutPills.map((pill) => (
              <span key={pill} className={styles.pill}>
                {pill}
              </span>
            ))}
          </div>
          <div className={styles.aboutHighlights}>
            {highlights.map(({ title, description, delay }) => (
              <div
                key={title}
                className={styles.highlightCard}
                data-reveal
                style={{ "--reveal-delay": delay } as CSSProperties}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
