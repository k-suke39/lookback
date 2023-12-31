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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/createEmotionCache */ \"./src/styles/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/pages/_document.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/* eslint-disable @typescript-eslint/no-explicit-any */\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  render() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"ja\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n          name: \"theme-color\",\n          content: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 6\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 5\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"body\", {\n        className: \"px-4 py-10 bg-gray-50 bg-[url('/grid.svg')]\",\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this);\n  }\n}\n\n// `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with static-site generation (SSG).\nMyDocument.getInitialProps = async ctx => {\n  // Resolution order\n  //\n  // On the server:\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. document.getInitialProps\n  // 4. app.render\n  // 5. page.render\n  // 6. document.render\n  //\n  // On the server with error:\n  // 1. document.getInitialProps\n  // 2. app.render\n  // 3. page.render\n  // 4. document.render\n  //\n  // On the client\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. app.render\n  // 4. page.render\n\n  const originalRenderPage = ctx.renderPage;\n\n  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.\n  // However, be aware that it can have global side effects.\n  const cache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const {\n    extractCriticalToChunks\n  } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cache);\n  ctx.renderPage = () => originalRenderPage({\n    enhanceApp: App =>\n    // eslint-disable-next-line react/display-name\n    props => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(App, _objectSpread({\n      emotionCache: cache\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 29\n    }, undefined)\n  });\n  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n  // This is important. It prevents emotion to render invalid HTML.\n  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153\n  const emotionStyles = extractCriticalToChunks(initialProps.html);\n  const emotionStyleTags = emotionStyles.styles.map(style => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"style\", {\n    \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n    // eslint-disable-next-line react/no-danger\n    dangerouslySetInnerHTML: {\n      __html: style.css\n    }\n  }, style.key, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 3\n  }, undefined));\n  return _objectSpread(_objectSpread({}, initialProps), {}, {\n    // Styles fragment is rendered after the app and page rendering finish.\n    styles: [...react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(initialProps.styles), ...emotionStyleTags]\n  });\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxFQUFFTCxLQUFLLENBQUNNO0lBQUk7RUFBRSxHQUYxQ04sS0FBSyxDQUFDQyxHQUFHO0lBQUF6QixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFHZCxDQUNELENBQUM7RUFFRixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDSUUsWUFBWTtJQUNmO0lBQ0FJLE1BQU0sRUFBRSxDQUNQLEdBQUdwQywyQ0FBYyxDQUFDOEMsT0FBTyxDQUFDZCxZQUFZLENBQUNJLE1BQU0sQ0FBQyxFQUM5QyxHQUFHRCxnQkFBZ0I7RUFDbkI7QUFFSCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeD8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnO1xuaW1wb3J0IHsgUmVuZGVyUGFnZVJlc3VsdCB9IGZyb20gJ25leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzJztcbmltcG9ydCBEb2N1bWVudCwge1xuXHRIdG1sLFxuXHRIZWFkLFxuXHRNYWluLFxuXHROZXh0U2NyaXB0LFxuXHREb2N1bWVudEluaXRpYWxQcm9wcyxcbn0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnQC9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlJztcbmltcG9ydCB0aGVtZSBmcm9tICdAL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG5cdHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxIdG1sIGxhbmc9XCJqYVwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHR7LyogUFdBIHByaW1hcnkgY29sb3IgKi99XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8Ym9keSBjbGFzc05hbWU9XCJweC00IHB5LTEwIGJnLWdyYXktNTAgYmctW3VybCgnL2dyaWQuc3ZnJyldXCI+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHQ8TmV4dFNjcmlwdCAvPlxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L0h0bWw+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBgZ2V0SW5pdGlhbFByb3BzYCBiZWxvbmdzIHRvIGBfZG9jdW1lbnRgIChpbnN0ZWFkIG9mIGBfYXBwYCksXG4vLyBpdCdzIGNvbXBhdGlibGUgd2l0aCBzdGF0aWMtc2l0ZSBnZW5lcmF0aW9uIChTU0cpLlxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4gPT4ge1xuXHQvLyBSZXNvbHV0aW9uIG9yZGVyXG5cdC8vXG5cdC8vIE9uIHRoZSBzZXJ2ZXI6XG5cdC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcblx0Ly8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcblx0Ly8gMy4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG5cdC8vIDQuIGFwcC5yZW5kZXJcblx0Ly8gNS4gcGFnZS5yZW5kZXJcblx0Ly8gNi4gZG9jdW1lbnQucmVuZGVyXG5cdC8vXG5cdC8vIE9uIHRoZSBzZXJ2ZXIgd2l0aCBlcnJvcjpcblx0Ly8gMS4gZG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzXG5cdC8vIDIuIGFwcC5yZW5kZXJcblx0Ly8gMy4gcGFnZS5yZW5kZXJcblx0Ly8gNC4gZG9jdW1lbnQucmVuZGVyXG5cdC8vXG5cdC8vIE9uIHRoZSBjbGllbnRcblx0Ly8gMS4gYXBwLmdldEluaXRpYWxQcm9wc1xuXHQvLyAyLiBwYWdlLmdldEluaXRpYWxQcm9wc1xuXHQvLyAzLiBhcHAucmVuZGVyXG5cdC8vIDQuIHBhZ2UucmVuZGVyXG5cblx0Y29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cblx0Ly8gWW91IGNhbiBjb25zaWRlciBzaGFyaW5nIHRoZSBzYW1lIGVtb3Rpb24gY2FjaGUgYmV0d2VlbiBhbGwgdGhlIFNTUiByZXF1ZXN0cyB0byBzcGVlZCB1cCBwZXJmb3JtYW5jZS5cblx0Ly8gSG93ZXZlciwgYmUgYXdhcmUgdGhhdCBpdCBjYW4gaGF2ZSBnbG9iYWwgc2lkZSBlZmZlY3RzLlxuXHRjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xuXHRjb25zdCB7IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIH0gPSBjcmVhdGVFbW90aW9uU2VydmVyKGNhY2hlKTtcblxuXHRjdHgucmVuZGVyUGFnZSA9ICgpOiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PiA9PlxuXHRcdG9yaWdpbmFsUmVuZGVyUGFnZSh7XG5cdFx0XHRlbmhhbmNlQXBwOlxuXHRcdFx0XHQoQXBwOiBhbnkpID0+XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcblx0XHRcdFx0KHByb3BzKTogSlNYLkVsZW1lbnQgPT4gPEFwcCBlbW90aW9uQ2FjaGU9e2NhY2hlfSB7Li4ucHJvcHN9IC8+LFxuXHRcdH0pO1xuXG5cdGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXHQvLyBUaGlzIGlzIGltcG9ydGFudC4gSXQgcHJldmVudHMgZW1vdGlvbiB0byByZW5kZXIgaW52YWxpZCBIVE1MLlxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvaXNzdWVzLzI2NTYxI2lzc3VlY29tbWVudC04NTUyODYxNTNcblx0Y29uc3QgZW1vdGlvblN0eWxlcyA9IGV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzKGluaXRpYWxQcm9wcy5odG1sKTtcblx0Y29uc3QgZW1vdGlvblN0eWxlVGFncyA9IGVtb3Rpb25TdHlsZXMuc3R5bGVzLm1hcCgoc3R5bGUpID0+IChcblx0XHQ8c3R5bGVcblx0XHRcdGRhdGEtZW1vdGlvbj17YCR7c3R5bGUua2V5fSAke3N0eWxlLmlkcy5qb2luKCcgJyl9YH1cblx0XHRcdGtleT17c3R5bGUua2V5fVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZS5jc3MgfX1cblx0XHQvPlxuXHQpKTtcblxuXHRyZXR1cm4ge1xuXHRcdC4uLmluaXRpYWxQcm9wcyxcblx0XHQvLyBTdHlsZXMgZnJhZ21lbnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGFwcCBhbmQgcGFnZSByZW5kZXJpbmcgZmluaXNoLlxuXHRcdHN0eWxlczogW1xuXHRcdFx0Li4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSxcblx0XHRcdC4uLmVtb3Rpb25TdHlsZVRhZ3MsXG5cdFx0XSxcblx0fTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlRW1vdGlvblNlcnZlciIsIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlJlYWN0IiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwidGhlbWUiLCJqc3hERVYiLCJfanN4REVWIiwiTXlEb2N1bWVudCIsInJlbmRlciIsImxhbmciLCJjaGlsZHJlbiIsIm5hbWUiLCJjb250ZW50IiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJjYWNoZSIsImV4dHJhY3RDcml0aWNhbFRvQ2h1bmtzIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiX29iamVjdFNwcmVhZCIsImVtb3Rpb25DYWNoZSIsImluaXRpYWxQcm9wcyIsImVtb3Rpb25TdHlsZXMiLCJodG1sIiwiZW1vdGlvblN0eWxlVGFncyIsInN0eWxlcyIsIm1hcCIsInN0eWxlIiwia2V5IiwiaWRzIiwiam9pbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3NzIiwiQ2hpbGRyZW4iLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "./src/styles/createEmotionCache.ts":
/*!******************************************!*\
  !*** ./src/styles/createEmotionCache.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n  return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: 'css'\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUUzQyxTQUFTQyxrQkFBa0JBLENBQUEsRUFBaUI7RUFDekQsT0FBT0QsMERBQVcsQ0FBQztJQUFFRSxHQUFHLEVBQUU7RUFBTSxDQUFDLENBQUM7QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzBlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlLCB7IEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKTogRW1vdGlvbkNhY2hlIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n  palette: {\n    primary: {\n      main: '#3EA8FF'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.red.A400\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1E7QUFFbEQsTUFBTUUsS0FBSyxHQUFHRCxpRUFBVyxDQUFDO0VBQ3hCRSxPQUFPLEVBQUU7SUFDUEMsT0FBTyxFQUFFO01BQ1BDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDREMsU0FBUyxFQUFFO01BQ1RELElBQUksRUFBRTtJQUNSLENBQUM7SUFDREUsS0FBSyxFQUFFO01BQ0xGLElBQUksRUFBRUwscURBQUcsQ0FBQ1E7SUFDWjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjM0VBOEZGJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMxOTg1N2InLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sIm5hbWVzIjpbInJlZCIsImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIkE0MDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();