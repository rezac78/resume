import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import "./ContantMe.css"
import Mailz from '../../assets/Home/mailz.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";
export default function ContantMe() {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        const LocaleCookie = i18next.language;
        return (
                <div data-aos="fade-up" className="main-container" id="ContactMe" style={{ "opacity": "5", "transform": "translateY(1px);" }}>
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
                                        <a href="https://github.com/rezac78" target="_blank">
                                                <i class="fa fa-github"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="tel:09032802041">
                                                <i class="fa fa-phone"></i>
                                        </a>
                                </div>
                                <div className="back-form">
                                        <div className="img-back">
                                                <h4>Send Your Email Here!</h4>
                                                <img src={Mailz} alt="image not found" />
                                        </div>
                                        <form>
                                                <p></p>
                                                <label for="name">Name</label>
                                                <input type="text" value="" /><label
                                                        for="email">Email</label><input type="email" value="" /><label
                                                                for="message">Message</label><textarea type="text"></textarea>
                                                <div className="send-btn"><button type="submit">send<i
                                                        className="fa fa-paper-plane"></i></button></div>
                                        </form>
                                </div>
                        </div>
                        <div className="scroll-container">
                                <button onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }} className="btn-scroll"> <i className="fa fa-arrow-up"></i></button>
                        </div>
                </div>
        )
}
