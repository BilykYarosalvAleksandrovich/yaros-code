import React from "react";
import { Fade } from "react-awesome-reveal"; // ІМПОРТ
import styles from "./AboutSection.module.css";
import { Link } from "react-router-dom";

export function AboutSection(): React.ReactElement {
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
                Вітаю на моєму музичному просторі!
                <br />
                <br /> Мене звати Ярослав БІлик, і я — сучасний композитор та
                музикант. Але перш за все,— меломан, який вірить, що музика є
                найпотужнішою силою для трансформації. Не маю обмежень у
                творчості. Саме тому моя музика така різна: вона охоплює широкий
                спектр — від мінімалістичних фортепіанних акордів (ідеальних для
                моменту спокою чи глибоких роздумів) до потужного, драйвового
                DJ-саунду, який змушує рухатися вперед. Постійно експериментую,
                бо шукаю ідеальний саундтрек для Вашого життя.
              </p>
              <p className={styles.paragraph}>
                Моя Місія: Дати Вам імпульс. <br /> <br /> Моя мета не просто
                створювати гарні мелодії.
                <br />
                <br /> Кожен трек, який я пишу, має єдину, чітку мету: надихати
                Вас на нові досягнення. <br />
                Якщо Ви шукаєте музику, яка допоможе:{" "}
                <ul className={styles.benefitsList}>
                  <li>Зосередитися на важливій меті.</li>
                  <li>Знайти сили подолати перешкоду.</li>
                  <li>Святкувати перші або найгучніші перемоги.</li>
                </ul>{" "}
                ...у такому випадку Ви саме там де потрібно бути в цей момент.{" "}
                <br /> <br />
                Слухайте. Відчувайте. Досягайте.
              </p>

              <div className={styles.buttonWrapper}>
                <Link to="/bio" className={styles.readMoreLink}>
                  Читати повну біографію →
                </Link>
              </div>
            </div>

            <div className={styles.aboutImage}>
              {/* Зображення з'явиться одразу після тексту */}
              <img
                src="images/for-about.jpg"
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
