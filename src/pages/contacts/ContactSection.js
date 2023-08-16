import React from 'react';
import { PhoneSvg, SendSvg } from '../../assets/image/svg';
import './index.css';
import HoveredLinks from '../../components/links/hoveredLinks/HoveredLinks';
import MainTitle from '../../components/title/MainTitle';
import { useTranslation } from 'react-i18next';
import { Contact, ContactText } from './index';
import DrawingCanvas from '../../components/canvas/DrawingCanvas';

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <Contact>
      <DrawingCanvas />
      <h6>{t('interactiveSection')}</h6>
      <ContactText>
        <MainTitle simpleText="simpleContact" colorText="colorMeContact" />
        <h4>{t('letsWork')}</h4>
        <p>{t('why')}</p>
        <p>{t('sincerely')}</p>
        <div className="contact-list">
          <a href="mailto:eserbina652@gmail.com">
            <li>
              <SendSvg />
              eserbina652@gmail.com
            </li>
          </a>

          <li>
            <PhoneSvg />
            +48733796743
          </li>
        </div>
        <div className="contact-icons">
          <HoveredLinks />
        </div>
      </ContactText>
    </Contact>
  );
};

export default ContactSection;
