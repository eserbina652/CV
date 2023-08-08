import React from 'react';
import { PhoneSvg, SendSvg } from '../../assets/image/svg';
import './index.css';
import HoveredLinks from '../../components/links/hoveredLinks/HoveredLinks';
import MainTitle from '../../components/title/MainTitle';
import { useTranslation } from 'react-i18next';
const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <MainTitle simpleText="simpleContact" colorText="colorMeContact" />
        <h4>{t('letsWork')}</h4>
        <p>{t('why')}</p>
        <p>{t('sincerely')}</p>
        <div className="contact-list">
          <li>
            <a href="mailto:eserbina652@gmail.com">
              <SendSvg />
            </a>
            eserbina652@gmail.com
          </li>
          <li>
            <PhoneSvg />
            +48733796743
          </li>
        </div>
        <div className="contact-icons">
          <HoveredLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
