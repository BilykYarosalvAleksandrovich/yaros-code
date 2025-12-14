import React, { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
// 1. Типізація для теми
type Theme = "light" | "dark";

// 2. Типізація для контексту
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Початкові значення контексту
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {}, // Пуста функція-заглушка
};

// Створення контексту
export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

// 3. Провайдер контексту
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Встановлення початкової теми (перевіряємо localStorage або системні налаштування)
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      return storedTheme;
    }
    // Перевірка системних налаштувань користувача (якщо підтримується браузером)
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  // 4. Функція перемикання теми
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 5. Ефект для застосування теми до DOM та збереження в localStorage
  useEffect(() => {
    // Оновлюємо атрибут 'data-theme' на тезі <body>
    document.body.setAttribute("data-theme", theme);
    // Зберігаємо вибір користувача
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 6. Хук для зручного використання контексту
export const useTheme = () => useContext(ThemeContext);
