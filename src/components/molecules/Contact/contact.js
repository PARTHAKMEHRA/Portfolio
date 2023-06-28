import React from 'react';
import styles from './contact.module.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h1>Contact</h1>
        <h2 className={styles.connectHeading}>Connect with me</h2>
        <p className={styles.connectText}>
          If you want to know more about me or my work, or if you would just like to say hello, send me a message.
          I'd love to hear from you.
        </p>
        <button className={styles.sendEmailButton} onClick={() => window.location.href = 'mailto:parthakmehra3@gmail.com'}>
  Send an Email</button>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.key}>Email:</span>
            <span className={styles.values}>parthakmehra3@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.key}>Mobile:</span>
            <span className={styles.values}>8650748562</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.key}>Address:</span>
            <span className={styles.values}>Bhimtal,Uttarakhand,India</span>
          </div>
          <div className={styles.social}>
            <span className={styles.key}>Social:</span>
            <div className={styles.socialLinks}>
              <a href="https://github.com/PARTHAKMEHRA" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
              </a>
              <a href="https://linkedin.com/in/parthak-mehra-7682a920b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
              </a>
              <a href="https://drive.google.com/file/d/1Fp_CA6eGQgSnkIqHwhyzere4yO0zFa5O/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaFilePdf/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

