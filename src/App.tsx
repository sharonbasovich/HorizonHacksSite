import "./App.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assets/Animation - 1728786951301.json";
import { useRef, useEffect } from "react";
import Reveal from "./components/Reveal";
import { motion } from "framer-motion";
import loadData from "./assets/load.json";

function App() {
  const lottieRef = useRef<LottieRefCurrentProps>(null); // Create a ref for the Lottie animation
  const lottieRef2 = useRef<LottieRefCurrentProps>(null); // Create a ref for the Lottie animation
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the speed here
    }
  }, []);

  useEffect(() => {
    if (lottieRef2.current) {
      lottieRef2.current.setSpeed(0.40); // Set the speed here
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
      <div className="load">
        <Lottie className="loadAnimation" lottieRef={lottieRef2} animationData={loadData} />
        <img src="/black.webp" className="loadBackground" />
        <img src="/logo.svg" className="loadLogo" />
      </div>

      <div className="screen">
        <motion.button
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ opacity: { duration: 0.5, delay: 6.2 } }}
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1DOmnpXkw3r0BEL6bFacUOZr7a_aM5WO6mbOqunujRWY/edit?usp=sharing",
              "_blank"
            );
            return false;
          }}
          className="box-animation"
        >
          <h1 className="box-text" style={{ color: "#978CB8" }}>
            Info
          </h1>
        </motion.button>
        <motion.button
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{ opacity: { duration: 0.5, delay: 6.2 } }}
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            window.open("https://forms.gle/tHR3cRLzpyqyKLxg6", "_blank");
            return false;
          }}
          className="box-animation signup"
        >
          <h1 className="box-text" style={{ color: "white" }}>
            Register
          </h1>
        </motion.button>

        <motion.img
          animate={{ y: "10vh" }}
          transition={{ delay: 5.75 }}
          className="hackclub"
          src="/flag-orpheus-top.svg"
        />
        <h1 className="text typed name">HorizonHacks</h1>
        <h1 className="text year">2025</h1>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="/logo.svg"
          className="logo"
        />
        <img src="/background.png" className="background animated-blur" />
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
                <h2 style={{ width: "100%" }}>What is Horizon Hacks?</h2>
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
                For <b>HorizonHacks 2025</b>, our theme will be Lifestyle &
                Health. Participants will create a program to support
                individuals in building healthier habits and enhancing overall
                well-being. Key challenges surrounding this topic may include
                issues like stress management, daily routine optimization, and
                sustainable health practices. To ensure fairness, a detailed
                case will be revealed on the first day, so no team has an
                advantage.
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
                <li>
                  48-Hour hybrid hackathon
                  <ul>In-person (optional) between 9 AM and 5 PM both days</ul>
                  <ul>Completely online between 5 PM and 9 AM</ul>
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <ul>
                <li>
                  Participants will use the first day to build teams and develop
                  their ideas.
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
      <div style={{ padding: 70 }}>
        <Reveal>
          <h1>Frequently Asked Questions (FAQ)</h1>
        </Reveal>
        <Reveal>
          <h3>What is a hackathon?</h3>
        </Reveal>
        <Reveal>
          <p>
            A hackathon is an event where participants (hackers) design,
            develop, and pitch an innovative project built from scratch over the
            course of 48 hours. Over the course of the hackathon, hackers will
            have opportunities to network, learn, and collaborate through
            workshops, panels, activities, and more.
          </p>
        </Reveal>
        <Reveal>
          <h3>Who can participate?</h3>
        </Reveal>
        <Reveal>
          <p>
            We welcome hackers of all experience levels, whether you've never
            coded in your life or code competitively!
          </p>
        </Reveal>
        <Reveal>
          <h3>Is the event free?</h3>
        </Reveal>
        <Reveal>
          <p>Yes, HorizonHacks is completely free!</p>
        </Reveal>
        <Reveal>
          <h3>Do I need a team?</h3>
        </Reveal>
        <Reveal>
          <p>
            Not necessarily, but we do allow teams of up to three people. You
            can form teams either on our Discord prior to the event or at the
            event itself!
          </p>
        </Reveal>
        <Reveal>
          <h3>What do I need?</h3>
        </Reveal>
        <Reveal>
          <p>
            All you need is a laptop with a code editor or IDE! All other tools
            that you may need will be provided at the event or can be found
            online for free, so don't worry about purchasing things yourself!
            <br></br>
            <br></br>
            Oh, and one more thing, make sure to have tons of fun!
          </p>
        </Reveal>
        <Reveal>
          <h3>Can I participate virtually?</h3>
        </Reveal>
        <Reveal>
          <p>
            Yes, HorizonHacks will be hybrid! You can choose to come in-person
            between 9 AM and 5 PM both days or compete completely online.
          </p>
        </Reveal>
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
                  style={{
                    display: "inline-flex",
                    paddingLeft: 20,
                    wordBreak: "break-all",
                    whiteSpace: "normal",
                  }}
                >
                  horizonhacks24
                  <br />
                  @gmail.com
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
