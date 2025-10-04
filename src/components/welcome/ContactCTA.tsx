import type { CSSProperties } from "react";
import styles from "./ContactCTA.module.css";

const contactLinks = [
  { label: "Email", href: "mailto:m4marzook@gmail.com" },
  { label: "GitHub", href: "https://github.com/ahmed-marzook" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-marzook-595009188/",
  },
];

const ContactCTA = () => (
  <section id="contact" className={styles.contact}>
    <div className="container">
      <div className={styles.contactContent} data-reveal>
        <h2 className={styles.sectionTitle}>Let's build something remarkable</h2>
        <p
          data-reveal
          style={{ "--reveal-delay": "0.05s" } as CSSProperties}
        >
          I'm always excited to collaborate on resilient platforms, thoughtful product experiences, and initiatives that help
          teams ship with confidence. Tell me about what you're building.
        </p>
        <div
          className={styles.contactLinks}
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as CSSProperties}
        >
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={styles.contactLink}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactCTA;
