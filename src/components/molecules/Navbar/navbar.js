import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({ activeItem, handleItemClick }) => {
  const handleNavClick = (item) => {
    handleItemClick(item);
    scrollToSection(item);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={activeItem === 'home' ? styles.active : ''} onClick={() => handleNavClick('home')}>Home</li>
        <li className={activeItem === 'about' ? styles.active : ''} onClick={() => handleNavClick('about')}>About</li>
        <li className={activeItem === 'projects' ? styles.active : ''} onClick={() => handleNavClick('projects')}>Projects</li>
        <li className={activeItem === 'contact' ? styles.active : ''} onClick={() => handleNavClick('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;


