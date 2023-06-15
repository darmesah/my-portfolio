import classes from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={classes.container}>
      <h3>ABOUT ME</h3>
      <h1>Hi! My name is Alex Damisa.</h1>
      <div>
        <p>
          I am a Full-Stack Developer with a degree in Computer Science looking
          for my next big opportunity. I strive every day to be part of the
          driving force of an ever-evolving industry by engaging in constant
          learning.
        </p>
        <p>
          I've worked with some of the most creative minds on the planet to
          build amazing products. Communication, Commitment, and Consistency are
          at the core of my work ethics.
        </p>
      </div>
    </div>
  );
};

export default About;
