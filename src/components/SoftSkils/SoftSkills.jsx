import React, { useEffect } from "react";
import "./SoftSkills.scss";
import "../../scss/main.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import softSkillsData from "../../Apis/soft-skills.json";
import { ParallaxStagged } from "../Animations/ParallaxStagged";

export const SoftSkills = () => {
  useEffect(() => {
    ParallaxStagged();
  }, []);

  return (
    <>
      <section className='soft-skills overflow-hidden pb-5' id='soft-skills'>
        <div>
          <Row xs={1} md={2} lg={3} className='g-4'>
            {softSkillsData.map((softSkill, index) => (
              <Col
                key={index}
                data-parallax-stagged-content
                data-parallax-stagged-content-duration='0.90'
                data-parallax-animated-scroll-start='30%'
              >
                <Card
                  className='d-flex h-100 text-center'
                  data-parallax-stagged-content-item
                >
                  <Card.Header className='d-flex justify-content-center align-items-center'>
                    <img
                      className='img-small'
                      src={softSkill.image}
                      alt={softSkill.name}
                    />
                  </Card.Header>
                  <Card.Body className='d-flex flex-column'>
                    <Card.Title className='fw-bold text-uppercase'>
                      {softSkill.name}
                    </Card.Title>
                    <Card.Text>{softSkill.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};
