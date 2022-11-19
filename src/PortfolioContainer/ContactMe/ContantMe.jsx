import React from 'react'
import "./ContantMe.css"
import Mailz from '../../assets/Home/mailz.jpeg'
export default function ContantMe() {
        return (
                <div>
                        <div className="main-container" id="ContactMe">
                                <div className="heading-container">
                                        <div className="screen-heading">
                                                <span>Contact Me</span>
                                        </div>
                                        <div className="screen-sub-heading">
                                                <span>Lets Keep In Touch</span>
                                        </div>
                                        <div className="heading-seperator">
                                                <div class="seperator-line"></div>
                                                <div class="seperator-blob">
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="central-form">
                                        <div className="col">
                                                <h2 className="title">
                                                        <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
                                                </h2>
                                                <a href="https://github.com/rezac78">
                                                        <i className="fa fa-facebook-square"></i>
                                                </a>
                                                <a href="https://github.com/rezac78">
                                                        <i className="fa fa-google-plus-square"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/">
                                                        <i className="fa fa-instagram-square"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/">
                                                        <i className="fa fa-youtube-square"></i>
                                                </a>
                                                <a href="#">
                                                        <i className="fa fa-twitter-square"></i>
                                                </a>
                                        </div>
                                        <div className="back-form">
                                                <div className="img-back">
                                                        <h4>Send Your Email Here!</h4>
                                                        <img src={Mailz} alt="cover not found" />
                                                </div>
                                                <form>
                                                        <p></p>
                                                        <label for="name">Name</label>
                                                        <input type="text" />
                                                        <label for="email">Email</label>
                                                        <input type="email" />
                                                        <label for="message">Message</label>
                                                        <textarea type="text"  ></textarea>
                                                        <div className="send-btn">
                                                                <button type="submit">send</button>
                                                                <i className="fa fa-paper-plane"></i>
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                        </div>
                        <div className="scroll-container">
                                <button onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }} className="btn-scroll">
                                        <i className="fa fa-arrow-up"></i>
                                </button>
                        </div>
                </div>
        )
}
