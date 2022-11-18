import React from 'react'
import "./AboutMe.css"
export default function AboutMe() {
        return (
                <div className="about-me-container" id="AboutMe">
                        <div className="about-me-parent">
                                <div className="heading-container">
                                        <div className="screen-heading">
                                                <span>About Me</span>
                                        </div>
                                        <div className="screen-sub-heading">
                                                <span>why Choose Me?</span>
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
                                                <span class="about-me-description">Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</span>
                                                <div class="about-me-highlights">
                                                        <div class="highlight-heading">
                                                                <span>Here are a Few Highlights:</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>Full Stack web and mobile development</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>Interactive Front End as per the design</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>React and React Native</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>Redux for State Mnanagement</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>Building REST API</span>
                                                        </div>
                                                        <div class="highlight">
                                                                <div class="highlight-blob"></div>
                                                                <span>Managing database</span>
                                                        </div>
                                                </div>
                                                <div class="about-me-options">
                                                        <button class="btn primary-btn">
                                                                Hire Me
                                                        </button>
                                                        <a href="RezaDalvandCV.pdf" download="RezaDalvandCV.pdf">
                                                                <button className="btn highlighted-btn">Get Resume</button>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
