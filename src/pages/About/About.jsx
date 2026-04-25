import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);
  const publicBase = import.meta.env.BASE_URL;
  const frontImage = `${publicBase}img3.png`;
  const frontFallbackImage = `${publicBase}imp3.png`;
  const backImage = `${publicBase}img4.png`;

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img
                src={frontImage}
                alt="Profile"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = frontFallbackImage;
                }}
              />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src={backImage} alt="Profile alternate" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I'm Nikil, a Full-Stack Developer and Machine Learning enthusiast studying at the University of Westminster.
            I enjoy building modern, responsive web applications across both frontend and backend, with a strong focus on performance,
            usability, and clean architecture. I also explore ML concepts to create smarter, data-driven features and practical solutions.
            My goal is to combine software engineering and intelligent systems to build products that are useful, scalable, and impactful.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;