import React from 'react';
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Shokirov Muhammaddiyor | All rights reserved.</p>
        <div className="footer-social">
          <a href="https://t.me/Const_p" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTelegram /> 
          </a>
          <a href="https://www.instagram.com/shok.irov29" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram /> 
          </a>
          <a href="https://github.com/Shokirov05" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub /> 
          </a>
          <a href="https://www.linkedin.com/in/muhammaddiyor-shokirov-1b74992b2" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin /> 
          </a>
          <a href="mailto:muhammaddiyorshokirov92@gmail.com" className="social-link">
            <FaEnvelope /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
