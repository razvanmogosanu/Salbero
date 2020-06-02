function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/SharedService.ts":
  /*!**********************************!*\
    !*** ./src/app/SharedService.ts ***!
    \**********************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.link = String();
      }

      _createClass(SharedService, [{
        key: "setLink",
        value: function setLink(link) {
          this.link = link;
        }
      }, {
        key: "getLink",
        value: function getLink() {
          return this.link;
        }
      }, {
        key: "setItem",
        value: function setItem(produs) {
          this.item = produs;
        }
      }, {
        key: "getItem",
        value: function getItem() {
          return this.item;
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_acasa_acasa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/acasa/acasa.component */
    "./src/app/components/acasa/acasa.component.ts");
    /* harmony import */


    var _components_produse_produse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/produse/produse.component */
    "./src/app/components/produse/produse.component.ts");
    /* harmony import */


    var _components_despre_noi_despre_noi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/despre-noi/despre-noi.component */
    "./src/app/components/despre-noi/despre-noi.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/item/item.component */
    "./src/app/components/item/item.component.ts");

    var routes = [{
      path: '',
      component: _components_acasa_acasa_component__WEBPACK_IMPORTED_MODULE_2__["AcasaComponent"]
    }, {
      path: 'produse',
      component: _components_produse_produse_component__WEBPACK_IMPORTED_MODULE_3__["ProduseComponent"]
    }, {
      path: 'despre-noi',
      component: _components_despre_noi_despre_noi_component__WEBPACK_IMPORTED_MODULE_4__["DespreNoiComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    }, {
      path: 'produse/:productId',
      component: _components_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'salbero';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_acasa_acasa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/acasa/acasa.component */
    "./src/app/components/acasa/acasa.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_produse_produse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/produse/produse.component */
    "./src/app/components/produse/produse.component.ts");
    /* harmony import */


    var _components_despre_noi_despre_noi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/despre-noi/despre-noi.component */
    "./src/app/components/despre-noi/despre-noi.component.ts");
    /* harmony import */


    var _components_item_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/item/item.component */
    "./src/app/components/item/item.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_acasa_acasa_component__WEBPACK_IMPORTED_MODULE_5__["AcasaComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_produse_produse_component__WEBPACK_IMPORTED_MODULE_10__["ProduseComponent"], _components_despre_noi_despre_noi_component__WEBPACK_IMPORTED_MODULE_11__["DespreNoiComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_12__["ItemComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_acasa_acasa_component__WEBPACK_IMPORTED_MODULE_5__["AcasaComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_produse_produse_component__WEBPACK_IMPORTED_MODULE_10__["ProduseComponent"], _components_despre_noi_despre_noi_component__WEBPACK_IMPORTED_MODULE_11__["DespreNoiComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_12__["ItemComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/acasa/acasa.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/acasa/acasa.component.ts ***!
    \*****************************************************/

  /*! exports provided: AcasaComponent */

  /***/
  function srcAppComponentsAcasaAcasaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcasaComponent", function () {
      return AcasaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AcasaComponent = /*#__PURE__*/function () {
      function AcasaComponent() {
        _classCallCheck(this, AcasaComponent);
      }

      _createClass(AcasaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AcasaComponent;
    }();

    AcasaComponent.ɵfac = function AcasaComponent_Factory(t) {
      return new (t || AcasaComponent)();
    };

    AcasaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AcasaComponent,
      selectors: [["app-acasa"]],
      decls: 133,
      vars: 0,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", "content", "constructii, prefabricate, beton, ciment, acasa, salbero, materiale, gorj"], ["name", "author", "content", "Salbero S.R.L."], ["name", "description", "content", "Panouri de gard, boltari, pavele, spalieri, fantana arteziana si alte materiale prefabricate din beton produse din ciment de inalta calitate, foarte rezistente."], [1, "text-center"], ["id", "acasa-image", "src", "http://www.konkretline.ro/wp-content/uploads/2020/03/gard-prefabricat.jpg"], [1, "prod-menu"], ["href", "#"], [1, "row"], ["src", "http://www.konkretline.ro/wp-content/uploads/2020/04/MODERN.jpg", 1, "prod-img"], [1, "prod-content"], ["href", "#", 1, "btn", "btn-light"], ["src", "https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/9df78eab33525d08d6e5fb8d27136e95/6/0/6018410.jpg", 1, "prod-img"], ["src", "https://frankfurt.apollo.olxcdn.com/v1/files/q0tpabur3sfp3-RO/image;s=1000x700", 1, "prod-img"], ["src", "https://elis.ro/public/upload/images/product/2020/02/cache/5e54481d0e1cc5.77172136.360x458-adaptive.jpg", 1, "prod-img"], ["src", "https://www.piatraonline.ro/userfiles/19370a59-92cf-454a-b230-f7886006c901/products/451225_big.jpg", 1, "prod-img"], ["src", "data:image/jpeg;base64,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PR/hsBuykjJve79qS3htk2WyMYAAAAANAMgtI4aOfJ5tqkjlbvQnA6MXqXtltm5rG7F+TTn/AJKRhHoWo4yDPLJOeAtGw+Qu7/JdORacInK/IyP3+xDwrCoKZnVwRMjbwaLX5k6uPMqYiK5k227YREQgIiIAiIgCIiAIiIAvEsYc0tcAWuBBB0IIsQV7RAfM3pAwB1JVPZns3yPEEXY7zaCCd7mSLzhFR1sJjJ7cfaZfe2/ab78x/cuuemHBmSUhqDkYhZ537LiLHmWv2T/SZAO8uDYLhctXM2CGNz3HMhoBsBq43IAA4kgaLlnj3R6+HPcVI3eT76ESeuyzZOY0a7/Sf7Vr9ay2au5/R1i9OS2FrnsOV2SMAI5guuFIw30QYhMQZ3xwt33d1j/IN7PxCp/abNV5UIrtfmaHPXG9mGx/Npbw+q2KHo9isQbOyGd4IDgere48cxbaXZuiHo2o6EiQNM0w/wCZJY2PsN0b45nmtyWyw6OOfm70fOP/AAXG645wzWO94ELf8rLbuivoYAIkrpQ7f1URIH9z8j5Nt4rsCK6xpGEvKm9LRHoqGKKMRRRtYwCwa0AN9y9w07GdxjW312QB8llRaHPbCIiEBERAEREAREQBERAEREAREQBERAEREAREQEXFKBlRDJBKLskY5jhycLZcDzUDox0XpqCMx00ezc3c4m73HdtO323DQK5RCbdUEREICIiAIiIAiIgCIiAIiIAiIgCIiALA+nJJO28X3Aiwytll5rOiCzxscz70XtEAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEXgyDiPegPaL82hxCID9REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBVk/4jvH/AEBEUMvDsskRFJU//9k=", 1, "prod-img"], ["src", "https://i.dedeman.ro/media/catalog/product/cache/dedeman/image/9df78eab33525d08d6e5fb8d27136e95/6/0/6017090_3.jpg", 1, "prod-img"], ["src", "https://frankfurt.apollo.olxcdn.com/v1/files/14mswrk65f7j-RO/image;s=1000x700", 1, "prod-img"], ["src", "https://www.hornbach.ro/data/shop/D04/001/780/491/364/151/DV_8_6667529_01_4c_RO_20180515082755.jpg", 1, "prod-img"], ["src", "https://www.hornbach.ro/data/shop/D04/001/780/494/267/43/DV_8_8344174_03_4c_RO_20180226145513.jpg", 1, "prod-img"]],
      template: function AcasaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Salbero - Producator Gard, Boltari, Pavele si prefabricate din beton ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Garduri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Placi de gard prefabricate din beton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "moderne, durabile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Boltari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Spalieri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spalieri produsi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pavele");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Fantana Arteziana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Tigla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Borduri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Tigla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Piatra Decorativa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Jardiniere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Boltari de zidarie din beton vibropresat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Vezi mai mult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#acasa-image[_ngcontent-%COMP%]{\n    width: 100%;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\np[_ngcontent-%COMP%]{\n    margin: 0;\n}\n\n.row[_ngcontent-%COMP%]{\n    background-color: #f5f5f5;\n}\n.btn[_ngcontent-%COMP%]{\n    margin-top: 5%;\n    margin-bottom: 2%;\n    border: 1px solid gray;\n}\n.prod-img[_ngcontent-%COMP%]{\n    width: 90%;\n    height: 40%;\n    float:left;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.prod-content[_ngcontent-%COMP%]{\n    margin-top: 2px;\n    margin-bottom: 5px;\n    margin-left: 5%;\n}\n.prod-menu[_ngcontent-%COMP%]{\n    width: 80%;\n    margin: auto;\n    padding: 10px;\n}\n\n@media only screen and (max-width: 337px) {\n    p[_ngcontent-%COMP%]{\n        font-size: 12px;\n    }\n    .prod-content[_ngcontent-%COMP%]{\n        margin-right: 10px;\n    }\n}\n\n@media only screen and (min-width: 729px) and (max-width: 1000px){\n    .prod-img[_ngcontent-%COMP%]{\n        width: 200px;\n        height: 150px;\n        float:left;\n        margin-left: 0px;\n        margin-right: 0px;\n    }\n    .prod-content[_ngcontent-%COMP%]{\n        margin-left: 1%;\n    }\n    .prod-menu[_ngcontent-%COMP%]{\n        width: 80%;\n        margin: auto;\n        padding: 10px;\n    }\n}\n\n@media only screen and (min-width: 1000px){\n    #acasa-image[_ngcontent-%COMP%]{\n        width: 70%;\n    }\n    .prod-img[_ngcontent-%COMP%]{\n        width: 450px;\n        height: 350px;\n        float:left;\n        margin-left: 0px;\n        margin-right: 0px;\n    }\n    .prod-content[_ngcontent-%COMP%]{\n        margin-left: 2%;\n        margin-top: 1%;\n    }\n    .prod-menu[_ngcontent-%COMP%]{\n        width: 80%;\n        margin: auto;\n        padding: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2FzYS9hY2FzYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBLG1DQUFtQztBQUNuQztJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBLHNDQUFzQztBQUN0QztJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQSxpREFBaUQ7QUFDakQ7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osYUFBYTtJQUNqQjtBQUNKO0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNhc2EvYWNhc2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2FjYXNhLWltYWdle1xuICAgIHdpZHRoOiAxMDAlO1xufVxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5we1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyotLS0tLS0tLS0tUHJvZHVzZSBBY2FzYS0tLS0tLS0tLSovXG4ucm93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uYnRue1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4ucHJvZC1pbWd7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5wcm9kLWNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4ucHJvZC1tZW51e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qLS0tLS0tLS0tU21hbGwgTW9iaWxlIFNjcmVlbi0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzdweCkge1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnByb2QtY29udGVudHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cblxuLyotLS0tLS0tLS0tVGFibGV0IGFuZCBhbG1vc3QgTGFwdG9wIFNjcmVlbi0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzI5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xuICAgIC5wcm9kLWltZ3tcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgLnByb2QtY29udGVudHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIH1cbiAgICAucHJvZC1tZW51e1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufVxuXG4vKi0tLS0tLS0tLS1MYXB0b3AgU2NyZWVuLS0tLS0tLS0tKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KXtcbiAgICAjYWNhc2EtaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5wcm9kLWltZ3tcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgLnByb2QtY29udGVudHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICB9XG4gICAgLnByb2QtbWVudXtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcasaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-acasa',
          templateUrl: './acasa.component.html',
          styleUrls: ['./acasa.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 37,
      vars: 0,
      consts: [[1, "row"], [1, "column"], ["src", "./assets/sediu.png", "alt", "sediu", 2, "width", "490px"], ["href", "tel:+40729352586", 1, "phone"], ["href", "tel:+40729333207", 1, "phone"], ["src", "../../../assets/sediu.png", "alt", "sediu", 2, "width", "490px"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Showroom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Strada Lotrului, T\xE2rgu Jiu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "salbero_srl@yahoo.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Program de lucru:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Luni-Vineri: 8:00 - 17:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "S\xE2mb\u0103t\u0103: 8:00 - 13:00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Informa\u021Bii clien\u021Bi:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+40 729 352 586");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+40 729 333 207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Showroom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DN67, Cop\u0103cioasa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".row[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.row[_ngcontent-%COMP%]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.column[_ngcontent-%COMP%] {\n    margin-left: 15%;\n    float: left;\n}\n\n.phone[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQVVBLDBFQUEwRTs7QUFDMUUsU0FBUzs7QUFDVCxpREFBaUQ7O0FBQ2pELElBQUk7O0FBRUosTUFBTTs7QUFDTiw4QkFBOEI7O0FBQzlCLElBQUk7O0FBRUoscUJBQXFCOztBQUNyQix1Q0FBdUM7O0FBQ3ZDLG1CQUFtQjs7QUFDbkIscUJBQXFCOztBQUNyQiw4QkFBOEI7O0FBQzlCLHVCQUF1Qjs7QUFDdkIsMkJBQTJCOztBQUMzQix3QkFBd0I7O0FBQ3hCLElBQUk7O0FBRUosdUJBQXVCOztBQUN2QixpQ0FBaUM7O0FBQ2pDLG9CQUFvQjs7QUFDcEIsMEJBQTBCOztBQUMxQixvQkFBb0I7O0FBQ3BCLHVCQUF1Qjs7QUFDdkIsSUFBSTs7QUFFSiw2QkFBNkI7O0FBQzdCLGlDQUFpQzs7QUFDakMsSUFBSTs7QUFFSiw0Q0FBNEM7O0FBQzVDLGVBQWU7O0FBQ2YsMEJBQTBCOztBQUMxQixpQ0FBaUM7O0FBQ2pDLHFCQUFxQjs7QUFDckIsSUFBSTs7QUFFSix3REFBd0Q7O0FBQ3hELFlBQVk7O0FBQ1osbUJBQW1COztBQUNuQixrQkFBa0I7O0FBQ2xCLHVCQUF1Qjs7QUFDdkIscUJBQXFCOztBQUNyQixJQUFJOztBQUVKLHVDQUF1Qzs7QUFDdkMsZUFBZTs7QUFDZixtQkFBbUI7O0FBQ25CLHNCQUFzQjs7QUFDdEIsbUJBQW1COztBQUNuQixJQUFJOztBQUVKLG1CQUFtQjs7QUFDbkIsa0JBQWtCOztBQUVsQixJQUFJOztBQUVKLG1KQUFtSjs7QUFDbkoseUNBQXlDOztBQUN6Qyx1QkFBdUI7O0FBQ3ZCLHdCQUF3Qjs7QUFDeEIsUUFBUTs7QUFDUixJQUFJOztBQUVKLFNBQVM7O0FBQ1Qsb0RBQW9EOztBQUNwRCxnRUFBZ0U7O0FBQ2hFLElBQUkiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3c6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb2x1bW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5waG9uZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5cblxuXG5cblxuXG5cblxuLyo8IS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2FtIGFzYSBlcmEgY29udGFjdHVsIC0tPiovXG4vKmJvZHkgeyovXG4vKiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsqL1xuLyp9Ki9cblxuLyoqIHsqL1xuLyogICAgYm94LXNpemluZzogYm9yZGVyLWJveDsqL1xuLyp9Ki9cblxuLyohKiBTdHlsZSBpbnB1dHMgKiEqL1xuLyppbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHsqL1xuLyogICAgd2lkdGg6IDEwMCU7Ki9cbi8qICAgIHBhZGRpbmc6IDEycHg7Ki9cbi8qICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7Ki9cbi8qICAgIG1hcmdpbi10b3A6IDZweDsqL1xuLyogICAgbWFyZ2luLWJvdHRvbTogMTZweDsqL1xuLyogICAgcmVzaXplOiB2ZXJ0aWNhbDsqL1xuLyp9Ki9cblxuLyppbnB1dFt0eXBlPXN1Ym1pdF0geyovXG4vKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyovXG4vKiAgICBjb2xvcjogd2hpdGU7Ki9cbi8qICAgIHBhZGRpbmc6IDEycHggMjBweDsqL1xuLyogICAgYm9yZGVyOiBub25lOyovXG4vKiAgICBjdXJzb3I6IHBvaW50ZXI7Ki9cbi8qfSovXG5cbi8qaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHsqL1xuLyogICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTsqL1xuLyp9Ki9cblxuLyohKiBTdHlsZSB0aGUgY29udGFpbmVyL2NvbnRhY3Qgc2VjdGlvbiAqISovXG4vKi5jb250YWluZXIgeyovXG4vKiAgICBib3JkZXItcmFkaXVzOiA1cHg7Ki9cbi8qICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7Ki9cbi8qICAgIHBhZGRpbmc6IDEwcHg7Ki9cbi8qfSovXG5cbi8qISogQ3JlYXRlIHR3byBjb2x1bW5zIHRoYXQgZmxvYXQgbmV4dCB0byBlYWNob3RoZXIgKiEqL1xuLyouY29sdW1uIHsqL1xuLyogICAgZmxvYXQ6IGxlZnQ7Ki9cbi8qICAgIHdpZHRoOiA1MCU7Ki9cbi8qICAgIG1hcmdpbi10b3A6IDZweDsqL1xuLyogICAgcGFkZGluZzogMjBweDsqL1xuLyp9Ki9cblxuLyohKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKiEqL1xuLyoucm93OmFmdGVyIHsqL1xuLyogICAgY29udGVudDogXCJcIjsqL1xuLyogICAgZGlzcGxheTogdGFibGU7Ki9cbi8qICAgIGNsZWFyOiBib3RoOyovXG4vKn0qL1xuXG4vKi5zdWJtaXQtYnV0dG9uIHsqL1xuLyogICAgd2lkdGg6IDQwJTsqL1xuXG4vKn0qL1xuXG4vKiEqIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqISovXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2MHB4KSB7Ki9cbi8qICAgIC5zdWJtaXQtYnV0dG9uIHsqL1xuLyogICAgICAgIHdpZHRoOiAyNSUgIDsqL1xuLyogICAgfSovXG4vKn0qL1xuXG4vKiNtYXAgeyovXG4vKiAgICBoZWlnaHQ6IDQwMHB4OyAhKiBUaGUgaGVpZ2h0IGlzIDQwMCBwaXhlbHMgKiEqL1xuLyogICAgd2lkdGg6IDEwMCU7ICEqIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICohKi9cbi8qfSovXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/despre-noi/despre-noi.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/despre-noi/despre-noi.component.ts ***!
    \***************************************************************/

  /*! exports provided: DespreNoiComponent */

  /***/
  function srcAppComponentsDespreNoiDespreNoiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DespreNoiComponent", function () {
      return DespreNoiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DespreNoiComponent = /*#__PURE__*/function () {
      function DespreNoiComponent() {
        _classCallCheck(this, DespreNoiComponent);
      }

      _createClass(DespreNoiComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DespreNoiComponent;
    }();

    DespreNoiComponent.ɵfac = function DespreNoiComponent_Factory(t) {
      return new (t || DespreNoiComponent)();
    };

    DespreNoiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DespreNoiComponent,
      selectors: [["app-despre-noi"]],
      decls: 2,
      vars: 0,
      template: function DespreNoiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "despre-noi works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVzcHJlLW5vaS9kZXNwcmUtbm9pLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DespreNoiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-despre-noi',
          templateUrl: './despre-noi.component.html',
          styleUrls: ['./despre-noi.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 35,
      vars: 0,
      consts: [["id", "footer"], [1, "container"], [1, "text-center"], [1, "list-unstyled", "quick-links"], ["href", "#"], [1, "fa", "fa-angle-double-right"], ["href", "despre-noi"], ["href", "contact"], [1, "list-unstyled", "list-inline", "social", "text-center"], [1, "list-inline-item"], ["href", "https://www.facebook.com/Salbero/?__tn__=%3C-R&eid=ARBJ4_soZFdXTaCQ3rvE5ShVP3MMCNOhPQk5GytWjDrXQbzDw60iw2G6c4rUunHYPPCIFSe1FXBxMsLP&hc_ref=ARSrgSZnoeBw2O5Jm-8zAd1Z8pybhlMXpv2jhAEeHNUumBhtLuE_M3raqS38qnASXFo&__xts__[0]=68.ARD8BI3wF93L0PrLasGp0NAfRT66IU-lbgZ3scGv_jrQBPuv1tbBCUqi-uzVNj6o6I551s4FQNzza91eYYYLpZGC2RypLOyT_gL4V5JmUYuLpTi1h7VezGSrUGlop6jJJ6LdxC12c-S5OymXXww_AKbybmuB6FwqhqFOslTLMdK4g-9uOyrL-TQFm30DNUn6fdjG_vhVOGZsjGHEJ6Ealti2MqIcz1zP4ExZ9IXiJvG59F-0JD7AqkbbdX_5mXLFoL9aVK6HNyANlLkgGWOeYWYiDI8i1yaTYva2FepiTeLEjTWBO15v6srUSy1i03Hhe21uIPjcyvMawPFThWNjaPh_Zx7M "], [1, "fa", "fa-facebook"], ["href", "https://www.fiverr.com/share/qb8D02"], [1, "fa", "fa-instagram"], ["href", "mailto:salbero_srl@yahoo.com", "target", "_blank"], [1, "fa", "fa-envelope"], ["id", "footer-copyright"], [1, "h6"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Salbero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acas\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Despre noi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Comand\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Copyright \xA9 Salbero S.R.L., Reg. Com. J18/60/2002 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%] {\n    padding: 60px 0;\n}\n\nsection[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n    color: cornflowerblue;\n    \n    text-transform: uppercase;\n}\n\n#footer[_ngcontent-%COMP%] {\n    background: #e7eff8;\n    height: 200px;\n}\n\n#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-bottom: 6px;\n    padding-top: 8px;\n    margin-bottom: 20px;\n    color:gray;\n}\n\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: gray;\n    text-decoration: none !important;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    padding: 3px 0;\n}\n\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 5px;\n    font-size:25px;\n    transition: .5s all ease;\n}\n\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size:30px;\n    margin-top:-10px;\n}\n\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color:gray;\n}\n\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color:gray;\n}\n\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    padding: 3px 0;\n    transition: .5s all ease;\n}\n\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\n    padding: 3px 0;\n    margin-left:5px;\n    font-weight:700;\n}\n\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    margin-right: 5px;\n}\n\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n\n#footer-copyright[_ngcontent-%COMP%]{\n    color: gray;\n    margin-left: 10%;\n}\n\n@media (max-width:767px){\n    #footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n        padding-left: 0;\n        border-left: transparent;\n        padding-bottom: 0px;\n        margin-bottom: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixxQ0FBcUM7QUFDekM7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFHZCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGNBQWM7SUFHZCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vdGVyICovXG5cbnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAvKm1hcmdpbi1ib3R0b206IDUwcHg7Ki9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZDogI2U3ZWZmODtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuI2Zvb3RlciBoNXtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6Z3JheTtcbn1cbiNmb290ZXIgYSB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbn1cbiNmb290ZXIgdWwuc29jaWFsIGxpe1xuICAgIHBhZGRpbmc6IDNweCAwO1xufVxuI2Zvb3RlciB1bC5zb2NpYWwgbGkgYSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6MjVweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcbiAgICAtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XG59XG4jZm9vdGVyIHVsLnNvY2lhbCBsaTpob3ZlciBhIGkge1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIG1hcmdpbi10b3A6LTEwcHg7XG59XG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhLFxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhe1xuICAgIGNvbG9yOmdyYXk7XG59XG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhOmhvdmVye1xuICAgIGNvbG9yOmdyYXk7XG59XG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xuICAgIHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcbn1cbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXJ7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgIGZvbnQtd2VpZ2h0OjcwMDtcbn1cbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYSBpe1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlciBhIGkge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNmb290ZXItY29weXJpZ2h0e1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAjZm9vdGVyIGg1IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/item/item.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/item/item.component.ts ***!
    \***************************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppComponentsItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _SharedService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../SharedService */
    "./src/app/SharedService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ItemComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function ItemComponent_div_19_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }

      if (rf & 2) {
        var img_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ItemComponent_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }

      if (rf & 2) {
        var img_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ItemComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var img_r5 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onSelect(img_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemComponent_div_19_div_1_Template, 1, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemComponent_div_19_ng_template_2_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ItemComponent_div_19_ng_template_4_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r5 = ctx.$implicit;

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", img_r5 === ctx_r4.selectedImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", img_r5 === ctx_r4.selectedImage)("ngIfThen", _r7)("ngIfElse", _r9);
      }
    }

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent(service, route) {
        _classCallCheck(this, ItemComponent);

        this.service = service;
        this.route = route;
        this.item = this.service.getItem();
        this.images = this.item.urlImage;
        this.selectedImage = this.images[0];
      }

      _createClass(ItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = String('asa ar fi ok');
          alert(this.title); // url = url.substr(8, url.length);
        }
      }, {
        key: "onSelect",
        value: function onSelect(img) {
          this.selectedImage = img;
        }
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      decls: 20,
      vars: 6,
      consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "keywords", 3, "content"], ["name", "description", 3, "content"], ["name", "author", "content", "Salbero S.R.L."], [1, "container"], [1, "row"], [1, "big-image"], ["alt", "selectedImg", 3, "src"], [1, "small-images-big-container"], ["class", "small-img-containers", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "small-img-containers", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "small-selected-img", 1, "small-img", 3, "src"], [1, "small-img", 3, "src"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Salbero - Producator Gard, Boltari, Pavele si alte prefabricate din beton ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ItemComponent_div_19_Template, 6, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("content", "gard, ", ctx.item.name, ", tigla, fantana arteziana, boltari, jardiniere, vaze, targu jiu, borduri, pavele");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("content", ctx.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%]{\n    margin-left: 5%;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 90%;\n    height: 90%;\n}\n\n.small-images-big-container[_ngcontent-%COMP%]{\n    margin-left: -14px;\n}\n\n.small-img-containers[_ngcontent-%COMP%]{\n    margin-right: 6%;\n    margin-top: 5%;\n    display: inline-block;\n}\n\n.small-img[_ngcontent-%COMP%]{\n    width: 70px;\n    height: 70px;\n    border-radius: 3px;\n}\n\n#small-selected-img[_ngcontent-%COMP%] {\n    border: 2.5px solid #0082E6;\n    width: 67px;\n    height: 67px;\n}\n\n@media only screen and (min-width: 600px)\n{\n    .big-image[_ngcontent-%COMP%]{\n        margin-left: 15%;\n        width: 60%;\n    }\n\n    .small-images-big-container[_ngcontent-%COMP%]{\n        margin-left: 15%;\n    }\n\n    .small-img[_ngcontent-%COMP%]{\n        width: 100px;\n        height: 100px;\n    }\n\n    #small-selected-img[_ngcontent-%COMP%] {\n        width: 95px;\n        height: 95px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbmltZ3tcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uc21hbGwtaW1hZ2VzLWJpZy1jb250YWluZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuXG4uc21hbGwtaW1nLWNvbnRhaW5lcnN7XG4gICAgbWFyZ2luLXJpZ2h0OiA2JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zbWFsbC1pbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3NtYWxsLXNlbGVjdGVkLWltZyB7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjMDA4MkU2O1xuICAgIHdpZHRoOiA2N3B4O1xuICAgIGhlaWdodDogNjdweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcbntcbiAgICAuYmlnLWltYWdle1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgIH1cblxuICAgIC5zbWFsbC1pbWFnZXMtYmlnLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICB9XG5cbiAgICAuc21hbGwtaW1ne1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgI3NtYWxsLXNlbGVjdGVkLWltZyB7XG4gICAgICAgIHdpZHRoOiA5NXB4O1xuICAgICAgICBoZWlnaHQ6IDk1cHg7XG4gICAgfVxufVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.css']
        }]
      }], function () {
        return [{
          type: _SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _SharedService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../SharedService */
    "./src/app/SharedService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show": a0
      };
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(service, router) {
        _classCallCheck(this, NavbarComponent);

        this.service = service;
        this.router = router;
        this.navbarDevice = false;
        this.dropdown = false;
        this.dropdownClass = '';
        this.getScreenSize();
        this.clicksOnProduse = 0;
      }

      _createClass(NavbarComponent, [{
        key: "toggleNavbar",
        value: function toggleNavbar(activate) {
          this.navbarDevice = activate;
        }
      }, {
        key: "setDropdown",
        value: function setDropdown(status) {
          this.dropdown = status;
          this.dropdownClass = !this.dropdown ? '' : 'show';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          this.service.setLink(theme);

          if (this.screenWidth > 600) {
            this.router.navigateByUrl(theme);
            this.setDropdown(false);
          } else {
            if (this.clicksOnProduse > 0) {
              this.setDropdown(false);
              this.toggleNavbar(false);
              this.router.navigateByUrl(theme);
              this.clicksOnProduse = 0;
            } else {
              this.clicksOnProduse++;
            }
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
            return ctx.getScreenSize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 46,
      vars: 6,
      consts: [["id", "wrap-phone"], ["id", "phone-icon", "src", "../../../assets/phone.png"], ["id", "first-phone", "href", "tel:+40729352586", 1, "phone"], ["href", "tel:+40729333207", 1, "phone"], [1, "navbar", "navbar-expand-md", "navbar-light", "navbar-custom"], ["id", "nav-dropdown", "type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto", "navbar-dark", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "", 1, "nav-link", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "dropdown", 3, "mouseenter", "mouseleave"], ["id", "navbarDropdownMenuLink", 1, "nav-link", "dropdown-toggle", 3, "click"], ["ngbDropdownMenu", "", 2, "margin-top", "0", 3, "click"], ["href", "#", 1, "dropdown-item", 2, "color", "black", "font-weight", "300"], ["routerLink", "despre-noi", 1, "nav-link", 3, "click"], ["routerLink", "contact", 1, "nav-link", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " +40 729 352 586");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " / +40 729 333 207");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() {
            return ctx.toggleNavbar(!ctx.navbarDevice);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meniu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() {
            return ctx.toggleNavbar(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acas\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavbarComponent_Template_li_mouseenter_16_listener() {
            return ctx.setDropdown(true);
          })("mouseleave", function NavbarComponent_Template_li_mouseleave_16_listener() {
            return ctx.setDropdown(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() {
            return ctx.setTheme("produse");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Produse ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_19_listener() {
            return ctx.setDropdown(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Gard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Spalieri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bol\u021Bari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pavele");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u021Aigl\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Borduri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Caciuli si Coame gard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fantan\u0103 Artezian\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Piatr\u0103 Decorativ\u0103");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jardiniere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_41_listener() {
            return ctx.toggleNavbar(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Despre noi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_44_listener() {
            return ctx.toggleNavbar(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.navbarDevice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.dropdownClass);
        }
      },
      directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"]],
      styles: [".navbar[_ngcontent-%COMP%]{\n    height: 2.8em;\n    margin-top: 1.2em;\n}\n\n.navbar-light[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: white; \n    font-weight: 400;\n}\n\n.navbar-custom[_ngcontent-%COMP%]{\n    background-color: #0082E6 ;\n}\n\n.navbar-collapse[_ngcontent-%COMP%]{\n    padding-right: 10%;\n}\n\n.navbar-nav[_ngcontent-%COMP%]{\n    margin-left: 8%;\n}\n\n\n\n#nav-dropdown[_ngcontent-%COMP%]{\n    margin-top: -1.2%;\n    background-color: #0082E6;\n    border: none;\n    outline: 0;\n    color: #e6e6e6;\n}\n\n#navbarNavDropdown[_ngcontent-%COMP%]{\n    background-color: #0082E6; \n    text-align: right;\n}\n\n\n\n#wrap-phone[_ngcontent-%COMP%]{\n    text-align: right;\n    margin-top: 3%;\n}\n\n.phone[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n    margin-right: 5%;\n}\n\n#first-phone[_ngcontent-%COMP%]{\n    margin-right: 0%;\n}\n\n#phone-icon[_ngcontent-%COMP%]{\n    width: 20px;\n}\n\n@media only screen and (min-width: 768px) {\n    #wrap-phone[_ngcontent-%COMP%]{\n        text-align: right;\n        margin-top: 0.5%;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCLENBQUMsd0JBQXdCO0FBQ3ZEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQSw2QkFBNkI7O0FBQzdCO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSx1REFBdUQ7SUFDbEYsaUJBQWlCO0FBQ3JCOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZLENBQUMsV0FBVztJQUN4QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7OztBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGhlaWdodDogMi44ZW07XG4gICAgbWFyZ2luLXRvcDogMS4yZW07XG59XG5cbi5uYXZiYXItbGlnaHQgbGkgYXtcbiAgICBjb2xvcjogd2hpdGU7IC8qIzI0MjQyNDsqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uYXZiYXItY3VzdG9te1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyRTYgOy8qIzAwODJFNiAtIG5vdCBsaWdodGVyKi9cbn1cblxuLm5hdmJhci1jb2xsYXBzZXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5uYXZiYXItbmF2e1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cbi8qLS0tLS0tRFJPUERPV04gSEVSRS0tLS0tLS0qL1xuI25hdi1kcm9wZG93bntcbiAgICBtYXJnaW4tdG9wOiAtMS4yJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MkU2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiAjZTZlNmU2O1xufVxuXG4jbmF2YmFyTmF2RHJvcGRvd257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODJFNjsgLypzbWFsbCBzY3JlZW4gbWVudSwgbWFrZSB0aGlzIFwid2hpdGVcIiwgaWYgY29sb3I9YmxhY2sqL1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tUGhvbmUgTnVtYmVyLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4jd3JhcC1waG9uZXtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5waG9uZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrOy8qIzAwODJFNjsqL1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG4jZmlyc3QtcGhvbmV7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbn1cbiNwaG9uZS1pY29ue1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3dyYXAtcGhvbmV7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjUlO1xuICAgIH1cblxuXG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _SharedService__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        getScreenSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/produse/produse.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/produse/produse.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProduseComponent */

  /***/
  function srcAppComponentsProduseProduseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProduseComponent", function () {
      return ProduseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_lista_produse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/lista_produse */
    "./src/app/lista_produse.ts");
    /* harmony import */


    var _SharedService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../SharedService */
    "./src/app/SharedService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/produse", a1];
    };

    function ProduseComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProduseComponent_div_3_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var Produs_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.goItem(Produs_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go somewhere");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var Produs_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", Produs_r1.urlImage[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Produs_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, Produs_r1.name));
      }
    }

    var ProduseComponent = /*#__PURE__*/function () {
      function ProduseComponent(service, router) {
        _classCallCheck(this, ProduseComponent);

        this.service = service;
        this.router = router;
        this.produse = src_app_lista_produse__WEBPACK_IMPORTED_MODULE_1__["listaProduse"];
      }

      _createClass(ProduseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getTheme",
        value: function getTheme() {
          return this.service.getLink();
        }
      }, {
        key: "goItem",
        value: function goItem(produs) {
          this.service.setItem(produs);
        }
      }]);

      return ProduseComponent;
    }();

    ProduseComponent.ɵfac = function ProduseComponent_Factory(t) {
      return new (t || ProduseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProduseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProduseComponent,
      selectors: [["app-produse"]],
      decls: 4,
      vars: 1,
      consts: [[2, "margin-left", "20%", "margin-right", "20%", "background-color", "#0082E6"], ["class", "card", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], ["routerLinkActive", "active", 1, "btn", "btn-primary", 3, "routerLink", "click"]],
      template: function ProduseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Produse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProduseComponent_div_3_Template, 7, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produse);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".card[_ngcontent-%COMP%] {\n    position: static;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdXNlL3Byb2R1c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVzZS9wcm9kdXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProduseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-produse',
          templateUrl: './produse.component.html',
          styleUrls: ['./produse.component.css']
        }]
      }], function () {
        return [{
          type: _SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lista_produse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../lista_produse */
    "./src/app/lista_produse.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.results = _lista_produse__WEBPACK_IMPORTED_MODULE_1__["listaProduse"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](); // for (let i = 0; i < listaProduse.length; i++) {
        //   this.options[i] = listaProduse[i].name;
        // }
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this._filter(value);
          }));
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLocaleLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "displayFn",
        value: function displayFn(subject) {
          return subject ? subject.name : undefined;
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 8,
      vars: 1,
      consts: [["id", "upper-navbar", 1, "navbar"], ["href", "", 1, "navbar-brand"], [1, "wrap"], [1, "search"], ["type", "text", "placeholder", "Caut\u0103 un produs", 1, "searchTerm", 3, "formControl"], ["type", "submit", 1, "searchButton"], [1, "fa", "fa-search"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SALBERO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]],
      styles: [".navbar[_ngcontent-%COMP%]{\n    height: 2.8em;\n    margin-top: 1.2em;\n}\n.navbar-brand[_ngcontent-%COMP%]{\n    color: black;\n    margin-left: 8%;\n}\n\n.wrap[_ngcontent-%COMP%]{\n    width: 30%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.search[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    margin-right: -93%;\n    margin-top: 8%;\n    padding-left: 18%;\n}\n.searchTerm[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #0082E6;\n    border-right: none;\n    padding: 5px;\n    border-radius: 5px 0 0 5px;\n    outline: none;\n    color: #3b3b3b;\n}\n.searchButton[_ngcontent-%COMP%] {\n    width: 2em;\n    border: 1px solid #0082E6;\n    background: #0082E6;\n    text-align: center;\n    color: #fff;\n    border-radius: 0 5px 5px 0 ;\n    cursor: pointer;\n    font-size: 20px;\n    outline: 0;\n}\n@media only screen and (min-width: 768px) {\n\n    #upper-navbar[_ngcontent-%COMP%]{\n        margin-top: -1%;\n    }\n    .wrap[_ngcontent-%COMP%]{\n        width: 30%;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    .search[_ngcontent-%COMP%] {\n        width: 100%;\n        position: relative;\n        display: flex;\n    }\n\n    .searchTerm[_ngcontent-%COMP%] {\n        width: 100%;\n        border: 1px solid #0082E6;\n        border-right: none;\n        padding: 5px;\n        border-radius: 5px 0 0 5px;\n        outline: none;\n        color: #3b3b3b;\n    }\n\n    .searchButton[_ngcontent-%COMP%] {\n        width: 2em;\n        border: 1px solid #0082E6;\n        background: #0082E6;\n        text-align: center;\n        color: #fff;\n        border-radius: 0 5px 5px 0 ;\n        cursor: pointer;\n        font-size: 20px;\n        outline: 0;\n    }\n}\n@media only screen and (min-width: 1024px){\n    .wrap[_ngcontent-%COMP%]{\n        margin-top: -0.5%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUVBLGlEQUFpRDtBQUNqRDtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBR0E7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixlQUFlO1FBQ2YsVUFBVTtJQUNkO0FBQ0o7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgaGVpZ2h0OiAyLjhlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjJlbTtcbn1cbi5uYXZiYXItYnJhbmR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVNlYXJjaCBib3gtLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi53cmFwe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtOTMlO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHBhZGRpbmctbGVmdDogMTglO1xufVxuXG4uc2VhcmNoVGVybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJFNjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICMzYjNiM2I7XG59XG5cbi5zZWFyY2hCdXR0b24ge1xuICAgIHdpZHRoOiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJFNjtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4MkU2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMCA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdXRsaW5lOiAwO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgICN1cHBlci1uYXZiYXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xJTtcbiAgICB9XG4gICAgLndyYXB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLnNlYXJjaCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnNlYXJjaFRlcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJFNjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogIzNiM2IzYjtcbiAgICB9XG5cbiAgICAuc2VhcmNoQnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJFNjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODJFNjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDAgO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xuICAgIC53cmFwe1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC41JTtcbiAgICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lista_produse.ts":
  /*!**********************************!*\
    !*** ./src/app/lista_produse.ts ***!
    \**********************************/

  /*! exports provided: listaProduse */

  /***/
  function srcAppLista_produseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listaProduse", function () {
      return listaProduse;
    });

    var listaProduse = [// tslint:disable-next-line:max-line-length
    {
      urlImage: ['../../../assets/sediu.png', '../../../assets/unnamed.jpg', '../../../assets/unamed2.jpg'],
      description: 'descriere',
      name: 'Boltari',
      details: 'detalii'
    }, // tslint:disable-next-line:max-line-length
    {
      urlImage: ['../../../assets/sediu.png', '../../../assets/unnamed.jpg', '../../../assets/unamed2.jpg'],
      description: 'descriere',
      name: 'Tigle',
      details: 'detalii'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/razvan/Desktop/Salbero/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map