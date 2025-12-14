import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeToggle.module.css"; // Створіть цей файл стилів

export function ThemeToggle(): React.ReactElement {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={`Перемкнути на ${
        theme === "light" ? "темну" : "світлу"
      } тему`}
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
}
