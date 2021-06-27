import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidenav from './Sidenav'
import "./Sidenav.css";
import './Button'
const Header2 = ({title}) => {
    const idrm = ()=>{
        localStorage.removeItem("idd")
    }
    return (
        <header>
            <Sidenav/>
            <h1 id="h11">{title}</h1>
            <Link to='/' className="btn" id="logout" onClick={idrm}>Logout &nbsp;<i className="fa fa-sign-out"></i></Link>
        </header>
    )
}
Header2.defaultProps={
    title:'Progress Tracking',
}
export default Header2
