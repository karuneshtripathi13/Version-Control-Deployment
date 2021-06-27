import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import "./Sidenav.css";
import User from '../images/User.png'

const Sidenav=()=> {
    return (
      <Menu>
        <>
          <img src={User} alt="User" width="100vw" height="100vw"></img>
          <div id="logindet">Project Name: {(localStorage.getItem("proj")!=null)?(localStorage.getItem("proj")):(null)}</div>
          <div id="logindet">Project ID: {(localStorage.getItem("idd")!=null)?(localStorage.getItem("idd")):(null)}</div>
        </>
        <Link to="/login/home" className="btn" style={{margin:'1vw',width:'14vw'}}>Home &nbsp;&nbsp;<i className='fa fa-home' style={{fontSize:"1.5em",display:"inline"}}></i></Link>
        <Link to="/login/addnew" className="btn" style={{margin:'1vw',width:'14vw'}}>Add New File</Link>
        <Link to="/login/viewprev" className="btn" style={{margin:'1vw', width:'14vw'}}>Current Version</Link>
        <Link to="/login/edit" className="btn" style={{margin:'1vw',width:'14vw'}}>Edit File</Link>
        <Link to="/login/previous" className="btn" style={{margin:'1vw',width:'14vw'}}>See Previous Versions</Link>
        <Link to="/login/delete" className="btn" style={{margin:'1vw',width:'14vw'}}>Delete File</Link>
        <Link to="/Tracking" className="btn" style={{margin:'1vw',width:'14vw'}}>Progress Tracking &nbsp;&nbsp;<i class="fa fa-bar-chart-o fa-2x" style={{fontSize:"1.5em",display:"inline"}} id="faa"></i></Link>
        <Link to="/WBS" className="btn" style={{margin:'1vw',width:'14vw'}}>WBS and UML &nbsp;&nbsp;<i class="fa fa-sitemap fa-2x" style={{fontSize:"1.5em",display:"inline"}} id="faa"></i></Link>
      </Menu>
    );
}
export default Sidenav;