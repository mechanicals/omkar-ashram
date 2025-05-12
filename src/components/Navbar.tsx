import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="brand">
            Dandi Omkar Ashram
          </Link>
          <div className="nav-right">
            <div className="nav-links">
              <Link to="/">{t('common.nav.home')}</Link>
              <Link to="/about">{t('common.nav.about')}</Link>
              <Link to="/gallery">{t('common.nav.gallery')}</Link>
              <Link to="/contact">{t('common.nav.contact')}</Link>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 