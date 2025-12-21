import React from "react";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import { Fade } from "react-awesome-reveal";
import styles from "./BioPage.module.css";
import { Link } from "react-router-dom";

export function ContactPage(): React.ReactElement {
  return (
    <main
      style={{ padding: "100px 20px", minHeight: "80vh", textAlign: "center" }}
    >
      <Fade triggerOnce>
        <h1>Зв'язатися зі мною</h1>
        <p>Напишіть мені повідомлення або скористайтеся месенджерами</p>
      </Fade>

      {/* 1. Основна секція контактів (форма або пошта) */}
      <ContactSection />

      {/* 2. Блок соціальних мереж */}
      <div style={{ marginTop: "60px", marginBottom: "40px" }}>
        <Fade triggerOnce delay={300}>
          <h3 style={{ marginBottom: "20px" }}>Мої соціальні мережі</h3>
          <SocialLinks />
        </Fade>
      </div>

      <Link to="/" className={styles.backButton}>
        ← На головну
      </Link>
    </main>
  );
}
