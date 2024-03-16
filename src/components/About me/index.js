import React from "react";
import { Col } from "react-bootstrap";

function AboutMe() {
  return (
    <div className="row bg-light py-5">
      <Col
        md={6}
        sm={12}
        className="d-flex align-items-center justify-content-center"
      >
        <div>
          <h3 className="text-dark border-bottom pb-3 mb-4 fs-2 text-uppercase">
            About Me
          </h3>
        </div>
      </Col>
      <Col md={6} sm={12} className="text-center">
        <p>
          I recently graduated from Ain Shams University with a GPA of 3.2 and
          am currently a trainee in open-source app development at ITI. Eager to
          enhance my skills in web development, I am exploring technologies like
          HTML, CSS, JavaScript, React, Angular, and more. I actively engage in
          building projects, contributing to open source, and participating in
          coding challenges.
        </p>
      </Col>
    </div>
  );
}

export default AboutMe;
