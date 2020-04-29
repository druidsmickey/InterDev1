(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-featured-featured-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/featured/page/featured/featured.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/featured/page/featured/featured.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n\r\n    <mat-card-header>\r\n        <mat-card-title>Hikvision Mini-O-Plus</mat-card-title>\r\n        <mat-card-subtitle>Stand Alone</mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <div class=\"box\">\r\n        <img mat-card-image src=\"https://images-na.ssl-images-amazon.com/images/I/51YNd4Y7bsL._SL1500_.jpg\" alt=\"Photo of a Hikvision Mini-O-Plus\" class=\"image-card\">\r\n        <mat-card-content class=\"specs\">\r\n            <p>Specs:-</p>\r\n            <p>1080P</p>\r\n            <p>Micro</p>\r\n            <p>SD card</p>\r\n        </mat-card-content>\r\n    </div>\r\n\r\n</mat-card>\r\n");

/***/ }),

/***/ "./src/app/modules/featured/featured-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/featured/featured-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FeaturedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedRoutingModule", function() { return FeaturedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_featured_featured_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/featured/featured.component */ "./src/app/modules/featured/page/featured/featured.component.ts");




const routes = [
    {
        path: '',
        component: _page_featured_featured_component__WEBPACK_IMPORTED_MODULE_3__["FeaturedComponent"]
    }
];
let FeaturedRoutingModule = class FeaturedRoutingModule {
};
FeaturedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FeaturedRoutingModule);



/***/ }),

/***/ "./src/app/modules/featured/featured.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/featured/featured.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedModule", function() { return FeaturedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _featured_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-routing.module */ "./src/app/modules/featured/featured-routing.module.ts");
/* harmony import */ var _page_featured_featured_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/featured/featured.component */ "./src/app/modules/featured/page/featured/featured.component.ts");





let FeaturedModule = class FeaturedModule {
};
FeaturedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_featured_featured_component__WEBPACK_IMPORTED_MODULE_4__["FeaturedComponent"]],
        imports: [
            _featured_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeaturedRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], FeaturedModule);



/***/ }),

/***/ "./src/app/modules/featured/page/featured/featured.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/featured/page/featured/featured.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n  max-width: 600px;\r\n  margin : 30px;\r\n}\r\n\r\n\r\n.image-card {\r\n  max-width: 400px;\r\n}\r\n\r\n\r\n.box {\r\n  display: flex;\r\n}\r\n\r\n\r\n.specs{\r\n  margin : 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mZWF0dXJlZC9wYWdlL2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9mZWF0dXJlZC9wYWdlL2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbiA6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1hZ2UtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwZWNze1xyXG4gIG1hcmdpbiA6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/featured/page/featured/featured.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/featured/page/featured/featured.component.ts ***!
  \**********************************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturedComponent = class FeaturedComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./featured.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/featured/page/featured/featured.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./featured.component.css */ "./src/app/modules/featured/page/featured/featured.component.css")).default]
    })
], FeaturedComponent);



/***/ })

}]);
//# sourceMappingURL=modules-featured-featured-module-es2015.js.map