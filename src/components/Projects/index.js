import Card1 from "../Cards";
import { Container, Col, Row } from "react-bootstrap";
export default function Projects() {
  return (
    <Container>
      <h3>Projects</h3>
      <hr></hr>
      <Row className="mb-4 mt-4">
        <Col md={4}>
          <Card1 title="Good Reads" color="dark" />
        </Col>
        <Col md={4}>
          <Card1 title="DBMS Bash" color="secondary" />
        </Col>
        <Col md={4}>
          <Card1 title="Blockchain" color="dark" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card1 title="Library System" color="secondary" />
        </Col>
        <Col md={4}>
          <Card1 title="Books Dictionary" color="dark" />
        </Col>
        <Col md={4}>
          <Card1 title="Hospital App" color="secondary" />
        </Col>
      </Row>
    </Container>
  );
}
