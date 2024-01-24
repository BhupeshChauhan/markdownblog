/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-contentlayer";
exports.ids = ["vendor-chunks/next-contentlayer"];
exports.modules = {

/***/ "(ssr)/./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMDXComponent: () => (/* binding */ getMDXComponent),\n/* harmony export */   useMDXComponent: () => (/* binding */ useMDXComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx-runtime.cjs */ \"(ssr)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs\");\n// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503\n\n// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503\n\n// @ts-expect-error React version workaround (This CJS workaround can be removed once Contentlayer is only targeting React 18+)\n\nconst getMDXComponent = (code, globals = {}) => {\n    const scope = { React: (react__WEBPACK_IMPORTED_MODULE_0___default()), ReactDOM: (react_dom__WEBPACK_IMPORTED_MODULE_1___default()), _jsx_runtime: _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__._jsx_runtime, ...globals };\n    const fn = new Function(...Object.keys(scope), code);\n    return fn(...Object.values(scope)).default;\n};\nconst useMDXComponent = (code, globals = {}) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => getMDXComponent(code, globals), [code, globals]);\n};\n//# sourceMappingURL=useMDXComponent.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy91c2VNRFhDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQzBCO0FBQzFCO0FBQ2lDO0FBQ2pDO0FBQ2lEO0FBQzFDLDJDQUEyQztBQUNsRCxvQkFBb0IsS0FBSywwREFBVSxrRUFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDTywyQ0FBMkM7QUFDbEQsV0FBVyxvREFBYTtBQUN4QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLWJsb2ctc3RhcnRlci1jb2RlLy4vbm9kZV9tb2R1bGVzL25leHQtY29udGVudGxheWVyL2Rpc3QvaG9va3MvdXNlTURYQ29tcG9uZW50LmpzPzAzMjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTk9URSB1c2UgRVNNL0NvbW1vbkpTIGNvbXBhdCBpbXBvcnQgaGVyZSB1bnRpbCByZXNvbHZlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTUwM1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIE5PVEUgdXNlIEVTTS9Db21tb25KUyBjb21wYXQgaW1wb3J0IGhlcmUgdW50aWwgcmVzb2x2ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTE1MDNcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gQHRzLWV4cGVjdC1lcnJvciBSZWFjdCB2ZXJzaW9uIHdvcmthcm91bmQgKFRoaXMgQ0pTIHdvcmthcm91bmQgY2FuIGJlIHJlbW92ZWQgb25jZSBDb250ZW50bGF5ZXIgaXMgb25seSB0YXJnZXRpbmcgUmVhY3QgMTgrKVxuaW1wb3J0IHsgX2pzeF9ydW50aW1lIH0gZnJvbSAnLi9qc3gtcnVudGltZS5janMnO1xuZXhwb3J0IGNvbnN0IGdldE1EWENvbXBvbmVudCA9IChjb2RlLCBnbG9iYWxzID0ge30pID0+IHtcbiAgICBjb25zdCBzY29wZSA9IHsgUmVhY3QsIFJlYWN0RE9NLCBfanN4X3J1bnRpbWUsIC4uLmdsb2JhbHMgfTtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbiguLi5PYmplY3Qua2V5cyhzY29wZSksIGNvZGUpO1xuICAgIHJldHVybiBmbiguLi5PYmplY3QudmFsdWVzKHNjb3BlKSkuZGVmYXVsdDtcbn07XG5leHBvcnQgY29uc3QgdXNlTURYQ29tcG9uZW50ID0gKGNvZGUsIGdsb2JhbHMgPSB7fSkgPT4ge1xuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IGdldE1EWENvbXBvbmVudChjb2RlLCBnbG9iYWxzKSwgW2NvZGUsIGdsb2JhbHNdKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VNRFhDb21wb25lbnQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const _jsx_runtime = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/shared/react-jsx-runtime.js\")\n\nmodule.exports._jsx_runtime = _jsx_runtime\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy9qc3gtcnVudGltZS5janMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsbUlBQW1COztBQUVoRCwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wZXItYmxvZy1zdGFydGVyLWNvZGUvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy9qc3gtcnVudGltZS5janM/NWYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfanN4X3J1bnRpbWUgPSByZXF1aXJlKCdyZWFjdC9qc3gtcnVudGltZScpXG5cbm1vZHVsZS5leHBvcnRzLl9qc3hfcnVudGltZSA9IF9qc3hfcnVudGltZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs\n");

/***/ })

};
;