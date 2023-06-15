import Link from "next/link";

import classes from "./Navlinks.module.css";

const Navlinks = ({ hideNav }) => {
  return (
    <div onClick={hideNav} className={classes.container}>
      <ul>
        <li>
          <Link href="#resume">RESUME</Link>
        </li>
        <li>
          <Link href="#projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="#about">ABOUT</Link>
        </li>
        <li>
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
