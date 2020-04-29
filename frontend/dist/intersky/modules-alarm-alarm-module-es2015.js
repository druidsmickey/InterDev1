(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-alarm-alarm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alarm/page/alarm/alarm.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alarm/page/alarm/alarm.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Page Still under Construction</p>\r\n");

/***/ }),

/***/ "./src/app/modules/alarm/alarm-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/alarm/alarm-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AlarmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmRoutingModule", function() { return AlarmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/alarm/alarm.component */ "./src/app/modules/alarm/page/alarm/alarm.component.ts");




const routes = [
    {
        path: '',
        component: _page_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_3__["AlarmComponent"]
    }
];
let AlarmRoutingModule = class AlarmRoutingModule {
};
AlarmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AlarmRoutingModule);



/***/ }),

/***/ "./src/app/modules/alarm/alarm.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/alarm/alarm.module.ts ***!
  \***********************************************/
/*! exports provided: AlarmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmModule", function() { return AlarmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _alarm_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarm-routing.module */ "./src/app/modules/alarm/alarm-routing.module.ts");
/* harmony import */ var _page_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/alarm/alarm.component */ "./src/app/modules/alarm/page/alarm/alarm.component.ts");





let AlarmModule = class AlarmModule {
};
AlarmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_4__["AlarmComponent"]],
        imports: [
            _alarm_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlarmRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], AlarmModule);



/***/ }),

/***/ "./src/app/modules/alarm/page/alarm/alarm.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/alarm/page/alarm/alarm.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWxhcm0vcGFnZS9hbGFybS9hbGFybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/alarm/page/alarm/alarm.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/alarm/page/alarm/alarm.component.ts ***!
  \*************************************************************/
/*! exports provided: AlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmComponent", function() { return AlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlarmComponent = class AlarmComponent {
    constructor() { }
    ngOnInit() {
    }
};
AlarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alarm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alarm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/alarm/page/alarm/alarm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alarm.component.css */ "./src/app/modules/alarm/page/alarm/alarm.component.css")).default]
    })
], AlarmComponent);



/***/ })

}]);
//# sourceMappingURL=modules-alarm-alarm-module-es2015.js.map