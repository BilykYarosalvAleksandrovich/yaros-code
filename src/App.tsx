// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom"; // ЗАЛИШАЄМО Routes та Route

// Імпорт компонентів сторінок
import Home from "./pages/Home"; // Головна сторінка (з усіма секціями)
import { BioPage } from "./pages/BioPage"; // Сторінка повної біографії

// Імпорт спільних компонентів (відображаються на всіх сторінках)
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Інші імпорти компонентів секцій тут більше не потрібні!
// (HeroSection, AboutSection, MusicSection, VideoSection, ContactSection, SocialLinks)

function App(): React.ReactElement {
  // latestReleaseData також перемістимо до Home.tsx, оскільки він використовується лише там

  return (
    <>
      {/* Шапка з навігацією та перемикачем теми (Спільна для всіх сторінок) */}
      <Header />

      {/* Маршрутизація: Тут відображається вміст сторінки */}
      <Routes>
        {/* '/' відображає весь вміст Головної сторінки (Home.tsx) */}
        <Route path="/" element={<Home />} />

        {/* '/bio' відображає сторінку повної біографії */}
        <Route path="/bio" element={<BioPage />} />
      </Routes>

      {/* Підвал (Спільний для всіх сторінок) */}
      <Footer />
    </>
  );
}

export default App;
