import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return id.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("in")
    fetch('/file/login',{method:'POST',body:JSON.stringify({id:id,password:password}),headers: {
        'Accept': 'application/json','Content-Type': 'application/json'}}).then((response)=>response.json()).then((data)=>{
          console.log(data.msg);
          if(!data.msg)
          alert('No Such Project found')
          else
          {
            window.localStorage.setItem("idd",id)
            window.localStorage.setItem("proj",data.proj)
            history.push('/login/home')
          }
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
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login &nbsp;<i className="fa fa-sign-in"></i>
        </Button>
        <a href="/register" style={{color:"navy"}}>Register</a>
      </Form>
    </div>
  );
}