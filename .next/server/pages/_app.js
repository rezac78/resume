(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 23:
/***/ ((module) => {

"use strict";

module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: [
            "en",
            "fa"
        ]
    }
};


/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(23);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(5931);
// EXTERNAL MODULE: ./src/styles/app.css
var app = __webpack_require__(4695);
// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__(4729);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/Home/Header/Header.css
var Header = __webpack_require__(8991);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/Home/Home.css
var Home = __webpack_require__(4625);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/Home/Profile/Profile.css
var Profile = __webpack_require__(105);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/Home/Footer/Footer.css
var Footer = __webpack_require__(5355);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/AboutMe/AboutMe.css
var AboutMe = __webpack_require__(9411);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/Resume/Resume.css
var Resume = __webpack_require__(3862);
// EXTERNAL MODULE: ./src/pages/PortfolioContainer/ContactMe/ContantMe.css
var ContantMe = __webpack_require__(610);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/pages/_app.js
















// add bootstrap css
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Resume online"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "RezaDalvand"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp, (i18n_default())));


/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 9411:
/***/ (() => {



/***/ }),

/***/ 610:
/***/ (() => {



/***/ }),

/***/ 5355:
/***/ (() => {



/***/ }),

/***/ 8991:
/***/ (() => {



/***/ }),

/***/ 4625:
/***/ (() => {



/***/ }),

/***/ 105:
/***/ (() => {



/***/ }),

/***/ 3862:
/***/ (() => {



/***/ }),

/***/ 4695:
/***/ (() => {



/***/ }),

/***/ 4729:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,573], () => (__webpack_exec__(3503)));
module.exports = __webpack_exports__;

})();