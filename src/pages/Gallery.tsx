import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Gallery.scss';

const Gallery = () => {
  const { t } = useTranslation();

  // Placeholder images - replace with actual ashram images
  const images = [
    {
      id: 1,
      key: 'mainTemple',
      url: 'https://via.placeholder.com/600x400?text=Ashram+Main+Temple',
    },
    {
      id: 2,
      key: 'meditationHall',
      url: 'https://via.placeholder.com/600x400?text=Meditation+Hall',
    },
    {
      id: 3,
      key: 'garden',
      url: 'https://via.placeholder.com/600x400?text=Garden+View',
    },
    {
      id: 4,
      key: 'library',
      url: 'https://via.placeholder.com/600x400?text=Library',
    },
    {
      id: 5,
      key: 'prayerHall',
      url: 'https://via.placeholder.com/600x400?text=Prayer+Hall',
    },
    {
      id: 6,
      key: 'overview',
      url: 'https://via.placeholder.com/600x400?text=Ashram+Overview',
    },
  ];

  return (
    <div className="gallery">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery-title">{t('gallery.title')}</h1>

          <div className="gallery-grid">
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img src={image.url} alt={t(`gallery.images.${image.key}.title`)} />
                <div className="item-content">
                  <h3>{t(`gallery.images.${image.key}.title`)}</h3>
                  <p>{t(`gallery.images.${image.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="gallery-note">
            <p>{t('gallery.note')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery; 