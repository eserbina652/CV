import React from 'react';
import {
  GitHubSvg,
  LinkedInSvg,
  PhoneSvg,
  SendSvg,
  TelegramSvg,
} from '../../../assets/image';
import './index.css';
const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Me</span>
        </h2>
        <h4>Let's work Together</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          corporis eius iure molestias nesciunt odit praesentium quaerat quas
          quasi sequi. Adipisci deleniti dolore eum, fugiat iusto mollitia
          nesciunt obcaecati odio omnis optio qui repudiandae sapiente similique
          soluta totam velit vitae voluptas voluptates. Cumque dolor doloremque
          eius fuga, fugit labore minus.
        </p>
        <div className="contact-list">
          <li>
            <a href="#">
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
          {/*Добавить ховер на иконки*/}
          <a href="#">
            <LinkedInSvg color={'#00eeff'} />
          </a>
          <a href="#">
            <GitHubSvg />
          </a>
          <a href="#">
            <TelegramSvg />
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Subject" required />
          <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Enter Your Message"
          />
          <input type="submit" value="submit" className="send" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
