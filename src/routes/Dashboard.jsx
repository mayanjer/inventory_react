import Card from "../components/LongCard";
import { Row, Col } from "react-bootstrap";
import ShortCard from "../components/ShortCard";
function Dashboard() {
  return (
    <>
      <Row>
        <Col className="text-start">
          <h2>Welcome,</h2>
        </Col>

        <Col className="text-end">
          <h5>Add a date thingy</h5>
        </Col>
      </Row>

      <Card />
      <Row className="d-flex flex-wrap mt-4">
        <Col>
          <ShortCard />
        </Col>
        <Col>
          <ShortCard />
        </Col>
        <Col>
          <ShortCard />
        </Col>
        <Col>
          <ShortCard />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;

<Row>
  <Col>
    <ShortCard />
  </Col>
  <Col>
    <ShortCard />
  </Col>
  <Col>
    <ShortCard />
  </Col>
  <Col>
    <ShortCard />
  </Col>
</Row>;
