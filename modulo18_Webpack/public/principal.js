/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/estilo.css"
/*!*******************************!*\
  !*** ./src/assets/estilo.css ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://modulo18_webpack/./src/assets/estilo.css?\n}");

/***/ },

/***/ "./src/modulos/moduloA.js"
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\n// import moduloB from \"./moduloB\";\n\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack://modulo18_webpack/./src/modulos/moduloA.js?\n}");

/***/ },

/***/ "./src/modulos/moduloB.js"
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
(module) {

eval("{module.exports = {\n    saudacao() {\n        return 'Olá, seja bem vindo ao curso de Webpack'\n    }\n}\n\n//# sourceURL=webpack://modulo18_webpack/./src/modulos/moduloB.js?\n}");

/***/ },

/***/ "./src/pessoa.js"
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
(module) {

eval("{// export default \nmodule.exports = class Pessoa {\n    cumprimentar(){\n        return 'Boa  noite'\n    }\n}\n\n//# sourceURL=webpack://modulo18_webpack/./src/pessoa.js?\n}");

/***/ },

/***/ "./src/principal.js"
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/estilo.css */ \"./src/assets/estilo.css\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_1__);\nconst Pessoa = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n// import Pessoa  from \"./pessoa\";\n\n\n\nconst atendente = new Pessoa;\nconsole.log(atendente.cumprimentar())\n\n\n//# sourceURL=webpack://modulo18_webpack/./src/principal.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/principal.js");
/******/ 	
/******/ })()
;