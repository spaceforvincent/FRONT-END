"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies/[...params]";
exports.ids = ["pages/movies/[...params]"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | Next Movies\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyeokjuchoi/Desktop/github/FRONT-END/NEXT.js/nextjs-intro/components/Seo.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hyeokjuchoi/Desktop/github/FRONT-END/NEXT.js/nextjs-intro/components/Seo.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRCO0FBRWIsU0FBU0MsR0FBRyxDQUFDLEVBQUNDLEtBQUssR0FBQyxFQUFFO0lBQ2pDLHFCQUNJLDhEQUFDRixrREFBSTtrQkFDTCw0RUFBQ0UsT0FBSzs7Z0JBQUVBLEtBQUs7Z0JBQUMsZ0JBQWM7Ozs7OztnQkFBUTs7Ozs7WUFDN0IsQ0FDVjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWludHJvLy4vY29tcG9uZW50cy9TZW8uanM/NDI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbyh7dGl0bGV9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9IHwgTmV4dCBNb3ZpZXM8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/movies/[...params].js":
/*!*************************************!*\
  !*** ./pages/movies/[...params].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Detail() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [title, id] = router.query.params || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: title\n            }, void 0, false, {\n                fileName: \"/Users/hyeokjuchoi/Desktop/github/FRONT-END/NEXT.js/nextjs-intro/pages/movies/[...params].js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/hyeokjuchoi/Desktop/github/FRONT-END/NEXT.js/nextjs-intro/pages/movies/[...params].js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hyeokjuchoi/Desktop/github/FRONT-END/NEXT.js/nextjs-intro/pages/movies/[...params].js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvWy4uLnBhcmFtc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDQTtBQUV4QixTQUFTRSxNQUFNLEdBQUc7SUFDN0IsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sQ0FBQ0csS0FBSyxFQUFDQyxFQUFFLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sSUFBSSxFQUFFO0lBRTVDLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ1IsdURBQUc7Z0JBQUNJLEtBQUssRUFBRUEsS0FBSzs7Ozs7b0JBQUc7MEJBQ3BCLDhEQUFDSyxJQUFFOzBCQUFFTCxLQUFLOzs7OztvQkFBTTs7Ozs7O1lBQ1osQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWludHJvLy4vcGFnZXMvbW92aWVzL1suLi5wYXJhbXNdLmpzPzJlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdGl0bGUsaWRdID0gcm91dGVyLnF1ZXJ5LnBhcmFtcyB8fCBbXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2VvIHRpdGxlPXt0aXRsZX0vPlxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9Il0sIm5hbWVzIjpbIlNlbyIsInVzZVJvdXRlciIsIkRldGFpbCIsInJvdXRlciIsInRpdGxlIiwiaWQiLCJxdWVyeSIsInBhcmFtcyIsImRpdiIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies/[...params].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies/[...params].js"));
module.exports = __webpack_exports__;

})();