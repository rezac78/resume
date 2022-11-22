import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import Github from "../../../assets/Home/github.svg"
import Linkedin from "../../../assets/Home/linkedin.svg"
import Instagram from "../../../assets/Home/instagram.svg"
import Phone from "../../../assets/Home/phone.png"
import "./Profile.css"
export default function Profile() {
        const { t } = useTranslation();
        const LocaleCookie = i18next.language;
        return (
                <div className="profile-container">
                        <div className="profile-parent">
                                <div className="profile-details">
                                        <div className="colz">
                                                <div className="colz-icon">
                                                        <a href="https://github.com/rezac78" target="_blank">
                                                                <img src={Github} alt="Github" />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                                <img src={Linkedin} alt="Linkedin" />
                                                        </a>
                                                        <a href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                                <img src={Instagram} alt="Instagram" />
                                                        </a>
                                                        <a href="tel:09032802041">
                                                                <img src={Phone} alt="Phone" />
                                                        </a>
                                                </div>
                                        </div>
                                        <div className="profile-details-name">
                                                <span className="primary-text">
                                                        {" "}
                                                        {t("Welcome")}<span className="highlighted-text"> {t("Name")}</span>
                                                </span>
                                        </div>
                                        <div className="profile-details-role">
                                                <span className="primary-text">
                                                        {" "}
                                                        <h1 className={LocaleCookie === "en" ? "Typewriter" : "fa-Typewriter"}>
                                                                {" "}
                                                                <Typewriter
                                                                        loop={Infinity}
                                                                        words={[
                                                                                "Full stack Developer 🖥️",
                                                                                "MERN Stack Dev 😎️",
                                                                                "Softwere Enginner 💻️",
                                                                                "React/Next/Node/Nest 🔴️",
                                                                        ]}
                                                                        cursor
                                                                        cursorStyle='_'
                                                                        typeSpeed={70}
                                                                        deleteSpeed={50}
                                                                        delaySpeed={1000}
                                                                />
                                                        </h1>
                                                        <span className="profile-role-tagline">
                                                                {t("LittleSamaritan")}
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="profile-options">
                                                <a href="#ContactMe">
                                                        <button className="btn primary-btn">
                                                                {""}
                                                                {t("ContactMe")} {" "}
                                                        </button>
                                                </a>
                                                <a href="RezaDalvandCV.pdf" download="RezaDalvandCV.pdf">
                                                        <button className={LocaleCookie === "en" ? "btn highlighted-btn" : "btn fa-highlighted-btn"}> {t("GetResume")}</button>
                                                </a>
                                        </div>
                                </div>
                                <div className={LocaleCookie === "en" ? "profile-picture" : "fa-profile-picture"}>
                                        <div className="profile-picture-background">

                                        </div>
                                </div>
                        </div>
                </div>
        )
}
