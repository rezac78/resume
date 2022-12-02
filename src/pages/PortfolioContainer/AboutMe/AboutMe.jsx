import React, { useEffect } from 'react'
import { useTranslation } from "next-i18next";
import { highlights } from "../../../events/events"
import Aos from "aos";
import "aos/dist/aos.css";
export default function AboutMe() {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        return (
                <div data-aos="fade-up" className="about-me-container" id="AboutMe">
                        <div className="about-me-parent">
                                <div className="heading-container">
                                        <div className="screen-heading">
                                                <span> {t("AboutMe")}</span>
                                        </div>
                                        <div className="screen-sub-heading">
                                                <span>{t("whyHierMy")}</span>
                                        </div>
                                        <div className="heading-seperator">
                                                <div className="seperator-line"></div>
                                                <div className="seperator-blob">
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="about-me-card">
                                        <div className="about-me-profile">
                                        </div>
                                        <div className="about-me-details">
                                                <span className="about-me-description">{t("Samaritan")}</span>
                                                <div className="about-me-highlights">
                                                        <div className="highlight-heading">
                                                                <span>{t("HeaderHighlights")}</span>
                                                        </div>
                                                        {highlights.map((e) => {
                                                                return <div className="highlight" key={e.id}>
                                                                                <div className="highlight-blob"></div>
                                                                                <span>{t(e.highlight)}</span>
                                                                        </div>
                                                        })}
                                                </div>
                                                <div className="about-me-options">
                                                        <a href="#ContactMe">
                                                                <button className="btn primary-btn">
                                                                        {t("ContactMe")}
                                                                </button>
                                                        </a>
                                                        <a href="RezaDalvandCV.pdf" download="RezaDalvandCV.pdf">
                                                                <button className="btn highlighted-btn">{t("GetResume")}</button>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
