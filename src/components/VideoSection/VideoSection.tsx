import styles from "./VideoSection.module.css";
import { Fade } from "react-awesome-reveal";

// Типізація для об'єктів відео
interface VideoItem {
  id: string; // Ідентифікатор відео YouTube (наприклад, 'dQw4w9WgXcQ')
  title: string;
}

// Дані для відображення
const videoList: VideoItem[] = [
  { id: "ВСТАВТЕ_ID_ВІДЕО_1", title: "Офіційний кліп: Назва Треку 1" },
  { id: "ВСТАВТЕ_ID_ВІДЕО_2", title: "Концертне виконання: Назва Треку 2" },
  { id: "ВСТАВТЕ_ID_ВІДЕО_3", title: "Сніппет: Новий реліз" },
  { id: "ВСТАВТЕ_ID_ВІДЕО_4", title: "Офіційний кліп: Назва Треку 4" },
  // Додайте більше відео тут
];

export function VideoSection(): JSX.Element {
  return (
    <section id="videos" className={styles.videoSection}>
      <Fade triggerOnce cascade damping={0.1}>
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>Мої Відео та Кліпи</h3>

          <div className={styles.videoGrid}>
            {videoList.map((video) => (
              // Обгортка для адаптивного iframe (співвідношення 16:9)
              <div key={video.id} className={styles.videoWrapper}>
                <iframe
                  // URL для вбудовування
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy" // Використовуємо lazy loading для кращої продуктивності
                ></iframe>
              </div>
            ))}
          </div>

          {/* Заклик до дії на весь канал */}
          <a
            href="ВАШЕ_ПОВНЕ_ПОСИЛАННЯ_НА_YOUTUBE_КАНАЛ"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.channelLink}
          >
            Перейти на мій YouTube-канал →
          </a>
        </div>
      </Fade>
    </section>
  );
}
