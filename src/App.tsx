import "./App.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assets/Animation - 1728786951301.json";
import { useRef, useEffect } from "react";
import Reveal from "./components/Reveal";
import { motion } from "framer-motion";

function App() {
  const lottieRef = useRef<LottieRefCurrentProps>(null); // Create a ref for the Lottie animation

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the speed here
    }
  }, []);

  const icon = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="screen">
        <motion.div
          className="box-animation"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, borderRadius: "80%" }}
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ opacity: { duration: 0.5, delay: 3 } }}
          onTap={() => {
            window.location.href =
              "https://docs.google.com/document/d/1bIPB54qwW36ZnCl_whg5_fMRucPSJXIIOt7IWCoZv4w/edit?tab=t.0#heading=h.omw9gy62jmrh";
          }}
        >
          <h1 className="box-text">
            <a
              style={{ color: "#BB6DD1" }}
              href="https://docs.google.com/document/d/1bIPB54qwW36ZnCl_whg5_fMRucPSJXIIOt7IWCoZv4w/edit?tab=t.0#heading=h.omw9gy62jmrh"
            >
              Info
            </a>
          </h1>
        </motion.div>
        <motion.div
          className="box-animation signup"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, borderRadius: "80%" }}
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ opacity: { duration: 0.5, delay: 3 } }}
          onTap={() => {
            window.location.href = "https://forms.gle/sjQqJDkTBfsqErwo6";
          }}
        >
          <h1 className="box-text">
            <a
              style={{ color: "white" }}
              href="https://forms.gle/sjQqJDkTBfsqErwo6"
            >
              Register
            </a>
          </h1>
        </motion.div>
        <motion.img
          animate={{ y: "10vh" }}
          transition={{ delay: 2.75 }}
          className="hackclub"
          src="/flag-orpheus-top.svg"
        />
        <h1 className="text typed name">HorizonHacks</h1>
        <h1 className="text year">2024</h1>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="/logo.svg"
          className="logo"
        />
        <img src="/sunset.png" className="background animated-blur" />
        <div className="scroll">
          <Lottie lottieRef={lottieRef} animationData={animationData} />
        </div>
      </div>
      <div className="block"></div>
      <div className="cover even">
        <div className="left column">
          <div className="content">
            <div className="bottom">
              <Reveal>
                <h2>What is HorizonHacks?</h2>
              </Reveal>
            </div>
            <Reveal>
              <ul>
                <li>
                  A hackathon run by high school students, for high school
                  students
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <ul>
                <li>
                  We aim to introduce students to the world of programming and
                  problem-solving and allow experienced students to use their
                  skills to solve real-world problems
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <ul>
                <li>
                  Each year, <b>HorizonHacks</b> offers a new and innovative
                  theme that challenges the participant's creativity and
                  technical skills.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <div className="bottom">
              <Reveal>
                <h2>The Theme</h2>
              </Reveal>
            </div>
            <Reveal>
              <p>
                For <b>HorizonHacks 2024</b>, our theme will be studying.
                Participants will create a program to assist students in their
                studying. Key problems surrounding this topic may include
                procrastination, burnout, and information retention. In the name
                of fairness, a detailed case will be revealed on the first day
                so no team has an advantage.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="right column">
          <div className="content">
            <div className="bottom">
              <Reveal>
                <h2>Competition Format</h2>
              </Reveal>
            </div>
            <Reveal>
              <ul>
                <li>2 day format</li>
              </ul>
            </Reveal>
            <Reveal>
              <ul>
                <li>
                  Participants will use the first day to build teams and develop
                  their ideas
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <ul>
                <li>
                  The second day will be a cumulative presentation consisting of
                  their vision, their process, and demonstration to our panel of
                  judges.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="cover even">
        <div className=" left contact-flex">
          <div className="bottom">
            <Reveal>
              <h2 style={{ padding: 20 }}>Contact Us</h2>
            </Reveal>
          </div>
          <div className="contact-info">
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="https://www.instagram.com/horizonhacksca/"
                >
                  <img src="https://skillicons.dev/icons?i=instagram" />
                </a>
                <a
                  href="https://www.instagram.com/horizonhacksca/"
                  className="link-text"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                >
                  horizonhacksca
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="mailto:horizonhacks24@gmail.com"
                >
                  <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
                </a>
                <a
                  href="mailto:horizonhacks24@gmail.com"
                  className="link-text"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                >
                  horizonhacks24@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="contact-flex">
          <div className="bottom">
            <Reveal>
              <h2 style={{ padding: 20 }}>Fiscal Sponsors</h2>
            </Reveal>
          </div>
          <div className="contact-info">
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="https://hackclub.com/fiscal-sponsorship/"
                >
                  <img style={{ height: 48 }} src="/hcb-light.svg" />
                </a>
                <a
                  href="https://hackclub.com/fiscal-sponsorship/"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                  className="link-text"
                >
                  Hack Club Bank
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="right contact-flex">
          <div className="bottom">
            <Reveal>
              <h2 style={{ padding: 20 }}>Website Contributors</h2>
            </Reveal>
          </div>
          <div className="contact-info">
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="https://github.com/sharonbasovich/"
                >
                  <img className="rounded" src="/sharon.jfif" />
                </a>
                <a
                  href="https://github.com/sharonbasovich/"
                  className="link-text"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                >
                  Sharon Basovich
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="https://github.com/MrMan314"
                >
                  <img className="rounded" src="/felix.png" />
                </a>
                <a
                  className="link-text"
                  href="https://github.com/MrMan314"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                >
                  Felix Zhang
                </a>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="https://github.com/sub-roc"
                >
                  <img className="rounded" src="/soroush.png" />
                </a>
                <a
                  className="link-text"
                  href="https://github.com/sub-roc"
                  style={{ display: "inline-flex", paddingLeft: 20 }}
                >
                  Soroush Paidar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
