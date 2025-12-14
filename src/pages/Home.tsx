// src/pages/Home.tsx

import React from "react";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { MusicSection } from "../components/MusicSection/MusicSection";
import { VideoSection } from "../components/VideoSection/VideoSection";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import { Fade } from "react-awesome-reveal";
import styles from "../App.module.css"; // Використовуємо стилі лейауту з App.module.css

// Головна сторінка, яка містить усі секції SPA
function Home(): React.ReactElement {
  // Дані тепер живуть тут
  const latestReleaseData = {
    url: "https://youtube.com/link-to-your-newest-video",
    title: "Назва Нового Треку",
  };

  return (
    <main>
      {/* 1. Секція Героя */}
      <HeroSection
        latestReleaseUrl={latestReleaseData.url}
        latestReleaseTitle={latestReleaseData.title}
      />

      {/* 2. Секція Про Мене */}
      <AboutSection />

      {/* 3. Секція Музика / Дискографія */}
      <MusicSection />

      {/* 4. Секція Відео */}
      <VideoSection />

      {/* 5. Секція Контакти та Букінг */}
      <ContactSection />

      {/* 6. Секція Соцмережі */}
      <section id="socials" className={styles.sectionPadding}>
        <div className={styles.container}>
          <Fade triggerOnce duration={800}>
            <h3>Слідкуйте за мною</h3>
            <SocialLinks />
          </Fade>
        </div>
      </section>
    </main>
  );
}

export default Home;
