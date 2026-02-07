import type { CSSProperties } from "react";
import birthYourWayImg from "../../assets/images/birth-your-way.png";
import lastLangImg from "../../assets/images/lastlang.png";
import lifevaultImg from "../../assets/images/lifevault-screenshot.png";
import tenziesImg from "../../assets/images/tenzies.png";
import weatherBridgeImg from "../../assets/images/weather-bridge.jpg";
import techIcons from "./techIcons";
import styles from "./FeaturedProjectsSection.module.css";

type ProjectTag = {
  label: string;
  iconKey?: keyof typeof techIcons;
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  tags: ProjectTag[];
  links: ProjectLink[];
  reveal?: {
    direction?: string;
    delay?: string;
  };
};

const projects: Project[] = [
  {
    title: "Birth Your Way",
    description:
      "A personalized birth plan generator that empowers families with curated, evidence-backed guidance. Includes dynamic questionnaires, shareable plans, and an empathetic experience for every stage of birth preparation.",
    image: {
      src: birthYourWayImg.src,
      alt: "Birth Your Way birth plan generator placeholder",
      width: birthYourWayImg.width,
      height: birthYourWayImg.height,
    },
    tags: [
      { label: "React", iconKey: "react" },
      { label: "TypeScript", iconKey: "typescript" },
      { label: "Vite", iconKey: "vite" },
      { label: "Azure", iconKey: "azure" },
      { label: "npm", iconKey: "npm" },
    ],
    links: [
      { label: "Visit site", href: "https://www.birthplan.co.uk/" },
    ],
    reveal: {},
  },
  {
    title: "LifeVault",
    description:
      "A local file organiser that helps you categorise and manage your personal documents securely on your own machine. Features category management, file organisation, bookmarks, and encrypted local storage.",
    image: {
      src: lifevaultImg.src,
      alt: "LifeVault local file organiser dashboard",
      width: lifevaultImg.width,
      height: lifevaultImg.height,
    },
    tags: [
      { label: "Electron", iconKey: "electron" },
      { label: "React", iconKey: "react" },
      { label: "TypeScript", iconKey: "typescript" },
      { label: "Tailwind", iconKey: "tailwind" },
    ],
    links: [
      { label: "Visit site", href: "https://lifevault.sabrlabs.co.uk/" },
    ],
    reveal: {
      direction: "right",
      delay: "0.05s",
    },
  },
  {
    title: "The Last High-Level Language",
    description:
      "A dystopian spin on Hangman—each wrong guess wipes out a programming language, inching humanity toward an assembly-only future. Includes an interactive keyboard, language lore, and immersive animations.",
    image: {
      src: lastLangImg.src,
      alt: "Screenshot from The Last High-Level Language game",
      width: lastLangImg.width,
      height: lastLangImg.height,
    },
    tags: [
      { label: "React", iconKey: "react" },
      { label: "JavaScript", iconKey: "javascript" },
      { label: "Vite", iconKey: "vite" },
      { label: "npm", iconKey: "npm" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/The-Last-High-Level-Language",
      },
      {
        label: "Visit Site",
        href: "https://lastlang.kaizenflow.dev/",
      },
    ],
    reveal: {
      direction: "right",
      delay: "0.05s",
    },
  },
  {
    title: "Tenzies Game",
    description:
      "A quick-hit dice game built to hone state management in React. Features animated rolls, streak tracking, celebratory confetti, and a fully responsive interface for desktop and mobile.",
    image: {
      src: tenziesImg.src,
      alt: "Tenzies dice game interface",
      width: tenziesImg.width,
      height: tenziesImg.height,
    },
    tags: [
      { label: "React", iconKey: "react" },
      { label: "JavaScript", iconKey: "javascript" },
      { label: "Vite", iconKey: "vite" },
      { label: "npm", iconKey: "npm" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/Tenzies-Learning-React",
      },
      { label: "Visit Site", href: "https://tenzies.kaizenflow.dev/" },
    ],
    reveal: {
      delay: "0.1s",
    },
  },
  {
    title: "WeatherBridge API",
    description:
      "A Spring Boot service that aggregates Visual Crossing weather data with Redis caching to deliver fast, reliable forecasts. Features clean architecture, Terraform-managed AWS infrastructure, and automated CI/CD.",
    image: {
      src: weatherBridgeImg.src,
      alt: "WeatherBridge API dashboard placeholder",
      width: weatherBridgeImg.width,
      height: weatherBridgeImg.height,
    },
    tags: [
      { label: "Java", iconKey: "java" },
      { label: "Spring Boot", iconKey: "spring" },
      { label: "Redis", iconKey: "redis" },
      { label: "AWS", iconKey: "aws" },
      { label: "React", iconKey: "react" },
      { label: "Terraform", iconKey: "hashicorpTerraform" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/Weather-Bridge",
      },
    ],
    reveal: {
      direction: "right",
      delay: "0.15s",
    },
  },
  {
    title: "HabitPact",
    description:
      "A social habit-tracking platform with accountability partners, streak insights, and push notifications. Built with Spring Boot, MongoDB, and React plus JWT authentication and contract-tested APIs.",
    image: {
      src: "https://placehold.co/600x400/0f172a/ffffff?text=HabitPact",
      alt: "HabitPact dashboard placeholder",
      width: 600,
      height: 400,
    },
    tags: [
      { label: "Java", iconKey: "java" },
      { label: "Spring Boot", iconKey: "spring" },
      { label: "MongoDB", iconKey: "mongodb" },
      { label: "React", iconKey: "react" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/Habit-Pact",
      },
    ],
    reveal: {
      delay: "0.2s",
    },
  },
  {
    title: "Tech Tales",
    description:
      "A modern publishing platform with editorial workflows, author profiles, markdown support, and sanitized content handling. Powered by Spring Boot, PostgreSQL, and a responsive React front end.",
    image: {
      src: "https://placehold.co/600x400/312e81/ffffff?text=Tech+Tales",
      alt: "Tech Tales CMS placeholder",
      width: 600,
      height: 400,
    },
    tags: [
      { label: "Java", iconKey: "java" },
      { label: "Spring Boot", iconKey: "spring" },
      { label: "PostgreSQL", iconKey: "postgres" },
      { label: "React", iconKey: "react" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/Tech-Tales-Java",
      },
    ],
    reveal: {
      direction: "right",
      delay: "0.25s",
    },
  },
  {
    title: "DayMapper",
    description:
      "A collaborative task management suite featuring real-time updates, role-based access, and rich analytics. Uses Spring Boot, React, and PostgreSQL with comprehensive automated testing.",
    image: {
      src: "https://placehold.co/600x400/164e63/ffffff?text=DayMapper",
      alt: "DayMapper task board placeholder",
      width: 600,
      height: 400,
    },
    tags: [
      { label: "Java", iconKey: "java" },
      { label: "Spring Boot", iconKey: "spring" },
      { label: "PostgreSQL", iconKey: "postgres" },
      { label: "React", iconKey: "react" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/Day-Mapper",
      },
    ],
    reveal: {
      delay: "0.3s",
    },
  },
  {
    title: "DoItNow",
    description:
      "A React Native productivity app designed for fast, offline-friendly task capture. Features intuitive gestures, calendar sync, reminders, and a focus mode for deep work sprints.",
    image: {
      src: "https://placehold.co/600x400/0b1120/ffffff?text=DoItNow",
      alt: "DoItNow React Native to-do app placeholder",
      width: 600,
      height: 400,
    },
    tags: [
      { label: "React Native", iconKey: "react" },
      { label: "Expo" },
      { label: "TypeScript", iconKey: "typescript" },
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/ahmed-marzook/DoItNow",
      },
    ],
    reveal: {
      direction: "right",
      delay: "0.35s",
    },
  },
];

const FeaturedProjectsSection = () => (
  <section id="projects" className={styles.projects}>
    <div className="container">
      <h2 className={styles.sectionTitle} data-reveal>
        Featured Projects
      </h2>
      <div className={styles.projectsGrid}>
        {projects.map(({ title, description, image, tags, links, reveal }) => (
          <div
            key={title}
            className={styles.projectCard}
            data-reveal={reveal?.direction ?? ""}
            style={
              reveal?.delay
                ? ({ "--reveal-delay": reveal.delay } as CSSProperties)
                : undefined
            }
          >
            <div className={styles.projectMedia}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={image.width}
                height={image.height}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{title}</h3>
              <p className={styles.projectDescription}>{description}</p>
              <div className={styles.projectTags}>
                {tags.map(({ label, iconKey }) => (
                  <span key={label} className={styles.tag}>
                    {iconKey ? (
                      <img src={techIcons[iconKey]} alt="" aria-hidden="true" loading="lazy" />
                    ) : null}
                    {label}
                  </span>
                ))}
              </div>
              <div className={styles.projectActions}>
                {links.map(({ label, href }) => (
                  <a key={label} href={href} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;
