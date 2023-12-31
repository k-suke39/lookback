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

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/Header.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar, {\n    position: \"static\",\n    sx: {\n      backgroundColor: 'transparent',\n      color: 'black',\n      boxShadow: 'none',\n      py: '12px'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: \"Lookback\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, _this), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: \"/sign_in\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                color: \"primary\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  boxShadow: 'none'\n                },\n                children: \"Sign in\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 11\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 10\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n              color: \"inherit\",\n              variant: \"outlined\",\n              type: \"submit\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                boxShadow: 'none',\n                border: '1px solid',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 10\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 9\n          }, _this), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 28\n          }, _this)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n_s(Header, \"UKrGTS+2tpbFdkCrn7luqsvYRv8=\", false, function () {\n  return [_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__.useUserState];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDTCxDQUNMLEVBQ0FsQixJQUFJLENBQUNvQixVQUFVLElBQUk1QixzRUFBQSxDQUFDTiw4Q0FBRztZQUFBcUIsUUFBQSxFQUFFUCxJQUFJLENBQUM0QjtVQUFJO1lBQUFkLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFNLENBQUM7UUFBQSxlQUN6QyxDQUNGO01BQUE7UUFBQUosUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ0c7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDSTtFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNMLENBQUM7QUFFWCxDQUFDO0FBQUN0QixFQUFBLENBakVJRCxNQUFNO0VBQUEsUUFDSUwsK0RBQVk7QUFBQTtBQUFBdUMsRUFBQSxHQUR0QmxDLE1BQU07QUFtRVosK0RBQWVBLE1BQU0sRUFBQztBQUFBLElBQUFrQyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4P2E2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBbdXNlcl0gPSB1c2VVc2VyU3RhdGUoKTtcblx0cmV0dXJuIChcblx0XHQ8QXBwQmFyXG5cdFx0XHRwb3NpdGlvbj1cInN0YXRpY1wiXG5cdFx0XHRzeD17e1xuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdGNvbG9yOiAnYmxhY2snLFxuXHRcdFx0XHRib3hTaGFkb3c6ICdub25lJyxcblx0XHRcdFx0cHk6ICcxMnB4Jyxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3g9e3sgcHg6IDIgfX0+XG5cdFx0XHRcdDxCb3hcblx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcblx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5Mb29rYmFjazwvTGluaz5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHR7dXNlci5pc0ZldGNoZWQgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0eyF1c2VyLmlzU2lnbmVkSW4gJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxCb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NpZ25faW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3g9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IDE2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym94U2hhZG93OiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpZ24gaW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPVwiaW5oZXJpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRUcmFuc2Zvcm06ICdub25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogMTYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym94U2hhZG93OiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtbDogMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHt1c2VyLmlzU2lnbmVkSW4gJiYgPEJveD57dXNlci5uYW1lfTwvQm94Pn1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQm94PlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9BcHBCYXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiTGluayIsInVzZVVzZXJTdGF0ZSIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkhlYWRlciIsIl9zIiwiX3VzZVVzZXJTdGF0ZSIsIl91c2VVc2VyU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyIiwicG9zaXRpb24iLCJzeCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93IiwicHkiLCJjaGlsZHJlbiIsIm1heFdpZHRoIiwicHgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaHJlZiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiaXNGZXRjaGVkIiwiaXNTaWduZWRJbiIsInZhcmlhbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJ0eXBlIiwiYm9yZGVyIiwibWwiLCJuYW1lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});