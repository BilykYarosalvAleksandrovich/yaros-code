// src/pages/Home.tsx

import React from "react";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { MusicSection } from "../components/MusicSection/MusicSection";
import { VideoSection } from "../components/VideoSection/VideoSection";
import styles from "../App.module.css";
function Home(): React.ReactElement {
  const latestReleaseData = {
    url: "https://youtube.com/link-to-your-newest-video",
    title: "Назва Нового Треку",
  };

  return (
    /* Додаємо клас, щоб застосувати глобальні налаштування фону та відступів */
    <main className={styles.mainContent}>
      <HeroSection
        latestReleaseUrl={latestReleaseData.url}
        latestReleaseTitle={latestReleaseData.title}
      />
      <AboutSection />
      <MusicSection />
      <VideoSection />
    </main>
  );
}

export default Home;
