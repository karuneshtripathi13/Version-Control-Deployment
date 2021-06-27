import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Sidenav from './Sidenav'
import "./Sidenav.css";
import './Button'
const Header3 = ({title}) => {
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
Header3.defaultProps={
    title:'WBS and UML',
}
export default Header3
