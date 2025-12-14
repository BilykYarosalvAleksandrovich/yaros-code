import React, { useState } from "react";
// Імпортуємо іконки для мобільного меню
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle"; // ІМПОРТ КОМПОНЕНТА ПЕРЕМИКАЧА

// Дані для навігаційного меню
const navItems = [
  { name: "Про мене", href: "#about" },
  { name: "Відео", href: "#videos" },
  { name: "Музика", href: "#music" },
  { name: "Контакти", href: "#socials" },
];

export function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Закриваємо меню після кліку на посилання (особливо важливо для мобільних)
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        {/* Логотип */}
        <a href="/" className={styles.logo}>
          YAROS Code
        </a>

        {/* 1. Блок елементів керування (видно на мобільному) */}
        <div className={styles.headerControls}>
          {/* ThemeToggle видно завжди, але стилізується по-різному */}
          <ThemeToggle />

          {/* Кнопка Гамбургер (видно лише на мобільних) */}
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* 2. Навігаційне меню (Сховано на мобільному, поки не відкрито) */}
        <nav
          className={`${styles.navMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Опціонально: Якщо ви хочете, щоб перемикач теми був частиною 
            розкритого мобільного меню, ви можете додати його сюди, 
            замість того, щоб він був у headerControls.
            */}
            {/* <li className={styles.mobileOnlyItem}>
              <ThemeToggle />
            </li> 
            */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
