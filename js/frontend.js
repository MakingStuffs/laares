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

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var siteNavigationContainer = document.querySelector("#site-navigation");
  var drawerMenu = siteNavigationContainer.querySelector(".stuffs-drawer-menu");
  var menuItemContainer = drawerMenu.querySelector(".menu-primary-container");
  var menuItemList = drawerMenu.querySelector("#primary-menu-list");
  var itemsWithSubMenus = Array.from(menuItemList.querySelectorAll(".menu-item-has-children"));

  var subMenus = function () {
    var subArray = Array.from(menuItemList.querySelectorAll(".sub-menu")).map(function (menu) {
      return menu.cloneNode(true);
    });
    return subArray;
  }();

  var menuViews = [menuItemList.cloneNode(true)].concat(_toConsumableArray(subMenus));
  var header = drawerMenu.querySelector("#menu-title");
  var backButton = drawerMenu.querySelector("#menu-back-button");

  var hide = function hide(element) {
    return element.style.opacity = 0;
  };

  var reveal = function reveal(element) {
    return element.style.opacity = 1;
  };

  var getParentId = function getParentId(id) {
    var currentIdArray = id.split("-");
    currentIdArray[2] = parseInt(currentIdArray[2]) - 1;
    return currentIdArray.join("-");
  };

  var changeView = function changeView(newView) {
    hide(menuItemContainer);
    setTimeout(function () {
      menuItemContainer.querySelector("ul").remove();
      menuItemContainer.append(newView);
      reveal(menuItemContainer);
    }, 400);
  };

  var changeTextContent = function changeTextContent(element, text) {
    return element.textContent = text;
  };

  var setBackButton = function setBackButton() {
    var dataId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!dataId) {
      backButton.setAttribute("aria-hidden", "true");
      delete backButton.dataset.id;
      return;
    }

    if (backButton.getAttribute("aria-hidden") === "true") {
      backButton.setAttribute("aria-hidden", "false");
    }

    backButton.dataset.id = dataId;
  };

  var getParentSubMenu = function getParentSubMenu(id) {
    var menu;
    subMenus.forEach(function (view) {
      Array.from(view.children).filter(function (child) {
        if (child.id === id) {
          menu = view;
        }
      });
    });
    return menu;
  };

  var getParentText = function getParentText(id) {
    var parentId = id.split("-").map(function (fragment) {
      return /[0-9]/.test(fragment) ? parseInt(fragment) - 2 : fragment;
    }).join("-");
    var text;
    subMenus.forEach(function (view) {
      Array.from(view.children).filter(function (child) {
        if (child.id === parentId) {
          console.log(child);
          text = child.querySelector("a").textContent;
        }
      });
    });

    if (!text) {
      var parent = menuViews[0].querySelector("#".concat(parentId));

      if (parent) {
        text = parent.querySelector("a").textContent;
      } else {
        text = "Main Menu";
      }
    }

    return text;
  };

  function handleSubMenuClick(event) {
    event.preventDefault();
    var newView = this.querySelector(".sub-menu");
    changeView(newView);
    changeTextContent(backButton, header.textContent);
    changeTextContent(header, this.querySelector("a").textContent);
    setBackButton(this.id);
  }

  function handleBackButtonClick(event) {
    var _this = this;

    var newView = function () {
      var subMenuView = getParentSubMenu(_this.dataset.id);
      return subMenuView ? subMenuView.cloneNode(true) : menuViews[0].cloneNode(true);
    }();

    changeView(newView);
    newView.querySelectorAll(".menu-item-has-children").forEach(function (item) {
      item.addEventListener("click", handleSubMenuClick);
    });

    if (newView.id === "primary-menu-list") {
      changeTextContent(header, "Main Menu");
      changeTextContent(backButton, "Main Menu");
      return setBackButton();
    } else {
      changeTextContent(header, this.textContent);
      changeTextContent(backButton, getParentText(this.dataset.id));
      return setBackButton(getParentId(newView.querySelector("li").id));
    }
  }

  itemsWithSubMenus.forEach(function (item) {
    return item.addEventListener("click", handleSubMenuClick);
  });
  backButton.addEventListener("click", handleBackButtonClick);
});

/***/ }),

/***/ "./src/js/notices.js":
/*!***************************!*\
  !*** ./src/js/notices.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! making-stuffs-queries */ "./node_modules/making-stuffs-queries/making-stuffs-queries.js");


(function () {
  var notices = Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__["msQuery"])("#notices");
  if (!notices) return;
  Object(making_stuffs_queries__WEBPACK_IMPORTED_MODULE_0__["msQuery"])("button", notices).addEventListener("click", function () {
    notices.setAttribute("aria-expanded", "false");
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

/***/ 0:
/*!*******************************************************************************************************!*\
  !*** multi ./src/js/drawer-menus.js ./src/js/navigation.js ./src/js/notices.js ./src/sass/style.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/drawer-menus.js */"./src/js/drawer-menus.js");
__webpack_require__(/*! ./src/js/navigation.js */"./src/js/navigation.js");
__webpack_require__(/*! ./src/js/notices.js */"./src/js/notices.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21ha2luZy1zdHVmZnMtcXVlcmllcy9tYWtpbmctc3R1ZmZzLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RyYXdlci1tZW51cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbm90aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzP2EzZWIiXSwibmFtZXMiOlsibXNRdWVyeSIsInNlbGVjdG9yIiwiZWxlbSIsImRvY3VtZW50IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtc1F1ZXJ5QWxsIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibXNDcmVhdGUiLCJwYXJhbXMiLCJlbGVtVHlwZSIsIm5ld0VsZW0iLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiYXR0ciIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGUiLCJtc0FwcGVuZCIsImNoaWxkcmVuIiwicGFyZW50IiwiYm9keSIsIkhUTUxFbGVtZW50IiwiY2hpbGQiLCJhcHBlbmQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImFwcGVuZENoaWxkIiwiYnV0dG9ucyIsIm1lbnVzIiwidG9nZ2xlIiwiYXNzb2NpYXRlZE1lbnUiLCJmcm9tIiwiZmluZCIsIm1lbnUiLCJpZCIsImdldEF0dHJpYnV0ZSIsImJsdXIiLCJmb2N1cyIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic2l0ZU5hdmlnYXRpb25Db250YWluZXIiLCJkcmF3ZXJNZW51IiwibWVudUl0ZW1Db250YWluZXIiLCJtZW51SXRlbUxpc3QiLCJpdGVtc1dpdGhTdWJNZW51cyIsInN1Yk1lbnVzIiwic3ViQXJyYXkiLCJtYXAiLCJjbG9uZU5vZGUiLCJtZW51Vmlld3MiLCJoZWFkZXIiLCJiYWNrQnV0dG9uIiwiaGlkZSIsInN0eWxlIiwib3BhY2l0eSIsInJldmVhbCIsImdldFBhcmVudElkIiwiY3VycmVudElkQXJyYXkiLCJzcGxpdCIsInBhcnNlSW50Iiwiam9pbiIsImNoYW5nZVZpZXciLCJuZXdWaWV3Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImNoYW5nZVRleHRDb250ZW50IiwidGV4dCIsInRleHRDb250ZW50Iiwic2V0QmFja0J1dHRvbiIsImRhdGFJZCIsImRhdGFzZXQiLCJnZXRQYXJlbnRTdWJNZW51IiwidmlldyIsImZpbHRlciIsImdldFBhcmVudFRleHQiLCJwYXJlbnRJZCIsImZyYWdtZW50IiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJNZW51Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQmFja0J1dHRvbkNsaWNrIiwic3ViTWVudVZpZXciLCJpdGVtIiwibm90aWNlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7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LE9BQWxCLENBQTBCLFVBQUNnRCxJQUFEO0FBQUEsV0FDeEJBLElBQUksQ0FBQzlDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCeUMsa0JBQS9CLENBRHdCO0FBQUEsR0FBMUI7QUFJQTdCLFlBQVUsQ0FBQ1osZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUM0QyxxQkFBckM7QUFDRCxDQTFJRCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7O0FBRUEsQ0FBQyxZQUFZO0FBQ1gsTUFBTUcsT0FBTyxHQUFHOUYscUVBQU8sQ0FBQyxVQUFELENBQXZCO0FBQ0EsTUFBSSxDQUFDOEYsT0FBTCxFQUFjO0FBQ2Q5Rix1RUFBTyxDQUFDLFFBQUQsRUFBVzhGLE9BQVgsQ0FBUCxDQUEyQi9DLGdCQUEzQixDQUE0QyxPQUE1QyxFQUFxRCxZQUFNO0FBQ3pEK0MsV0FBTyxDQUFDdEUsWUFBUixDQUFxQixlQUFyQixFQUFzQyxPQUF0QztBQUNELEdBRkQ7QUFHRCxDQU5ELEk7Ozs7Ozs7Ozs7O0FDRkEsaUQiLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gcmV0dXJuIHRoZSBmaXJzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3IsIHdpdGhpbiBhIHNwZWNpZmllZCBlbGVtZW50LlxuICogSWYgbm8gZWxlbWVudCBpcyBwcm92aWRlZCBpdCB3aWxsIGRlZmF1bHQgdG8gZG9jdW1lbnQuXG4gKiBAcGFyYW0gc2VsZWN0b3IgXG4gKiBAcGFyYW0gZWxlbSBcbiAqIEByZXR1cm5zIEhUTUwgbm9kZSBvciBudWxsIGlmIG5vdGhpbmcgaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCBtc1F1ZXJ5ID0gKHNlbGVjdG9yID0gJ2JvZHknLCBlbGVtID0gZG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQgOiBudWxsO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJldHVybiBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCBzZWxlY3RvciB3aXRoaW4gYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIERlZmF1bHQgYmVoYXZpb3VyIHJldHVybnMgYWxsIGEgZWxlbWVudHMgd2l0aGluIHRoZSBkb2N1bWVudCBlbGVtZW50LlxuICogQHBhcmFtIHNlbGVjdG9yIFxuICogQHBhcmFtIGVsZW0gXG4gKiBAcmV0dXJucyBIVE1MIG5vZGUgbGlzdCBvciBudWxsIGlmIG5vdGhpbmcgaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCBtc1F1ZXJ5QWxsID0gKHNlbGVjdG9yID0gJ2EnLCBlbGVtID0gZG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBub2RlTGlzdCA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICByZXR1cm4gbm9kZUxpc3RbMF0gPyBub2RlTGlzdCA6IG51bGw7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IEhUTUwgRWxlbWVudCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHN0cmluZy5cbiAqIElmIG5vIGVsZW0gcGFyYW1ldGVyIGlzIHByb3ZpZGVkIGl0IHdpbGwgZGVmYXVsdCB0byBhIGRpdiBjb250YWluZXIuXG4gKiBJZiB0aGUgZWxlbSBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBvZiB0aGUgdHlwZSBzdHJpbmcgcmV0dXJucyBudWxsLlxuICogSWYgdGhlIHBhcmFtcyBwYXJhbWV0ZXIgaXMgbm90IG9mIHRoZSB0cnVlIG9iamVjdCB0eXBlIGl0IHdpbGwgYmUgaWdub3JlZFxuICogSWYgdGhlIGlubmVySFRNTCBvYmplY3Qga2V5IGlzIHByb3ZpZGVkIHRoZSBuZXdseSBjcmVhdGVkIGVsZW1lbnQncyBpbm5lckhUTUwgd2lsbCBiZSBzZXRcbiAqIElmIGEgcGFyYW0ga2V5IGlzIHByb3ZpZGVkIHdpdGggYW4gdW5kZXJzY29yZSBpdCB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIGh5cGhlblxuICogXG4gKiBAcGFyYW0gZWxlbSBcbiAqIEBwYXJhbSBwYXJhbXMgXG4gKiBAcmV0dXJucyBOZXdseSBjcmVhdGVkIEhUTUwgbm9kZVxuICovXG5leHBvcnQgY29uc3QgbXNDcmVhdGUgPSAoZWxlbSA9ICdkaXYnLCBwYXJhbXMgPSBudWxsKSA9PiB7XG5cbiAgICBpZihlbGVtICYmIHR5cGVvZiBlbGVtICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuXG4gICAgY29uc3QgZWxlbVR5cGUgPSAhZWxlbSA/ICdkaXYnIDogZWxlbTtcblxuICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1UeXBlKTtcblxuICAgIC8vIEVuc3VyZSB0aGUgcGFyYW1zIHBhcmFtZXRlciBpcyBhIHRydWUgb2JqZWN0IGFuZCBub3QgYW4gYXJyYXkgb3IgYSBmYWxzZXkgb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnICYmICEhcGFyYW1zICYmICFBcnJheS5pc0FycmF5KHBhcmFtcykpIHtcblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMocGFyYW1zKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXNbaV0gPT09ICdpbm5lckhUTUwnKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbS5pbm5lckhUTUwgPSBwYXJhbXNbYXR0cmlidXRlc1tpXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGVzW2ldLnJlcGxhY2UoJ18nLCAnLScpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKGF0dHIsIHBhcmFtc1thdHRyaWJ1dGVzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbTtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBhcHBlbmQgdGhlIGVsZW1lbnQocykgcGFzc2VkIGFzIHRoZSBjaGlsZHJlbiBwYXJhbWV0ZXIgdG8gdGhlIGVsZW1lbnQgcGFzc2VkXG4gKiBhcyB0aGUgcGFyZW50IHBhcmFtZXRlci5cbiAqIElmIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBlbXB0eSBvciBpdCBpcyBub3Qgb25lIG9mIHRoZSB0eXBlcyBIVE1MIGVsZW1lbnQgb3IgQXJyYXkgdGhlIFxuICogZnVuY3Rpb24gd2lsbCByZXR1cm4uXG4gKiBJZiB0aGUgcGFyZW50IHBhcmFtZXRlciBpcyBub3Qgb2YgdGhlIHR5cGUgSFRNTCBFbGVtZW50IHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybi5cbiAqIElmIG5vIHBhcmFtZXRlciBpcyBwcm92aWRlZCBmb3IgdGhlIHBhcmVudCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAqIElmIGNoaWxkcmVuIGlzIGFuIGFycmF5IGFuZCBpdCBjb250YWlucyBhbiBpbmRleCB3aGljaCBpcyBub3Qgb2YgdGhlIHR5cGUgSFRNTCBFbGVtZW50IGl0IHdpbGwgXG4gKiBiZSBza2lwcGVkLlxuICogRnVuY3Rpb24gYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkLlxuICogQHBhcmFtIGNoaWxkcmVuIFxuICogQHBhcmFtIHBhcmVudCBcbiAqIEByZXR1cm5zIHVuZGVmaW5lZDtcbiAqL1xuXG5leHBvcnQgY29uc3QgbXNBcHBlbmQgPSAoY2hpbGRyZW4gPSBudWxsLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuO1xuICAgIGlmICghY2hpbGRyZW4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHJldHVybjtcbiAgICBpZiAocGFyZW50ICYmICFwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZihjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHBhcmVudC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgfVxufSIsImltcG9ydCB7IG1zUXVlcnlBbGwgfSBmcm9tIFwibWFraW5nLXN0dWZmcy1xdWVyaWVzXCI7XG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBidXR0b25zID0gW1xuICAgIC4uLm1zUXVlcnlBbGwoXCIuc3R1ZmZzLWRyYXdlci1tZW51X19idXR0b25cIiksXG4gICAgLi4ubXNRdWVyeUFsbChcIi5zdHVmZnMtZHJhd2VyLW1lbnVfX2Nsb3NlXCIpLFxuICBdO1xuICBjb25zdCBtZW51cyA9IG1zUXVlcnlBbGwoXCIuc3R1ZmZzLWRyYXdlci1tZW51XCIpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICBjb25zdCBhc3NvY2lhdGVkTWVudSA9IEFycmF5LmZyb20obWVudXMpLmZpbmQoXG4gICAgICAobWVudSkgPT4gbWVudS5pZCA9PT0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpXG4gICAgKTtcbiAgICBpZiAoYXNzb2NpYXRlZE1lbnUuZ2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIGFzc29jaWF0ZWRNZW51LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgIGFzc29jaWF0ZWRNZW51LmJsdXIoKTtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NvY2lhdGVkTWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGFzc29jaWF0ZWRNZW51LmZvY3VzKCk7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGUpKTtcbn0pKCk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNpdGVOYXZpZ2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb25cIik7XG4gIGNvbnN0IGRyYXdlck1lbnUgPSBzaXRlTmF2aWdhdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnN0dWZmcy1kcmF3ZXItbWVudVwiXG4gICk7XG4gIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZHJhd2VyTWVudS5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtcHJpbWFyeS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVJdGVtTGlzdCA9IGRyYXdlck1lbnUucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5LW1lbnUtbGlzdFwiKTtcbiAgY29uc3QgaXRlbXNXaXRoU3ViTWVudXMgPSBBcnJheS5mcm9tKFxuICAgIG1lbnVJdGVtTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIilcbiAgKTtcbiAgY29uc3Qgc3ViTWVudXMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHN1YkFycmF5ID0gQXJyYXkuZnJvbShcbiAgICAgIG1lbnVJdGVtTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1tZW51XCIpXG4gICAgKS5tYXAoKG1lbnUpID0+IG1lbnUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gc3ViQXJyYXk7XG4gIH0pKCk7XG5cbiAgY29uc3QgbWVudVZpZXdzID0gW21lbnVJdGVtTGlzdC5jbG9uZU5vZGUodHJ1ZSksIC4uLnN1Yk1lbnVzXTtcblxuICBjb25zdCBoZWFkZXIgPSBkcmF3ZXJNZW51LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS10aXRsZVwiKTtcbiAgY29uc3QgYmFja0J1dHRvbiA9IGRyYXdlck1lbnUucXVlcnlTZWxlY3RvcihcIiNtZW51LWJhY2stYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGhpZGUgPSAoZWxlbWVudCkgPT4gKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDApO1xuICBjb25zdCByZXZlYWwgPSAoZWxlbWVudCkgPT4gKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDEpO1xuXG4gIGNvbnN0IGdldFBhcmVudElkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudElkQXJyYXkgPSBpZC5zcGxpdChcIi1cIik7XG4gICAgY3VycmVudElkQXJyYXlbMl0gPSBwYXJzZUludChjdXJyZW50SWRBcnJheVsyXSkgLSAxO1xuICAgIHJldHVybiBjdXJyZW50SWRBcnJheS5qb2luKFwiLVwiKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VWaWV3ID0gKG5ld1ZpZXcpID0+IHtcbiAgICBoaWRlKG1lbnVJdGVtQ29udGFpbmVyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbWVudUl0ZW1Db250YWluZXIucXVlcnlTZWxlY3RvcihcInVsXCIpLnJlbW92ZSgpO1xuICAgICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kKG5ld1ZpZXcpO1xuICAgICAgcmV2ZWFsKG1lbnVJdGVtQ29udGFpbmVyKTtcbiAgICB9LCA0MDApO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVRleHRDb250ZW50ID0gKGVsZW1lbnQsIHRleHQpID0+IChlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dCk7XG5cbiAgY29uc3Qgc2V0QmFja0J1dHRvbiA9IChkYXRhSWQgPSBudWxsKSA9PiB7XG4gICAgaWYgKCFkYXRhSWQpIHtcbiAgICAgIGJhY2tCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgZGVsZXRlIGJhY2tCdXR0b24uZGF0YXNldC5pZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJhY2tCdXR0b24uZ2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICBiYWNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgfVxuICAgIGJhY2tCdXR0b24uZGF0YXNldC5pZCA9IGRhdGFJZDtcbiAgfTtcblxuICBjb25zdCBnZXRQYXJlbnRTdWJNZW51ID0gKGlkKSA9PiB7XG4gICAgbGV0IG1lbnU7XG4gICAgc3ViTWVudXMuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgQXJyYXkuZnJvbSh2aWV3LmNoaWxkcmVuKS5maWx0ZXIoKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBtZW51ID0gdmlldztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1lbnU7XG4gIH07XG4gIGNvbnN0IGdldFBhcmVudFRleHQgPSAoaWQpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudElkID0gaWRcbiAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgIC5tYXAoKGZyYWdtZW50KSA9PlxuICAgICAgICAvWzAtOV0vLnRlc3QoZnJhZ21lbnQpID8gcGFyc2VJbnQoZnJhZ21lbnQpIC0gMiA6IGZyYWdtZW50XG4gICAgICApXG4gICAgICAuam9pbihcIi1cIik7XG4gICAgICBcbiAgICBsZXQgdGV4dDtcblxuICAgIHN1Yk1lbnVzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIEFycmF5LmZyb20odmlldy5jaGlsZHJlbikuZmlsdGVyKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuaWQgPT09IHBhcmVudElkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hpbGQpO1xuICAgICAgICAgIHRleHQgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IG1lbnVWaWV3c1swXS5xdWVyeVNlbGVjdG9yKGAjJHtwYXJlbnRJZH1gKTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGV4dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBcIk1haW4gTWVudVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VmlldyA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5zdWItbWVudVwiKTtcbiAgICBjaGFuZ2VWaWV3KG5ld1ZpZXcpO1xuICAgIGNoYW5nZVRleHRDb250ZW50KGJhY2tCdXR0b24sIGhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgY2hhbmdlVGV4dENvbnRlbnQoaGVhZGVyLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50KTtcbiAgICBzZXRCYWNrQnV0dG9uKHRoaXMuaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQmFja0J1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmlldyA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBzdWJNZW51VmlldyA9IGdldFBhcmVudFN1Yk1lbnUodGhpcy5kYXRhc2V0LmlkKTtcblxuICAgICAgcmV0dXJuIHN1Yk1lbnVWaWV3XG4gICAgICAgID8gc3ViTWVudVZpZXcuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIDogbWVudVZpZXdzWzBdLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9KSgpO1xuXG4gICAgY2hhbmdlVmlldyhuZXdWaWV3KTtcblxuICAgIG5ld1ZpZXcucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Yk1lbnVDbGljayk7XG4gICAgfSk7XG5cbiAgICBpZiAobmV3Vmlldy5pZCA9PT0gXCJwcmltYXJ5LW1lbnUtbGlzdFwiKSB7XG4gICAgICBjaGFuZ2VUZXh0Q29udGVudChoZWFkZXIsIFwiTWFpbiBNZW51XCIpO1xuICAgICAgY2hhbmdlVGV4dENvbnRlbnQoYmFja0J1dHRvbiwgXCJNYWluIE1lbnVcIik7XG4gICAgICByZXR1cm4gc2V0QmFja0J1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VUZXh0Q29udGVudChoZWFkZXIsIHRoaXMudGV4dENvbnRlbnQpO1xuICAgICAgY2hhbmdlVGV4dENvbnRlbnQoYmFja0J1dHRvbiwgZ2V0UGFyZW50VGV4dCh0aGlzLmRhdGFzZXQuaWQpKTtcbiAgICAgIHJldHVybiBzZXRCYWNrQnV0dG9uKGdldFBhcmVudElkKG5ld1ZpZXcucXVlcnlTZWxlY3RvcihcImxpXCIpLmlkKSk7XG4gICAgfVxuICB9XG5cbiAgaXRlbXNXaXRoU3ViTWVudXMuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJNZW51Q2xpY2spXG4gICk7XG5cbiAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQmFja0J1dHRvbkNsaWNrKTtcbn0pO1xuIiwiaW1wb3J0IHsgbXNRdWVyeSB9IGZyb20gXCJtYWtpbmctc3R1ZmZzLXF1ZXJpZXNcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm90aWNlcyA9IG1zUXVlcnkoXCIjbm90aWNlc1wiKTtcbiAgaWYgKCFub3RpY2VzKSByZXR1cm47XG4gIG1zUXVlcnkoXCJidXR0b25cIiwgbm90aWNlcykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RpY2VzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgfSk7XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=