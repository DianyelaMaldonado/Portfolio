import React from "react";
import "../../scss/main.scss";
import "./TechSkills.scss";

export const TechSkills = () => {
  return (
    <>
      <section className='tech-skills overflow-hidden pt-5 pb-5'>
        <div>
          <div className='d-flex mb-4'>
            <h2 className='me-2 is-ff-red'>Skills</h2>
            <h2>& Experience.</h2>
          </div>
          <p>
            I am skilled in developing both individual and collaborative
            projects, utilizing technologies such as HTML, JavaScript, SASS,
            Tailwind CSS, and CSS. I have hands-on experience implementing
            animations with GSAP and managing websites built with WordPress,
            Craft CMS, and Craft Commerce. I ensure the accessibility of web
            projects, focusing on performance optimization, best practices, and
            maintaining pixel-perfect designs. Additionally, I am proficient in
            version control using GitHub and project management tools such as
            Asana, Miro, Trello, Notion, and design platforms like Figma.
          </p>
          <p>
            I am also experienced in PHP, Twig, and have a strong understanding
            of Scrum methodology for agile project management. I continue to
            expand my skill set by learning Bootstrap for responsive design and
            React for building interactive user interfaces.
          </p>
        </div>
      </section>
    </>
  );
};
