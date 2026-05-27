import "./Project.css";

import img1 from "../../assets/images/spoitit.jpeg";
import img2 from "../../assets/images/portfolio.png";
import img3 from "../../assets/images/lifeonland.png";
import img4 from "../../assets/images/restful.jpg";
import img5 from "../../assets/images/decodelabs.png";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "SDGP-Project-V2",
    img: img1,
    desc: "2nd Year Software Dev Group Project Version 2.",
    skills: ["Dart"],
    github: "https://github.com/BinuraBimsara/SDGP-Project-V2"
  },
  {
    title: "Life-on-land Web Dev",
    img: img3,
    desc: "Created a non-server sided webpage using HTML, CSS and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nikil-Abbishak/Life-on-land---Web-Development-project"
  },
  {
    title: "Task Scheduler Tkinter",
    img: img6,
    desc: "A small everyday task scheduler using python.",
    skills: ["Python", "Tkinter"],
    github: "https://github.com/Nikil-Abbishak/Task-Scheduler-using-Tkinter"
  },
  {
    title: "SmartCampus REST service",
    img: img4,
    desc: "A pure JAX-RS backend architecture for a Smart Campus initiative at the University of Westminster.",
    skills: ["Java", "JAX-RS", "REST"],
    github: "https://github.com/Nikil-Abbishak/5COSC022W-SmartCampus-REST-service"
  },
  {
    title: "Portfolioo-SAMPLE",
    img: img2,
    desc: "Creative Portfolio site.",
    skills: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Nikil-Abbishak/Portfolioo-SAMPLE"
  },
  {
    title: "DecodeLabs-AI-Project1",
    img: img5,
    desc: 'Deterministic "White Box" chatbot built for the DecodeLabs Industrial Training Kit. Implements an IPO model.',
    skills: ["Python"],
    github: "https://github.com/Nikil-Abbishak/DecodeLabs-AI-Project1"
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}