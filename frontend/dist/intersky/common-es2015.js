(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
        this.uri = 'http://localhost:8080/api';
    }
    getBrands() {
        // console.log('common.service getBrands');
        return this.http.get(`${this.uri}/data/brand`);
    }
    getCCTVs() {
        // console.log('common.service getCCTVs');
        return this.http.get(`${this.uri}/data/cctv`);
    }
    getAccessory() {
        // console.log('common.service getAccessory');
        return this.http.get(`${this.uri}/data/accessory`);
    }
    getRecorders() {
        // console.log('common.service getRecorders');
        return this.http.get(`${this.uri}/data/recorder`);
    }
    addCCTVs(cctvs) {
        // console.log('common.service addCCTV', cctvs);
        return this.http.post(`${this.uri}/data/addcctvs`, cctvs);
        // return this.http.post(`${this.uri}/addcctvs`, JSON.stringify(cctvs), this.options);
    }
    addRecorders(recoders) {
        // console.log('common.service addRecorders', recoders);
        return this.http.post(`${this.uri}/data/addrecorders`, recoders);
    }
    getImages() {
        return this.http.get(`${this.uri}/data/images`);
    }
    login(auth) {
        // console.log('common.service login', auth);
        return this.http.post(`${this.uri}/auth/login`, auth);
    }
    register(auth) {
        // console.log('common.service register', auth);
        return this.http.post(`${this.uri}/auth/register`, auth);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map