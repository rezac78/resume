import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import Link from 'next/link';
import { values } from "../../../../events/events"
import { useRouter } from 'next/router';
import MenuOpen from "../../../../pages/assets/Home/menu.png"
import MenuClose from "../../../../pages/assets/Home/close.png"
import GlobeIcon from "../../../../pages/assets/Home/Global.svg"
import Wand from "../../../../pages/assets/Home/Wand.png"
import ligth from "../../../../pages/assets/Home/ligth.png"
import Iran from "../../../../pages/assets/Home/Iran.svg"
import English from "../../../../pages/assets/Home/uk.svg"
export default function Header({ getTeam, setTeam }) {
        const [OpenMenu, setOpenMenu] = useState(false);
        const router = useRouter();
        const { t } = useTranslation("common");
        const handleIsOpen = () => {
                setOpenMenu(!OpenMenu)
        }
        const [activeId, setActiveId] = useState(1)

        const handleTeam = () => {
                setTeam(!getTeam)
        }
        return (
                <div className="navbar">
                        {
                                OpenMenu === true ?
                                        <div >
                                                <div className="nav-links">
                                                        <ul>
                                                                {values.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "Inactive"}>
                                                                                <a href={val.Link} >{t(val.name)}</a>
                                                                        </li>
                                                                ))}
                                                                <li>
                                                                        <div className="dropdown">
                                                                                <button style={{ direction: 'ltr' }} className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <Image className='GlobalImg' src={GlobeIcon} alt='Global' />
                                                                                </button>
                                                                                <div className="dropdown-menu bg-light" >
                                                                                        {router.locales.map((locale, key) => (
                                                                                                <Link key={key} href={router.asPath} locale={locale} className="dropdown-item text-dark" >
                                                                                                        {locale === "fa" ?
                                                                                                                <>
                                                                                                                        {t("LanguageFa")}
                                                                                                                        <Image src={Iran} className="flagIcon" alt="flag" />
                                                                                                                </>
                                                                                                                :
                                                                                                                <>
                                                                                                                        {t("LanguageEn")}
                                                                                                                        <Image src={English} className="flagIcon" alt="flag" />
                                                                                                                </>
                                                                                                        }
                                                                                                </Link>
                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div onClick={handleTeam} className='ChooseTeam'>
                                                                                <Image className='WandImag' width={50} height={50} src={Wand} alt='Wand' />
                                                                                {getTeam ? <div className='ligthImag'>
                                                                                        <Image width={60} height={60} src={ligth} alt='ligth' />
                                                                                </div> : null}

                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <Image src={MenuClose} alt="menu hamburger" className="menu-hamburger-close" />
                                                </div>

                                        </div>
                                        :
                                        <div>
                                                <div className="nav-links-PC">
                                                        <ul>
                                                                {values.map((val, key) => (
                                                                        <li key={key} onClick={() => setActiveId(val.id)} className={activeId === val.id ? "active" : "Inactive"}>
                                                                                <div className={getTeam ? "active Dark" : ""}>
                                                                                        <a href={val.Link} >{t(val.name)}</a>
                                                                                </div>
                                                                        </li>
                                                                ))}
                                                                <li>
                                                                        <div className="dropdown">
                                                                                <button style={{ direction: 'ltr' }} className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <Image className='GlobalImg' src={GlobeIcon} alt='Global' />
                                                                                </button>
                                                                                <div className="dropdown-menu bg-light" >
                                                                                        {router.locales.map((locale, key) => (
                                                                                                <Link key={key} href={router.asPath} locale={locale} className="dropdown-item text-dark" >
                                                                                                        {locale === "fa" ?
                                                                                                                <>
                                                                                                                        {t("LanguageFa")}
                                                                                                                        <Image src={Iran} className="flagIcon" alt="flag" />
                                                                                                                </>
                                                                                                                :
                                                                                                                <>
                                                                                                                        {t("LanguageEn")}
                                                                                                                        <Image src={English} className="flagIcon" alt="flag" />
                                                                                                                </>
                                                                                                        }
                                                                                                </Link>
                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                </li>
                                                                <li>
                                                                        <div onClick={handleTeam} className='ChooseTeam'>
                                                                                <Image className='WandImag' width={50} height={50} src={Wand} alt='Wand' />
                                                                                {getTeam ? <div className='ligthImag'>
                                                                                        <Image width={60} height={60} src={ligth} alt='ligth' />
                                                                                </div> : null}

                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div onClick={handleIsOpen}>
                                                        <Image src={MenuOpen} alt="menu hamburger" className="menu-hamburger" />
                                                </div>
                                        </div>
                        }
                </div>
        )
}
