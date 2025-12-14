import React from "react";
import styles from "./ContactSection.module.css";
import { Fade } from "react-awesome-reveal";

// Типізація для контактних об'єктів
interface ContactItem {
  role: string; // Роль (менеджер, преса, загальні питання)
  email: string;
  phone?: string;
}

// Дані контактів (ОБОВ'ЯЗКОВО ЗАМІНІТЬ)
const contacts: ContactItem[] = [
  {
    role: "Менеджер з Букінгу та Концертів",
    email: "booking@yourname.com",
    phone: "+380 XX XXX XX XX",
  },
  {
    role: "Контакти для Преси та ЗМІ (PR)",
    email: "press@yourname.com",
  },
  {
    role: "Загальні Питання та Фан-пошта",
    email: "info@yourname.com",
  },
];

export function ContactSection(): JSX.Element {
  return (
    <section id="contact" className={styles.contactSection}>
      <Fade triggerOnce duration={600}>
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>Зв'яжіться зі мною</h3>

          <div className={styles.contentWrapper}>
            {/* 1. Блок контактної інформації */}
            <div className={styles.contactInfo}>
              <p className={styles.leadText}>
                Для співпраці, організації концертів або питань щодо преси, будь
                ласка, скористайтеся відповідними контактами нижче.
              </p>

              {contacts.map((item) => (
                <div key={item.role} className={styles.contactItem}>
                  <h4 className={styles.contactRole}>{item.role}</h4>
                  <p>
                    Email:
                    <a
                      href={`mailto:${item.email}`}
                      className={styles.contactLink}
                    >
                      {" "}
                      {item.email}
                    </a>
                  </p>
                  {item.phone && (
                    <p>
                      Телефон:
                      <a
                        href={`tel:${item.phone.replace(/\s/g, "")}`}
                        className={styles.contactLink}
                      >
                        {" "}
                        {item.phone}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* 2. Блок форми зворотного зв'язку */}
            <div className={styles.contactFormWrapper}>
              <h4 className={styles.formTitle}>Напишіть нам напряму</h4>

              {/* !!! Важливо: action="/submit-form" вимагає налаштування бекенду. 
                            Якщо ви використовуєте Formspree або подібний сервіс, замініть action. 
                        */}
              <form
                className={styles.contactForm}
                action="ВСТАВТЕ_ПОСИЛАННЯ_НА_СЕРВІС_ФОРМ"
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше Ім'я"
                  required
                  className={styles.inputField}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш Email"
                  required
                  className={styles.inputField}
                />
                <textarea
                  name="message"
                  placeholder="Ваше Повідомлення"
                  rows={5}
                  required
                  className={styles.inputField}
                ></textarea>
                <button type="submit" className={styles.submitButton}>
                  Надіслати Повідомлення
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
