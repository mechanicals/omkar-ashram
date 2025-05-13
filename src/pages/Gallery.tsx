import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Gallery.scss';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    'mainTemple',
    'meditationHall',
    'garden',
    'library',
    'prayerHall',
    'overview'
  ];

  return (
    <div className="gallery-page">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('gallery.title')}</h1>
            <p className="subtitle">{t('gallery.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-grid">
        <div className="container">
          <div className="grid">
            {images.map((image) => (
              <motion.div
                key={image}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img
                    src={`/images/gallery/${image}.jpg`}
                    alt={t(`gallery.images.${image}.description`)}
                  />
                  <div className="overlay">
                    <h3>{t(`gallery.images.${image}.title`)}</h3>
                    <p>{t(`gallery.images.${image}.description`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 