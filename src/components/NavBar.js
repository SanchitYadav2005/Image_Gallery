import React from "react";
import logo from "../images/logo.jpg"


function NavBar(){
    return(
        <nav className="nav_bar">
            <img src={logo} alt="gallery logo" className="bar_img"/>
            <h1>Imgae Gallery</h1>
        </nav>
    )
}

export default NavBar;