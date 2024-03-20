import React from "react";
import { FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";
import { Section } from "./contact.styles";

const Contact = ({ className }) => {
  return (
    <Section className={className}>
      <div className='title'>
        <h1>CONTACT</h1>
      </div>
      <div className='box'>
        <div className='text'>
          <div className='title'>
            <FaEnvelope />
            MAIL
          </div>
          <div>dlckdguq1011@naver.com</div>
        </div>

        <div className='text'>
          <div className='title'>
            <FaPhone />
            TEL
          </div>
          <div>010-4533-9426</div>
        </div>

        <div className='text'>
          <div className='title'>
            <FaGithub />
            GIT
          </div>
          <div>
            <a href='https://github.com/hyubbb' target='__blank'>
              <u>hyubbb</u>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
