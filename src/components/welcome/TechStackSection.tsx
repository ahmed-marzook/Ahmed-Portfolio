import type { CSSProperties } from "react";
import techIcons from "./techIcons";
import styles from "./TechStackSection.module.css";

const techStack = [
  { name: "Java", iconKey: "java", alt: "Java logo", delay: "0.12s" },
  { name: "Spring", iconKey: "spring", alt: "Spring Framework logo", delay: "0.17s" },
  { name: "React", iconKey: "react", alt: "React logo", delay: "0.22s" },
  { name: "TypeScript", iconKey: "typescript", alt: "TypeScript logo", delay: "0.27s" },
  { name: "Node.js", iconKey: "node", alt: "Node.js logo", delay: "0.32s" },
  { name: "Python", iconKey: "python", alt: "Python logo", delay: "0.37s" },
  { name: "Docker", iconKey: "docker", alt: "Docker logo", delay: "0.42s" },
  { name: "AWS", iconKey: "aws", alt: "AWS logo", delay: "0.47s" },
  { name: "Terraform", iconKey: "hashicorpTerraform", alt: "Terraform logo", delay: "0.52s" },
  { name: "PostgreSQL", iconKey: "postgres", alt: "PostgreSQL logo", delay: "0.57s" },
  { name: "MongoDB", iconKey: "mongodb", alt: "MongoDB logo", delay: "0.62s" },
];

const skillCategories = [
  {
    title: "Core Engineering",
    delay: "0.15s",
    items: [
      "Java 8, 11, 17, 21",
      "Spring Boot & Spring Cloud",
      "REST & GraphQL API design",
      "SQL & relational modelling",
    ],
  },
  {
    title: "Cloud & DevOps",
    delay: "0.2s",
    items: [
      "AWS & Azure architecture",
      "Docker & container orchestration",
      "Terraform, Helm & IaC practices",
      "CI/CD pipelines & observability",
    ],
  },
  {
    title: "Experience & Tooling",
    delay: "0.25s",
    items: [
      "React, TypeScript & modern JS",
      "Python scripting & automation",
      "Playwright end-to-end testing",
      "Git (GitLab, GitHub, Bitbucket)",
    ],
  },
];

const TechStackSection = () => (
  <section id="skills" className={styles.skills}>
    <div className="container">
      <h2 className={styles.sectionTitle} data-reveal>
        Skills
      </h2>
      <p
        className={styles.skillsIntro}
        data-reveal
        style={{ "--reveal-delay": "0.05s" } as CSSProperties}
      >
        A toolbox shaped by enterprise product delivery: scalable backend services, resilient infrastructure, and immersive
        interfaces that prioritize user outcomes. Here are the platforms and frameworks I lean on daily.
      </p>
      <div
        className={styles.techStackShowcase}
        aria-label="Core technology stack"
        data-reveal
        style={{ "--reveal-delay": "0.1s" } as CSSProperties}
      >
        <h3 className={styles.techStackTitle}>Daily Drivers</h3>
        <div className={styles.techIconGrid}>
          {techStack.map(({ name, iconKey, alt, delay }) => (
            <figure
              key={name}
              className={styles.techIconCard}
              data-reveal
              style={{ "--reveal-delay": delay } as CSSProperties}
            >
              <img src={techIcons[iconKey]} alt={alt} loading="lazy" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.skillsGrid}>
        {skillCategories.map(({ title, delay, items }) => (
          <div
            key={title}
            className={styles.skillCategory}
            data-reveal
            style={{ "--reveal-delay": delay } as CSSProperties}
          >
            <h3>{title}</h3>
            <div className={styles.skillList}>
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
