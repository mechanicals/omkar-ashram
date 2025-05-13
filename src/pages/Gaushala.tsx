import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Gaushala.scss';

const Gaushala = () => {
  const { t } = useTranslation();

  return (
    <div className="gaushala-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('gaushala.title')}</h1>
            <p className="subtitle">{t('gaushala.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="overview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>{t('gaushala.introduction.title')}</h2>
            <p>{t('gaushala.introduction.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>{t('gaushala.services.title')}</h2>
          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>{t('gaushala.services.shelter.title')}</h3>
              <p>{t('gaushala.services.shelter.description')}</p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>{t('gaushala.services.care.title')}</h3>
              <p>{t('gaushala.services.care.description')}</p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>{t('gaushala.services.nutrition.title')}</h3>
              <p>{t('gaushala.services.nutrition.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="support">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>{t('gaushala.support.title')}</h2>
            <p>{t('gaushala.support.description')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gaushala; 