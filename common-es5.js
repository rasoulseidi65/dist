function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/primeng/inputtextarea.js":
  /*!***********************************************!*\
    !*** ./node_modules/primeng/inputtextarea.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengInputtextareaJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/inputtextarea/inputtextarea */
    "./node_modules/primeng/components/inputtextarea/inputtextarea.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/keyfilter.js":
  /*!*******************************************!*\
    !*** ./node_modules/primeng/keyfilter.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengKeyfilterJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/keyfilter/keyfilter */
    "./node_modules/primeng/components/keyfilter/keyfilter.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/message.js":
  /*!*****************************************!*\
    !*** ./node_modules/primeng/message.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengMessageJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/message/message */
    "./node_modules/primeng/components/message/message.js"));
    /***/

  },

  /***/
  "./node_modules/primeng/panel.js":
  /*!***************************************!*\
    !*** ./node_modules/primeng/panel.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengPanelJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/panel/panel */
    "./node_modules/primeng/components/panel/panel.js"));
    /***/

  },

  /***/
  "./src/app/auth/localStorageLogin/local-storage.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/localStorageLogin/local-storage.service.ts ***!
    \*****************************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppAuthLocalStorageLoginLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "saveCurrentUser",
        value: function saveCurrentUser(data) {
          localStorage.setItem('currentUserHD', data);
          console.log(data);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          this.userData = localStorage.getItem('currentUserHD');
          console.log(localStorage.getItem('currentUserHD'));
          this.userJson = JSON.parse(this.userData);

          if (this.userData !== undefined && this.userData !== null) {
            this.userJson = JSON.parse(this.userData);
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "removeCurrentUser",
        value: function removeCurrentUser() {
          // alert('del');
          localStorage.removeItem('currentUser');
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalStorageService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map