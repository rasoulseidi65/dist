(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us/about-us.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us/about-us.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top-menu></app-top-menu>\r\n<app-center-menu></app-center-menu>\r\n<app-menu></app-menu>\r\n<!--!&#45;&#45;start-about-us&ndash;&gt;-->\r\n<div class=\"container\">\r\n  <div class=\"col-md-4 \">\r\n    <div class=\"row row-about-top\">\r\n      <div class=\"caption\">\r\n        <span>درباره تیم همراه دانش</span>\r\n      </div>\r\n      <img class=\"img-responsive center-block\" src=\"../../../assets/bootstrap/img/about.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"row row-about-down text-center\">\r\n      <span>چرا همراه دانش؟</span>\r\n      <p>این سوال خیلی برای کاربران ما پیش تمده و حتا برای شما چرا باید از همراه دانش استفاده کنیم.</p>\r\n      <p>1.همراه دانش فقط یک پلتفرم ارائه ویدئوی آموزشی نیست، ما در بنیاد علمی آموزشی همراه دانش پس از شناسایی نقاط قوت بازار کار با ارائه آموزش های مرتبط، دانشجو را به سمت بازار کار سوق میدهیم.</p>\r\n      <p>2.یعنی آموزش های همراه دانش بر پایه ی استانداردها و موارد مورد نیاز در بازار کار برنامه نویسی جهت رفع خلع بین دانشگاه و صنعت، تولید و عرضه شده است.</p>\r\n      <p>3.آموزش ها ضمن پوشش موارد تئوری مورد نیاز ، روی جنبه عملی و پروژه محور بودن تمرکز دارد.</p>\r\n      <p>4. اساتید همراه دانش از خبرگان و افراد مورد تایید با تجربه در بازار کار برنامه نویسی انتخاب می شوند.</p>\r\n      <p>5.پکیج های ویژه آموزشی همراه دانش که در نوع خود از نظر کمی و کیفی بینظیر است با همین رویکرد سرفصل بندی و از مقدماتی ترین نکات برای افراد مبتدی تا حرفه ای ترین قسمت های انجام پروژه های مرسوم در بازار کار را پوشش می دهد.</p>\r\n      <p>6. پس اگر شما هم برای آینده خود در حال برنامه ریزی هستید و یا در حال پایه ریزی استارت آپ خود می باشید ، آموزش های پروژه محور و پکیج های آموزشی همراه دانش یکی از راه های رسیدن به هدف و اقدامی ۱۰۰ درصد عملیاتیست.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--and-about-us-->\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about/about-us/about-us.component.ts");




const routes = [
    {
        path: '',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    }
];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutRoutingModule);



/***/ }),

/***/ "./src/app/about/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/about/about-us/about-us.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*star-about-us*/\r\n.container{\r\n  text-align: center;\r\n}\r\n.container .row-about-top .caption{\r\n  margin-top: 40px;\r\n  font-family: IRANSans_Bold;\r\n  font-size: 24px;\r\n}\r\n.container .row-about-down{\r\n  font-family: IRANSans_Light;\r\n  line-height: 2;\r\n  text-align: justify;\r\n  margin-top: 40px;\r\n}\r\n.container .row-about-down span{\r\n  font-family: IRANSans_Bold;\r\n}\r\n/*end-about-us*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQSxlQUFlIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qc3Rhci1hYm91dC11cyovXHJcbi5jb250YWluZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hYm91dC10b3AgLmNhcHRpb257XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWFib3V0LWRvd257XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYWJvdXQtZG93biBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG59XHJcbi8qZW5kLWFib3V0LXVzKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/about/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about/about-us/about-us.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");






let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
        ]
    })
], AboutModule);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map