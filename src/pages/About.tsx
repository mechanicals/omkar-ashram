import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">
            {t('about.title')}
          </h1>

          <div className="about-content">
            <section className="section">
              <h2>{t('about.heritage.title')}</h2>
              <p>{t('about.heritage.description')}</p>
            </section>

            <section className="section">
              <h2>{t('about.significance.title')}</h2>
              <p>{t('about.significance.description')}</p>
            </section>

            <section className="section">
              <h2>{t('about.dailyLife.title')}</h2>
              <p>{t('about.dailyLife.description')}</p>
            </section>

            <section className="section">
              <h2>{t('about.location.title')}</h2>
              <p>{t('about.location.description')}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 