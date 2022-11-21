import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import "./AboutMe.css"
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
                                                <div class="seperator-line"></div>
                                                <div class="seperator-blob">
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="about-me-card">
                                        <div className="about-me-profile">
                                        </div>
                                        <div className="about-me-details">
                                                <span class="about-me-description">{t("Samaritan")}</span>
                                                <div class="about-me-highlights">
                                                        <div class="highlight-heading">
                                                                <span>{t("HeaderHighlights")}</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>{t("Highlights1")}</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>{t("Highlights2")}</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>{t("Highlights3")}</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>{t("Highlights4")}</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>{t("Highlights5")}</span>
                                                        </div>
                                                </div>
                                                <div class="about-me-options">
                                                        <a href="#ContactMe">
                                                                <button class="btn primary-btn">
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
