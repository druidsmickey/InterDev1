function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/admin.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/admin.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminPageAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav mat-tab-nav-bar>\r\n    <a mat-tab-link *ngFor=\"let menu of menus\" [routerLink]=\"menu.link\">\r\n\t\t{{menu.item}}\r\n\t</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/items/items.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/items/items.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminPageItemsItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>items works!</p>\r\n<form [formGroup]=\"myForm\" (ngSubmit)=\"addCCTVs()\">\r\n    <div class=\"example-container\">\r\n        <input type=\"file\" name=\"file\" id=\"input-files\" class=\"form-control-file border\" />\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"brand\" formControlName=\"brand\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"model\" formControlName=\"model\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"quality\" formControlName=\"quality\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"type\" formControlName=\"type\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"lens\" formControlName=\"lens\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"lenstype\" formControlName=\"lenstype\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"transmission\" formControlName=\"transmission\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"protection\" formControlName=\"protection\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"ir\" formControlName=\"ir\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"audioin\" formControlName=\"audioin\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"powersupply\" formControlName=\"powersupply\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"link\" formControlName=\"link\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"price\" formControlName=\"price\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"featured\" formControlName=\"featured\">\r\n        </mat-form-field>\r\n    </div>\r\n    <button class=\"btn btn-secondary mr-1\" mat-button>Ok</button>\r\n    <button class=\"btn btn-secondary mr-1\" type=\"reset\" (click)=\"onReset()\" mat-button>Reset</button>\r\n</form>\r\n\r\n<tr *ngFor=\"let cat of items\">\r\n    <td>{{cat.model}}</td>\r\n    <td>{{cat.price}}</td>\r\n    <td>{{cat.features}}</td>\r\n</tr>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/useraccounts/useraccounts.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/useraccounts/useraccounts.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminPageUseraccountsUseraccountsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>useraccounts works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/admin/admin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/admin/admin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppModulesAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _page_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page/admin.component */
    "./src/app/modules/admin/page/admin.component.ts");
    /* harmony import */


    var _page_items_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page/items/items.component */
    "./src/app/modules/admin/page/items/items.component.ts");
    /* harmony import */


    var _page_useraccounts_useraccounts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/useraccounts/useraccounts.component */
    "./src/app/modules/admin/page/useraccounts/useraccounts.component.ts");

    var routes = [{
      path: '',
      component: _page_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    }, {
      path: 'ItemsComponent',
      component: _page_items_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"]
    }, {
      path: 'UserAccountsComponent',
      component: _page_useraccounts_useraccounts_component__WEBPACK_IMPORTED_MODULE_5__["UseraccountsComponent"]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/admin/admin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/admin/admin.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppModulesAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/modules/admin/admin-routing.module.ts");
    /* harmony import */


    var _page_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page/admin.component */
    "./src/app/modules/admin/page/admin.component.ts");
    /* harmony import */


    var _page_items_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page/items/items.component */
    "./src/app/modules/admin/page/items/items.component.ts");
    /* harmony import */


    var _page_useraccounts_useraccounts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page/useraccounts/useraccounts.component */
    "./src/app/modules/admin/page/useraccounts/useraccounts.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_page_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _page_items_items_component__WEBPACK_IMPORTED_MODULE_6__["ItemsComponent"], _page_useraccounts_useraccounts_component__WEBPACK_IMPORTED_MODULE_7__["UseraccountsComponent"]],
      imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/modules/admin/page/admin.component.css":
  /*!********************************************************!*\
    !*** ./src/app/modules/admin/page/admin.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminPageAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZS9hZG1pbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/admin/page/admin.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/admin/page/admin.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppModulesAdminPageAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);

        this.menus = [];
        this.selectedItem = {};
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menus = [{
            item: 'User Accounts',
            link: 'UserAccountsComponent'
          }, {
            item: 'MenuTabs',
            link: 'MenuTabsComponent'
          }, {
            item: 'Brands',
            link: 'BrandsComponent'
          }, {
            item: 'Items',
            link: 'ItemsComponent'
          }, {
            item: 'Pricing',
            link: 'PricingComponent'
          }];
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/modules/admin/page/admin.component.css"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/modules/admin/page/items/items.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/modules/admin/page/items/items.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminPageItemsItemsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9wYWdlL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/admin/page/items/items.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/admin/page/items/items.component.ts ***!
    \*************************************************************/

  /*! exports provided: ItemsComponent */

  /***/
  function srcAppModulesAdminPageItemsItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsComponent", function () {
      return ItemsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../common.service */
    "./src/app/common.service.ts");

    var ItemsComponent = /*#__PURE__*/function () {
      function ItemsComponent(commonService, formBuilder) {
        _classCallCheck(this, ItemsComponent);

        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.items = [];
        this.brand = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.model = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.quality = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.lens = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.lenstype = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.transmission = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.protection = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ir = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.audioin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.powersupply = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.link = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.price = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.featured = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
      }

      _createClass(ItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myForm = this.formBuilder.group({
            brand: this.brand,
            model: this.model,
            quality: this.quality,
            type: this.type,
            lens: this.lens,
            lenstype: this.lenstype,
            transmission: this.transmission,
            protection: this.protection,
            ir: this.ir,
            audioin: this.audioin,
            powersupply: this.powersupply,
            link: this.link,
            price: this.price,
            featured: this.featured
          });
        }
      }, {
        key: "addCCTVs",
        value: function addCCTVs() {
          var _this = this;

          this.commonService.addCCTVs(this.myForm.value).subscribe(function (res) {
            alert("Added successfully");
            console.log(res); // this.items.push(newItem);

            _this.myForm.reset();
          }, function (error) {
            return console.log(error);
          });
          console.log(this.myForm.value);
        }
      }, {
        key: "onReset",
        value: function onReset() {
          console.log("all ok");
        }
      }]);

      return ItemsComponent;
    }();

    ItemsComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-items',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/items/items.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./items.component.css */
      "./src/app/modules/admin/page/items/items.component.css"))["default"]]
    })], ItemsComponent);
    /***/
  },

  /***/
  "./src/app/modules/admin/page/useraccounts/useraccounts.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/admin/page/useraccounts/useraccounts.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminPageUseraccountsUseraccountsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGFnZS91c2VyYWNjb3VudHMvdXNlcmFjY291bnRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/admin/page/useraccounts/useraccounts.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/admin/page/useraccounts/useraccounts.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UseraccountsComponent */

  /***/
  function srcAppModulesAdminPageUseraccountsUseraccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UseraccountsComponent", function () {
      return UseraccountsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UseraccountsComponent = /*#__PURE__*/function () {
      function UseraccountsComponent() {
        _classCallCheck(this, UseraccountsComponent);
      }

      _createClass(UseraccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UseraccountsComponent;
    }();

    UseraccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-useraccounts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./useraccounts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/page/useraccounts/useraccounts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./useraccounts.component.css */
      "./src/app/modules/admin/page/useraccounts/useraccounts.component.css"))["default"]]
    })], UseraccountsComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-admin-admin-module-es5.js.map