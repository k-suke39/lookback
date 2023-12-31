"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/destyle.css */ \"./src/styles/destyle.css\");\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_destyle_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/createEmotionCache */ \"./src/styles/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\n\n\n\n\n\n\n\n\nvar clientSideEmotionCache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nfunction MyApp(props) {\n  var Component = props.Component,\n    _props$emotionCache = props.emotionCache,\n    emotionCache = _props$emotionCache === void 0 ? clientSideEmotionCache : _props$emotionCache,\n    pageProps = props.pageProps;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.CacheProvider, {\n    value: emotionCache,\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 5\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 5\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }, this);\n}\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ1Q7QUFDQztBQUV2QjtBQUVXO0FBRW9CO0FBQzFCO0FBQUE7QUFFbkMsSUFBTVEsc0JBQXNCLEdBQUdKLHNFQUFrQixDQUFDLENBQUM7QUFNcEMsU0FBU0ssS0FBS0EsQ0FBQ0MsS0FBaUIsRUFBZTtFQUM3RCxJQUFRQyxTQUFTLEdBQXVERCxLQUFLLENBQXJFQyxTQUFTO0lBQUFDLG1CQUFBLEdBQXVERixLQUFLLENBQTFERyxZQUFZO0lBQVpBLFlBQVksR0FBQUQsbUJBQUEsY0FBR0osc0JBQXNCLEdBQUFJLG1CQUFBO0lBQUVFLFNBQVMsR0FBS0osS0FBSyxDQUFuQkksU0FBUztFQUNuRSxPQUNDUCxzRUFBQSxDQUFDUCx5REFBYTtJQUFDZSxLQUFLLEVBQUVGLFlBQWE7SUFBQUcsUUFBQSxFQUNsQ1Qsc0VBQUEsQ0FBQ0wsK0RBQWE7TUFBQ0csS0FBSyxFQUFFQSxxREFBTTtNQUFBVyxRQUFBLEdBQzNCVCxzRUFBQSxDQUFDTixpRUFBVztRQUFBZ0IsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQUUsQ0FBQyxFQUNmYixzRUFBQSxDQUFDSiwwREFBTTtRQUFBYyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ1ZiLHNFQUFBLENBQUNJLFNBQVMsRUFBQVUsYUFBQSxLQUFLUCxTQUFTO1FBQUFHLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUFHLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDZDtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNGLENBQUM7QUFFbEI7QUFBQ0UsRUFBQSxHQVh1QmIsS0FBSztBQUFBLElBQUFhLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhY2hlUHJvdmlkZXIsIEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCAnQC9zdHlsZXMvZGVzdHlsZS5jc3MnO1xuaW1wb3J0IEN1cnJlbnRVc2VyRmV0Y2ggZnJvbSAnQC9jb21wb25lbnRzL0N1cnJlbnRVc2VyRmV0Y2gnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICdAL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcblxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXG5pbnRlcmZhY2UgTXlBcHBQcm9wcyBleHRlbmRzIEFwcFByb3BzIHtcblx0ZW1vdGlvbkNhY2hlPzogRW1vdGlvbkNhY2hlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wczogTXlBcHBQcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0PC9DYWNoZVByb3ZpZGVyPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkNhY2hlUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJIZWFkZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJ0aGVtZSIsImpzeERFViIsIl9qc3hERVYiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsIl9wcm9wcyRlbW90aW9uQ2FjaGUiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX29iamVjdFNwcmVhZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});