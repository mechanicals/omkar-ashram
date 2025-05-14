import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ImageCollage from '../components/ImageCollage';
import './Home.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="title">{t('home.title')}</h1>
              <p className="subtitle">{t('home.subtitle')}</p>
              <p className="location">{t('home.location')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('gallery.title')}</h2>
            <p className="section-description">{t('gallery.subtitle')}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageCollage />
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
            <h2>{t('home.introduction.title')}</h2>
            <p>{t('home.introduction.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>{t('home.features.spiritualLegacy.title')}</h3>
              <p>{t('home.features.spiritualLegacy.description')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('home.features.divinePurpose.title')}</h3>
              <p>{t('home.features.divinePurpose.description')}</p>
            </div>
            <div className="feature-card">
              <h3>{t('home.features.sacredLocation.title')}</h3>
              <p>{t('home.features.sacredLocation.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">{t('home.services.title', 'Sacred Offerings')}</h2>
            <div className="services-grid">
              <div className="service-item">
                <h3>{t('home.services.items.spiritual.title')}</h3>
                <p>{t('home.services.items.spiritual.description')}</p>
              </div>
              <div className="service-item">
                <h3>{t('home.services.items.gaushala.title')}</h3>
                <p>{t('home.services.items.gaushala.description')}</p>
              </div>
              <div className="service-item">
                <h3>{t('home.services.items.community.title')}</h3>
                <p>{t('home.services.items.community.description')}</p>
              </div>
              <div className="service-item">
                <h3>{t('home.services.items.sanyasi.title')}</h3>
                <p>{t('home.services.items.sanyasi.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 