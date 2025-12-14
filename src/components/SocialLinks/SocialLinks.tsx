import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTelegramPlane,
  faTiktok,
  faInstagram,
  faFacebookF,
  IconDefinition, // Імпортуємо для типізації іконок
} from "@fortawesome/free-brands-svg-icons";

// Імпортуємо стилі як об'єкт 'styles'
import styles from "./SocialLinks.module.css";

// Типізація для об'єктів соціальних мереж
interface SocialLink {
  name: string;
  icon: IconDefinition;
  url: string;
}

const socialData: SocialLink[] = [
  { name: "YouTube", icon: faYoutube, url: "https://youtube.com/@ВАШ_КАНАЛ" },
  { name: "Telegram", icon: faTelegramPlane, url: "https://t.me/ВАШ_КАНАЛ" },
  { name: "TikTok", icon: faTiktok, url: "https://tiktok.com/@ВАШ_КАНАЛ" },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://instagram.com/ВАШ_АККАУНТ",
  },
  {
    name: "Facebook",
    icon: faFacebookF,
    url: "https://facebook.com/ВАШ_ПРОФІЛЬ",
  },
];

export function SocialLinks(): JSX.Element {
  return (
    // Використовуємо styles.socialContainer для доступу до CSS класу
    <div className={styles.socialContainer}>
      {socialData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={styles.socialIcon} // Використовуємо клас стилів
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
}
