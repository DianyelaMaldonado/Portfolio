import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../scss/main.scss";
import "./Projects.scss";
import projects from "../../Apis/projects.json";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  useEffect(() => {
    //Animation to animate bg color
    const backgrounds = gsap.utils.toArray(".project-item-background");

    backgrounds.forEach((bg) => {
      const cardProject = bg.closest(".card-project");
      const fromX = cardProject.classList.contains("reverse")
        ? "100%"
        : "-100%";

      gsap.fromTo(
        bg,
        { x: fromX },
        {
          x: "0%",
          ease: "power1.out",
          scrollTrigger: {
            trigger: cardProject,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className='projects overflow-hidden py-5' id='projects'>
      <div>
        <div className='d-flex container mb-4'>
          <h2 className='me-2 text-danger'>Projects</h2>
          <h2>worked on.</h2>
        </div>

        <div className='row cards-project'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`col-12 card-project position-relative ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              <div className='project-item-background d-none d-lg-block'></div>
              <div
                className={`row align-items-center ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className='col-md-7 mb-3 mb-md-0'>
                  <div className='shadow-lg'>
                    <div className='project-image-container'>
                      <img
                        src={project.image}
                        alt={project.name}
                        className='img-fluid project-image'
                      />
                    </div>
                  </div>
                </div>

                <div
                  className='col-md-5 text-center card-size'
                  data-parallax-stagged-content
                  data-parallax-animated-scroll-start='50%'
                >
                  <h3 className='mb-3' data-parallax-stagged-content-item>
                    {project.name}
                  </h3>
                  <ul
                    className='list-unstyled'
                    data-parallax-stagged-content-item
                  >
                    {project.technologies.map((technology, idx) => (
                      <li key={idx} className='text-muted'>
                        • {technology}
                      </li>
                    ))}
                  </ul>
                  <p
                    className='small text-muted p-0 m-0'
                    data-parallax-stagged-content-item
                  >
                    {project.startDate} - {project.endDate}
                  </p>
                  <p
                    className='small text-muted'
                    data-parallax-stagged-content-item
                  >
                    {project.realized}
                  </p>
                  {project.url && (
                    <Link
                      to={project.url}
                      className='project-link'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-parallax-stagged-content-item
                    >
                      <span>View Project</span>
                      <svg width='13px' height='10px' viewBox='0 0 13 10'>
                        <path d='M1,5 L11,5'></path>
                        <polyline points='8 1 12 5 8 9'></polyline>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
