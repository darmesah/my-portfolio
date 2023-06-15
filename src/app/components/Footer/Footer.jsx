import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="contact" className={classes.container}>
      <h3>CONNECT WITH ME</h3>
      <h1>Available for select work</h1>
      <div className={classes.flex_all}>
        <div className={classes.profiles}>
          <div className={classes.phone_email}>
            <div className={classes.phone}>
              <p className={classes.p1}>Phone</p>
              <p className={classes.p2}>
                <Link href="tel:+2348162371826">+234 816 237 1826</Link>
              </p>
            </div>
            <div>
              <p className={classes.p1}>Email</p>
              <p className={classes.p2}>
                <Link href="mailto:damisa.alex@gmail.com">
                  damisa.alex@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className={classes.links}>
            <h4>
              <Link
                href="https://github.com/darmesah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </h4>
            <h4>
              <Link
                href="https://www.linkedin.com/in/alex-damisa-14119912a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </h4>
            <h4>
              <Link
                href="https://twitter.com/dar_me_sah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </h4>{" "}
          </div>
        </div>
        <div className={classes.design}>
          <p className={classes.p1}>Design</p>
          <p className={classes.p2}>
            <Link href="#">kineticdesigner</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
