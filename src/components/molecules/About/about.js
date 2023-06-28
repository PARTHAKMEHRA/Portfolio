import React from 'react';
import styles from './about.module.css';
import htmlLogo from './html.png';
import cssLogo from './css.png';
import jsLogo from './js.png';
import reactLogo from './react.png';
import gitLogo from './git.png';
import githubLogo from './github.png';
import vscodeLogo from './vscode.png';
import reduxLogo from './redux2.png';
import myimage from './myimage.jpeg';


const About = () => {
  return (
    <div id="about" className={styles.about}>
      <h1>About</h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={myimage} alt="About Me" className={styles.image} />
        </div>
        <div className={styles.description}>
          <p>
            I'm an aspiring web developer with an aspiration to build new features from ideation to production,
            implementation of frameworks and design flows that enable users to have a seamless experience. I take
            into consideration writing reusable and efficient code. I have been passionately combining good design,
            technology, and innovation in all my projects.
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <div className={styles.skillItem}>
          <img src={htmlLogo} alt="HTML5" />
          <span>HTML</span>
        </div>
        <div className={styles.skillItem}>
          <img src={cssLogo} alt="CSS3" />
          <span>CSS</span>
        </div>
        <div className={styles.skillItem}>
          <img src={jsLogo} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className={styles.skillItem}>
          <img src={reactLogo} alt="React" />
          <span>React</span>
        </div>
        <div className={styles.skillItem}>
          <img src={gitLogo} alt="Git" />
          <span>Git</span>
        </div>
        <div className={styles.skillItem}>
          <img src={githubLogo} alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div className={styles.skillItem}>
          <img src={vscodeLogo} alt="VS Code" />
          <span>VS Code</span>
        </div>
        <div className={styles.skillItem}>
          <img src={reduxLogo} alt="Redux" />
          <span>Redux</span>
        </div>
      </div>
    </div>
  );
};

export default About;


