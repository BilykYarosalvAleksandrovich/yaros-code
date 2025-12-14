import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MusicSection.module.css";
import { Fade } from "react-awesome-reveal";

// Типізація для посилань на стрімінгові сервіси
interface StreamLink {
  platform: "Spotify" | "Apple Music" | "YouTube Music";
  url: string;
}

// Типізація для елементів дискографії
interface AlbumItem {
  id: number;
  title: string;
  year: number;
  coverUrl: string; // Шлях до обкладинки альбому
  links: StreamLink[];
}

// Дані вашої дискографії (ОБОВ'ЯЗКОВО ЗАМІНІТЬ)
const discography: AlbumItem[] = [
  {
    id: 1,
    title: "Назва Альбому А",
    year: 2024,
    coverUrl: "./assets/img/album-cover-a.jpg",
    links: [
      { platform: "Spotify", url: "https://spotify.com/album-a" },
      { platform: "Apple Music", url: "https://music.apple.com/album-a" },
      {
        platform: "YouTube Music",
        url: "https://music.youtube.com/playlist-a",
      },
    ],
  },
  {
    id: 2,
    title: "Сингл Б (EP)",
    year: 2023,
    coverUrl: "./assets/img/album-cover-b.jpg",
    links: [
      { platform: "Spotify", url: "https://spotify.com/album-b" },
      { platform: "Apple Music", url: "https://music.apple.com/album-b" },
    ],
  },
  {
    id: 3,
    title: "Назва Альбому В",
    year: 2022,
    coverUrl: "./assets/img/album-cover-c.jpg",
    links: [{ platform: "Spotify", url: "https://spotify.com/album-c" }],
  },
];

// Функція для отримання правильної іконки
const getPlatformIcon = (platform: StreamLink["platform"]) => {
  switch (platform) {
    case "Spotify":
      return faSpotify;
    case "Apple Music":
      return faApple;
    case "YouTube Music":
      return faYoutube;
    default:
      return null;
  }
};

export function MusicSection(): React.ReactElement{
  return (
    <section id="music" className={styles.musicSection}>
      <Fade triggerOnce duration={700}>
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>Дискографія та Релізи</h3>

          <div className={styles.albumGrid}>
            {discography.map((album) => (
              <div key={album.id} className={styles.albumItem}>
                {/* Обкладинка альбому */}
                <div className={styles.coverWrapper}>
                  <img
                    src={album.coverUrl}
                    alt={`Обкладинка альбому: ${album.title}`}
                    className={styles.albumCover}
                  />

                  {/* Посилання на стрімінгові сервіси на обкладинці */}
                  <div className={styles.linksOverlay}>
                    {album.links.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.streamLink} ${
                          styles[link.platform.replace(/\s/g, "")]
                        }`}
                        aria-label={`Слухати на ${link.platform}`}
                      >
                        <FontAwesomeIcon
                          icon={getPlatformIcon(link.platform)!}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Інформація про альбом */}
                <p className={styles.albumTitle}>{album.title}</p>
                <p className={styles.albumYear}>{album.year}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
