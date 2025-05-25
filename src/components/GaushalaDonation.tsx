import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './GaushalaDonation.scss';

interface PresetAmounts {
  small: string;
  medium: string;
  large: string;
}

const GaushalaDonation: React.FC = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<string>('oneTime');
  const [selectedAmount, setSelectedAmount] = useState<string>('medium');
  const [customAmount, setCustomAmount] = useState<string>('');

  const donationOptions = [
    { id: 'oneTime', icon: '🙏', label: 'Seva Offering' },
    { id: 'monthly', icon: '🕉️', label: 'Monthly Seva' },
    { id: 'yearly', icon: '✨', label: 'Annual Seva' },
    { id: 'cowAdoption', icon: '🐮', label: 'Gau Seva' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement payment gateway integration
    console.log('Form submitted');
  };

  const presetAmounts = t('gaushala.donation.amounts.preset', { returnObjects: true }) as PresetAmounts;

  return (
    <div className="gaushala-donation-container">
      <div className="gaushala-donation-header">
        <h2>Join Us in Gau Seva</h2>
        <p>
          Participate in the sacred tradition of Gau Seva. Your contribution helps us provide loving care, 
          nutritious food, and medical attention to our divine mothers.
        </p>
      </div>

      <div className="gaushala-donation-options">
        {donationOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`gaushala-donation-options-card ${
              selectedOption === option.id ? 'selected' : ''
            }`}
          >
            <div className="icon">{option.icon}</div>
            <div className="label">{option.label}</div>
            <div className="description">
              {t(`gaushala.donation.options.${option.id}`)}
            </div>
          </button>
        ))}
      </div>

      <div className="gaushala-donation-amounts">
        <h3>Choose Your Seva Amount</h3>
        <div className="gaushala-donation-amounts-grid">
          {Object.entries(presetAmounts).map(
            ([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedAmount(key);
                  setCustomAmount('');
                }}
                className={`gaushala-donation-amounts-button ${
                  selectedAmount === key ? 'selected' : ''
                }`}
              >
                <div className="amount">{value}</div>
                <div className="label">Seva Amount</div>
              </button>
            )
          )}
          <div className="gaushala-donation-amounts-custom">
            <input
              type="text"
              placeholder="Custom Seva Amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount('custom');
              }}
            />
            <span className="currency">₹</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="gaushala-donation-form">
        <h3>Your Blessed Information</h3>
        <div className="gaushala-donation-form-grid">
          <div className="gaushala-donation-form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="gaushala-donation-form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="gaushala-donation-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone"
              required
            />
          </div>
          <div className="gaushala-donation-form-group">
            <label>Your Message</label>
            <textarea
              placeholder="Share your thoughts or prayer requests"
              rows={4}
            />
          </div>
        </div>

        <div className="gaushala-donation-submit">
          <button type="submit">
            Offer Seva
          </button>
        </div>

        <div className="gaushala-donation-footer">
          <div className="info-item">
            <span className="icon">🕉️</span>
            Your seva helps maintain our ancient tradition of Gau Seva
          </div>
          <div className="info-item">
            <span className="icon">🔒</span>
            {t('gaushala.donation.secure')}
          </div>
          <div className="info-item">
            <span className="icon">📜</span>
            {t('gaushala.donation.taxBenefit')}
          </div>
        </div>
      </form>
    </div>
  );
};

export default GaushalaDonation; 