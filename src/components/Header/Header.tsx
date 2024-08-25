import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <FontAwesomeIcon icon={faFutbol} className="icon"/>
        </div>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
