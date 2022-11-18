import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import "./Profile.css"
export default function Profile() {
        return (
                <div className="profile-container">
                        <div className="profile-parent">
                                <div className="profile-details">
                                        <div className="colz">
                                                <div className="colz-icon">
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
                                        </div>
                                        <div className="profile-details-name">
                                                <span className="primary-text">
                                                        {" "}
                                                        Hello, Im <span className="highlighted-text">Reza</span>
                                                </span>
                                        </div>
                                        <div className="profile-details-role">
                                                <span className="primary-text">
                                                        {" "}
                                                        <h1>
                                                                {" "}
                                                                <Typewriter
                                                                        loop={Infinity}
                                                                        words={[
                                                                                "Full stack Developer 🖥️",
                                                                                "MERN Stack Dev 😎️",
                                                                                "Softwere Enginner 💻️",
                                                                                "React/Next/Node/Nest 🔴️",
                                                                        ]}
                                                                        cursor
                                                                        cursorStyle='_'
                                                                        typeSpeed={70}
                                                                        deleteSpeed={50}
                                                                        delaySpeed={1000}
                                                                />
                                                        </h1>
                                                        <span className="profile-role-tagline">
                                                                knack of building applications with front and back end operations.
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="profile-options">
                                                <a href="#ContactMe">
                                                        <button className="btn primary-btn">
                                                                {""}
                                                                Hire Me {" "}
                                                        </button>
                                                </a>
                                                <a href="RezaDalvandCV.pdf" download="RezaDalvandCV.pdf">
                                                        <button className="btn highlighted-btn">Get Resume</button>
                                                </a>
                                        </div>
                                </div>
                                <div className="profile-picture">
                                        <div className="profile-picture-background">

                                        </div>
                                </div>
                        </div>
                </div>
        )
}
