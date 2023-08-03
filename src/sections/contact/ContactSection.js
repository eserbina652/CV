import React from 'react';
import { PhoneSvg, SendSvg } from '../../assets/image';
import './index.css';
import HoveredLinks from '../../components/links/hoveredLinks/HoveredLinks';
import MainTitle from '../../components/title/MainTitle';
const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <MainTitle simpleText="Contact" colorText="Me" />
        <h4>Let's work Together</h4>
        <p>
          If you hire me as a Frontend developer, I feel that you will be
          impressed by my strong work ethic, and my desire constantly improve.
          Also I will work closely with other employees of the department, and
          like a sponge adsorb all the knowledge, useful advice and guidance
          from more experienced colleagues. I'll do my best to help your company
          quickly achieve set goals and maintain your positions. <br />
          <br />
          Sincerely, Yevheniia
        </p>
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
