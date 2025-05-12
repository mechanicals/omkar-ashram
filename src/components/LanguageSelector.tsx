import { useTranslation } from 'react-i18next';
import './LanguageSelector.scss';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select Language"
      >
        <option value="en">{t('common.languageName', { lng: 'en' })}</option>
        <option value="hi">{t('common.languageName', { lng: 'hi' })}</option>
      </select>
    </div>
  );
};

export default LanguageSelector; 