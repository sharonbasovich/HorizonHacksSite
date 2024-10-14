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

  return (
    <>
      <div className="screen">
        <motion.img
          animate={{ y: "10vh" }}
          transition={{ delay: 5.75 }}
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
        <img src="/sunset.webp" className="background animated-blur" />
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
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  horizonhacksca
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact">
                <a
                  style={{ display: "inline-flex" }}
                  href="mailto:info@horizonhacks.com"
                >
                  <img src="https://skillicons.dev/icons?i=gmail&theme=light" />
                </a>
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  horizonhacks.ca
                </p>
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
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  Hack Club Bank
                </p>
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
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  Sharon Basovich
                </p>
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
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  Felix Zhang
                </p>
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
                <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                  Soroush Paidar
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
