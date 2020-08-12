/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/making-stuffs-queries/making-stuffs-queries.js":
/*!*********************************************************************!*\
  !*** ./node_modules/making-stuffs-queries/making-stuffs-queries.js ***!
  \*********************************************************************/
/*! exports provided: msQuery, msQueryAll, msCreate, msAppend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msQuery", function() { return msQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msQueryAll", function() { return msQueryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msCreate", function() { return msCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msAppend", function() { return msAppend; });

/**
 * Function to return the first element matching the specified selector, within a specified element.
 * If no element is provided it will default to document.
 * @param selector 
 * @param elem 
 * @returns HTML node or null if nothing is found.
 */

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var msQuery = function msQuery() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
  var elem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var element = elem.querySelector(selector);
  return element ? element : null;
};
/**
 * Function to return all elements matching the specified selector within a specified element.
 * Default behaviour returns all a elements within the document element.
 * @param selector 
 * @param elem 
 * @returns HTML node list or null if nothing is found.
 */

var msQueryAll = function msQueryAll() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';
  var elem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var nodeList = elem.querySelectorAll(selector);
  return nodeList[0] ? nodeList : null;
};
/**
 * Function to create a new HTML Element according to the provided string.
 * If no elem parameter is provided it will default to a div container.
 * If the elem parameter is provided but is not of the type string returns null.
 * If the params parameter is not of the true object type it will be ignored
 * If the innerHTML object key is provided the newly created element's innerHTML will be set
 * If a param key is provided with an underscore it will be converted to a hyphen
 * 
 * @param elem 
 * @param params 
 * @returns Newly created HTML node
 */

var msCreate = function msCreate() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (elem && typeof elem !== 'string') return;
  var elemType = !elem ? 'div' : elem;
  var newElem = document.createElement(elemType); // Ensure the params parameter is a true object and not an array or a falsey object

  if (_typeof(params) === 'object' && !!params && !Array.isArray(params)) {
    var attributes = Object.keys(params);

    for (var i = 0; i < attributes.length; i++) {
      if (attributes[i] === 'innerHTML') {
        newElem.innerHTML = params[attributes[i]];
      } else {
        var attr = attributes[i].replace('_', '-');
        newElem.setAttribute(attr, params[attributes[i]]);
      }
    }
  }

  return newElem;
};
/**
 * Function to append the element(s) passed as the children parameter to the element passed
 * as the parent parameter.
 * If children parameter is empty or it is not one of the types HTML element or Array the 
 * function will return.
 * If the parent parameter is not of the type HTML Element the function will return.
 * If no parameter is provided for the parent the children will be appended to the document body.
 * If children is an array and it contains an index which is not of the type HTML Element it will 
 * be skipped.
 * Function always returns undefined.
 * @param children 
 * @param parent 
 * @returns undefined;
 */

var msAppend = function msAppend() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  if (!children) return;
  if (!children instanceof HTMLElement && !Array.isArray(children)) return;
  if (parent && !parent instanceof HTMLElement) return;

  if (Array.isArray(children)) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        if (child instanceof HTMLElement) {
          parent.append(child);
        } else {
          continue;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (parent.childElementCount === 0) return;
  } else {
    parent.appendChild(children);
  }
};

/***/ }),

/***/ "./src/js/drawer-menus.js":
/*!********************************!*\
  !*** ./src/js/drawer-menus.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ "./node_modules/making-stuffs-queries/making-stuffs-queries.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



(function () {
  var buttons = [].concat(_toConsumableArray(Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__["msQueryAll"])(".stuffs-drawer-menu__button")), _toConsumableArray(Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__["msQueryAll"])(".stuffs-drawer-menu__close")));
  var menus = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__["msQueryAll"])(".stuffs-drawer-menu");

  function toggle() {
    var _this = this;

    var associatedMenu = Array.from(menus).find(function (menu) {
      return menu.id === _this.getAttribute("aria-controls");
    });

    if (associatedMenu.getAttribute("aria-expanded") === "true") {
      associatedMenu.setAttribute("aria-expanded", "false");
      associatedMenu.blur();
      this.blur();
    } else {
      associatedMenu.setAttribute("aria-expanded", "true");
      associatedMenu.focus();
      this.blur();
    }
  }

  buttons.forEach(function (button) {
    return button.addEventListener("click", toggle);
  });
})();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ "./src/sass/woocommerce.scss":
/*!***********************************!*\
  !*** ./src/sass/woocommerce.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./src/js/drawer-menus.js ./src/sass/style.scss ./src/sass/woocommerce.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/drawer-menus.js */"./src/js/drawer-menus.js");
__webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");
module.exports = __webpack_require__(/*! ./src/sass/woocommerce.scss */"./src/sass/woocommerce.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21ha2luZy1zdHVmZnMtcXVlcmllcy9tYWtpbmctc3R1ZmZzLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RyYXdlci1tZW51cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzP2EzZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvd29vY29tbWVyY2Uuc2Nzcz8yNzQ5Il0sIm5hbWVzIjpbIm1zUXVlcnkiLCJzZWxlY3RvciIsImVsZW0iLCJkb2N1bWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXNRdWVyeUFsbCIsIm5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsIm1zQ3JlYXRlIiwicGFyYW1zIiwiZWxlbVR5cGUiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsImF0dHIiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlIiwibXNBcHBlbmQiLCJjaGlsZHJlbiIsInBhcmVudCIsImJvZHkiLCJIVE1MRWxlbWVudCIsImNoaWxkIiwiYXBwZW5kIiwiY2hpbGRFbGVtZW50Q291bnQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbnMiLCJtZW51cyIsInRvZ2dsZSIsImFzc29jaWF0ZWRNZW51IiwiZnJvbSIsImZpbmQiLCJtZW51IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJibHVyIiwiZm9jdXMiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7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LElBQUksQ0FBQ0MsRUFBTCxLQUFZLEtBQUksQ0FBQ0MsWUFBTCxDQUFrQixlQUFsQixDQUF0QjtBQUFBLEtBRHFCLENBQXZCOztBQUdBLFFBQUtMLGNBQWMsQ0FBQ0ssWUFBZixDQUE0QixlQUE1QixNQUFpRCxNQUF0RCxFQUErRDtBQUM3REwsb0JBQWMsQ0FBQ2IsWUFBZixDQUE0QixlQUE1QixFQUE2QyxPQUE3QztBQUNBYSxvQkFBYyxDQUFDTSxJQUFmO0FBQ0EsV0FBS0EsSUFBTDtBQUNELEtBSkQsTUFJTztBQUNMTixvQkFBYyxDQUFDYixZQUFmLENBQTRCLGVBQTVCLEVBQTZDLE1BQTdDO0FBQ0FhLG9CQUFjLENBQUNPLEtBQWY7QUFDQSxXQUFLRCxJQUFMO0FBQ0Q7QUFDRjs7QUFFRFQsU0FBTyxDQUFDVyxPQUFSLENBQWdCLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDWCxNQUFqQyxDQUFaO0FBQUEsR0FBaEI7QUFDRCxDQXZCRCxJOzs7Ozs7Ozs7OztBQ0RBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEIiwiZmlsZSI6ImZyb250ZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLCB3aXRoaW4gYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIElmIG5vIGVsZW1lbnQgaXMgcHJvdmlkZWQgaXQgd2lsbCBkZWZhdWx0IHRvIGRvY3VtZW50LlxuICogQHBhcmFtIHNlbGVjdG9yIFxuICogQHBhcmFtIGVsZW0gXG4gKiBAcmV0dXJucyBIVE1MIG5vZGUgb3IgbnVsbCBpZiBub3RoaW5nIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgbXNRdWVyeSA9IChzZWxlY3RvciA9ICdib2R5JywgZWxlbSA9IGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50IDogbnVsbDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byByZXR1cm4gYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3Igd2l0aGluIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKiBEZWZhdWx0IGJlaGF2aW91ciByZXR1cm5zIGFsbCBhIGVsZW1lbnRzIHdpdGhpbiB0aGUgZG9jdW1lbnQgZWxlbWVudC5cbiAqIEBwYXJhbSBzZWxlY3RvciBcbiAqIEBwYXJhbSBlbGVtIFxuICogQHJldHVybnMgSFRNTCBub2RlIGxpc3Qgb3IgbnVsbCBpZiBub3RoaW5nIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgbXNRdWVyeUFsbCA9IChzZWxlY3RvciA9ICdhJywgZWxlbSA9IGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9kZUxpc3QgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgcmV0dXJuIG5vZGVMaXN0WzBdID8gbm9kZUxpc3QgOiBudWxsO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBIVE1MIEVsZW1lbnQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gKiBJZiBubyBlbGVtIHBhcmFtZXRlciBpcyBwcm92aWRlZCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBkaXYgY29udGFpbmVyLlxuICogSWYgdGhlIGVsZW0gcGFyYW1ldGVyIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3Qgb2YgdGhlIHR5cGUgc3RyaW5nIHJldHVybnMgbnVsbC5cbiAqIElmIHRoZSBwYXJhbXMgcGFyYW1ldGVyIGlzIG5vdCBvZiB0aGUgdHJ1ZSBvYmplY3QgdHlwZSBpdCB3aWxsIGJlIGlnbm9yZWRcbiAqIElmIHRoZSBpbm5lckhUTUwgb2JqZWN0IGtleSBpcyBwcm92aWRlZCB0aGUgbmV3bHkgY3JlYXRlZCBlbGVtZW50J3MgaW5uZXJIVE1MIHdpbGwgYmUgc2V0XG4gKiBJZiBhIHBhcmFtIGtleSBpcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVyc2NvcmUgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBoeXBoZW5cbiAqIFxuICogQHBhcmFtIGVsZW0gXG4gKiBAcGFyYW0gcGFyYW1zIFxuICogQHJldHVybnMgTmV3bHkgY3JlYXRlZCBIVE1MIG5vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1zQ3JlYXRlID0gKGVsZW0gPSAnZGl2JywgcGFyYW1zID0gbnVsbCkgPT4ge1xuXG4gICAgaWYoZWxlbSAmJiB0eXBlb2YgZWxlbSAhPT0gJ3N0cmluZycpIHJldHVybjtcblxuICAgIGNvbnN0IGVsZW1UeXBlID0gIWVsZW0gPyAnZGl2JyA6IGVsZW07XG5cbiAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtVHlwZSk7XG5cbiAgICAvLyBFbnN1cmUgdGhlIHBhcmFtcyBwYXJhbWV0ZXIgaXMgYSB0cnVlIG9iamVjdCBhbmQgbm90IGFuIGFycmF5IG9yIGEgZmFsc2V5IG9iamVjdFxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyAmJiAhIXBhcmFtcyAmJiAhQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzW2ldID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW0uaW5uZXJIVE1MID0gcGFyYW1zW2F0dHJpYnV0ZXNbaV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlc1tpXS5yZXBsYWNlKCdfJywgJy0nKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShhdHRyLCBwYXJhbXNbYXR0cmlidXRlc1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW07XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYXBwZW5kIHRoZSBlbGVtZW50KHMpIHBhc3NlZCBhcyB0aGUgY2hpbGRyZW4gcGFyYW1ldGVyIHRvIHRoZSBlbGVtZW50IHBhc3NlZFxuICogYXMgdGhlIHBhcmVudCBwYXJhbWV0ZXIuXG4gKiBJZiBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgZW1wdHkgb3IgaXQgaXMgbm90IG9uZSBvZiB0aGUgdHlwZXMgSFRNTCBlbGVtZW50IG9yIEFycmF5IHRoZSBcbiAqIGZ1bmN0aW9uIHdpbGwgcmV0dXJuLlxuICogSWYgdGhlIHBhcmVudCBwYXJhbWV0ZXIgaXMgbm90IG9mIHRoZSB0eXBlIEhUTUwgRWxlbWVudCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4uXG4gKiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQgZm9yIHRoZSBwYXJlbnQgdGhlIGNoaWxkcmVuIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkuXG4gKiBJZiBjaGlsZHJlbiBpcyBhbiBhcnJheSBhbmQgaXQgY29udGFpbnMgYW4gaW5kZXggd2hpY2ggaXMgbm90IG9mIHRoZSB0eXBlIEhUTUwgRWxlbWVudCBpdCB3aWxsIFxuICogYmUgc2tpcHBlZC5cbiAqIEZ1bmN0aW9uIGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSBjaGlsZHJlbiBcbiAqIEBwYXJhbSBwYXJlbnQgXG4gKiBAcmV0dXJucyB1bmRlZmluZWQ7XG4gKi9cblxuZXhwb3J0IGNvbnN0IG1zQXBwZW5kID0gKGNoaWxkcmVuID0gbnVsbCwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkgPT4ge1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybjtcbiAgICBpZiAoIWNoaWxkcmVuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSByZXR1cm47XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBtc1F1ZXJ5QWxsIH0gZnJvbSBcIm1ha2luZy1zdHVmZnMtcXVlcmllc1wiO1xuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnV0dG9ucyA9IFtcbiAgICAuLi5tc1F1ZXJ5QWxsKFwiLnN0dWZmcy1kcmF3ZXItbWVudV9fYnV0dG9uXCIpLFxuICAgIC4uLm1zUXVlcnlBbGwoXCIuc3R1ZmZzLWRyYXdlci1tZW51X19jbG9zZVwiKSxcbiAgXTtcbiAgY29uc3QgbWVudXMgPSBtc1F1ZXJ5QWxsKFwiLnN0dWZmcy1kcmF3ZXItbWVudVwiKTtcblxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgY29uc3QgYXNzb2NpYXRlZE1lbnUgPSBBcnJheS5mcm9tKG1lbnVzKS5maW5kKFxuICAgICAgKG1lbnUpID0+IG1lbnUuaWQgPT09IHRoaXMuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKVxuICAgICk7XG4gICAgaWYgKCBhc3NvY2lhdGVkTWVudS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID09PSBcInRydWVcIiApIHtcbiAgICAgIGFzc29jaWF0ZWRNZW51LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgIGFzc29jaWF0ZWRNZW51LmJsdXIoKTtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NvY2lhdGVkTWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGFzc29jaWF0ZWRNZW51LmZvY3VzKCk7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUpKTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=