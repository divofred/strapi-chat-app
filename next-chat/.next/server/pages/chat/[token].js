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
exports.id = "pages/chat/[token]";
exports.ids = ["pages/chat/[token]"];
exports.modules = {

/***/ "./pages/chat/[token].js":
/*!*******************************!*\
  !*** ./pages/chat/[token].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Chat)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Chat() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const SECRET = \"this is a secret\"; // JWT Secret\n    const { 0: done , 1: setDone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const token = router.query.token; // Getting the token from the URL\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!router.isReady) return console.log(\"Loading... Please wait\"); // Checking if the token has been fetched from the URL.\n        try {\n            const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(token, SECRET); // Verifying the token using the secret\n            async function fetchData() {\n                const data = await fetch(`http://localhost:1337/api/accounts/${payload.id}`);\n                const account = await data.json();\n                if (token !== account.data.attributes.token) return router.push(\"/\");\n                return;\n            }\n            fetchData();\n            setDone(\"done\"); // granting access to the chat page\n        } catch (error) {\n            router.push(\"/\"); // redirecting the user to the home page if an error occured\n        }\n    }, [\n        token\n    ]); // Listens for a change in token\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: done !== \"done\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Verifying token..... Please wait\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\chat\\\\[token].js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \" Group Chat\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\chat\\\\[token].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Downloads\\\\Important\\\\Strapi\\\\strapified-chat\\\\next-chat\\\\pages\\\\chat\\\\[token].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0L1t0b2tlbl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDSTtBQUNiO0FBRWhCLFNBQVNJLElBQUksR0FBRztJQUM3QixNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsTUFBTU0sTUFBTSxHQUFHLGtCQUFrQixFQUFFLGFBQWE7SUFDaEQsTUFBTSxFQVBSLEdBT1NDLElBQUksR0FQYixHQU9lQyxPQUFPLE1BQUlOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXBDLE1BQU1PLEtBQUssR0FBR0osTUFBTSxDQUFDSyxLQUFLLENBQUNELEtBQUssRUFBRSxpQ0FBaUM7SUFDbkVSLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ0ksTUFBTSxDQUFDTSxPQUFPLEVBQUUsT0FBT0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLHVEQUF1RDtRQUMxSCxJQUFJO1lBQ0YsTUFBTUMsT0FBTyxHQUFHWCwwREFBVSxDQUFDTSxLQUFLLEVBQUVILE1BQU0sQ0FBQyxFQUFFLHVDQUF1QztZQUNsRixlQUFlVSxTQUFTLEdBQUc7Z0JBQ3pCLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQ3RCLENBQUMsbUNBQW1DLEVBQUVKLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDLENBQUMsQ0FDbkQ7Z0JBQ0QsTUFBTUMsT0FBTyxHQUFHLE1BQU1ILElBQUksQ0FBQ0ksSUFBSSxFQUFFO2dCQUNqQyxJQUFJWixLQUFLLEtBQUtXLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDSyxVQUFVLENBQUNiLEtBQUssRUFBRSxPQUFPSixNQUFNLENBQUNrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JFLE9BQU87YUFDUjtZQUNEUCxTQUFTLEVBQUUsQ0FBQztZQUNaUixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7U0FDckQsQ0FBQyxPQUFPZ0IsS0FBSyxFQUFFO1lBQ2RuQixNQUFNLENBQUNrQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw0REFBNEQ7U0FDL0U7S0FDRixFQUFFO1FBQUNkLEtBQUs7S0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7SUFDN0MscUJBQ0UsOERBQUNnQixLQUFHO2tCQUNEbEIsSUFBSSxLQUFLLE1BQU0saUJBQ2QsOERBQUNtQixJQUFFO3NCQUFDLGtDQUFnQzs7Ozs7Z0JBQUssaUJBRXpDLDhEQUFDQSxJQUFFO3NCQUFDLGFBQVc7Ozs7O2dCQUFLOzs7OztZQUVsQixDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNoYXQvLi9wYWdlcy9jaGF0L1t0b2tlbl0uanM/Mzg2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgU0VDUkVUID0gXCJ0aGlzIGlzIGEgc2VjcmV0XCI7IC8vIEpXVCBTZWNyZXRcclxuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSByb3V0ZXIucXVlcnkudG9rZW47IC8vIEdldHRpbmcgdGhlIHRva2VuIGZyb20gdGhlIFVSTFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm4gY29uc29sZS5sb2coXCJMb2FkaW5nLi4uIFBsZWFzZSB3YWl0XCIpOyAvLyBDaGVja2luZyBpZiB0aGUgdG9rZW4gaGFzIGJlZW4gZmV0Y2hlZCBmcm9tIHRoZSBVUkwuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXlsb2FkID0gand0LnZlcmlmeSh0b2tlbiwgU0VDUkVUKTsgLy8gVmVyaWZ5aW5nIHRoZSB0b2tlbiB1c2luZyB0aGUgc2VjcmV0XHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9hY2NvdW50cy8ke3BheWxvYWQuaWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIGlmICh0b2tlbiAhPT0gYWNjb3VudC5kYXRhLmF0dHJpYnV0ZXMudG9rZW4pIHJldHVybiByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICBzZXREb25lKFwiZG9uZVwiKTsgLy8gZ3JhbnRpbmcgYWNjZXNzIHRvIHRoZSBjaGF0IHBhZ2VcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gcmVkaXJlY3RpbmcgdGhlIHVzZXIgdG8gdGhlIGhvbWUgcGFnZSBpZiBhbiBlcnJvciBvY2N1cmVkXHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuXSk7IC8vIExpc3RlbnMgZm9yIGEgY2hhbmdlIGluIHRva2VuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtkb25lICE9PSBcImRvbmVcIiA/ICggLy8gV2FpdGluZyBmb3IgYWNjZXNzIHRvIGJlIGdyYW50ZWRcclxuICAgICAgICA8aDE+VmVyaWZ5aW5nIHRva2VuLi4uLi4gUGxlYXNlIHdhaXQ8L2gxPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMT4gR3JvdXAgQ2hhdDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImp3dCIsIkNoYXQiLCJyb3V0ZXIiLCJTRUNSRVQiLCJkb25lIiwic2V0RG9uZSIsInRva2VuIiwicXVlcnkiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ2ZXJpZnkiLCJmZXRjaERhdGEiLCJkYXRhIiwiZmV0Y2giLCJpZCIsImFjY291bnQiLCJqc29uIiwiYXR0cmlidXRlcyIsInB1c2giLCJlcnJvciIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat/[token].js\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/chat/[token].js"));
module.exports = __webpack_exports__;

})();