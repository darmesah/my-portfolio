import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Naviagtion from "./components/Header/Naviagtion/Naviagtion";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";

import classes from "./components/Home.module.css";
import Desktop from "./components/Header/Desktop/Desktop";

const page = () => {
  return (
    <div className={classes.main}>
      <div className={classes.side}>
        <Naviagtion />
      </div>
      <div className={classes.body}>
        <Landing />
        <Expertise />
        <Projects />
        <About />
        <Testimonials />
      </div>
      <div className={classes.side2}>
        <Desktop />
      </div>
      <Footer />
    </div>
  );
};

export default page;
