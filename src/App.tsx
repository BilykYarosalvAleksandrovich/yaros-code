import React from "react";
// Імпорт усіх створених компонентів
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { MusicSection } from "./components/MusicSection/MusicSection";
import { VideoSection } from "./components/VideoSection/VideoSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { SocialLinks } from "./components/SocialLinks/SocialLinks";

// Імпорт CSS Modules для загального лейауту
import styles from "./App.module.css";

// Для Socials Section, який знаходиться тут, нам потрібна Fade
import { Fade } from "react-awesome-reveal";

function App(): JSX.Element {
  // Дані, які можуть легко змінюватися та передаватися в HeroSection
  const latestReleaseData = {
    url: "https://youtube.com/link-to-your-newest-video",
    title: "Назва Нового Треку", // Це відобразиться на головній кнопці
  };

  return (
    <>
      {/* Шапка з навігацією та перемикачем теми */}
      <Header />

      <main>
        {/* 1. Секція Героя */}
        {/* Анімація Fade інтегрована всередині HeroSection.tsx */}
        <HeroSection
          latestReleaseUrl={latestReleaseData.url}
          latestReleaseTitle={latestReleaseData.title}
        />

        {/* 2. Секція Про Мене */}
        {/* Анімація Fade інтегрована всередині AboutSection.tsx */}
        <AboutSection />

        {/* 3. Секція Музика / Дискографія */}
        {/* Анімація Fade інтегрована всередині MusicSection.tsx */}
        <MusicSection />

        {/* 4. Секція Відео */}
        {/* Анімація Fade інтегрована всередині VideoSection.tsx */}
        <VideoSection />

        {/* 5. Секція Контакти та Букінг */}
        {/* Анімація Fade інтегрована всередині ContactSection.tsx */}
        <ContactSection />

        {/* 6. Секція Соцмережі */}
        <section id="socials" className={styles.sectionPadding}>
          <div className={styles.container}>
            {/* Анімація для Socials Section */}
            <Fade triggerOnce duration={800}>
              <h3>Слідкуйте за мною</h3>
              <SocialLinks />
            </Fade>
          </div>
        </section>
      </main>

      {/* Підвал */}
      <Footer />
    </>
  );
}

export default App;
