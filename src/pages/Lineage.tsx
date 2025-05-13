import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Lineage.scss';

interface GuruInfo {
  id: string;
  translationKey: string;
  image: string;
}

const guruLineage: GuruInfo[] = [
  {
    id: 'adiShankara',
    translationKey: 'lineage.gurus.adiShankara',
    image: "/images/lineage/shankara.jpg"
  },
  {
    id: 'brahmananda',
    translationKey: 'lineage.gurus.brahmananda',
    image: "/images/lineage/brahmananda.jpg"
  },
  {
    id: 'shantanand',
    translationKey: 'lineage.gurus.shantanand',
    image: "/images/lineage/shantanand.jpg"
  },
  {
    id: 'swaroopanand',
    translationKey: 'lineage.gurus.swaroopanand',
    image: "/images/lineage/swaroopanand.jpg"
  }
];

const Lineage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="lineage-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('lineage.title')}</h1>
            <p className="subtitle">{t('lineage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>{t('lineage.introduction.title')}</h2>
            <p>{t('lineage.introduction.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-line"></div>
            {guruLineage.map((guru, index) => (
              <motion.div
                key={guru.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <div className="guru-image-container">
                    <div className="guru-image-circle">
                      <img src={guru.image} alt={t(`${guru.translationKey}.name`)} />
                    </div>
                  </div>
                  <div className="guru-info">
                    <h3>{t(`${guru.translationKey}.name`)}</h3>
                    <p className="period">{t(`${guru.translationKey}.period`)}</p>
                    <p className="title">{t(`${guru.translationKey}.title`)}</p>
                    <p className="description">{t(`${guru.translationKey}.description`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('lineage.legacy.title')}</h2>
            <p>{t('lineage.legacy.description')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lineage; 