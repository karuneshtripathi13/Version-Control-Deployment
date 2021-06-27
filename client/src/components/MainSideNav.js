import React from 'react'
import { Link } from "react-router-dom";

function MainSideNav() {
    const idrm = ()=>{
        localStorage.removeItem("idd")
    }
    return (
            <nav class="main-menu">
        <ul>
            <li>
                <Link to="/login/home">
                    <i class="fa fa-code fa-2x" style={{fontSize:"2em"}} id="faa"></i>
                    <span class="nav-text">
                        Version Control
                    </span>
                </Link>
              
            </li>
            <li class="has-subnav">
                <Link to='/WBS'>
                    <i class="fa fa-sitemap fa-2x" style={{fontSize:"2em"}} id="faa"></i>
                    <span class="nav-text">
                        WBS and UML
                    </span>
                </Link>
                
            </li>
            <li class="has-subnav">
                <a href="/Tracking">
                    <i class="fa fa-bar-chart-o fa-2x" style={{fontSize:"2em"}} id="faa"></i>
                    <span class="nav-text">
                        Progress Tracking
                    </span>
                </a>
                
            </li>
            
        </ul>

        <ul class="logout">
            <li>
               <Link to="/" onClick={idrm}>
                     <i class="fa fa-power-off fa-2x" style={{fontSize:"2em"}} id="faa"></i>
                    <span class="nav-text">
                        Logout
                    </span>
                </Link>
            </li>  
        </ul>
    </nav>
    )
}

export default MainSideNav
