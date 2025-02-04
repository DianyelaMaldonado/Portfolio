import React, { useEffect } from "react";
import "../../scss/main.scss";
import "./TechSkills.scss";
import { ParallaxStagged } from "../Animations/ParallaxStagged";

export const TechSkills = () => {
  useEffect(() => {
    ParallaxStagged();
  }, []);

  return (
    <>
      <section
        className='tech-skills overflow-hidden pt-5 pb-5'
        id='tech-skills'
      >
        <div
          data-parallax-stagged-content
          data-parallax-stagged-content-duration='0.75'
          data-parallax-animated-scroll-start='20%'
        >
          <div className='d-flex mb-4' data-parallax-stagged-content-item>
            <h2 className='me-2 is-ff-red'>Skills</h2>
            <h2>& Experience.</h2>
          </div>

          <p className='data-parallax-stagged-content-item'>
            I am a Venezuelan residing in Mexico, currently working as a Full
            Stack Web Developer at Black Magic.
          </p>
          <p data-parallax-stagged-content-item>
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
            I also have experience working with PHP and Twig, and I have a
            strong understanding of Scrum methodology for agile project
            management. Currently, I am independently learning Bootstrap to
            enhance my responsive design skills and React to build dynamic and
            interactive user interfaces.
          </p>
          <p data-parallax-stagged-content-item>
            What excites me the most about frontend development is creating
            animated websites. I find it to be one of the most enjoyable and
            creative aspects of building user interfaces. I love bringing
            designs to life through motion, making interactions more engaging,
            and enhancing user experiences with smooth, eye-catching animations.
          </p>
        </div>
      </section>
    </>
  );
};
