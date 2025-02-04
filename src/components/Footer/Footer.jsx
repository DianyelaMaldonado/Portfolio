import React from "react";
import "./Footer.scss";
import "../../scss/main.scss";
import { Map } from "../Location/Maps";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className='footer overflow-hidden'>
        <div>
          <div className='row align-items-center contact-wrapper'>
            <div className='col-12 contact-information mb-4'>
              <div className='contact-information-title'>
                <h3 className='text-center m-auto'>
                  Let's Make Awesome Code Together!
                </h3>
              </div>
              <div className='contact-information-cta d-flex align-items-center justify-content-center mt-5 mb-5'>
                <div className='cta-linkedin'>
                  <Link
                    to='https://www.linkedin.com/in/dianyela-maldonado/'
                    className='cta-linkedin-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Click to go Linkedin'
                  >
                    <span className='linkedin-icon'></span>
                  </Link>
                </div>
                <div className='cta-email'>
                  <a
                    href='mailto:dianyela.y.maldonado@gmail.com'
                    className='cta-email-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Click to contact me by Email'
                  >
                    <span className='email-icon'></span>
                  </a>
                </div>
                <div className='cta-github'>
                  <Link
                    to='https://github.com/DianyelaMaldonado'
                    className='cta-github-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Click to go Github'
                  >
                    <span className='github-icon'></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-12  map-contact'>
              <Map />
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-dark py-3'>
        <div className='container'>
          <p className='text-center text-white mb-0'>
            ©2025 Dianyela Maldonado.
          </p>
        </div>
      </footer>
    </>
  );
};
