import React from 'react';
import styles from './project.module.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Twitter Clone',
      description: 'This is a simple clone of a Twitter in which a user can create his id and use the twitter app.',
      techStack: 'HTML , CSS , Javascript , ReactJS',
      githubLink: 'https://github.com/PARTHAKMEHRA/Twitter_Clone.git',
      deployLink: 'https://brilliant-souffle-9e8639.netlify.app/',
    },
    {
      id: 2,
      title: 'Kanban Board',
      description: 'This is a simple project of kanban board in which a user can create lists of the various tasks and description related to it. Technologies used in the project is ReactJS ,Material UI ,CSS ,and Redux.',
      techStack: 'HTML, CSS, JavaScript , ReactJS',
      githubLink: 'https://github.com/Shekhar-singh21/Kanban-project.git',
      deployLink: 'https://kanban-project-shekhar.netlify.app/',
    },
    {
      id: 3,
      title: 'Ecommerce Website',
      description: 'This is a simple ecommerce website made using the technologies such as Html , CSS , Javascript.',
      techStack: 'HTML, CSS, JavaScript ',
      githubLink: 'https://github.com/PARTHAKMEHRA/Ecommerce-Project.git',
      deployLink: 'https://magnificent-hotteok-3e7231.netlify.app/',
    },
    // Add more project objects as needed
  ];

  return (
    <div id="projects" className={styles.projects}>
      <h1>Projects</h1>
      <p>What I Built</p>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack}</p>
            <div className={styles.buttons}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                Deploy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

