// src/components/Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'; // Example icons
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-icon">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </a>
        <a href="/search" className="footer-icon">
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </a>
        <a href="/notifications" className="footer-icon">
          <FontAwesomeIcon icon={faBell} size="2x" />
        </a>
        <a href="/profile" className="footer-icon">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
