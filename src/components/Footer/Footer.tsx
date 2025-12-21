// src/components/Footer/Footer.tsx

import React from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.mainFooter}>
      <div className={styles.container}>
        {/* Блок соціальних мереж з окремим класом для стилізації іконок */}
        <div className={styles.socialWrapper}>
          <SocialLinks />
        </div>

        <nav className={styles.footerNav}>
          <a href="/privacy" className={styles.footerLink}>
            Політика конфіденційності
          </a>
          <span className={styles.separator}>|</span>
          <a href="/terms" className={styles.footerLink}>
            Умови користування
          </a>
        </nav>

        <p className={styles.copyright}>
          &copy; {currentYear} YAROS Code. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
