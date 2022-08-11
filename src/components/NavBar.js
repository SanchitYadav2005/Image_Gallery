import React from "react";
import logo from "../images/logo.jpg"


function NavBar(){
    return(
        <nav className="nav_bar">
            <img src={logo} alt="image gallery logo" className="bar_img"/>
            <h1>Imgae Gallery</h1>
            <ul className="nav-list">
                <li className="nav-list-iteam"><a href="#" className="nav-list-iteam-link">Nature</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;