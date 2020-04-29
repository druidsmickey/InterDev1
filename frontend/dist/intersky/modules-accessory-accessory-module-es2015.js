(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-accessory-accessory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accessory/page/accessory/accessory.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accessory/page/accessory/accessory.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-table [dataSource]=\"filterItems\" matSort class=\"spacing\">\n    <ng-container matColumnDef=\"Brand\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Brand </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.brand}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Model\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Model </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.model}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Description\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.description}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>");

/***/ }),

/***/ "./src/app/modules/accessory/accessory-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/accessory/accessory-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryRoutingModule", function() { return AccessoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_accessory_accessory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/accessory/accessory.component */ "./src/app/modules/accessory/page/accessory/accessory.component.ts");




const routes = [
    {
        path: '',
        component: _page_accessory_accessory_component__WEBPACK_IMPORTED_MODULE_3__["AccessoryComponent"]
    }
];
let AccessoryRoutingModule = class AccessoryRoutingModule {
};
AccessoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccessoryRoutingModule);



/***/ }),

/***/ "./src/app/modules/accessory/accessory.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/accessory/accessory.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryModule", function() { return AccessoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _accessory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessory-routing.module */ "./src/app/modules/accessory/accessory-routing.module.ts");
/* harmony import */ var _page_accessory_accessory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/accessory/accessory.component */ "./src/app/modules/accessory/page/accessory/accessory.component.ts");





let AccessoryModule = class AccessoryModule {
};
AccessoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_accessory_accessory_component__WEBPACK_IMPORTED_MODULE_4__["AccessoryComponent"]],
        imports: [
            _accessory_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccessoryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], AccessoryModule);



/***/ }),

/***/ "./src/app/modules/accessory/page/accessory/accessory.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/accessory/page/accessory/accessory.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjZXNzb3J5L3BhZ2UvYWNjZXNzb3J5L2FjY2Vzc29yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/accessory/page/accessory/accessory.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/accessory/page/accessory/accessory.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccessoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessoryComponent", function() { return AccessoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common.service */ "./src/app/common.service.ts");



let AccessoryComponent = class AccessoryComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.displayedColumns = [];
        this.filterItems = [];
    }
    ngOnInit() {
        this.getAccessory();
        this.displayedColumns = ['Brand', 'Model', 'Description', 'Price'];
    }
    getAccessory() {
        this.commonService.getAccessory().subscribe((data) => {
            this.filterItems = data;
        });
    }
};
AccessoryComponent.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
AccessoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accessory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accessory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/accessory/page/accessory/accessory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accessory.component.css */ "./src/app/modules/accessory/page/accessory/accessory.component.css")).default]
    })
], AccessoryComponent);



/***/ })

}]);
//# sourceMappingURL=modules-accessory-accessory-module-es2015.js.map