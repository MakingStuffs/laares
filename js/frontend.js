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

/***/ "./src/js/desktop-nav.js":
/*!*******************************!*\
  !*** ./src/js/desktop-nav.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  var navWrapper = document.querySelector("#desktop-navigation");
  var navContainer = navWrapper.querySelector(".desktop-menu__container");
  var scrollButtons = navWrapper.querySelectorAll(".desktop-menu__scroll-button");

  var checkIfScrollable = function checkIfScrollable() {
    if (navWrapper.scrollWidth < navContainer.scrollWidth) {
      navWrapper.classList.add("scrollable");
      checkScrollPosition();
      scrollButtons.forEach(function (button) {
        return button.addEventListener("click", scroll);
      });
    } else {
      navWrapper.classList.remove("scrollable");
      checkScrollPosition();
      scrollButtons.forEach(function (button) {
        return button.removeEventListener("click", scroll);
      });
    }
  };

  var checkScrollPosition = function checkScrollPosition() {
    var targetPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var leftButton = _toConsumableArray(scrollButtons).find(function (button) {
      return button.dataset.direction === "left";
    });

    var rightButton = _toConsumableArray(scrollButtons).find(function (button) {
      return button.dataset.direction === "right";
    });

    var checkIfScrollingFinished = setInterval(function () {
      if (targetPosition === null) {
        setButtons();
        console.log('no target');
        return clearInterval(checkIfScrollingFinished);
      }

      if (navContainer.scrollLeft === targetPosition) {
        console.log("done");
        setButtons();
        return clearInterval(checkIfScrollingFinished);
      }
    }, 50);

    var setButtons = function setButtons() {
      if (navContainer.scrollLeft <= 50) {
        leftButton.style.display = "none";
      } else if (navContainer.scrollLeft >= navContainer.clientWidth + 50) {
        rightButton.style.display = "none";
      } else {
        leftButton.style.display = "inline-block";
        rightButton.style.display = "inline-block";
      }
    };
  };

  function scroll() {
    if (this.dataset.direction === "right") {
      navContainer.scrollTo({
        top: 0,
        left: navContainer.scrollLeft + 100,
        behavior: "smooth"
      });
      checkScrollPosition(navContainer.scrollLeft + 100);
    } else {
      navContainer.scrollTo({
        top: 0,
        left: navContainer.scrollLeft - 100,
        behavior: "smooth"
      });
      checkScrollPosition(navContainer.scrollLeft - 100);
    }
  }

  window.addEventListener("resize", checkIfScrollable, {
    passive: true
  });
  navContainer.addEventListener("scroll", checkIfScrollable, {
    passive: true
  });
  checkIfScrollable();
});

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

    if (this === document) return;
    var associatedMenu = Array.from(menus).find(function (menu) {
      return menu.id === _this.getAttribute("aria-controls");
    });

    var outsideClickListener = function outsideClickListener(event) {
      if (event.target === associatedMenu) {
        associatedMenu.onclick = null;
        toggle.call(_this);
      }

      ;
    };

    if (associatedMenu.getAttribute("aria-expanded") === "true") {
      associatedMenu.setAttribute("aria-expanded", "false");
      associatedMenu.blur();
      associatedMenu.onclick = null;
      document.removeEventListener('click', toggle);
      this.blur();
      return;
    } else {
      associatedMenu.setAttribute("aria-expanded", "true");
      associatedMenu.focus();
      associatedMenu.onclick = outsideClickListener;
      document.addEventListener('click', toggle);
      this.blur();
      return;
    }
  }

  buttons.forEach(function (button) {
    return button.addEventListener("click", toggle);
  });
})();

/***/ }),

/***/ "./src/js/login-toggle.js":
/*!********************************!*\
  !*** ./src/js/login-toggle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.querySelector("#account-login");
  var registerButton = document.querySelector("#account-register");
  if (!loginButton || !registerButton) return;

  function toggle() {
    event.preventDefault();
    var associatedMenu = document.querySelector("#".concat(this.getAttribute("aria-controls")));
    var currentlyActive = document.querySelector(".account-login-register-form.is-active");
    associatedMenu.classList.add("is-active");
    currentlyActive.classList.remove("is-active");
  }

  [loginButton, registerButton].forEach(function (button) {
    return button.addEventListener("click", toggle);
  });
});

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
/*!********************************************************************************************************************************************************!*\
  !*** multi ./src/js/drawer-menus.js ./src/js/desktop-nav.js ./src/js/navigation.js ./src/js/notices.js ./src/sass/style.scss ./src/js/login-toggle.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/drawer-menus.js */"./src/js/drawer-menus.js");
__webpack_require__(/*! ./src/js/desktop-nav.js */"./src/js/desktop-nav.js");
__webpack_require__(/*! ./src/js/navigation.js */"./src/js/navigation.js");
__webpack_require__(/*! ./src/js/notices.js */"./src/js/notices.js");
__webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");
module.exports = __webpack_require__(/*! ./src/js/login-toggle.js */"./src/js/login-toggle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21ha2luZy1zdHVmZnMtcXVlcmllcy9tYWtpbmctc3R1ZmZzLXF1ZXJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Rlc2t0b3AtbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kcmF3ZXItbWVudXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbm90aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzP2EzZWIiXSwibmFtZXMiOlsibXNRdWVyeSIsInNlbGVjdG9yIiwiZWxlbSIsImRvY3VtZW50IiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtc1F1ZXJ5QWxsIiwibm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwibXNDcmVhdGUiLCJwYXJhbXMiLCJlbGVtVHlwZSIsIm5ld0VsZW0iLCJjcmVhdGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiYXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJpIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiYXR0ciIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGUiLCJtc0FwcGVuZCIsImNoaWxkcmVuIiwicGFyZW50IiwiYm9keSIsIkhUTUxFbGVtZW50IiwiY2hpbGQiLCJhcHBlbmQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdldyYXBwZXIiLCJuYXZDb250YWluZXIiLCJzY3JvbGxCdXR0b25zIiwiY2hlY2tJZlNjcm9sbGFibGUiLCJzY3JvbGxXaWR0aCIsImNsYXNzTGlzdCIsImFkZCIsImNoZWNrU2Nyb2xsUG9zaXRpb24iLCJmb3JFYWNoIiwiYnV0dG9uIiwic2Nyb2xsIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldFBvc2l0aW9uIiwibGVmdEJ1dHRvbiIsImZpbmQiLCJkYXRhc2V0IiwiZGlyZWN0aW9uIiwicmlnaHRCdXR0b24iLCJjaGVja0lmU2Nyb2xsaW5nRmluaXNoZWQiLCJzZXRJbnRlcnZhbCIsInNldEJ1dHRvbnMiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbExlZnQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGllbnRXaWR0aCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwid2luZG93IiwicGFzc2l2ZSIsImJ1dHRvbnMiLCJtZW51cyIsInRvZ2dsZSIsImFzc29jaWF0ZWRNZW51IiwiZnJvbSIsIm1lbnUiLCJpZCIsImdldEF0dHJpYnV0ZSIsIm91dHNpZGVDbGlja0xpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbmNsaWNrIiwiY2FsbCIsImJsdXIiLCJmb2N1cyIsImxvZ2luQnV0dG9uIiwicmVnaXN0ZXJCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRseUFjdGl2ZSIsInNpdGVOYXZpZ2F0aW9uQ29udGFpbmVyIiwiZHJhd2VyTWVudSIsIm1lbnVJdGVtQ29udGFpbmVyIiwibWVudUl0ZW1MaXN0IiwiaXRlbXNXaXRoU3ViTWVudXMiLCJzdWJNZW51cyIsInN1YkFycmF5IiwibWFwIiwiY2xvbmVOb2RlIiwibWVudVZpZXdzIiwiaGVhZGVyIiwiYmFja0J1dHRvbiIsImhpZGUiLCJvcGFjaXR5IiwicmV2ZWFsIiwiZ2V0UGFyZW50SWQiLCJjdXJyZW50SWRBcnJheSIsInNwbGl0IiwicGFyc2VJbnQiLCJqb2luIiwiY2hhbmdlVmlldyIsIm5ld1ZpZXciLCJzZXRUaW1lb3V0IiwiY2hhbmdlVGV4dENvbnRlbnQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJzZXRCYWNrQnV0dG9uIiwiZGF0YUlkIiwiZ2V0UGFyZW50U3ViTWVudSIsInZpZXciLCJmaWx0ZXIiLCJnZXRQYXJlbnRUZXh0IiwicGFyZW50SWQiLCJmcmFnbWVudCIsInRlc3QiLCJoYW5kbGVTdWJNZW51Q2xpY2siLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJzdWJNZW51VmlldyIsIml0ZW0iLCJub3RpY2VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUViOzs7Ozs7Ozs7Ozs7Ozs7O0FBT08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBd0M7QUFBQSxNQUF2Q0MsUUFBdUMsdUVBQTVCLE1BQTRCO0FBQUEsTUFBcEJDLElBQW9CLHVFQUFiQyxRQUFhO0FBQzNELE1BQU1DLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxhQUFMLENBQW1CSixRQUFuQixDQUFoQjtBQUNBLFNBQU9HLE9BQU8sR0FBR0EsT0FBSCxHQUFhLElBQTNCO0FBQ0gsQ0FITTtBQUtQOzs7Ozs7OztBQU9PLElBQU1FLFVBQVUs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Q0FORCxJOzs7Ozs7Ozs7OztBQ0ZBLGlEIiwiZmlsZSI6ImZyb250ZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yLCB3aXRoaW4gYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIElmIG5vIGVsZW1lbnQgaXMgcHJvdmlkZWQgaXQgd2lsbCBkZWZhdWx0IHRvIGRvY3VtZW50LlxuICogQHBhcmFtIHNlbGVjdG9yIFxuICogQHBhcmFtIGVsZW0gXG4gKiBAcmV0dXJucyBIVE1MIG5vZGUgb3IgbnVsbCBpZiBub3RoaW5nIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgbXNRdWVyeSA9IChzZWxlY3RvciA9ICdib2R5JywgZWxlbSA9IGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50IDogbnVsbDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byByZXR1cm4gYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3Igd2l0aGluIGEgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKiBEZWZhdWx0IGJlaGF2aW91ciByZXR1cm5zIGFsbCBhIGVsZW1lbnRzIHdpdGhpbiB0aGUgZG9jdW1lbnQgZWxlbWVudC5cbiAqIEBwYXJhbSBzZWxlY3RvciBcbiAqIEBwYXJhbSBlbGVtIFxuICogQHJldHVybnMgSFRNTCBub2RlIGxpc3Qgb3IgbnVsbCBpZiBub3RoaW5nIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgbXNRdWVyeUFsbCA9IChzZWxlY3RvciA9ICdhJywgZWxlbSA9IGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9kZUxpc3QgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgcmV0dXJuIG5vZGVMaXN0WzBdID8gbm9kZUxpc3QgOiBudWxsO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBIVE1MIEVsZW1lbnQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCBzdHJpbmcuXG4gKiBJZiBubyBlbGVtIHBhcmFtZXRlciBpcyBwcm92aWRlZCBpdCB3aWxsIGRlZmF1bHQgdG8gYSBkaXYgY29udGFpbmVyLlxuICogSWYgdGhlIGVsZW0gcGFyYW1ldGVyIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3Qgb2YgdGhlIHR5cGUgc3RyaW5nIHJldHVybnMgbnVsbC5cbiAqIElmIHRoZSBwYXJhbXMgcGFyYW1ldGVyIGlzIG5vdCBvZiB0aGUgdHJ1ZSBvYmplY3QgdHlwZSBpdCB3aWxsIGJlIGlnbm9yZWRcbiAqIElmIHRoZSBpbm5lckhUTUwgb2JqZWN0IGtleSBpcyBwcm92aWRlZCB0aGUgbmV3bHkgY3JlYXRlZCBlbGVtZW50J3MgaW5uZXJIVE1MIHdpbGwgYmUgc2V0XG4gKiBJZiBhIHBhcmFtIGtleSBpcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVyc2NvcmUgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBoeXBoZW5cbiAqIFxuICogQHBhcmFtIGVsZW0gXG4gKiBAcGFyYW0gcGFyYW1zIFxuICogQHJldHVybnMgTmV3bHkgY3JlYXRlZCBIVE1MIG5vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1zQ3JlYXRlID0gKGVsZW0gPSAnZGl2JywgcGFyYW1zID0gbnVsbCkgPT4ge1xuXG4gICAgaWYoZWxlbSAmJiB0eXBlb2YgZWxlbSAhPT0gJ3N0cmluZycpIHJldHVybjtcblxuICAgIGNvbnN0IGVsZW1UeXBlID0gIWVsZW0gPyAnZGl2JyA6IGVsZW07XG5cbiAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtVHlwZSk7XG5cbiAgICAvLyBFbnN1cmUgdGhlIHBhcmFtcyBwYXJhbWV0ZXIgaXMgYSB0cnVlIG9iamVjdCBhbmQgbm90IGFuIGFycmF5IG9yIGEgZmFsc2V5IG9iamVjdFxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyAmJiAhIXBhcmFtcyAmJiAhQXJyYXkuaXNBcnJheShwYXJhbXMpKSB7XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihhdHRyaWJ1dGVzW2ldID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICAgICAgICAgIG5ld0VsZW0uaW5uZXJIVE1MID0gcGFyYW1zW2F0dHJpYnV0ZXNbaV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlc1tpXS5yZXBsYWNlKCdfJywgJy0nKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShhdHRyLCBwYXJhbXNbYXR0cmlidXRlc1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW07XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYXBwZW5kIHRoZSBlbGVtZW50KHMpIHBhc3NlZCBhcyB0aGUgY2hpbGRyZW4gcGFyYW1ldGVyIHRvIHRoZSBlbGVtZW50IHBhc3NlZFxuICogYXMgdGhlIHBhcmVudCBwYXJhbWV0ZXIuXG4gKiBJZiBjaGlsZHJlbiBwYXJhbWV0ZXIgaXMgZW1wdHkgb3IgaXQgaXMgbm90IG9uZSBvZiB0aGUgdHlwZXMgSFRNTCBlbGVtZW50IG9yIEFycmF5IHRoZSBcbiAqIGZ1bmN0aW9uIHdpbGwgcmV0dXJuLlxuICogSWYgdGhlIHBhcmVudCBwYXJhbWV0ZXIgaXMgbm90IG9mIHRoZSB0eXBlIEhUTUwgRWxlbWVudCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4uXG4gKiBJZiBubyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQgZm9yIHRoZSBwYXJlbnQgdGhlIGNoaWxkcmVuIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50IGJvZHkuXG4gKiBJZiBjaGlsZHJlbiBpcyBhbiBhcnJheSBhbmQgaXQgY29udGFpbnMgYW4gaW5kZXggd2hpY2ggaXMgbm90IG9mIHRoZSB0eXBlIEhUTUwgRWxlbWVudCBpdCB3aWxsIFxuICogYmUgc2tpcHBlZC5cbiAqIEZ1bmN0aW9uIGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSBjaGlsZHJlbiBcbiAqIEBwYXJhbSBwYXJlbnQgXG4gKiBAcmV0dXJucyB1bmRlZmluZWQ7XG4gKi9cblxuZXhwb3J0IGNvbnN0IG1zQXBwZW5kID0gKGNoaWxkcmVuID0gbnVsbCwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkgPT4ge1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVybjtcbiAgICBpZiAoIWNoaWxkcmVuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSByZXR1cm47XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYoY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwYXJlbnQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbn0iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG5hdldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2t0b3AtbmF2aWdhdGlvblwiKTtcbiAgY29uc3QgbmF2Q29udGFpbmVyID0gbmF2V3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmRlc2t0b3AtbWVudV9fY29udGFpbmVyXCIpO1xuICBjb25zdCBzY3JvbGxCdXR0b25zID0gbmF2V3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmRlc2t0b3AtbWVudV9fc2Nyb2xsLWJ1dHRvblwiXG4gICk7XG5cbiAgY29uc3QgY2hlY2tJZlNjcm9sbGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKG5hdldyYXBwZXIuc2Nyb2xsV2lkdGggPCBuYXZDb250YWluZXIuc2Nyb2xsV2lkdGgpIHtcbiAgICAgIG5hdldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGFibGVcIik7XG4gICAgICBjaGVja1Njcm9sbFBvc2l0aW9uKCk7XG4gICAgICBzY3JvbGxCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzY3JvbGwpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxhYmxlXCIpO1xuICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgc2Nyb2xsQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tTY3JvbGxQb3NpdGlvbiA9ICh0YXJnZXRQb3NpdGlvbiA9IG51bGwpID0+IHtcbiAgICBjb25zdCBsZWZ0QnV0dG9uID0gWy4uLnNjcm9sbEJ1dHRvbnNdLmZpbmQoXG4gICAgICAoYnV0dG9uKSA9PiBidXR0b24uZGF0YXNldC5kaXJlY3Rpb24gPT09IFwibGVmdFwiXG4gICAgKTtcbiAgICBjb25zdCByaWdodEJ1dHRvbiA9IFsuLi5zY3JvbGxCdXR0b25zXS5maW5kKFxuICAgICAgKGJ1dHRvbikgPT4gYnV0dG9uLmRhdGFzZXQuZGlyZWN0aW9uID09PSBcInJpZ2h0XCJcbiAgICApO1xuXG4gICAgY29uc3QgY2hlY2tJZlNjcm9sbGluZ0ZpbmlzaGVkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRhcmdldFBvc2l0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHNldEJ1dHRvbnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHRhcmdldCcpO1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChjaGVja0lmU2Nyb2xsaW5nRmluaXNoZWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmF2Q29udGFpbmVyLnNjcm9sbExlZnQgPT09IHRhcmdldFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICAgICAgc2V0QnV0dG9ucygpO1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChjaGVja0lmU2Nyb2xsaW5nRmluaXNoZWQpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcblxuICAgIGNvbnN0IHNldEJ1dHRvbnMgPSAoKSA9PiB7XG5cbiAgICAgIGlmIChuYXZDb250YWluZXIuc2Nyb2xsTGVmdCA8PSA1MCkge1xuICAgICAgICBsZWZ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0gZWxzZSBpZiAobmF2Q29udGFpbmVyLnNjcm9sbExlZnQgPj0gbmF2Q29udGFpbmVyLmNsaWVudFdpZHRoICsgNTApIHtcbiAgICAgICAgcmlnaHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgcmlnaHRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuZGF0YXNldC5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgbmF2Q29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiBuYXZDb250YWluZXIuc2Nyb2xsTGVmdCArIDEwMCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICAgIGNoZWNrU2Nyb2xsUG9zaXRpb24obmF2Q29udGFpbmVyLnNjcm9sbExlZnQgKyAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXZDb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IG5hdkNvbnRhaW5lci5zY3JvbGxMZWZ0IC0gMTAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgICAgY2hlY2tTY3JvbGxQb3NpdGlvbihuYXZDb250YWluZXIuc2Nyb2xsTGVmdCAtIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tJZlNjcm9sbGFibGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgbmF2Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tJZlNjcm9sbGFibGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgY2hlY2tJZlNjcm9sbGFibGUoKTtcbn0pO1xuIiwiaW1wb3J0IHsgbXNRdWVyeUFsbCB9IGZyb20gXCJtYWtpbmctc3R1ZmZzLXF1ZXJpZXNcIjtcbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBbXG4gICAgLi4ubXNRdWVyeUFsbChcIi5zdHVmZnMtZHJhd2VyLW1lbnVfX2J1dHRvblwiKSxcbiAgICAuLi5tc1F1ZXJ5QWxsKFwiLnN0dWZmcy1kcmF3ZXItbWVudV9fY2xvc2VcIiksXG4gIF07XG4gIGNvbnN0IG1lbnVzID0gbXNRdWVyeUFsbChcIi5zdHVmZnMtZHJhd2VyLW1lbnVcIik7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzID09PSBkb2N1bWVudCkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IGFzc29jaWF0ZWRNZW51ID0gQXJyYXkuZnJvbShtZW51cykuZmluZChcbiAgICAgIChtZW51KSA9PiBtZW51LmlkID09PSB0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIilcbiAgICApO1xuICAgIFxuICAgIGNvbnN0IG91dHNpZGVDbGlja0xpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIGV2ZW50LnRhcmdldCA9PT0gYXNzb2NpYXRlZE1lbnUgKSB7XG4gICAgICAgIGFzc29jaWF0ZWRNZW51Lm9uY2xpY2sgPSBudWxsO1xuICAgICAgICB0b2dnbGUuY2FsbCh0aGlzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmIChhc3NvY2lhdGVkTWVudS5nZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpID09PSBcInRydWVcIikge1xuICAgICAgYXNzb2NpYXRlZE1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgYXNzb2NpYXRlZE1lbnUuYmx1cigpO1xuICAgICAgYXNzb2NpYXRlZE1lbnUub25jbGljayA9IG51bGw7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzb2NpYXRlZE1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICBhc3NvY2lhdGVkTWVudS5mb2N1cygpO1xuICAgICAgYXNzb2NpYXRlZE1lbnUub25jbGljayA9IG91dHNpZGVDbGlja0xpc3RlbmVyO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUpO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlKSk7XG59KSgpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWNjb3VudC1sb2dpblwiKTtcbiAgY29uc3QgcmVnaXN0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FjY291bnQtcmVnaXN0ZXJcIik7XG5cbiAgaWYgKCFsb2dpbkJ1dHRvbiB8fCAhcmVnaXN0ZXJCdXR0b24pIHJldHVybjtcblxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFzc29jaWF0ZWRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAjJHt0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YFxuICAgICk7XG4gICAgY29uc3QgY3VycmVudGx5QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFjY291bnQtbG9naW4tcmVnaXN0ZXItZm9ybS5pcy1hY3RpdmVcIlxuICAgICk7XG5cbiAgICBhc3NvY2lhdGVkTWVudS5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xuICAgIGN1cnJlbnRseUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICB9XG5cbiAgW2xvZ2luQnV0dG9uLCByZWdpc3RlckJ1dHRvbl0uZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlKVxuICApO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHNpdGVOYXZpZ2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLW5hdmlnYXRpb25cIik7XG4gIGNvbnN0IGRyYXdlck1lbnUgPSBzaXRlTmF2aWdhdGlvbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnN0dWZmcy1kcmF3ZXItbWVudVwiXG4gICk7XG4gIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZHJhd2VyTWVudS5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtcHJpbWFyeS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVJdGVtTGlzdCA9IGRyYXdlck1lbnUucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5LW1lbnUtbGlzdFwiKTtcbiAgY29uc3QgaXRlbXNXaXRoU3ViTWVudXMgPSBBcnJheS5mcm9tKFxuICAgIG1lbnVJdGVtTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIilcbiAgKTtcblxuICBjb25zdCBzdWJNZW51cyA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3ViQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgICAgbWVudUl0ZW1MaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViLW1lbnVcIilcbiAgICApLm1hcCgobWVudSkgPT4gbWVudS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBzdWJBcnJheTtcbiAgfSkoKTtcblxuICBjb25zdCBtZW51Vmlld3MgPSBbbWVudUl0ZW1MaXN0LmNsb25lTm9kZSh0cnVlKSwgLi4uc3ViTWVudXNdO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRyYXdlck1lbnUucXVlcnlTZWxlY3RvcihcIiNtZW51LXRpdGxlXCIpO1xuICBjb25zdCBiYWNrQnV0dG9uID0gZHJhd2VyTWVudS5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYmFjay1idXR0b25cIik7XG5cbiAgY29uc3QgaGlkZSA9IChlbGVtZW50KSA9PiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMCk7XG4gIGNvbnN0IHJldmVhbCA9IChlbGVtZW50KSA9PiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMSk7XG5cbiAgY29uc3QgZ2V0UGFyZW50SWQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SWRBcnJheSA9IGlkLnNwbGl0KFwiLVwiKTtcbiAgICBjdXJyZW50SWRBcnJheVsyXSA9IHBhcnNlSW50KGN1cnJlbnRJZEFycmF5WzJdKSAtIDE7XG4gICAgcmV0dXJuIGN1cnJlbnRJZEFycmF5LmpvaW4oXCItXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVZpZXcgPSAobmV3VmlldykgPT4ge1xuICAgIGhpZGUobWVudUl0ZW1Db250YWluZXIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBtZW51SXRlbUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwidWxcIikucmVtb3ZlKCk7XG4gICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmQobmV3Vmlldyk7XG4gICAgICByZXZlYWwobWVudUl0ZW1Db250YWluZXIpO1xuICAgIH0sIDQwMCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVGV4dENvbnRlbnQgPSAoZWxlbWVudCwgdGV4dCkgPT4gKGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0KTtcblxuICBjb25zdCBzZXRCYWNrQnV0dG9uID0gKGRhdGFJZCA9IG51bGwpID0+IHtcbiAgICBpZiAoIWRhdGFJZCkge1xuICAgICAgYmFja0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICBkZWxldGUgYmFja0J1dHRvbi5kYXRhc2V0LmlkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYmFja0J1dHRvbi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIGJhY2tCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcbiAgICB9XG4gICAgYmFja0J1dHRvbi5kYXRhc2V0LmlkID0gZGF0YUlkO1xuICB9O1xuXG4gIGNvbnN0IGdldFBhcmVudFN1Yk1lbnUgPSAoaWQpID0+IHtcbiAgICBsZXQgbWVudTtcbiAgICBzdWJNZW51cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICBBcnJheS5mcm9tKHZpZXcuY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLmlkID09PSBpZCkge1xuICAgICAgICAgIG1lbnUgPSB2aWV3O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWVudTtcbiAgfTtcbiAgXG4gIGNvbnN0IGdldFBhcmVudFRleHQgPSAoaWQpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudElkID0gaWRcbiAgICAgIC5zcGxpdChcIi1cIilcbiAgICAgIC5tYXAoKGZyYWdtZW50KSA9PlxuICAgICAgICAvWzAtOV0vLnRlc3QoZnJhZ21lbnQpID8gcGFyc2VJbnQoZnJhZ21lbnQpIC0gMiA6IGZyYWdtZW50XG4gICAgICApXG4gICAgICAuam9pbihcIi1cIik7XG4gICAgICBcbiAgICBsZXQgdGV4dDtcblxuICAgIHN1Yk1lbnVzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIEFycmF5LmZyb20odmlldy5jaGlsZHJlbikuZmlsdGVyKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuaWQgPT09IHBhcmVudElkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2hpbGQpO1xuICAgICAgICAgIHRleHQgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IG1lbnVWaWV3c1swXS5xdWVyeVNlbGVjdG9yKGAjJHtwYXJlbnRJZH1gKTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGV4dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFwiYVwiKS50ZXh0Q29udGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBcIk1haW4gTWVudVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Yk1lbnVDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3VmlldyA9IHRoaXMucXVlcnlTZWxlY3RvcihcIi5zdWItbWVudVwiKTtcbiAgICBjaGFuZ2VWaWV3KG5ld1ZpZXcpO1xuICAgIGNoYW5nZVRleHRDb250ZW50KGJhY2tCdXR0b24sIGhlYWRlci50ZXh0Q29udGVudCk7XG4gICAgY2hhbmdlVGV4dENvbnRlbnQoaGVhZGVyLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLnRleHRDb250ZW50KTtcbiAgICBzZXRCYWNrQnV0dG9uKHRoaXMuaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQmFja0J1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmlldyA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBzdWJNZW51VmlldyA9IGdldFBhcmVudFN1Yk1lbnUodGhpcy5kYXRhc2V0LmlkKTtcblxuICAgICAgcmV0dXJuIHN1Yk1lbnVWaWV3XG4gICAgICAgID8gc3ViTWVudVZpZXcuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIDogbWVudVZpZXdzWzBdLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9KSgpO1xuXG4gICAgY2hhbmdlVmlldyhuZXdWaWV3KTtcblxuICAgIG5ld1ZpZXcucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVN1Yk1lbnVDbGljayk7XG4gICAgfSk7XG5cbiAgICBpZiAobmV3Vmlldy5pZCA9PT0gXCJwcmltYXJ5LW1lbnUtbGlzdFwiKSB7XG4gICAgICBjaGFuZ2VUZXh0Q29udGVudChoZWFkZXIsIFwiTWFpbiBNZW51XCIpO1xuICAgICAgY2hhbmdlVGV4dENvbnRlbnQoYmFja0J1dHRvbiwgXCJNYWluIE1lbnVcIik7XG4gICAgICByZXR1cm4gc2V0QmFja0J1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VUZXh0Q29udGVudChoZWFkZXIsIHRoaXMudGV4dENvbnRlbnQpO1xuICAgICAgY2hhbmdlVGV4dENvbnRlbnQoYmFja0J1dHRvbiwgZ2V0UGFyZW50VGV4dCh0aGlzLmRhdGFzZXQuaWQpKTtcbiAgICAgIHJldHVybiBzZXRCYWNrQnV0dG9uKGdldFBhcmVudElkKG5ld1ZpZXcucXVlcnlTZWxlY3RvcihcImxpXCIpLmlkKSk7XG4gICAgfVxuICB9XG5cbiAgaXRlbXNXaXRoU3ViTWVudXMuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTdWJNZW51Q2xpY2spXG4gICk7XG5cbiAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQmFja0J1dHRvbkNsaWNrKTtcbn0pO1xuIiwiaW1wb3J0IHsgbXNRdWVyeSB9IGZyb20gXCJtYWtpbmctc3R1ZmZzLXF1ZXJpZXNcIjtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgbm90aWNlcyA9IG1zUXVlcnkoXCIjbm90aWNlc1wiKTtcbiAgaWYgKCFub3RpY2VzKSByZXR1cm47XG4gIG1zUXVlcnkoXCJidXR0b25cIiwgbm90aWNlcykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBub3RpY2VzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgfSk7XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=