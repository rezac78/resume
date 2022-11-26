exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Resume)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/pages/assets/Home/Education.svg
/* harmony default export */ const Education = ({"src":"/_next/static/media/Education.cd6570ff.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./src/pages/assets/Home/history.svg
/* harmony default export */ const Home_history = ({"src":"/_next/static/media/history.48fb0319.svg","height":22,"width":22});
;// CONCATENATED MODULE: ./src/pages/assets/Home/Programming.svg
/* harmony default export */ const Programming = ({"src":"/_next/static/media/Programming.99668944.svg","height":19,"width":24});
;// CONCATENATED MODULE: ./src/pages/assets/Home/Projects.svg
/* harmony default export */ const Projects = ({"src":"/_next/static/media/Projects.3406487f.svg","height":14,"width":19});
// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(9783);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(1759);
;// CONCATENATED MODULE: ./src/pages/PortfolioContainer/Resume/Resume.jsx











function Resume() {
    const [toggleState, setToggleState] = (0,external_react_.useState)(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    };
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init({
            duration: 2000
        });
    }, []);
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const LocaleCookie = router.locale;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        "data-aos": "fade-up",
        className: "resume-container",
        id: "Resume",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "resume-content",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "heading-container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "screen-heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: t("Resume")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "screen-sub-heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: t("whyResume")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "heading-seperator",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "seperator-line"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "seperator-blob",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "resume-card",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "resume-bullets",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bullet-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "bullet-icons"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "bullets",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: toggleState === 1 ? "bullet selected" : " bullet",
                                                onClick: ()=>toggleTab(1),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo",
                                                        alt: "B",
                                                        src: Education
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "bullet-label",
                                                        children: t("Education")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: toggleState === 2 ? "bullet selected" : " bullet",
                                                onClick: ()=>toggleTab(2),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo",
                                                        alt: "B",
                                                        src: Home_history
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "bullet-label",
                                                        children: t("WorkHistory")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: toggleState === 3 ? "bullet selected" : " bullet",
                                                onClick: ()=>toggleTab(3),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo",
                                                        alt: "B",
                                                        src: Programming
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "bullet-label",
                                                        children: t("ProgrammingSkills")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: toggleState === 4 ? "bullet selected" : " bullet",
                                                onClick: ()=>toggleTab(4),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: LocaleCookie === "en" ? "bullet-logo" : "fa-bullet-logo",
                                                        alt: "B",
                                                        src: Projects
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "bullet-label",
                                                        children: t("Projects")
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: LocaleCookie === "en" ? "resume-bullet-details" : "fa-resume-bullet-details",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: toggleState === 1 ? "resume-details-carousal" : "selected-bullet-contact",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "resume-screen-container",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "resume-heading",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-main-heading",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: t("HeaderEducation")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-date",
                                                                children: t("HeaderDate")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("MainEducation")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-heading-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "experience-container",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "resume-heading"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: toggleState === 2 ? "resume-details-carousal" : "selected-bullet-contact",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: LocaleCookie === "en" ? "resume-screen-container" : "fa-resume-screen-container",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "experience-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "resume-main-heading",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "heading-bullet"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: t("HeaderWorkHistory")
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "heading-date",
                                                                        children: t("DateWorkHistory")
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "resume-sub-heading",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: t("LocationWorkHistory")
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "resume-heading-description",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "",
                                                            children: t("JobPosition")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "experience-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: t("linkWorkHistory"),
                                                            children: t("HeaderWorkHistory")
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "experience-container",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-heading",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "resume-main-heading",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "heading-bullet"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: t("HeaderWorkHistory")
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "heading-date",
                                                                        children: t("DateWorkHistory")
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "resume-sub-heading",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: t("LocationWorkHistory")
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "resume-heading-description",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "",
                                                            children: t("JobPosition")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "experience-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: t("linkWorkHistory"),
                                                            children: t("HeaderWorkHistory")
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: toggleState === 3 ? "resume-details-carousal" : "selected-bullet-contact",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: LocaleCookie === "en" ? "resume-screen-container programming-skills-container" : "fa-resume-screen-container programming-skills-container",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "JavaScript"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "85%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "React JS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "80%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "React Native"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "65%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Express JS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "45%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Mongo Db"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "95%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "skill-parent",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Node JS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "skill-percentage",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "active-percentage-bar",
                                                            style: {
                                                                width: "55%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: toggleState === 4 ? "resume-details-carousal" : "selected-bullet-contact",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "resume-screen-container",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "resume-heading",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-main-heading",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: t("ProjectsTitle")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-date",
                                                                children: t("ProjectsDate")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsSkills")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-heading-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsMain")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "experience-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: t("Projectslink"),
                                                            children: t("ProjectsTitle")
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "resume-heading",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-main-heading",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: t("ProjectsTitle")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-date",
                                                                children: t("ProjectsDate")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsSkills")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-heading-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsMain")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "experience-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: t("Projectslink"),
                                                            children: t("ProjectsTitle")
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "resume-heading",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "resume-main-heading",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: t("ProjectsTitle")
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "heading-date",
                                                                children: t("ProjectsDate")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: LocaleCookie === "en" ? "resume-sub-heading" : "fa-resume-sub-heading",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsSkills")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "resume-heading-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: t("ProjectsMain")
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "experience-description",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: t("Projectslink"),
                                                            children: t("ProjectsTitle")
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ })

};
;