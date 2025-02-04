import React from "react";
import "./SoftSkills.scss";
import "../../scss/main.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import softSkillsData from "../../Apis/soft-skills.json";

export const SoftSkills = () => {
  return (
    <>
      <section className='soft-skills overflow-hidden pb-5'>
        <div>
          <Row xs={1} md={2} lg={3} className='g-4'>
            {softSkillsData.map((softSkill, index) => (
              <Col key={index}>
                <Card className='d-flex h-100'>
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
