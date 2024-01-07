// LanguageSwitcher.tsx
import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';

import './languageSwitcher.css';

interface LanguageSwitcherProps {
//   onLanguageChange: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // onLanguageChange(language);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="language-switcher relative">
      <button className="language-button" onClick={toggleDropdown}>
        <FiGlobe className="globe-icon" />
      </button>

      {dropdownOpen && (
        <div className="language-dropdown">
          <button
            className={`language-item ${currentLanguage === 'fr' && 'active'}`}
            onClick={() => handleLanguageChange('fr')}
          >
            🇫🇷 French
          </button>
          <button
            className={`language-item ${currentLanguage === 'en' && 'active'}`}
            onClick={() => handleLanguageChange('en')}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
