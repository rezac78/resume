import React, { useState } from 'react';
import './Header.css'
import MenuOpen from "../../../assets/Home/menu.png"
import MenuClose from "../../../assets/Home/close.png"
export default function Header() {
        const [isOpen, setOpen] = useState(false)

        const handleIsOpen = () => {
                setOpen(!isOpen)
                console.log(isOpen)
        }
        return (
                <div isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen} className="navbar">
                        {
                                isOpen === true ?
                                        <div>
                                                <div className="nav-links">
                                                        <ul>
                                                                <li className="active"><a href="#" >Home</a></li>
                                                                <li><a href="#">AboutMe</a></li>
                                                                <li><a href="#">Resume</a></li>
                                                                <li><a href="#">ContactMe</a></li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <img src={MenuClose} alt="menu hamburger" className="menu-hamburger" />
                                                </div>

                                        </div>
                                        :
                                        <div>
                                                <div className="nav-links-PC">
                                                        <ul>
                                                                <li className="active"><a href="#" >Home</a></li>
                                                                <li><a href="#">AboutMe</a></li>
                                                                <li><a href="#">Resume</a></li>
                                                                <li><a href="#">ContactMe</a></li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <img src={MenuOpen} alt="menu hamburger" className="menu-hamburger" />
                                                </div>
                                        </div>
                        }
                </div>
        )
}

