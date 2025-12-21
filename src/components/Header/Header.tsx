import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

// 1. Оновлюємо масив: додаємо поле 'to' для маршрутів React Router
const navItems = [
  { name: "Про мене", href: "#about" },
  { name: "Відео", href: "#videos" },
  { name: "Музика", href: "#music" },
  { name: "Контакти", to: "/contacts" }, // Використовуємо 'to' для сторінок
];

export function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.container}>
        {/* Логотип краще теж зробити через Link, щоб не перезавантажувати сторінку */}
        <Link to="/" className={styles.logo} onClick={handleLinkClick}>
          YAROS Code
        </Link>

        <div className={styles.headerControls}>
          <ThemeToggle />
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav
          className={`${styles.navMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                {/* 2. Логіка вибору тегу: якщо є 'to' — це Link, інакше — звичайна 'a' */}
                {item.to ? (
                  <Link
                    to={item.to}
                    className={styles.navLink}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
