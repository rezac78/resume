import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import "./Resume.css"
import Education from "../../assets/Home/Education.svg"
import History from "../../assets/Home/history.svg"
import Programming from "../../assets/Home/Programming.svg"
import Projects from "../../assets/Home/Projects.svg"
import Aos from "aos";
import "aos/dist/aos.css";
export default function Resume() {
        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index) => {
                setToggleState(index);
        }
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        const LocaleCookie = i18next.language;
        return (
                <div data-aos="fade-up" className="resume-container" id="Resume">
                        <div className="resume-content">
                                <div className="heading-container">
                                        <div className="screen-heading">
                                                <span>{t("Resume")}</span>
                                        </div>
                                        <div className="screen-sub-heading">
                                                <span>{t("whyResume")}</span>
                                        </div>
                                        <div className="heading-seperator">
                                                <div class="seperator-line"></div>
                                                <div class="seperator-blob">
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="resume-card">
                                        <div className="resume-bullets">
                                                <div className="bullet-container">
                                                        <div className="bullet-icons"></div>
                                                        <div className="bullets">
                                                                <div className={toggleState === 1 ? "bullet selected" : " bullet"} onClick={() => toggleTab(1)}>
                                                                        <img className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Education} />
                                                                        <span className="bullet-label">{t("Education")}</span>
                                                                </div>
                                                                <div className={toggleState === 2 ? "bullet selected" : " bullet"} onClick={() => toggleTab(2)}>
                                                                        <img className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={History} />
                                                                        <span className="bullet-label">{t("WorkHistory")}</span>
                                                                </div>
                                                                <div className={toggleState === 3 ? "bullet selected" : " bullet"} onClick={() => toggleTab(3)}>
                                                                        <img className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Programming} />
                                                                        <span className="bullet-label">{t("ProgrammingSkills")}</span>
                                                                </div>
                                                                <div className={toggleState === 4 ? "bullet selected" : " bullet"} onClick={() => toggleTab(4)}>
                                                                        <img className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Projects} />
                                                                        <span className="bullet-label">{t("Projects")}</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={LocaleCookie === "en" ? "resume-bullet-details" : "fa-resume-bullet-details"}>
                                                <div className={toggleState === 1 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="resume-screen-container">
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <span>{t("HeaderEducation")}</span>
                                                                                <div className="heading-date">{t("HeaderDate")}</div>
                                                                        </div>
                                                                        <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                <span>{t("MainEducation")}</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span></span>
                                                                        </div>
                                                                </div>
                                                                {/* <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>National Youth Service Corps</span>
                                                                                <div className="heading-date">2019-2020</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>Ministry Of Science And Technogy. Uyo Akwa Ibom State</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span></span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>High School </span>
                                                                                <div className="heading-date">2007-2012</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>Command Secondary School Mbiri</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span></span>
                                                                        </div>
                                                                </div> */}
                                                                <div className="experience-container">
                                                                        <div className="resume-heading">
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 2 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className={LocaleCookie === "en" ? "resume-screen-container" : "fa-resume-screen-container"}>
                                                                <div className="experience-container">
                                                                        <div className="resume-heading">
                                                                                <div className="resume-main-heading">
                                                                                        <div className="heading-bullet"></div>
                                                                                        <span>{t("HeaderWorkHistory")}</span>
                                                                                        <div className="heading-date">{t("DateWorkHistory")}</div>
                                                                                </div>
                                                                                <div className="resume-sub-heading">
                                                                                        <span>{t("LocationWorkHistory")}</span>
                                                                                </div>
                                                                                <div className="resume-heading-description">
                                                                                        <span></span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span className="">
                                                                                        {t("JobPosition")}
                                                                                </span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <a href={t("linkWorkHistory")}>{t("HeaderWorkHistory")}</a>
                                                                        </div>
                                                                </div>
                                                                <div className="experience-container">
                                                                        <div className="resume-heading">
                                                                                <div className="resume-main-heading">
                                                                                        <div className="heading-bullet"></div>
                                                                                        <span>{t("HeaderWorkHistory")}</span>
                                                                                        <div className="heading-date">{t("DateWorkHistory")}</div>
                                                                                </div>
                                                                                <div className="resume-sub-heading">
                                                                                        <span>{t("LocationWorkHistory")}</span>
                                                                                </div>
                                                                                <div className="resume-heading-description">
                                                                                        <span></span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span className="">
                                                                                        {t("JobPosition")}
                                                                                </span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <a href={t("linkWorkHistory")}>{t("HeaderWorkHistory")}</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className={LocaleCookie === "en" ? "resume-screen-container programming-skills-container" : "fa-resume-screen-container programming-skills-container"}>
                                                                <div className="skill-parent">
                                                                        <span>JavaScript</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "85%" }}>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="skill-parent">
                                                                        <span>React JS</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "80%" }}>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="skill-parent">
                                                                        <span>React Native</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "65%" }}>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="skill-parent">
                                                                        <span>Express JS</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "45%" }}>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="skill-parent">
                                                                        <span>Mongo Db</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "95%" }}>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="skill-parent">

                                                                        <span>Node JS</span>
                                                                        <div className="skill-percentage">
                                                                                <div className="active-percentage-bar" style={{ width: "55%" }}>

                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 4 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="resume-screen-container">
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <span>{t("ProjectsTitle")}</span>
                                                                                <div className="heading-date">{t("ProjectsDate")}</div>
                                                                        </div>
                                                                        <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                <span>{t("ProjectsSkills")}</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>{t("ProjectsMain")}</span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <a href={t("Projectslink")}>{t("ProjectsTitle")}</a>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <span>{t("ProjectsTitle")}</span>
                                                                                <div className="heading-date">{t("ProjectsDate")}</div>
                                                                        </div>
                                                                        <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                <span>{t("ProjectsSkills")}</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>{t("ProjectsMain")}</span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <a href={t("Projectslink")}>{t("ProjectsTitle")}</a>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <span>{t("ProjectsTitle")}</span>
                                                                                <div className="heading-date">{t("ProjectsDate")}</div>
                                                                        </div>
                                                                        <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                <span>{t("ProjectsSkills")}</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>{t("ProjectsMain")}</span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <a href={t("Projectslink")}>{t("ProjectsTitle")}</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}













