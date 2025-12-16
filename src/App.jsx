import { useState } from "react";
import "./App.css";
import Form from './components/Form'
import Card from './components/Card'


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = {
    email: email,
    password: password,
  };
  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  console.log(postData);

  return (
    <>
      <Form onEmailChange={emailHandler} onPasswordChange={ passwordHandler} />
      <Card email={ email} password = {password} />
    </>
  );
}

export default App;
