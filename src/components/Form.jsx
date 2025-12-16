import { Col, Row } from "react-bootstrap";


function Form() {
    function inputHandler(event) {
        console.log(event.target.value)
    }
  return (
    <form action="">
      <div className="card container">
        <Row>
          <Col>
            <h4>Name</h4>
            <div>
                          <input type="text" placeholder="Name" onChange={ inputHandler} />
            </div>
            <h4 className="mt-3">Password</h4>

            <div>
                          <input type="text" placeholder="Password" onChange={ inputHandler} />
            </div>
          </Col>
        </Row>
      </div>
    </form>
  );
}

export default Form;
