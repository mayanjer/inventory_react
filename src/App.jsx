import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);

  function getPostData(postData) {
    setData((currentState) => [postData, ...currentState]);
  }

  return (
    <>
      <Form data={getPostData} />
      {data.map((post) => (
        <Card name={post.name} email={post.email} />
      ))}
    </>
  );
}

export default App;