import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import i18next from 'i18next';
import api from "../../api/api";
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import Link from 'next/link'
import { FormSchema } from "../../../schemas";
import Mailz from '../../assets/Home/mailz.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import Github from "../../assets/Home/github.svg"
import Linkedin from "../../assets/Home/linkedin.svg"
import Instagram from "../../assets/Home/instagram.svg"
import Phone from "../../assets/Home/phone.png"
import Up from "../../assets/Home/up.png"
import PaperPlane from "../../assets/Home/email-send.png"

export default function ContantMe({getTeam}) {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, []);
        const { t } = useTranslation();
        const [inputVal, setInputVal] = useState(false)
        const form = useRef();
        const LocaleCookie = i18next.language;
        const onSubmit = (e, actions) => {
                setInputVal(true);
                api.post("api/", e);
                emailjs.sendForm('service_pke74m6', 'template_hk0t1os', form.current, '-AohTxKTUcg7RfNbr')
                        .then((result) => {
                                LocaleCookie === "en" ?
                                        toast.success("Successful send 👍", {
                                                position: "top-right",
                                                closeButton: true,
                                                closeOnClick: true,
                                        })
                                        :
                                        toast.success("ارسال شد 👍", {
                                                position: "top-right",
                                                closeButton: true,
                                                closeOnClick: true,
                                        });
                                setInputVal(false);
                                actions.resetForm();
                        }, (error) => {
                                toast.error(` Eror❗️❗️❗️`, {
                                        position: "top-right",
                                        closeOnClick: true,
                                });
                        });
        }
        const { values, errors, handleChange, handleSubmit } = useFormik({
                initialValues: {
                        user_email: "",
                        user_name: "",
                        message: "",
                },
                validationSchema: FormSchema,
                onSubmit,
        });
        return (
                <div data-aos="fade-up" className="main-container" id="ContactMe" style={{ "opacity": "5", "transform": "translateY(1px)" }}>
                        <div className="heading-container">
                                <div className={getTeam ? "screen-heading-Dark" : "screen-heading"}><span>{t("ContactMe")}</span></div>
                                <div className={getTeam ? "screen-sub-heading-Dark" : "screen-sub-heading"}><span>{t("whyContactMe")}</span></div>
                                <div className="heading-seperator">
                                        <div className={getTeam ? "seperator-line-Dark" : "seperator-line"}></div>
                                        <div className={getTeam ? "seperator-blob-Dark" : "seperator-blob"}>
                                                <div></div>
                                        </div>
                                </div>
                        </div>
                        <div className={getTeam ? "central-form-Dark" : "central-form"}>
                                <div className="col">
                                        <h2 className="title">
                                                <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
                                        </h2>
                                        <div className="icon-Group">
                                                <Link href="https://github.com/rezac78" target="_blank">
                                                        <Image src={Github} alt="Github" />
                                                </Link>
                                                <Link href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                                        <Image src={Linkedin} alt="Linkedin" />
                                                </Link>
                                                <Link href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                                        <Image src={Instagram} alt="Instagram" />
                                                </Link>
                                                <Link href="tel:09032802041">
                                                        <Image src={Phone} alt="Phone"/>
                                                </Link>
                                        </div>
                                </div>
                                <div className="back-form">
                                        <div className="img-back">
                                                <h3>Send Your Email Here!</h3>
                                                <Image src={Mailz} alt="not found" />
                                        </div>
                                        <form ref={form} onSubmit={handleSubmit}>
                                                <p></p>
                                                <label htmlFor="name">Name</label>
                                                <input id="name" type="text" name="user_name" value={values.user_name} onChange={handleChange} />
                                                {errors.user_name && <p className="error">{errors.user_name}</p>}
                                                <label htmlFor="email">Email</label>
                                                <input id="email" name="user_email" type="email" value={values.user_email} onChange={handleChange} />
                                                {errors.user_email && <p className="error">{errors.user_email}</p>}
                                                <label htmlFor="message">Message</label>
                                                <textarea type="text" id="message" name="message" value={values.message} onChange={handleChange} />
                                                {errors.message && <p className="error">{errors.message}</p>}
                                                <div className="send-btn"><button className={`${inputVal === false ? "buttonactive" : "buttondeactive"} ${getTeam ? "buttonactive-Dark" : "buttonactive" }`} type="submit">send<Image src={PaperPlane} alt="PaperPlane" /></button></div>
                                        </form>
                                </div>
                        </div>
                        <div className="scroll-container">
                                <button onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }} className={getTeam ? "btn-scroll-Dark" : "btn-scroll"}><Image className="fa-arrow-up" src={Up} alt="Up" /></button>
                        </div>
                        <ToastContainer />
                </div>
        )
}