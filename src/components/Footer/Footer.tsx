import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.container}>
        {/* Можна додати соціальні посилання і сюди */}
        <SocialLinks />
        <div className={styles.footerNav}>
          <a href="/privacy" className={styles.footerLink}>
            Політика конфіденційності
          </a>
          <a href="/terms" className={styles.footerLink}>
            Умови користування
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} YAROS Code. All rights reserved. 2025.
        </p>
      </div>
    </footer>
  );
}
