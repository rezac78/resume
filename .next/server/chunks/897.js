"use strict";
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/assets/Home/menu.png
/* harmony default export */ const menu = ({"src":"/_next/static/media/menu.b317b502.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAQElEQVR42mNAB4z/1Bm8GY4wRDJ8Z2BkYGaYyQKmGBlYGKAsFoa/DN8Y/jB8YfjOwASEfzFVgDlMCAEMFRjWAgCpBApc5K4PQAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/assets/Home/close.png
/* harmony default export */ const Home_close = ({"src":"/_next/static/media/close.1eb32c6a.png","height":560,"width":557,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42j2NOwqEUBAEO1kvsrAsCJvtTxEzEfUKgkcUjyAeRAMVL6BZ4bwXOEHRFUy3aGkkAgJjTSc+zJSyI2fh58KTnZTYGDq9SdxZ2Xh4879fRiYieRN/Dl6ExsRpxuqrxNtSIXqqazZnOAH0dUNgUDrovgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/assets/Home/Global.svg
/* harmony default export */ const Global = ({"src":"/_next/static/media/Global.ff5f31ce.svg","height":489,"width":489});
;// CONCATENATED MODULE: ./src/pages/assets/Home/Iran.svg
/* harmony default export */ const Iran = ({"src":"/_next/static/media/Iran.db59a28c.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./src/pages/assets/Home/uk.svg
/* harmony default export */ const uk = ({"src":"/_next/static/media/uk.1afeff78.svg","height":800,"width":800});
;// CONCATENATED MODULE: ./src/pages/PortfolioContainer/Home/Header/Header.jsx











function Header() {
    const [OpenMenu, setOpenMenu] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)("common");
    const handleIsOpen = ()=>{
        setOpenMenu(!OpenMenu);
    };
    const [activeId, setActiveId] = (0,external_react_.useState)(1);
    const values = [
        {
            id: 1,
            name: "Home",
            Link: "#"
        },
        {
            id: 2,
            name: "AboutMe",
            Link: "#AboutMe"
        },
        {
            id: 3,
            name: "Resume",
            Link: "#Resume"
        },
        {
            id: 4,
            name: "ContactMe",
            Link: "#ContactMe"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "navbar",
        children: OpenMenu === true ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-links",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            values.map((val, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>setActiveId(val.id),
                                    className: activeId === val.id ? "active" : "Inactive",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: val.Link,
                                        children: t(val.name)
                                    })
                                }, key)),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            style: {
                                                direction: "ltr"
                                            },
                                            className: "btn btn-link dropdown-toggle",
                                            type: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: "GlobalImg",
                                                src: Global,
                                                alt: "Global"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "dropdown-menu bg-light",
                                            children: router.locales.map((locale, key)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: router.asPath,
                                                    locale: locale,
                                                    className: "dropdown-item text-dark",
                                                    children: locale === "fa" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            t("LanguageFa"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: Iran,
                                                                className: "flagIcon",
                                                                alt: "flag"
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            t("LanguageEn"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: uk,
                                                                className: "flagIcon",
                                                                alt: "flag"
                                                            })
                                                        ]
                                                    })
                                                }, key))
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: handleIsOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: Home_close,
                        alt: "menu hamburger",
                        className: "menu-hamburger"
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "nav-links-PC",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            values.map((val, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    onClick: ()=>setActiveId(val.id),
                                    className: activeId === val.id ? "active" : "Inactive",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: val.Link,
                                        children: t(val.name)
                                    })
                                }, key)),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            style: {
                                                direction: "ltr"
                                            },
                                            className: "btn btn-link dropdown-toggle",
                                            type: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: "GlobalImg",
                                                src: Global,
                                                alt: "Global"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "dropdown-menu bg-light",
                                            children: router.locales.map((locale, key)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: router.asPath,
                                                    locale: locale,
                                                    className: "dropdown-item text-dark",
                                                    children: locale === "fa" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            t("LanguageFa"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: Iran,
                                                                className: "flagIcon",
                                                                alt: "flag"
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            t("LanguageEn"),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                src: uk,
                                                                className: "flagIcon",
                                                                alt: "flag"
                                                            })
                                                        ]
                                                    })
                                                }, key))
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: handleIsOpen,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: menu,
                        alt: "menu hamburger",
                        className: "menu-hamburger"
                    })
                })
            ]
        })
    });
}


/***/ })

};
;