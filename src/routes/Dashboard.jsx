import Card from "../components/LongCard";
import { Row, Col } from "react-bootstrap";
import ShortCard from "../components/ShortCard";
import InvoiceCard from "../components/InvoiceCard";
import SalesPurchaseCard from "../components/Sales&PurchaseCard";
import OverallInfoCard from "../components/OverallInformationCard";
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
      <Row className="d-flex mt-4">
        <Col>
          <ShortCard variant="warning" cardHeader="Total Sales" />
        </Col>
        <Col>
          <ShortCard variant="primary" cardHeader="Total Purchases" />
        </Col>
        <Col>
          <ShortCard variant="success" cardHeader="Total Expenses" />
        </Col>
        <Col>
          <ShortCard variant="primary" cardHeader="Net Profit" />
        </Col>
      </Row>

      {/* Invoice Cards and expenditure cards */}
      <Row className="mt-4 d-flex">
        <Col>
          <InvoiceCard />
        </Col>

        <Col>
          <InvoiceCard />
        </Col>

        <Col>
          <InvoiceCard />
        </Col>
        <Col>
          <InvoiceCard />
        </Col>
      </Row>

      <Row className="mt-4 d-flex">
        <Col md={8}>
          <SalesPurchaseCard />
        </Col>
        <Col md={4}>
          <OverallInfoCard />
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;


