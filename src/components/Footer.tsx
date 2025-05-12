import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('common.brand')}</h3>
            <p>
              {t('common.address.line1')}<br />
              {t('common.address.line2')}
            </p>
          </div>
          <div className="footer-section">
            <h3>{t('footer.quickLinks.title')}</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">{t('common.nav.home')}</Link>
              </li>
              <li>
                <Link to="/about">{t('common.nav.about')}</Link>
              </li>
              <li>
                <Link to="/gallery">{t('common.nav.gallery')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('common.nav.contact')}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{t('footer.visitUs.title')}</h3>
            <p>{t('footer.visitUs.description')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 