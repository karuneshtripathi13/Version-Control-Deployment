import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import "./Sidenav.css";
import './Button'
const Header1 = ({title}) => {
    return (
        <header id="header1">
            <h1>{title}</h1>
        </header>
    )
}
Header1.defaultProps={
    title:'Version Control, UML & Tracking System',
}
export default Header1
