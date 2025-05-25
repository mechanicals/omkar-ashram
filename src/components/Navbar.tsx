import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './Navbar.scss';
import { Squash as Hamburger } from 'hamburger-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to close sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="brand">
            Dandi Omkar Ashram
          </Link>
          {isMobile ? (
            // Mobile: Hamburger icon
            <div className="hamburger-icon">
              <Hamburger
                toggled={isSidebarOpen}
                toggle={setIsSidebarOpen}
                size={24}
                color="#FF7F27" // Primary color
              />
            </div>
          ) : (
            // Desktop: Full links and language selector
            <div className="nav-right">
              <div className="nav-links">
                <Link to="/">{t('common.nav.home')}</Link>
                <Link to="/about">{t('common.nav.about')}</Link>
                <Link to="/lineage">{t('common.nav.lineage', 'Lineage')}</Link>
                <Link to="/gaushala">{t('common.nav.gaushala', 'Gaushala')}</Link>
                <Link to="/events">{t('common.nav.events', 'Events')}</Link>
                <Link to="/contact">{t('common.nav.contact')}</Link>
              </div>
              <LanguageSelector />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            {/* Close button (optional, hamburger can toggle) */}
            {/* <button onClick={() => setIsSidebarOpen(false)}>Close</button> */}
            <div className="nav-links">
              <Link to="/" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.home')}</Link>
              <Link to="/about" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.about')}</Link>
              <Link to="/lineage" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.lineage', 'Lineage')}</Link>
              <Link to="/gaushala" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.gaushala', 'Gaushala')}</Link>
              <Link to="/events" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.events', 'Events')}</Link>
              <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>{t('common.nav.contact')}</Link>
            </div>
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 