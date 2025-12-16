import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from 'react'

function SignUpForm({data}) {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  const postData = {
    'email': email,
    'password':password
  }

  function inputHandler(event) {
    if (event.target.id === "formBasicEmail") {
      setEmail(event.target.value)
    } else if (event.target.id === "formBasicPassword") {
      setPassword(event.target.value)
    }
  }
  function submitHandler() {
    data(postData)   
  }

  // function emailHandler(event) {
  //   setEmail(event.target.value)
  // }

  // function passwordHandler(event) {
  //   setPassword(event.target.value)
  // }

  // console.log(postData)


  

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={inputHandler}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={inputHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick = {submitHandler}>
        Submit
      </Button>
    </Form>
  );
}

export default SignUpForm;
