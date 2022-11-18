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
        const values = [
                { id: 1, name: "Home", Link: "#" },
                { id: 2, name: "AboutMe", Link: "#AboutMe" },
                { id: 3, name: "Resume", Link: "#Resume" },
                { id: 4, name: "ContactMe", Link: "#ContactMe" }
        ];
        const [activeId, setActiveId] = useState(1);
        return (
                <div isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen} className="navbar">
                        {
                                isOpen === true ?
                                        <div >
                                                <div className="nav-links">
                                                        <ul>
                                                                <li><a href="#" >Home</a></li>
                                                                <li><a href="#AboutMe">AboutMe</a></li>
                                                                <li><a href="#Resume">Resume</a></li>
                                                                <li><a href="#ContactMe">ContactMe</a></li>
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
                                                                {values.map((val) => (
                                                                        <li onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "Inactive"}>
                                                                                <a href={val.Link} >{val.name}</a>
                                                                        </li>
                                                                ))}
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

