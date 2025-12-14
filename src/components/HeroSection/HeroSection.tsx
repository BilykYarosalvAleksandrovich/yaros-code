import React from "react";
import { Fade } from "react-awesome-reveal"; // ІМПОРТ
import styles from "./HeroSection.module.css";

interface HeroProps {
  latestReleaseUrl: string;
  latestReleaseTitle: string;
}

export function HeroSection({
  latestReleaseUrl,
  latestReleaseTitle,
}: HeroProps): React.ReactElement {
  return (
    <section id="hero" className={styles.heroSection}>
      <Fade duration={1200}>
        {" "}
        {/* Застосовуємо плавне з'явлення до всієї секції */}
        <div className={styles.container}>
          <h2 className={styles.headline}>
            Музика, що резонує.
            <br />
            Співак та Композитор.
          </h2>

          <p className={styles.tagline}>
            Ласкаво просимо до офіційного музичного простору. Пориньте у світ
            нових мелодій.
          </p>

          <a
            href={latestReleaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
            aria-label={`Слухати: ${latestReleaseTitle}`}
          >
            ▶️ Слухати останній реліз: {latestReleaseTitle}
          </a>

          <a href="#videos" className={styles.secondaryLink}>
            Дивитися кліпи
          </a>
        </div>
      </Fade>
    </section>
  );
}
