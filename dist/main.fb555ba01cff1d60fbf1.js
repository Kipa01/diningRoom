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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _models_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/select */ \"./js/models/select.js\");\n/* harmony import */ var _models_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_select__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_menuOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/menuOpen */ \"./js/models/menuOpen.js\");\n/* harmony import */ var _models_menuOpen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_menuOpen__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper-bundle.min.js */ \"../node_modules/swiper/swiper-bundle.min.js\");\n/* harmony import */ var swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ \"../node_modules/swiper/swiper-bundle.min.css\");\n\n\n\n\n\nvar body = document.querySelector('body');\nvar headerEmail = document.querySelector('.top-header__link--email');\nvar headerPhone = document.querySelector('.drop-top-header').closest('li');\nvar headerDrop = document.querySelector('.drop-top-header');\nvar headerDropClose = document.querySelector('.drop-top-header__close');\nvar headerEmailCopy = document.querySelector('.top-header__link--email div');\nvar headerSearchInput = document.querySelector('.search__field input');\nvar headerSearchResults = document.querySelector('.search__results');\nvar bottomHeaderItems = document.querySelectorAll('.bottom-header__item');\nvar bottomHeaderDrops = document.querySelectorAll('.drop-bottom-header');\nvar burger = document.querySelector('.burger');\nvar headerTop = document.querySelector('.top-header');\nburger.addEventListener('click', function () {\n  if (headerTop.classList.contains('show')) {\n    headerTop.classList.remove('show');\n    burger.classList.remove('active');\n  } else {\n    headerTop.classList.add('show');\n    burger.classList.add('active');\n  }\n});\nheaderEmail.addEventListener('click', function () {\n  if (headerEmailCopy.classList.contains('show')) {\n    headerEmailCopy.classList.remove('show');\n    headerEmail.closest('li').classList.remove('active');\n  } else {\n    headerEmailCopy.classList.add('show');\n    headerEmail.closest('li').classList.add('active');\n  }\n});\nheaderPhone.addEventListener('mouseenter', function () {\n  body.classList.add('lock');\n  headerDrop.classList.add('show');\n});\nheaderPhone.addEventListener('mouseleave', function () {\n  body.classList.remove('lock');\n  headerDrop.classList.remove('show');\n});\nheaderDropClose.addEventListener('click', function () {\n  body.classList.remove('lock');\n  headerDrop.classList.remove('show');\n});\nheaderSearchInput.addEventListener('input', function () {\n  headerSearchResults.classList.add('show');\n});\nheaderSearchInput.addEventListener('blur', function () {\n  headerSearchResults.classList.remove('show');\n});\nheaderSearchInput.addEventListener('focus', function () {\n  if (headerSearchInput.value.length !== 0) {\n    headerSearchResults.classList.add('show');\n  }\n});\nbottomHeaderItems.forEach(function (e) {\n  e.addEventListener(\"click\", function (el) {\n    var eDrop = e.querySelector('.drop-bottom-header');\n    var flag = false;\n    bottomHeaderDrops.forEach(function (e) {\n      if (e.classList.contains('show')) {\n        flag = true;\n      }\n    });\n\n    if (flag && !eDrop.classList.contains('show')) {\n      bottomHeaderDrops.forEach(function (e) {\n        e.classList.remove('show');\n        eDrop.classList.add('show');\n      });\n    } else if (eDrop.classList.contains('show') && (el.target.classList.contains('bottom-header__image') || el.target.classList.contains('bottom-header__name') || el.target.closest('.bottom-header__image'))) {\n      eDrop.classList.remove('show');\n      body.classList.remove('bottom-lock');\n    } else {\n      eDrop.classList.add('show');\n      body.classList.add('bottom-lock');\n    }\n  });\n});\nnew (swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_4___default())('.main-slider', {\n  loop: true,\n  effect: 'fade',\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  autoplay: {\n    delay: 6000,\n    disableOnInteraction: false\n  }\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/models/menuOpen.js":
/*!*******************************!*\
  !*** ./js/models/menuOpen.js ***!
  \*******************************/
/***/ (() => {

eval("//let toggleContent = document.querySelectorAll('.toggle-content'); // контент, который будет скрываться-раскрываться\nvar togglerContent = document.querySelectorAll('.toggler'); // toggler - кнопка, при нажатии на которую будет скрываться-раскрываться контент\n\ntogglerContent.forEach(function (e) {\n  e.addEventListener('click', function (event) {\n    var toggleContent = e.nextSibling.nextSibling;\n    console.log(toggleContent);\n\n    if (!toggleContent.classList.contains('show')) {\n      toggleContent.classList.add('show');\n      e.classList.add('toggled');\n      toggleContent.style.height = 'auto';\n      var height = toggleContent.clientHeight + 'px';\n      toggleContent.style.height = '0px';\n      setTimeout(function () {\n        toggleContent.style.height = height;\n      }, 0);\n    } else {\n      toggleContent.style.height = '0px';\n      e.classList.remove('toggled');\n      toggleContent.addEventListener('transitionend', function () {\n        toggleContent.classList.remove('show');\n      }, {\n        once: true\n      });\n    }\n  });\n}); // togglerContent.addEventListener('click', (event) => {\n//     if (!toggleContent.classList.contains('show')) {\n//         toggleContent.classList.add('show');\n//         togglerContent.classList.add('toggled');\n//         toggleContent.style.height = 'auto';\n//         let height = toggleContent.clientHeight + 'px';\n//         toggleContent.style.height = '0px';\n//         setTimeout(function () {\n//             toggleContent.style.height = height;\n//         }, 0);\n//     } else {\n//         toggleContent.style.height = '0px';\n//         togglerContent.classList.remove('toggled');\n//         toggleContent.addEventListener('transitionend', () => {\n//             toggleContent.classList.remove('show');\n//         }, {once: true});\n//     }\n// });\n\n//# sourceURL=webpack:///./js/models/menuOpen.js?");

/***/ }),

/***/ "./js/models/select.js":
/*!*****************************!*\
  !*** ./js/models/select.js ***!
  \*****************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar getTemplate = function getTemplate() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var placeholder = arguments.length > 1 ? arguments[1] : undefined;\n  var items = data.map(function (item) {\n    return \"\\n\\t\\t\\t<li class=\\\"select__item\\\" data-type=\\\"item\\\" data-id=\\\"\".concat(item.id, \"\\\">\").concat(item.value, \"</li>\\n\\t\\t\");\n  });\n  return \"\\n\\t\\t<div class=\\\"select__backdrop\\\" data-type=\\\"backdrop\\\"></div>\\n\\t\\t<div class=\\\"select__input\\\" data-type=\\\"input\\\">\\n\\t\\t\\t<span data-type=\\\"value\\\">\".concat(placeholder, \"</span>\\n\\t\\t\\t<i class=\\\"fa fa-chevron-down\\\" data-type=\\\"arrow\\\"></i>\\n\\t\\t</div>\\n\\t\\t<div class=\\\"select__dropdown\\\">\\n\\t\\t    <div class=\\\"select__placeholder\\\">\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u043A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044E:</div>\\n\\t\\t\\t<ul class=\\\"select__list\\\">\\n\\t\\t\\t\\t\").concat(items.join(''), \"\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t\");\n};\n\nvar Select = /*#__PURE__*/function () {\n  function Select(selector, options) {\n    _classCallCheck(this, Select);\n\n    this.$el = document.querySelector(selector);\n\n    if (this.$el) {\n      this.options = options;\n      this.render();\n      this.setup();\n      this.selectedId = null;\n    }\n  }\n\n  _createClass(Select, [{\n    key: \"render\",\n    value: function render() {\n      var _this$options = this.options,\n          placeholder = _this$options.placeholder,\n          data = _this$options.data;\n      this.$el.classList.add('select');\n      this.$el.innerHTML = getTemplate(data, placeholder);\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.clickHandler = this.clickHandler.bind(this);\n      this.$el.addEventListener('click', this.clickHandler);\n      this.$arrow = this.$el.querySelector('[data-type=\"arrow\"]');\n      this.$value = this.$el.querySelector('[data-type=\"value\"]');\n    }\n  }, {\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var type = event.target.dataset.type;\n\n      if (type === 'input') {\n        this.toggle();\n      } else if (type === 'item') {\n        var id = event.target.dataset.id;\n        this.select(id);\n      } else if (type === 'backdrop') {\n        this.close();\n      }\n    }\n  }, {\n    key: \"isOpen\",\n    get: function get() {\n      return this.$el.classList.contains('open');\n    }\n  }, {\n    key: \"current\",\n    get: function get() {\n      var _this = this;\n\n      return this.options.data.find(function (item) {\n        return item.id === _this.selectedId;\n      });\n    }\n  }, {\n    key: \"select\",\n    value: function select(id) {\n      this.selectedId = id;\n      this.$value.textContent = this.current.value;\n      this.$el.querySelectorAll('[data-type=\"item\"]').forEach(function (element) {\n        element.classList.remove('selected');\n      });\n      this.$el.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\")).classList.add('selected');\n      this.close();\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this.isOpen ? this.close() : this.open();\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.$el.classList.add('open');\n      this.$arrow.classList.remove('fa-chevron-down');\n      this.$arrow.classList.add('fa-chevron-up');\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.$el.classList.remove('open');\n      this.$arrow.classList.add('fa-chevron-down');\n      this.$arrow.classList.remove('fa-chevron-up');\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.$el.removeEventListener('click', this.clickHandler);\n    }\n  }]);\n\n  return Select;\n}();\n\nvar select = new Select('#select', {\n  placeholder: 'Все',\n  data: [{\n    id: '1',\n    value: 'Тепловое'\n  }, {\n    id: '2',\n    value: 'Холодильное'\n  }, {\n    id: '3',\n    value: 'Электромеханическое'\n  }, {\n    id: '4',\n    value: 'Посудомоечное'\n  }, {\n    id: '5',\n    value: 'Барное'\n  }, {\n    id: '6',\n    value: 'Хлебопекарное'\n  }, {\n    id: '7',\n    value: 'Линии раздачи'\n  }, {\n    id: '8',\n    value: 'Нейтральное'\n  }, {\n    id: '9',\n    value: 'Для фаст фуда'\n  }, {\n    id: '10',\n    value: 'Для залов'\n  }, {\n    id: '11',\n    value: 'Весовое'\n  }]\n});\n\n//# sourceURL=webpack:///./js/models/select.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper-bundle_min_css-no-2de6e9"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper-bundle_min_css-no-2de6e9"], () => (__webpack_require__("./js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;