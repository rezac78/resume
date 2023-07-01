import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from "next-i18next";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Github from "../../../assets/Home/github.svg"
import Linkedin from "../../../assets/Home/linkedin.svg"
import Instagram from "../../../assets/Home/instagram.svg"
import Phone from "../../../assets/Home/phone.png"
export default function Profile({ Titel, ProfileImg, Resume, getTeam }) {
        const router = useRouter();
        const { t } = useTranslation();
        const LocaleCookie = router.locale;
        return (
                <div className="profile-container">
                        <div className="profile-parent">
                                <div className="profile-details">
                                        <div className="colz">
                                                <div className="colz-icon">
                                                        <Link href="https://github.com/rezac78" target="_blank">
                                                                <Image src={Github} alt="Github" />
                                                        </Link>
                                                        <Link href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                                <Image src={Linkedin} alt="Linkedin" />
                                                        </Link>
                                                        <Link href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                                <Image src={Instagram} alt="Instagram" />
                                                        </Link>
                                                        <a href="tel:09032802041">
                                                                <Image src={Phone} alt="Phone" />
                                                        </a>
                                                </div>
                                        </div>
                                        <div className="profile-details-name">
                                                <span className="primary-text">
                                                        {" "}
                                                        {t("Welcome")}<span className={getTeam ? "highlighted-text-Dark" : "highlighted-text"}> {t("Name")}</span>
                                                </span>
                                        </div>
                                        <div className="profile-details-role">
                                                <span className="primary-text">
                                                        {" "}
                                                        <h1 className={LocaleCookie === "en" ? "Typewriter" : "fa-Typewriter"}>
                                                                <div className={getTeam ? "Typewriter-Dark" : "Typewriter"}>
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
                                                                </div>
                                                        </h1>
                                                        <span className="profile-role-tagline">
                                                                {Titel}
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="profile-options">
                                                <a href="#ContactMe">
                                                        <button className={getTeam ? "btn primary-btn-Dark" : "btn primary-btn"}>
                                                                {""}
                                                                {t("ContactMe")} {" "}
                                                        </button>
                                                </a>
                                                {LocaleCookie === "en" ?
                                                        <a href={Resume} download={Resume} target="_blank">
                                                                <button className={`btn ${LocaleCookie === "en" ? "highlighted-btn" : "fa-highlighted-btn"} ${getTeam ? "highlighted-btn-Dark" : "highlighted-btn"}`}> {t("GetResume")}</button>
                                                        </a>
                                                        :
                                                        <a href={Resume} download={Resume} target="_blank">
                                                                <button className={`btn ${LocaleCookie === "en" ? "highlighted-btn" : "fa-highlighted-btn"} ${getTeam ? "fa-highlighted-btn-Dark" : "fa-highlighted-btn"}`}> {t("GetResume")}</button>
                                                        </a>
                                                }
                                        </div>
                                </div>
                                <div className={LocaleCookie === "en" ? "profile-picture" : "fa-profile-picture"}>
                                        <div className="profile-picture-background">
                                                <img src={ProfileImg} alt="ProfileImg" />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
