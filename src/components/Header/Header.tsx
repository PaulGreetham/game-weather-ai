import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faMoon, faSun, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../../hooks/useTheme';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <FontAwesomeIcon icon={faFutbol} className="logo-icon" />
        </div>
        <div className="header-buttons">
          <button onClick={toggleTheme} className="theme-toggle">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="icon" />
          </button>
          <button className="auth-buttons">
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
