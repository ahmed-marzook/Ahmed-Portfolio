import styles from "./LandingHeader.module.css";

const LandingHeader = () => (
  <header className={styles.header}>
    <nav className={`container ${styles.nav}`}>
      <div className={styles.logo}>Ahmed Marzook</div>
      <button className={styles.menuToggle} type="button" aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>
          About
        </a>
        <a href="#projects" className={styles.navLink}>
          Projects
        </a>
        <a href="#skills" className={styles.navLink}>
          Skills
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </div>
    </nav>
  </header>
);

export default LandingHeader;
