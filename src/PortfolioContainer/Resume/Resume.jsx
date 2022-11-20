import React, { useState,useEffect } from 'react'
import "./Resume.css"
import Education from "../../assets/Home/Education.svg"
import History from "../../assets/Home/history.svg"
import Programming from "../../assets/Home/Programming.svg"
import Projects from "../../assets/Home/Projects.svg"
import Interests from "../../assets/Home/Interests.svg"
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
        return (
                <div data-aos="fade-right" className="resume-container" id="Resume">
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
                                                                <div className={toggleState === 1 ? "bullet selected" : " bullet"} onClick={() => toggleTab(1)}>
                                                                        <img className="bullet-logo" alt="B" src={Education} />
                                                                        <span className="bullet-label">Education</span>
                                                                </div>
                                                                <div className={toggleState === 2 ? "bullet selected" : " bullet"} onClick={() => toggleTab(2)}>
                                                                        <img className="bullet-logo" alt="B" src={History} />
                                                                        <span className="bullet-label">Work History</span>
                                                                </div>
                                                                <div className={toggleState === 3 ? "bullet selected" : " bullet"} onClick={() => toggleTab(3)}>
                                                                        <img className="bullet-logo" alt="B" src={Programming} />
                                                                        <span className="bullet-label">Programming Skills</span>
                                                                </div>
                                                                <div className={toggleState === 4 ? "bullet selected" : " bullet"} onClick={() => toggleTab(4)}>
                                                                        <img className="bullet-logo" alt="B" src={Projects} />
                                                                        <span className="bullet-label">Projects</span>
                                                                </div>
                                                                <div className={toggleState === 5 ? "bullet selected" : " bullet"} onClick={() => toggleTab(5)}>
                                                                        <img className="bullet-logo" alt="B" src={Interests} />
                                                                        <span className="bullet-label">Interests</span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="resume-bullet-details">
                                                <div className={toggleState === 1 ? "resume-details-carousal" : "selected-bullet-contact"}>
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
                                                <div className={toggleState === 2 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="resume-screen-container">
                                                                <div className="experience-container">
                                                                        <div className="resume-heading">
                                                                                <div className="resume-main-heading">
                                                                                        <div className="heading-bullet"></div>
                                                                                        <span>Ehizeex Technoloy</span>
                                                                                        <div className="heading-date">2021-Present</div>
                                                                                </div>
                                                                                <div className="resume-sub-heading">
                                                                                        <span>FULL STACK DEVELOPER INTERN</span>
                                                                                </div>
                                                                                <div className="resume-heading-description">
                                                                                        <span></span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <span className="resume-description-text">
                                                                                        Currently working as MERN stack web and mobile developer and also an online instructor on udemy.
                                                                                </span>
                                                                        </div>
                                                                        <div className="experience-description">
                                                                                <span className="resume-description-text">
                                                                                        - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .
                                                                                </span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="resume-screen-container programming-skills-container">
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
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Personal Portfolio Website</span>
                                                                                <div className="heading-date">2020-2021</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>Technologies Used: React JS, Bootsrap</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>A Personal Portfolio website to showcase all my details and projects at one place.</span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Mobile E-shop </span>
                                                                                <div className="heading-date">2020-2021</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>An ecommerce application designed to sell products online wth payment system integration</span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Ecommerce Website </span>
                                                                                <div className="heading-date">2020-2021</div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span>Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.</span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe</span>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 5 ? "resume-details-carousal" : "selected-bullet-contact"}>
                                                        <div className="resume-screen-container">
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Teaching</span>
                                                                                <div></div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span></span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.</span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Music</span>
                                                                                <div></div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span></span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.</span>
                                                                        </div>
                                                                </div>
                                                                <div className="resume-heading">
                                                                        <div className="resume-main-heading">
                                                                                <div className="heading-bullet"></div>
                                                                                <span>Competitor</span>
                                                                                <div></div>
                                                                        </div>
                                                                        <div className="resume-sub-heading">
                                                                                <span></span>
                                                                        </div>
                                                                        <div className="resume-heading-description">
                                                                                <span>Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.</span>
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













