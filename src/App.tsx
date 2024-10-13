import "./App.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assets/Animation - 1728786951301.json";
import { useRef, useEffect } from "react";
import Reveal from "./components/Reveal";

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
        <img className="hackclub" src="/flag-orpheus-top.svg" />
        <h1 className="text typed name">HorizonHacks</h1>
        <h1 className="text year">2024</h1>
        <img src="/logo.svg" className="logo" />
        <img src="/sunset.webp" className="background animated-blur" />
        <div className="scroll">
          <Lottie lottieRef={lottieRef} animationData={animationData} />
        </div>
      </div>
      <div className="block"></div>
      <div className="cover even">
        <div className="column">
          <Reveal>
            <div className="content">
              <h2>What is HorizonHacks?</h2>
              <ul>
                <li>
                  A hackathon run by high school students, for high school
                  students
                </li>
                <li>
                  We aim to introduce students to the world of programming and
                  problem-solving and allow experienced students to use their
                  skills to solve real-world problems
                </li>
                <li>
                  Each year, <b>HorizonHacks</b> offers a new and innovative
                  theme that challenges the participant's creativity and
                  technical skills.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="column">
          <Reveal>
            <div className="content">
              <h2>
                <br />
                The Theme
              </h2>
              <p>
                For <b className="goofy">HorizonHacks 2024</b>, our theme will
                be studying. Participants will create a program to assist
                students in their studying. Key problems surrounding this topic
                may include procrastination, burnout, and information retention.
                In the name of fairness, a detailed case will be revealed on the
                first day so no team has an advantage.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="column">
          <Reveal>
            <div className="content">
              <h2>Competition Format</h2>
              <ul>
                <li>2 day format</li>
                <li>
                  Participants will use the first day to build teams and develop
                  their ideas
                </li>
                <li>
                  The second day will be a cumulative presentation consisting of
                  their vision, their process, and demonstration to our panel of
                  judges.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="cover even">
        <div className="contact-flex">
          <h2 style={{ padding: 20 }}>
            <br />
            Contact Us
          </h2>
          <div className="contact-info">
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
          </div>
        </div>
        <div className="contact-flex">
          <h2 style={{ padding: 20 }}>Fiscal Sponsors</h2>
          <div className="contact-info">
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
          </div>
        </div>
        <div className="contact-flex">
          <h2 style={{ padding: 20 }}>Website Contributors</h2>
          <div className="contact-info">
            <div className="contact">
              <a
                style={{ display: "inline-flex" }}
                href="https://www.instagram.com/horizonhacksca/"
              >
                <img className="rounded" src="/sharon.jfif" />
              </a>
              <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                Sharon Basovich
              </p>
            </div>
            <div className="contact">
              <a
                style={{ display: "inline-flex" }}
                href="mailto:info@horizonhacks.com"
              >
                <img className="rounded" src="/felix.png" />
              </a>
              <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                Felix Zhang
              </p>
            </div>
            <div className="contact">
              <a
                style={{ display: "inline-flex" }}
                href="mailto:info@horizonhacks.com"
              >
                <img className="rounded" src="/soroush.png" />
              </a>
              <p style={{ display: "inline-flex", paddingLeft: 20 }}>
                Soroush Paidar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
