import React from 'react'
import "./Resume.css"
import Education from "../../assets/Home/Education.svg"
import History from "../../assets/Home/history.svg"
import Programming from "../../assets/Home/Programming.svg"
import Projects from "../../assets/Home/Projects.svg"
import Interests from "../../assets/Home/Interests.svg"
export default function Resume() {
        return (
                <div className="resume-container" id="Resume">
                        <div className="resume-content">
                                <div className="heading-container">
                                        <div className="screen-heading">
                                                <span>Resume</span>
                                        </div>
                                        <div className="screen-sub-heading">
                                                <span>My formal Bio Details</span>
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
                                                                <div className="bullet selected-bullet">
                                                                        <img className="bullet-logo" alt="B" src={Education} />
                                                                        <span className="bullet-label">Education</span>
                                                                </div>
                                                                <div className="bullet">
                                                                        <img className="bullet-logo" alt="B" src={History} />
                                                                        <span className="bullet-label">Work History</span>
                                                                </div>
                                                                <div className="bullet">
                                                                        <img className="bullet-logo" alt="B" src={Programming} />
                                                                        <span className="bullet-label">Programming Skills</span>
                                                                </div>
                                                                <div className="bullet">
                                                                        <img className="bullet-logo" alt="B" src={Projects} />
                                                                        <span className="bullet-label">Projects</span>
                                                                </div>
                                                                <div className="bullet">
                                                                        <img className="bullet-logo" alt="B" src={Interests} />
                                                                        <span className="bullet-label">Interests</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="resume-bullet-details">
                                                <div className="resume-details-carousal">
                                                        <div className="resume-screen-container">
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>University of Legon Accra, Ghana</span>
                                                                                <div className="heading-date">2014-2018</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span></span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
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
                                                                </div>
                                                                <div className="experience-container">
                                                                        <div className="resume-heading">

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
