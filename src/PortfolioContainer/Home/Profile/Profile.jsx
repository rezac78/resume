import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
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
                                                                <i className="fa fa-github"></i>
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                                <i className="fa fa-linkedin"></i>
                                                        </a>
                                                        <a href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                                <i className="fa fa-instagram"></i>
                                                        </a>
                                                        <a href="tel:09032802041">
                                                                <i className="fa fa-phone"></i>
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
