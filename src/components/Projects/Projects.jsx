import React from "react";
import { Link } from "react-router-dom";
import "../../scss/main.scss";
import "./Projects.scss";
import projects from "../../Apis/projects.json";

export const Projects = () => {
  return (
    <section className='projects overflow-hidden py-5'>
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

                <div className='col-md-5 text-center card-size'>
                  <h3 className='mb-3'>{project.name}</h3>
                  <ul className='list-unstyled'>
                    {project.technologies.map((technology, idx) => (
                      <li key={idx} className='text-muted'>
                        • {technology}
                      </li>
                    ))}
                  </ul>
                  <p className='small text-muted'>
                    {project.startDate} - {project.endDate}
                  </p>
                  <Link
                    to={project.url}
                    className='project-link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span>View Project</span>
                    <svg width='13px' height='10px' viewBox='0 0 13 10'>
                      <path d='M1,5 L11,5'></path>
                      <polyline points='8 1 12 5 8 9'></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
