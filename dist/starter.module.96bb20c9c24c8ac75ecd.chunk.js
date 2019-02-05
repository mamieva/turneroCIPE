webpackJsonp(["starter.module"],{

/***/ "../../../../../src/app/starter/starter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_material_module__ = __webpack_require__("../../../../../src/app/demo-material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__starter_component__ = __webpack_require__("../../../../../src/app/starter/starter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starter_routing__ = __webpack_require__("../../../../../src/app/starter/starter.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_inbox_service__ = __webpack_require__("../../../../../src/app/services/inbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_lookupService_service__ = __webpack_require__("../../../../../src/app/services/lookupService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_office_service__ = __webpack_require__("../../../../../src/app/services/office.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StarterModule = (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__demo_material_module__["a" /* DemoMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__starter_routing__["a" /* StarterRoutes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__starter_component__["a" /* StarterComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_inbox_service__["a" /* InboxService */],
                __WEBPACK_IMPORTED_MODULE_9__services_lookupService_service__["a" /* lookupService */],
                __WEBPACK_IMPORTED_MODULE_10__services_office_service__["a" /* OfficeService */]
            ]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ }),

/***/ "../../../../../src/app/starter/starter.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__starter_component__ = __webpack_require__("../../../../../src/app/starter/starter.component.ts");

var StarterRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__starter_component__["a" /* StarterComponent */]
    }];


/***/ })

});
//# sourceMappingURL=starter.module.96bb20c9c24c8ac75ecd.chunk.js.map