"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/store/actions/authAction.ts":
/*!*****************************************!*\
  !*** ./src/store/actions/authAction.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authCheckState: function() { return /* binding */ authCheckState; },\n/* harmony export */   authFail: function() { return /* binding */ authFail; },\n/* harmony export */   authLogin: function() { return /* binding */ authLogin; },\n/* harmony export */   authLogout: function() { return /* binding */ authLogout; },\n/* harmony export */   authStart: function() { return /* binding */ authStart; },\n/* harmony export */   authSuccess: function() { return /* binding */ authSuccess; },\n/* harmony export */   checkAuthTimeOut: function() { return /* binding */ checkAuthTimeOut; }\n/* harmony export */ });\n/* harmony import */ var _actionsTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsTypes */ \"(app-pages-browser)/./src/store/actions/actionsTypes.ts\");\n\nconst authStart = (loading)=>{\n    return {\n        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__.AUTH_START,\n        loading: loading\n    };\n};\nconst authSuccess = (token)=>{\n    return {\n        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__.AUTH_SUCCESS,\n        token: token\n    };\n};\nconst authFail = (error)=>{\n    return {\n        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__.AUTH_FAIL,\n        error: error\n    };\n};\nconst authLogout = ()=>{\n    localStorage.removeItem(\"delaColinaToken\");\n    localStorage.removeItem(\"_hjid\");\n    localStorage.removeItem(\"delaColinaExpirationDate\");\n    localStorage.clear();\n    return {\n        type: _actionsTypes__WEBPACK_IMPORTED_MODULE_0__.AUTH_LOGOUT\n    };\n};\nconst checkAuthTimeOut = (expirationTime)=>{\n    return (dispatch)=>{\n        setTimeout(()=>{\n            dispatch(authLogout());\n        }, expirationTime + 7 * 24 * 60 * 60 * 1000);\n    };\n};\nconst authLogin = (email, password)=>{\n    return (dispatch)=>{\n        dispatch(authStart(true));\n    // axios\n    //   .post(loginURL, { email, password })\n    //   .then((res) => {\n    //     const token = res.data.key\n    //     // Create an expiration date 7 days from now\n    //     const expirationDate = new Date(\n    //       new Date().getTime() + 7 * 24 * 60 * 60 * 1000\n    //     )\n    //     // Convert the expiration date to an ISO string before storing\n    //     localStorage.setItem(\"delaColinaToken\", token)\n    //     localStorage.setItem(\n    //       \"delaColinaExpirationDate\",\n    //       expirationDate.toISOString()\n    //     )\n    //     dispatch(authSuccess(token))\n    //     dispatch(checkAuthTimeOut(3600 * 1000))\n    //     dispatch(authStart(false))\n    //   })\n    //   .catch((err) => {\n    //     console.log(\"delacolinaError\", err.response.data)\n    //     dispatch(authFail(err.response.data[0]))\n    //     dispatch(authStart(false))\n    //   })\n    };\n};\nconst authCheckState = ()=>{\n    return (dispatch)=>{\n        dispatch(authStart(true));\n        const token = localStorage.getItem(\"delaColinaToken\");\n        const expirationDateString = localStorage.getItem(\"delaColinaExpirationDate\");\n        if (!token) {\n            dispatch(authLogout());\n            dispatch(authStart(false));\n            dispatch(authSuccess(null));\n            return;\n        }\n        if (!expirationDateString) {\n            dispatch(authLogout());\n            dispatch(authSuccess(null));\n            dispatch(authStart(false));\n            return;\n        }\n        const expirationDate = new Date(expirationDateString);\n        if (expirationDate <= new Date()) {\n            dispatch(authLogout());\n            dispatch(authStart(false));\n            dispatch(authSuccess(null));\n        } else {\n            dispatch(authSuccess(token));\n            dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));\n            dispatch(authStart(false));\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9hY3Rpb25zL2F1dGhBY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNdUI7QUFFaEIsTUFBTUksWUFBWSxDQUFDQztJQUN4QixPQUFPO1FBQ0xDLE1BQU1KLHFEQUFVQTtRQUNoQkcsU0FBU0E7SUFDWDtBQUNGLEVBQUM7QUFFTSxNQUFNRSxjQUFjLENBQUNDO0lBQzFCLE9BQU87UUFDTEYsTUFBTUgsdURBQVlBO1FBQ2xCSyxPQUFPQTtJQUNUO0FBQ0YsRUFBQztBQUVNLE1BQU1DLFdBQVcsQ0FBQ0M7SUFDdkIsT0FBTztRQUNMSixNQUFNTixvREFBU0E7UUFDZlUsT0FBT0E7SUFDVDtBQUNGLEVBQUM7QUFFTSxNQUFNQyxhQUFhO0lBQ3hCQyxhQUFhQyxVQUFVLENBQUM7SUFDeEJELGFBQWFDLFVBQVUsQ0FBQztJQUN4QkQsYUFBYUMsVUFBVSxDQUFDO0lBRXhCRCxhQUFhRSxLQUFLO0lBQ2xCLE9BQU87UUFDTFIsTUFBTUwsc0RBQVdBO0lBQ25CO0FBQ0YsRUFBQztBQUVNLE1BQU1jLG1CQUFtQixDQUFDQztJQUMvQixPQUFPLENBQUNDO1FBQ05DLFdBQVc7WUFDVEQsU0FBU047UUFDWCxHQUFHSyxpQkFBaUIsSUFBSSxLQUFLLEtBQUssS0FBSztJQUN6QztBQUNGLEVBQUM7QUFFTSxNQUFNRyxZQUFZLENBQUNDLE9BQWdCQztJQUN4QyxPQUFPLENBQUNKO1FBQ05BLFNBQVNiLFVBQVU7SUFFbkIsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLG1EQUFtRDtJQUNuRCx1Q0FBdUM7SUFDdkMsdURBQXVEO0lBQ3ZELFFBQVE7SUFDUixxRUFBcUU7SUFDckUscURBQXFEO0lBRXJELDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLFFBQVE7SUFFUixtQ0FBbUM7SUFDbkMsOENBQThDO0lBQzlDLGlDQUFpQztJQUNqQyxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLHdEQUF3RDtJQUN4RCwrQ0FBK0M7SUFDL0MsaUNBQWlDO0lBQ2pDLE9BQU87SUFDVDtBQUNGLEVBQUM7QUFFTSxNQUFNa0IsaUJBQWlCO0lBQzVCLE9BQU8sQ0FBQ0w7UUFDTkEsU0FBU2IsVUFBVTtRQUNuQixNQUFNSSxRQUFRSSxhQUFhVyxPQUFPLENBQUM7UUFDbkMsTUFBTUMsdUJBQXVCWixhQUFhVyxPQUFPLENBQy9DO1FBR0YsSUFBSSxDQUFDZixPQUFPO1lBQ1ZTLFNBQVNOO1lBQ1RNLFNBQVNiLFVBQVU7WUFDbkJhLFNBQVNWLFlBQVk7WUFDckI7UUFDRjtRQUVBLElBQUksQ0FBQ2lCLHNCQUFzQjtZQUN6QlAsU0FBU047WUFDVE0sU0FBU1YsWUFBWTtZQUNyQlUsU0FBU2IsVUFBVTtZQUNuQjtRQUNGO1FBRUEsTUFBTXFCLGlCQUFpQixJQUFJQyxLQUFLRjtRQUNoQyxJQUFJQyxrQkFBa0IsSUFBSUMsUUFBUTtZQUNoQ1QsU0FBU047WUFDVE0sU0FBU2IsVUFBVTtZQUNuQmEsU0FBU1YsWUFBWTtRQUN2QixPQUFPO1lBQ0xVLFNBQVNWLFlBQVlDO1lBQ3JCUyxTQUNFRixpQkFDRSxDQUFDVSxlQUFlRSxPQUFPLEtBQUssSUFBSUQsT0FBT0MsT0FBTyxFQUFDLElBQUs7WUFHeERWLFNBQVNiLFVBQVU7UUFDckI7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FjdGlvbnMvYXV0aEFjdGlvbi50cz8yMDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge1xyXG4gIEFVVEhfRkFJTCxcclxuICBBVVRIX0xPR09VVCxcclxuICBBVVRIX1NUQVJULFxyXG4gIEFVVEhfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi9hY3Rpb25zVHlwZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTdGFydCA9IChsb2FkaW5nOiBib29sZWFuKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFVVEhfU1RBUlQsXHJcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTdWNjZXNzID0gKHRva2VuOiBhbnkpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQVVUSF9TVUNDRVNTLFxyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhGYWlsID0gKGVycm9yOiBhbnkpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQVVUSF9GQUlMLFxyXG4gICAgZXJyb3I6IGVycm9yLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhMb2dvdXQgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkZWxhQ29saW5hVG9rZW5cIilcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIl9oamlkXCIpXHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkZWxhQ29saW5hRXhwaXJhdGlvbkRhdGVcIilcclxuXHJcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQVVUSF9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBdXRoVGltZU91dCA9IChleHBpcmF0aW9uVGltZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYXV0aExvZ291dCgpKVxyXG4gICAgfSwgZXhwaXJhdGlvblRpbWUgKyA3ICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoTG9naW4gPSAoZW1haWw/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBkaXNwYXRjaChhdXRoU3RhcnQodHJ1ZSkpXHJcblxyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLnBvc3QobG9naW5VUkwsIHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0b2tlbiA9IHJlcy5kYXRhLmtleVxyXG4gICAgLy8gICAgIC8vIENyZWF0ZSBhbiBleHBpcmF0aW9uIGRhdGUgNyBkYXlzIGZyb20gbm93XHJcbiAgICAvLyAgICAgY29uc3QgZXhwaXJhdGlvbkRhdGUgPSBuZXcgRGF0ZShcclxuICAgIC8vICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICAgLy8gQ29udmVydCB0aGUgZXhwaXJhdGlvbiBkYXRlIHRvIGFuIElTTyBzdHJpbmcgYmVmb3JlIHN0b3JpbmdcclxuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlbGFDb2xpbmFUb2tlblwiLCB0b2tlbilcclxuXHJcbiAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAvLyAgICAgICBcImRlbGFDb2xpbmFFeHBpcmF0aW9uRGF0ZVwiLFxyXG4gICAgLy8gICAgICAgZXhwaXJhdGlvbkRhdGUudG9JU09TdHJpbmcoKVxyXG4gICAgLy8gICAgIClcclxuXHJcbiAgICAvLyAgICAgZGlzcGF0Y2goYXV0aFN1Y2Nlc3ModG9rZW4pKVxyXG4gICAgLy8gICAgIGRpc3BhdGNoKGNoZWNrQXV0aFRpbWVPdXQoMzYwMCAqIDEwMDApKVxyXG4gICAgLy8gICAgIGRpc3BhdGNoKGF1dGhTdGFydChmYWxzZSkpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkZWxhY29saW5hRXJyb3JcIiwgZXJyLnJlc3BvbnNlLmRhdGEpXHJcbiAgICAvLyAgICAgZGlzcGF0Y2goYXV0aEZhaWwoZXJyLnJlc3BvbnNlLmRhdGFbMF0pKVxyXG4gICAgLy8gICAgIGRpc3BhdGNoKGF1dGhTdGFydChmYWxzZSkpXHJcbiAgICAvLyAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aENoZWNrU3RhdGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaDogYW55KSA9PiB7XHJcbiAgICBkaXNwYXRjaChhdXRoU3RhcnQodHJ1ZSkpXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVsYUNvbGluYVRva2VuXCIpXHJcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gICAgICBcImRlbGFDb2xpbmFFeHBpcmF0aW9uRGF0ZVwiXHJcbiAgICApXHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICBkaXNwYXRjaChhdXRoTG9nb3V0KCkpXHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdGFydChmYWxzZSkpXHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKG51bGwpKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWV4cGlyYXRpb25EYXRlU3RyaW5nKSB7XHJcbiAgICAgIGRpc3BhdGNoKGF1dGhMb2dvdXQoKSlcclxuICAgICAgZGlzcGF0Y2goYXV0aFN1Y2Nlc3MobnVsbCkpXHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdGFydChmYWxzZSkpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUoZXhwaXJhdGlvbkRhdGVTdHJpbmcpXHJcbiAgICBpZiAoZXhwaXJhdGlvbkRhdGUgPD0gbmV3IERhdGUoKSkge1xyXG4gICAgICBkaXNwYXRjaChhdXRoTG9nb3V0KCkpXHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdGFydChmYWxzZSkpXHJcbiAgICAgIGRpc3BhdGNoKGF1dGhTdWNjZXNzKG51bGwpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goYXV0aFN1Y2Nlc3ModG9rZW4pKVxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICBjaGVja0F1dGhUaW1lT3V0KFxyXG4gICAgICAgICAgKGV4cGlyYXRpb25EYXRlLmdldFRpbWUoKSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDBcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgZGlzcGF0Y2goYXV0aFN0YXJ0KGZhbHNlKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFVVEhfRkFJTCIsIkFVVEhfTE9HT1VUIiwiQVVUSF9TVEFSVCIsIkFVVEhfU1VDQ0VTUyIsImF1dGhTdGFydCIsImxvYWRpbmciLCJ0eXBlIiwiYXV0aFN1Y2Nlc3MiLCJ0b2tlbiIsImF1dGhGYWlsIiwiZXJyb3IiLCJhdXRoTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwiY2hlY2tBdXRoVGltZU91dCIsImV4cGlyYXRpb25UaW1lIiwiZGlzcGF0Y2giLCJzZXRUaW1lb3V0IiwiYXV0aExvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGhDaGVja1N0YXRlIiwiZ2V0SXRlbSIsImV4cGlyYXRpb25EYXRlU3RyaW5nIiwiZXhwaXJhdGlvbkRhdGUiLCJEYXRlIiwiZ2V0VGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/actions/authAction.ts\n"));

/***/ })

});