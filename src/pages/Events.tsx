import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/Calendar';
import './Events.scss';

const Events: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="events-page">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('events.title')}</h1>
            <p className="subtitle">{t('events.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="calendar-section">
        <div className="container">
          <motion.div
            className="calendar-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="legend">
              <div className="legend-item">
                <span className="color-box daily"></span>
                <span className="label">{t('events.calendar.daily')}</span>
              </div>
              <div className="legend-item">
                <span className="color-box upcoming"></span>
                <span className="label">{t('events.calendar.upcoming')}</span>
              </div>
              <div className="legend-item">
                <span className="color-box past"></span>
                <span className="label">{t('events.calendar.past')}</span>
              </div>
            </div>
            <Calendar />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events; 