"use client";

import { useEffect, useState } from "react";

import Navlinks from "../Navlinks/Navlinks";
import classes from "./Naviagtion.module.css";

const Naviagtion = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const specificPoint = 4000;

      if (scrollY >= specificPoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinkHandler = () => {
    setShowNav((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={classes.mobile_container}>
        <div className={classes.mobile_nav}>
          <div className={classes.logo}>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className={classes.nav}>
            <div onClick={navlinkHandler} className={classes.burger}>
              <img src="/images/burger.png" alt="burger" />
            </div>
            <div className={`${showNav && classes.show} ${classes.links}`}>
              <Navlinks hideNav={navlinkHandler} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.side_cont}>
        <div className={classes.side_nav}>
          <div className={classes.logo}>
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className={`${isScrolled && classes.scroll} ${classes.nav}`}>
            <Navlinks />
          </div>
          <div className={classes.socials}>
            <img src="/images/socials/github.png" alt="github" />
            <img src="/images/socials/linkedin.png" alt="linkedin" />
            <img src="/images/socials/twitter.png" alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Naviagtion;
