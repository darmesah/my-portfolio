import classes from "./Expertise.module.css";

const Expertise = () => {
  return (
    <div id="expertise" className={classes.container}>
      <h3>MY EXPERTISE</h3>
      <div className={classes.cont1}>
        <h2>FRONTEND</h2>
        <p>HTML, CSS, JavaScript, TypeScript, React, Next.js</p>
      </div>
      <div className={classes.cont2}>
        <h2>BACKEND</h2>
        <p>
          JavaScript, TypeScript, Node.js, Express.js, SQL, MongoDB, Deployment
        </p>
      </div>
    </div>
  );
};

export default Expertise;
