import React, { useState, useEffect } from 'react'
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image'
import Education from "../../assets/Home/Education.svg"
import History from "../../assets/Home/history.svg"
import Programming from "../../assets/Home/Programming.svg"
import Projects from "../../assets/Home/Projects.svg"
import Aos from "aos";
import "aos/dist/aos.css";
export default function Resume({ resumeEducation, getTeam, resumeWorkHistorie, programmingSkillsresume, resumeProject }) {
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
                                        <div className={getTeam ? "screen-heading-Dark" : "screen-heading"}>
                                                <span>{t("Resume")}</span>
                                        </div>
                                        <div className={getTeam ? "screen-sub-heading-Dark" : "screen-sub-heading"}>
                                                <span>{t("whyResume")}</span>
                                        </div>
                                        <div className="heading-seperator">
                                                <div className={getTeam ? "seperator-line-Dark" : "seperator-line"}></div>
                                                <div className={getTeam ? "seperator-blob-Dark" : "seperator-blob"}>
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="resume-card">
                                        <div className={getTeam ? "resume-bullets-Dark" : "resume-bullets"}>
                                                <div className="bullet-container">
                                                        <div className="bullet-icons"></div>
                                                        <div className={getTeam ? "bullets-Dark" : "bullets"}>
                                                                <div className={toggleState === 1 && getTeam ? "bullet selected-Dark" : toggleState === 1 && !getTeam ? " bullet selected" : "bullet"} onClick={() => toggleTab(1)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Education} />
                                                                        <span className="bullet-label">{t("Education")}</span>
                                                                </div>
                                                                <div className={toggleState === 2 && getTeam ? "bullet selected-Dark" : toggleState === 2 && !getTeam ? " bullet selected" : "bullet"} onClick={() => toggleTab(2)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={History} />
                                                                        <span className="bullet-label">{t("WorkHistory")}</span>
                                                                </div>
                                                                <div className={toggleState === 3 && getTeam ? "bullet selected-Dark" : toggleState === 3 && !getTeam ? " bullet selected" : "bullet"} onClick={() => toggleTab(3)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Programming} />
                                                                        <span className="bullet-label">{t("ProgrammingSkills")}</span>
                                                                </div>
                                                                <div className={toggleState === 4 && getTeam ? "bullet selected-Dark" : toggleState === 4 && !getTeam ? " bullet selected" : "bullet"} onClick={() => toggleTab(4)}>
                                                                        <Image className={LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo"} alt="B" src={Projects} />
                                                                        <span className="bullet-label">{t("Projects")}</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className={LocaleCookie === "en" ? "resume-bullet-details" : "fa-resume-bullet-details"}>
                                                <div className={toggleState === 1 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        {resumeEducation?.map((e) => {
                                                                return <div key={e.id} className="resume-screen-container-WorkHistory">
                                                                        <div className="resume-heading">
                                                                                <div className={getTeam ? "resume-main-heading-Dark" : "resume-main-heading"}>
                                                                                        <span>{e.educationTitle}</span>
                                                                                        <div className={getTeam ? "heading-date-Dark" : "heading-date"}>{e.educationData}</div>
                                                                                </div>
                                                                                <div className={LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"}>
                                                                                        <div className={getTeam ? "resume-sub-heading-Dark" : "resume-sub-heading"}>
                                                                                                <span>{e.educationStady}</span>
                                                                                                <div className="heading-Location">{t("Location")} : {e.educationLocation}</div>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="resume-heading-description">
                                                                                        <span></span>
                                                                                </div>
                                                                        </div>
                                                                        <hr
                                                                                style={getTeam ? {
                                                                                        color: `var(--DarkTextColor)`,
                                                                                        backgroundColor: `var(--DarkTextColor)`,
                                                                                        height: 1
                                                                                } : {
                                                                                        color: "#D13400",
                                                                                        backgroundColor: "#D13400",
                                                                                        height: 1
                                                                                }
                                                                                }
                                                                        />
                                                                </div>
                                                        })}
                                                </div>
                                                <div className={toggleState === 2 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className={LocaleCookie === "en" ? "resume-screen-container-workHistory" : "fa-resume-screen-container-workHistory"}>
                                                                {resumeWorkHistorie?.map((e) => {
                                                                        return <div className="experience-container" key={e.id}>
                                                                                <div className="resume-heading">
                                                                                        <div className={getTeam ? "resume-main-heading-Dark" : "resume-main-heading"}>
                                                                                                <div className={getTeam ? "heading-bullet-Dark" : "heading-bullet"}></div>
                                                                                                <span>{e.workHistoryTitle}</span>
                                                                                                <div className={getTeam ? "heading-date-Dark" : "heading-date"}>{e.workHistoryData}</div>
                                                                                        </div>
                                                                                        <div className={getTeam ? "resume-sub-heading-Dark" : "resume-sub-heading"}>
                                                                                                <span>{t("Location")} : {e.workHistoryLocation}</span>
                                                                                        </div>
                                                                                        <div className="resume-heading-description">
                                                                                                <span></span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className={getTeam ? "resume-main-heading-Dark" : "resume-main-heading"}>
                                                                                        <span className="">
                                                                                                {e.workHistoryPosition}
                                                                                        </span>
                                                                                </div>
                                                                                <div className="experience-description">
                                                                                        <a href={e.workHistoryLink}>{t("Address")} : {e.workHistoryTitle}</a>
                                                                                </div>
                                                                                <hr
                                                                                        style={getTeam ? {
                                                                                                color: `var(--DarkTextColor)`,
                                                                                                backgroundColor: `var(--DarkTextColor)`,
                                                                                                height: 1
                                                                                        } : {
                                                                                                color: "#D13400",
                                                                                                backgroundColor: "#D13400",
                                                                                                height: 1
                                                                                        }
                                                                                        }
                                                                                />
                                                                        </div>
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="scroll">
                                                                <div className={LocaleCookie === "en" ? "resume-screen-container programming-skills-container" : "fa-resume-screen-container programming-skills-container"}>
                                                                        {programmingSkillsresume?.map((e) => {
                                                                                const size = e.programmingSkillsNumber
                                                                                return <div key={e.id} className={getTeam ? "skill-parent-Dark" : "skill-parent"}>
                                                                                        <span>{e.programmingSkillsTitle}</span>
                                                                                        <div className={getTeam ? "skill-percentage-Dark" : "skill-percentage"}>
                                                                                                <div className="active-percentage-bar" style={{ 'width': `${size}%` }} >
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 4 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="scroll">
                                                                <div className="resume-screen-container-project">
                                                                        {resumeProject?.map((e) => {
                                                                                return <div className="resume-heading" key={e.id}>
                                                                                        <div className={getTeam ? "resume-main-heading-Dark" : "resume-main-heading"}>
                                                                                                <span>{e.projectTitle}</span>
                                                                                                <div className={getTeam ? "heading-date-Dark" : "heading-date"}>{e.projectsData}</div>
                                                                                        </div>
                                                                                        <div className={`${LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading"} ${getTeam ? "resume-sub-heading-Dark" : "fa-resume-sub-heading-Dark"}`}>
                                                                                                <span>{t("Technology")} : {e.projectsTochnologies}</span>
                                                                                        </div>
                                                                                        <div className="resume-heading-description">
                                                                                                <span>{t("Summary")} : {e.projectsSummery}</span>
                                                                                        </div>
                                                                                        <div className="experience-description">
                                                                                                <a href={e.projectsLink}>{t("Address")} : {e.projectTitle}</a>
                                                                                        </div>
                                                                                        <hr
                                                                                                style={getTeam ? {
                                                                                                        color: `var(--DarkTextColor)`,
                                                                                                        backgroundColor: `var(--DarkTextColor)`,
                                                                                                        height: 1
                                                                                                } : {
                                                                                                        color: "#D13400",
                                                                                                        backgroundColor: "#D13400",
                                                                                                        height: 1
                                                                                                }
                                                                                                }
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













