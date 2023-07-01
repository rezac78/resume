import React, { useEffect } from 'react'
import { useTranslation } from "next-i18next";
import Aos from "aos";
import { useRouter } from 'next/router';
import "aos/dist/aos.css";
export default function AboutMe({ samaritan, highlights, aboutImage, getTeam, Profiles }) {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        const router = useRouter();
        const LocaleCookie = router.locale;
        return (
                <div data-aos="fade-up" className="about-me-container" id="AboutMe">
                        <div className="about-me-parent">
                                <div className="heading-container">
                                        <div className={getTeam ? "screen-heading-Dark" : "screen-heading"}>
                                                <span> {t("AboutMe")}</span>
                                        </div>
                                        <div className={getTeam ? "screen-sub-heading-Dark" : "screen-sub-heading"}>
                                                <span>{t("whyHierMy")}</span>
                                        </div>
                                        <div className="heading-seperator">
                                                <div className={getTeam ? "seperator-line-Dark" : "seperator-line"}></div>
                                                <div className={getTeam ? "seperator-blob-Dark" : "seperator-blob"}>
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className={getTeam ? "about-me-card-Dark" : "about-me-card"}>
                                        <div className={getTeam ? "about-me-profile-Dark" : "about-me-profile"}>
                                                <img src={aboutImage} alt="aboutImage" />
                                        </div>
                                        <div className={getTeam ? "about-me-details active" : "about-me-details"}>
                                                <span className="about-me-description">{samaritan}</span>
                                                <div className="about-me-highlights">
                                                        <div className="highlight-heading">
                                                                <span>{t("HeaderHighlights")}</span>
                                                        </div>
                                                        {highlights?.map((e, key) => {
                                                                return <div className="highlight" key={key}>
                                                                        <div className={getTeam ? "highlight-blob-Dark" : "highlight-blob"}></div>
                                                                        <span>{e}</span>
                                                                </div>
                                                        })}
                                                </div>
                                                <div className="about-me-options">
                                                        <a href="#ContactMe">
                                                                <button className={getTeam ? "btn primary-btn-Dark" : "btn primary-btn"}>
                                                                        {t("ContactMe")}
                                                                </button>
                                                        </a>
                                                        {LocaleCookie === "en" ?
                                                                Profiles?.map((profile) => {
                                                                        return <a href={profile.resumepdfEn.url} download={profile.resumepdfEn.url} target="_blank">
                                                                                <button className={`btn ${LocaleCookie === "en" ? "highlighted-btn" : "fa-highlighted-btn"} ${getTeam ? "fa-highlighted-btn-Dark" : "fa-highlighted-btn"}`}> {t("GetResume")}</button>
                                                                        </a>
                                                                })
                                                                :
                                                                Profiles?.map((profile) => {
                                                                        return <a href={profile.resumepdfEn.url} download={profile.resumepdfEn.url} target="_blank">
                                                                                <button className={`btn ${LocaleCookie === "en" ? "highlighted-btn" : "fa-highlighted-btn"} ${getTeam ? "fa-highlighted-btn-Dark" : "fa-highlighted-btn"}`}> {t("GetResume")}</button>
                                                                        </a>
                                                                })
                                                        }
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
