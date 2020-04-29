(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-recorder-recorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recorder/page/recorder/recorder.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recorder/page/recorder/recorder.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav mat-tab-nav-bar>\r\n    <a mat-tab-link *ngFor=\"let items of recordertabs\" (click)=\"onClick(selectedItem = items.id)\">\r\n\t\t{{items.menu}}\r\n\t</a>\r\n</nav> -->\r\n\r\n<mat-form-field class=\"spacing\">\r\n    <mat-label>Recorder Brand</mat-label>\r\n    <mat-select (selectionChange)=\"applyFilter($event.value)\">\r\n        <mat-option *ngFor=\"let brand of brands\" [value]=\"brand.id\">\r\n            {{brand.value}}\r\n        </mat-option>\r\n    </mat-select>\r\n</mat-form-field>\r\n\r\n<mat-table [dataSource]=\"items\" matSort class=\"spacing\">\r\n    <ng-container matColumnDef=\"Brand\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Brand </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.brand}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Model\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Model </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.model}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Price\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n");

/***/ }),

/***/ "./src/app/modules/recorder/page/recorder/recorder.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/recorder/page/recorder/recorder.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacing {\r\n    margin-top: 20px;\r\n    margin: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZWNvcmRlci9wYWdlL3JlY29yZGVyL3JlY29yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVjb3JkZXIvcGFnZS9yZWNvcmRlci9yZWNvcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/recorder/page/recorder/recorder.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/recorder/page/recorder/recorder.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorderComponent", function() { return RecorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common.service */ "./src/app/common.service.ts");



let RecorderComponent = class RecorderComponent {
    constructor(commonService) {
        this.commonService = commonService;
        // private recordertabs = [];
        this.allitems = [];
        this.displayedColumns = [];
        this.selectedItem = {};
        this.items = [];
        this.testbrands = [];
        this.brands = [];
        this.recorders = [];
        this.orderBrand = "value"; //sorting
        this.ascending = true; //sorting
    }
    ngOnInit() {
        this.getBrands();
        this.getRecorders();
        // this.recordertabs = [
        //   {menu:"All products", id:"allproducts"},
        //   {menu:"Stand Alone", id:"StandAlone"},
        //   {menu:"720P", id:"720P"},
        //   {menu:"1080P", id:"1080P"},
        //   {menu:"Kits", id:"Kits"},
        //   {menu:"Design your System", id:"design"}
        // ];
        console.log(this.recorders);
        this.displayedColumns = ['Brand', 'Model', 'Price'];
        this.items = this.allitems;
        this.selectedItem = "allproducts";
    }
    onClick() {
        this.items = [];
        if (this.selectedItem == "allproducts") {
            this.items = this.allitems;
        }
        else {
            for (let i = 0; i < this.allitems.length; i++) {
                if (this.allitems[i].model == this.selectedItem) {
                    this.items.push(this.allitems[i]);
                    console.log(this.allitems[i]);
                }
                ;
            }
            ;
        }
        console.log(this.items);
    }
    applyFilter(filterValue) {
        console.log(this.selectedItem);
        this.items = [];
        if (filterValue == "Allbrands") {
            if (this.selectedItem == "allproducts") {
                this.items = this.allitems;
            }
            else {
                for (let i = 0; i < this.allitems.length; i++) {
                    if (this.allitems[i].model == this.selectedItem) {
                        this.items.push(this.allitems[i]);
                    }
                    ;
                }
                ;
            }
        }
        else {
            console.log(filterValue);
            console.log(this.allitems);
            for (let i = 0; i < this.allitems.length; i++) {
                if (this.allitems[i].model == this.selectedItem && this.allitems[i].brand == filterValue) {
                    this.items.push(this.allitems[i]);
                }
                else if (this.selectedItem == "allproducts" && this.allitems[i].brand == filterValue) {
                    this.items.push(this.allitems[i]);
                }
                ;
            }
            ;
        }
    }
    getBrands() {
        this.commonService.getBrands().subscribe(data => this.brands = data);
    }
    getRecorders() {
        this.commonService.getRecorders().subscribe(data => {
            this.allitems = data;
            this.items = data;
            console.log('data', data);
        });
    }
};
RecorderComponent.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
RecorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recorder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recorder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/recorder/page/recorder/recorder.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recorder.component.css */ "./src/app/modules/recorder/page/recorder/recorder.component.css")).default]
    })
], RecorderComponent);



/***/ }),

/***/ "./src/app/modules/recorder/recorder-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/recorder/recorder-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RecorderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorderRoutingModule", function() { return RecorderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_recorder_recorder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/recorder/recorder.component */ "./src/app/modules/recorder/page/recorder/recorder.component.ts");




const routes = [
    {
        path: '',
        component: _page_recorder_recorder_component__WEBPACK_IMPORTED_MODULE_3__["RecorderComponent"]
    }
];
let RecorderRoutingModule = class RecorderRoutingModule {
};
RecorderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RecorderRoutingModule);



/***/ }),

/***/ "./src/app/modules/recorder/recorder.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/recorder/recorder.module.ts ***!
  \*****************************************************/
/*! exports provided: RecorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecorderModule", function() { return RecorderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _recorder_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recorder-routing.module */ "./src/app/modules/recorder/recorder-routing.module.ts");
/* harmony import */ var _page_recorder_recorder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/recorder/recorder.component */ "./src/app/modules/recorder/page/recorder/recorder.component.ts");





let RecorderModule = class RecorderModule {
};
RecorderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_recorder_recorder_component__WEBPACK_IMPORTED_MODULE_4__["RecorderComponent"]],
        imports: [
            _recorder_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecorderRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]
    })
], RecorderModule);



/***/ })

}]);
//# sourceMappingURL=modules-recorder-recorder-module-es2015.js.map