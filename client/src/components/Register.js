import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function validateForm() {
    return id.length>0 && name.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("in")
    fetch('/file/reg',{method:'POST',body:JSON.stringify({id:id,name:name,password:password}),headers: {
        'Accept': 'application/json','Content-Type': 'application/json'}}).then((response)=>response.json()).then((data)=>{
          console.log(data.msg);
          alert(data.msg)
          if(data.msg.localeCompare('User Already exists')!==0)
          history.push('/')
          window.location.reload()
      })
  }

  let history = useHistory();

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="id">
          <Form.Label>Project ID</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register &nbsp;<i className="fa fa-sign-in"></i>
        </Button>
      </Form>
    </div>
  );
}