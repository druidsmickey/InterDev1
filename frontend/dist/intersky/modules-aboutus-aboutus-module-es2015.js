(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aboutus/page/aboutus/aboutus.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aboutus/page/aboutus/aboutus.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>aboutus works!</p>\r\n");

/***/ }),

/***/ "./src/app/modules/aboutus/aboutus-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/aboutus/aboutus-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusRoutingModule", function() { return AboutusRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/aboutus/aboutus.component */ "./src/app/modules/aboutus/page/aboutus/aboutus.component.ts");




const routes = [
    {
        path: '',
        component: _page_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"]
    }
];
let AboutusRoutingModule = class AboutusRoutingModule {
};
AboutusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutusRoutingModule);



/***/ }),

/***/ "./src/app/modules/aboutus/aboutus.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/aboutus/aboutus.module.ts ***!
  \***************************************************/
/*! exports provided: AboutusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusModule", function() { return AboutusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/modules/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _page_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/aboutus/aboutus.component */ "./src/app/modules/aboutus/page/aboutus/aboutus.component.ts");





let AboutusModule = class AboutusModule {
};
AboutusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"]],
        imports: [
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutusRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], AboutusModule);



/***/ }),

/***/ "./src/app/modules/aboutus/page/aboutus/aboutus.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/aboutus/page/aboutus/aboutus.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXR1cy9wYWdlL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/aboutus/page/aboutus/aboutus.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/aboutus/page/aboutus/aboutus.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutusComponent = class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/aboutus/page/aboutus/aboutus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.component.css */ "./src/app/modules/aboutus/page/aboutus/aboutus.component.css")).default]
    })
], AboutusComponent);



/***/ })

}]);
//# sourceMappingURL=modules-aboutus-aboutus-module-es2015.js.map