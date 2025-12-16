import Card from "react-bootstrap/Card";

function UserCard({email, password}) {
  return (
    <Card style={{ width: "18rem", marginTop:"80px"}}>
      <Card.Body>
        <Card.Title>Email</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        <Card.Text>
          {password}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
