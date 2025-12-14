import { Fade } from "react-awesome-reveal"; // ІМПОРТ
import styles from "./AboutSection.module.css";

export function AboutSection(): JSX.Element {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Fade, triggerOnce та cascade */}
      <Fade triggerOnce cascade damping={0.2} duration={800}>
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>Про мене</h3>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              {/* Текст з'явиться першим */}
              <p className={styles.paragraph}>
                Я, [Ваше Ім'я], співак та композитор...
              </p>
              <p className={styles.paragraph}>
                Моя мета — створювати музику, яка допомагає слухачам...
              </p>

              <a href="/bio" className={styles.readMoreLink}>
                Читати повну біографію →
              </a>
            </div>

            <div className={styles.aboutImage}>
              {/* Зображення з'явиться одразу після тексту */}
              <img
                src="./assets/img/profile-photo.jpg"
                alt="Портрет співака та композитора"
                className={styles.profilePhoto}
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
