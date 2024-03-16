import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <div className="bg-dark py-5">
      <Container>
        <Row>
          <Col
            md={6}
            sm={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <h3 className="text-white border-bottom pb-3 mb-4 fs-2 text-uppercase">
                My Focus
              </h3>
              <p class="text-white">React</p>
              <p class="text-white">Angular</p>
              <p class="text-white">MySql</p>
              <p class="text-white">MongoDB</p>
            </div>
          </Col>
          <Col md={6} sm={12} className="text-center">
            <ProgressBar variant="success" now={70} label="HTML" />
            <div className="mt-3">
              <ProgressBar variant="info" now={90} label="CSS" />
            </div>
            <div className="mt-3">
              <ProgressBar variant="warning" now={50} label="JavaScript" />
            </div>
            <div className="mt-3">
              <ProgressBar variant="danger" now={20} label="Angular" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Skills;
