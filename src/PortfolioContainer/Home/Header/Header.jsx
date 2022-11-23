import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie'
import './Header.css'
import MenuOpen from "../../../assets/Home/menu.png"
import MenuClose from "../../../assets/Home/close.png"
import GlobeIcon from "../../../assets/Home/Global.svg"
import Iran from "../../../assets/Home/Iran.svg"
import English from "../../../assets/Home/uk.svg"
export default function Header() {
        const [OpenMenu, setOpenMenu] = useState(false)

        const handleIsOpen = () => {
                setOpenMenu(!OpenMenu)
        }
        const [activeId, setActiveId] = useState(1);
        const Languages = [
                {
                        code: 'en',
                        name: 'English',
                        country_code: English
                },
                {
                        code: 'fa',
                        name: 'Persion',
                        country_code: Iran,
                        dir: 'rtl'
                },
        ]
        const currentLanguageCode = cookies.get('i18next') || 'en'
        const currentLanguage = Languages.find(l => l.code === currentLanguageCode)
        const { t } = useTranslation();
        useEffect(() => {
                document.body.dir = currentLanguage.dir || 'ltr'
        }, [currentLanguage])
        const values = [
                { id: 1, name: "Home", Link: "#" },
                { id: 2, name: "AboutMe", Link: "#AboutMe" },
                { id: 3, name: "Resume", Link: "#Resume" },
                { id: 4, name: "ContactMe", Link: "#ContactMe" }
        ];
        return (
                <div  className="navbar">
                        {
                                OpenMenu === true ?
                                        <div >
                                                <div className="nav-links">
                                                        <ul>
                                                                {values.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "Inactive"}>
                                                                                <a href={val.Link} >{t(val.name)}</a>
                                                                        </li>
                                                                ))}
                                                                <li>
                                                                        <div className="dropdown">
                                                                                <button style={{ direction: 'ltr' }} className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <img className='GlobalImg' src={GlobeIcon} alt='Global' />
                                                                                </button>
                                                                                <div className="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
                                                                                        {Languages.map(({ code, name, country_code }) => (
                                                                                                <a onClick={() => i18next.changeLanguage(code)} key={country_code} className="dropdown-item text-dark" href="#">
                                                                                                        <img src={country_code} className="flagIcon" alt="flag" />
                                                                                                        {name}
                                                                                                </a>

                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </li>
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
                                                                {values.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "Inactive"}>
                                                                                <a href={val.Link} >{t(val.name)}</a>
                                                                        </li>
                                                                ))}
                                                                <li>
                                                                        <div className="dropdown">
                                                                                <button style={{ direction: 'ltr' }} className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <img className='GlobalImg' src={GlobeIcon} alt='Global' />
                                                                                </button>
                                                                                <div className="dropdown-menu bg-light" aria-labelledby="dropdownMenuButton">
                                                                                        {Languages.map(({ code, name, country_code }) => (
                                                                                                <a onClick={() => i18next.changeLanguage(code)} key={country_code} className="dropdown-item text-dark" href="#">
                                                                                                        <img src={country_code} className="flagIcon" alt="flag" />
                                                                                                        {name}
                                                                                                </a>

                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </li>
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

