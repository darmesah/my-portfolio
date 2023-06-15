"use client";

import Typewriter from "typewriter-effect";

import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div id="landing" className={classes.container}>
      <h3>ALEX DAMISA</h3>
      <h1>
        <Typewriter
          options={{
            cursor: "",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "I'm a Full-Stack developer with strong focus on crafting dynamic and user-friendly digital experiences."
              )
              .start()
              .changeDelay(0.1);
          }}
        />
      </h1>
    </div>
  );
};

export default Landing;
