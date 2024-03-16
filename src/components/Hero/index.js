import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
function ContainerExample() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <div className="text">Ahmed Khaled</div>
            <div className="subtext">Web Developer</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContainerExample;
