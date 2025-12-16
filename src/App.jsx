import { useState } from "react";
import "./App.css";
import Form from './components/Form'
import Card from './components/Card'


function App() {

  function getPostData(postData) {
    console.log(postData)
  }
  

  return (
    <>
      <Form data={ getPostData } />
      <Card  />
      <Card />
    </>
  );
}

export default App;
