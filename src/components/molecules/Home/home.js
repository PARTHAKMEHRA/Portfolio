import React from 'react';
import styles from './home.module.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Home = () => {
  return (
    <div id='home' className={styles.home}>
      <h1 className={styles.name}>Hi, I am Parthak</h1>
      <h1 className={styles.role}>Frontend Developer</h1>
      <p className={styles.description}>
        I am an aspiring Front-End Developer. I am studying at Function Up to achieve my dream of becoming a Web Developer.
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/PARTHAKMEHRA" target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://linkedin.com/in/parthak-mehra-7682a920b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://drive.google.com/file/d/1Fp_CA6eGQgSnkIqHwhyzere4yO0zFa5O/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFilePdf className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Home;
