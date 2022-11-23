import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import "./ContantMe.css"
import Mailz from '../../assets/Home/mailz.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import Github from "../../assets/Home/github.svg"
import Linkedin from "../../assets/Home/linkedin.svg"
import Instagram from "../../assets/Home/instagram.svg"
import Phone from "../../assets/Home/phone.png"
import Up from "../../assets/Home/up.png"
import PaperPlane from "../../assets/Home/email-send.png"
export default function ContantMe() {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        return (
                <div data-aos="fade-up" className="main-container" id="ContactMe" style={{ "opacity": "5", "transform": "translateY(1px)" }}>
                        <div className="heading-container">
                                <div className="screen-heading"><span>{t("ContactMe")}</span></div>
                                <div className="screen-sub-heading"><span>{t("whyContactMe")}</span></div>
                                <div className="heading-seperator">
                                        <div className="seperator-line"></div>
                                        <div className="seperator-blob">
                                                <div></div>
                                        </div>
                                </div>
                        </div>
                        <div className="central-form">
                                <div className="col">
                                        <h2 className="title">
                                                <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
                                        </h2>
                                        <div className="icon-Group">
                                                <a href="https://github.com/rezac78" target="_blank">
                                                        <img src={Github} alt="Github" />
                                                </a>
                                                <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                        <img src={Linkedin} alt="Linkedin" />
                                                </a>
                                                <a href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                        <img src={Instagram} alt="Instagram" />
                                                </a>
                                                <a href="tel:09032802041">
                                                        <img src={Phone} alt="Phone" />
                                                </a>
                                        </div>
                                </div>
                                <div className="back-form">
                                        <div className="img-back">
                                                <h3>Send Your Email Here!</h3>
                                                <img src={Mailz} alt="not found" />
                                        </div>
                                        <form>
                                                <p></p>
                                                <label htmlFor="name">Name</label>
                                                <input id="name" type="text" />
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" />
                                                <label htmlFor="message">Message</label>
                                                <textarea id="message" type="text"></textarea>
                                                <div className="send-btn"><button type="submit">send<img src={PaperPlane} alt="PaperPlane" /></button></div>
                                        </form>
                                </div>
                        </div>
                        <div className="scroll-container">
                                <button onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }} className="btn-scroll"><img className="fa-arrow-up" src={Up} alt="Up" /></button>
                        </div>
                </div>
        )
}