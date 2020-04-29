function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/common.service.ts":
  /*!***********************************!*\
    !*** ./src/app/common.service.ts ***!
    \***********************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CommonService = /*#__PURE__*/function () {
      function CommonService(http) {
        _classCallCheck(this, CommonService);

        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
          'Content-Type': 'application/json',
          'charset': 'UTF-8'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
          headers: this.headers
        });
        this.uri = 'http://localhost:8080/api';
      }

      _createClass(CommonService, [{
        key: "getBrands",
        value: function getBrands() {
          // console.log('common.service getBrands');
          return this.http.get("".concat(this.uri, "/data/brand"));
        }
      }, {
        key: "getCCTVs",
        value: function getCCTVs() {
          // console.log('common.service getCCTVs');
          return this.http.get("".concat(this.uri, "/data/cctv"));
        }
      }, {
        key: "getAccessory",
        value: function getAccessory() {
          // console.log('common.service getAccessory');
          return this.http.get("".concat(this.uri, "/data/accessory"));
        }
      }, {
        key: "getRecorders",
        value: function getRecorders() {
          // console.log('common.service getRecorders');
          return this.http.get("".concat(this.uri, "/data/recorder"));
        }
      }, {
        key: "addCCTVs",
        value: function addCCTVs(cctvs) {
          // console.log('common.service addCCTV', cctvs);
          return this.http.post("".concat(this.uri, "/data/addcctvs"), cctvs); // return this.http.post(`${this.uri}/addcctvs`, JSON.stringify(cctvs), this.options);
        }
      }, {
        key: "addRecorders",
        value: function addRecorders(recoders) {
          // console.log('common.service addRecorders', recoders);
          return this.http.post("".concat(this.uri, "/data/addrecorders"), recoders);
        }
      }, {
        key: "getImages",
        value: function getImages() {
          return this.http.get("".concat(this.uri, "/data/images"));
        }
      }, {
        key: "login",
        value: function login(auth) {
          // console.log('common.service login', auth);
          return this.http.post("".concat(this.uri, "/auth/login"), auth);
        }
      }, {
        key: "register",
        value: function register(auth) {
          // console.log('common.service register', auth);
          return this.http.post("".concat(this.uri, "/auth/register"), auth);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map