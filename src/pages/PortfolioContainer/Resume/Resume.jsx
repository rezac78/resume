import React, { useState, useEffect } from 'react'
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { Educations, WorkHistory, Skillsresume, projects } from "../../../events/events";
import Image from 'next/image'
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
        const router = useRouter();
        const { t } = useTranslation();
        const LocaleCookie = router.locale;
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
                                                <div className="seperator-line"></div>
                                                <div className="seperator-blob">
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
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Education} />
                                                                        <span className="bullet-label">{t("Education")}</span>
                                                                </div>
                                                                <div className={toggleState === 2 ? "bullet selected" : " bullet"} onClick={() => toggleTab(2)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={History} />
                                                                        <span className="bullet-label">{t("WorkHistory")}</span>
                                                                </div>
                                                                <div className={toggleState === 3 ? "bullet selected" : " bullet"} onClick={() => toggleTab(3)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Programming} />
                                                                        <span className="bullet-label">{t("ProgrammingSkills")}</span>
                                                                </div>
                                                                <div className={toggleState === 4 ? "bullet selected" : " bullet"} onClick={() => toggleTab(4)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Projects} />
                                                                        <span className="bullet-label">{t("Projects")}</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={LocaleCookie === "en" ? "resume-bullet-details" : "fa-resume-bullet-details"}>
                                                <div className={toggleState === 1 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        {Educations.map((e) => {
                                                                return <div className="resume-screen-container-WorkHistory" key={e.id}>
                                                                        <div className="resume-heading">
                                                                                <div className="resume-main-heading">
                                                                                        <span>{t(e.HeaderEducation)}</span>
                                                                                        <div className="heading-date">{t(e.HeaderDate)}</div>
                                                                                </div>
                                                                                <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                        <span>{t(e.MainEducation)}</span>
                                                                                        <div className="heading-Location">{t("Location")} : {t(e.educationLocation)}</div>
                                                                                </div>
                                                                                <div className="resume-heading-description">
                                                                                        <span></span>
                                                                                </div>
                                                                        </div>
                                                                        <hr
                                                                                style={{
                                                                                        color: "#D13400",
                                                                                        backgroundColor: "#D13400",
                                                                                        height: 1
                                                                                }}
                                                                        />
                                                                </div>
                                                        })}
                                                </div>
                                                <div className={toggleState === 2 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className={LocaleCookie === "en" ? "resume-screen-container" : "fa-resume-screen-container"}>
                                                                {WorkHistory?.map((e) => {
                                                                        return <div className="experience-container" key={e.id}>
                                                                                <div className="resume-heading">
                                                                                        <div className="resume-main-heading">
                                                                                                <div className="heading-bullet"></div>
                                                                                                <span>{t(e.workHistoryTitle)}</span>
                                                                                                <div className="heading-date">{t(e.workHistoryData)}</div>
                                                                                        </div>
                                                                                        <div className="resume-sub-heading">
                                                                                                <span>{t("Location")} : {t(e.workHistoryLocation)}</span>
                                                                                        </div>
                                                                                        <div className="resume-heading-description">
                                                                                                <span></span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="resume-sub-heading">
                                                                                        <span className="">
                                                                                                {t(e.workHistoryPosition)}
                                                                                        </span>
                                                                                </div>
                                                                                <div className="experience-description">
                                                                                        <a href={t(e.workHistoryLink)} target="_blank">{t("Address")} : {t(e.workHistoryTitle)}</a>
                                                                                </div>
                                                                                <hr
                                                                                        style={{
                                                                                                color: "#D13400",
                                                                                                backgroundColor: "#D13400",
                                                                                                height: 1
                                                                                        }}
                                                                                />
                                                                        </div>
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="scroll">
                                                                <div className={LocaleCookie === "en" ? "resume-screen-container programming-skills-container" : "fa-resume-screen-container programming-skills-container"}>
                                                                        {Skillsresume?.map((e) => {
                                                                                const size = e.programmingSkillsNumber
                                                                                return <div key={e.id} className="skill-parent">
                                                                                        <span>{t(e.programmingSkillsTitle)}</span>
                                                                                        <div className="skill-percentage">
                                                                                                <div className="active-percentage-bar" style={{ 'width': `${size}%` }} ></div>
                                                                                        </div>

                                                                                </div>
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 4 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="scroll">
                                                                <div className="resume-screen-container-project">
                                                                        {projects?.map((e) => {
                                                                                return <div className="resume-heading" key={e.id}>
                                                                                        <div className="resume-main-heading">
                                                                                                <span>{t(e.projectTitle)}</span>
                                                                                                <div className="heading-date">{t(e.projectsData)}</div>
                                                                                        </div>
                                                                                        <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                                <span>{t("Technology")} : {t(e.projectsTochnologies)}</span>
                                                                                        </div>
                                                                                        <div className="resume-heading-description">
                                                                                                <span>{t("Summary")} : {t(e.projectsSummery)}</span>
                                                                                        </div>
                                                                                        <div className="experience-description">
                                                                                                <a href={t(e.projectsLink)} target="_blank">{t("Address")} : {t(e.projectTitle)}</a>
                                                                                        </div>
                                                                                        <hr
                                                                                                style={{
                                                                                                        color: "#D13400",
                                                                                                        backgroundColor: "#D13400",
                                                                                                        height: 1
                                                                                                }}
                                                                                        />
                                                                                </div>
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}













