import React from 'react'
import './Header.css'
import Menu from "../../../assets/Home/menu.png"
export default function Header() {
        return (
                <div className="navbar">
                        <div className="nav-links">
                                <ul>
                                        <li className="active"><a href="#" >Home</a></li>
                                        <li><a href="#">AboutMe</a></li>
                                        <li><a href="#">Resume</a></li>
                                        <li><a href="#">ContactMe</a></li>
                                </ul>
                        </div>
                        <img src={Menu} alt="menu hamburger" className="menu-hamburger"/>
                </div>
        )
}

