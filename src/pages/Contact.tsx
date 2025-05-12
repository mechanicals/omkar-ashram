import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Map from '../components/Map';
import './Contact.scss';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">{t('contact.title')}</h1>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-section">
                <h2>{t('contact.visitUs.title')}</h2>
                <p>
                  {t('contact.visitUs.address.line1')}<br />
                  {t('contact.visitUs.address.line2')}<br />
                  {t('contact.visitUs.address.line3')}
                </p>
              </div>

              <div className="info-section">
                <h2>{t('contact.visitingHours.title')}</h2>
                <p>
                  {t('contact.visitingHours.description')}<br />
                  {t('contact.visitingHours.morning')}<br />
                  {t('contact.visitingHours.evening')}
                </p>
              </div>

              <div className="info-section">
                <h2>{t('contact.guidelines.title')}</h2>
                <ul>
                  {t('contact.guidelines.items', { returnObjects: true }).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section map-section">
                <h2>{t('contact.location.title')}</h2>
                <Map />
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name.label')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email.label')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.form.message.label')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message.placeholder')}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;