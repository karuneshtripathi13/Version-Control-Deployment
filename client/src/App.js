import './App.css';
import "./tracking.css"
import "./circle.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Home from './components/Home'
import View from './components/View'
import Login from "./components/Login";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Previous from "./components/Previous";
import Header1 from './components/Header1';
import Register from './components/Register';
import MainSideNav from './components/MainSideNav';
import WBS from './components/WBS';
import Tracking from './components/Tracking';
import Header2 from './components/Header2';
import Header3 from './components/Header3';


import React, { useState } from "react";
import {Fragment} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [idd, setIdd] = useState("");
  const setLogin=(e)=>{
    setIdd(e)
  }
  return (
    <Router>
      <Switch>
    <div className="App">
    <Route path='/' exact render={() =>
    <Fragment>
    <Header1/>
    <Login/>
    </Fragment>
    } />
    <Route path='/register' exact render={() =>
    <Fragment>
    <Header1/>
    <Register/>
    </Fragment>
    } />
    <Route path='/login'>
      <Header/>
      <MainSideNav/>
      <Route path="/login/addnew"><Upload/></Route>
      <Route path="/login/viewprev"><View idd={localStorage.getItem("idd")}/></Route>
      <Route path="/login/delete"><Delete idd={localStorage.getItem("idd")}/></Route>
      <Route path="/login/edit"><Edit idd={localStorage.getItem("idd")}/></Route>
      <Route path="/login/previous"><Previous idd={localStorage.getItem("idd")}/></Route>
      <Route path="/login/home">
        <Home idd={localStorage.getItem("idd")}/>
      </Route>
    </Route>
    <Route path='/Tracking'><Header2/><MainSideNav/><Tracking/></Route>
    <Route path='/WBS'><Header3/><MainSideNav/><WBS/></Route>
    <Footer/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
