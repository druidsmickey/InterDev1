function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-accesscontrol-accesscontrol-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAccesscontrolPageAccesscontrolAccesscontrolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Page under Construction!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/accesscontrol/accesscontrol-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/accesscontrol/accesscontrol-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AccesscontrolRoutingModule */

  /***/
  function srcAppModulesAccesscontrolAccesscontrolRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscontrolRoutingModule", function () {
      return AccesscontrolRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _page_accesscontrol_accesscontrol_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/accesscontrol/accesscontrol.component */
    "./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.ts");

    var routes = [{
      path: '',
      component: _page_accesscontrol_accesscontrol_component__WEBPACK_IMPORTED_MODULE_3__["AccesscontrolComponent"]
    }];

    var AccesscontrolRoutingModule = function AccesscontrolRoutingModule() {
      _classCallCheck(this, AccesscontrolRoutingModule);
    };

    AccesscontrolRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccesscontrolRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/accesscontrol/accesscontrol.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/accesscontrol/accesscontrol.module.ts ***!
    \***************************************************************/

  /*! exports provided: AccesscontrolModule */

  /***/
  function srcAppModulesAccesscontrolAccesscontrolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscontrolModule", function () {
      return AccesscontrolModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _accesscontrol_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accesscontrol-routing.module */
    "./src/app/modules/accesscontrol/accesscontrol-routing.module.ts");
    /* harmony import */


    var _page_accesscontrol_accesscontrol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page/accesscontrol/accesscontrol.component */
    "./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.ts");

    var AccesscontrolModule = function AccesscontrolModule() {
      _classCallCheck(this, AccesscontrolModule);
    };

    AccesscontrolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_accesscontrol_accesscontrol_component__WEBPACK_IMPORTED_MODULE_4__["AccesscontrolComponent"]],
      imports: [_accesscontrol_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccesscontrolRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
    })], AccesscontrolModule);
    /***/
  },

  /***/
  "./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAccesscontrolPageAccesscontrolAccesscontrolComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjZXNzY29udHJvbC9wYWdlL2FjY2Vzc2NvbnRyb2wvYWNjZXNzY29udHJvbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AccesscontrolComponent */

  /***/
  function srcAppModulesAccesscontrolPageAccesscontrolAccesscontrolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscontrolComponent", function () {
      return AccesscontrolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccesscontrolComponent = /*#__PURE__*/function () {
      function AccesscontrolComponent() {
        _classCallCheck(this, AccesscontrolComponent);
      }

      _createClass(AccesscontrolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccesscontrolComponent;
    }();

    AccesscontrolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accesscontrol',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accesscontrol.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accesscontrol.component.css */
      "./src/app/modules/accesscontrol/page/accesscontrol/accesscontrol.component.css"))["default"]]
    })], AccesscontrolComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-accesscontrol-accesscontrol-module-es5.js.map