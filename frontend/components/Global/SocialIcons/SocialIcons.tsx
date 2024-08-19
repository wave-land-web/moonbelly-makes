// Components
import { TbBrandInstagram, TbBrandPinterest, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb'

// Styles
import styles from './SocialIcons.module.css'

/**
 * Social Icons Component
 */
export default function SocialIcons({ darkMode = false }) {
  return (
    <div className={darkMode ? `${styles.iconContainer} ${styles.dark}` : styles.iconContainer}>
      <a
        href="https://www.youtube.com/@moonbellymakes"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >
        <TbBrandYoutube />
      </a>
      <a
        href="https://www.instagram.com/moonbellymakes/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <TbBrandInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@moonbellymakes"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
      >
        <TbBrandTiktok />
      </a>
      <a
        href="https://www.pinterest.com/moonbellymakes/"
        target="_blank"
        rel="noreferrer"
        aria-label="Pinterest"
      >
        <TbBrandPinterest />
      </a>
    </div>
  )
}
