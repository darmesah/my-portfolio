import { projects } from "../data";

import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={classes.container}>
      <h3>MY PROJECTS</h3>
      {projects.map((project) => (
        <div className={classes.flex_cont}>
          <div className={classes.img}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={classes.txt}>
            <h2>{project.title}</h2>
            <p>Technologies: {project.technologies}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
