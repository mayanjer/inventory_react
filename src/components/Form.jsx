import { Col, Row } from "react-bootstrap";

function Form() {
  return (
    <form action="">
      <div className="card container">
        <Row>
          <Col>
            <h4>Name</h4>
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <h4 className="mt-3">Password</h4>

            <div>
              <input type="text" placeholder="Password" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <button type="submit" className="mt-3">
              Submit
            </button>
          </Col>
          <Col>
            <button className="mt-3 "> cancel</button>
          </Col>
        </Row>
      </div>
    </form>
  );
}

export default Form;
