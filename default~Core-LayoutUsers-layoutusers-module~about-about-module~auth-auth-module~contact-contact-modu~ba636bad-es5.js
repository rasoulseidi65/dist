function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Core-LayoutUsers-layoutusers-module~about-about-module~auth-auth-module~contact-contact-modu~ba636bad"], {
  /***/
  "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js ***!
    \************************************************************************/

  /*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */

  /***/
  function node_modulesNgxOwlCarouselOFesm2015NgxOwlCarouselOJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
      return CarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function () {
      return CarouselSlideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function () {
      return OwlRouterLinkDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function () {
      return OwlRouterLinkWithHrefDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function () {
      return SlidesOutputData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NavigationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CarouselService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return OwlLogger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return AutoplayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return WINDOW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return WindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return BrowserWindowRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return windowFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return browserWindowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return windowProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return WINDOW_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return DocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return BrowserDocumentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return documentFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return browserDocumentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return documentProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return DOCUMENT_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return LazyLoadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return AnimateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return AutoHeightService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return HashService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return ResizeService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return StageComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var ResizeService = /*#__PURE__*/function () {
      function ResizeService(eventManager) {
        _classCallCheck(this, ResizeService);

        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
      }
      /**
       * Makes resizeSubject become Observable
       * @returns Observable of resizeSubject
       */


      _createClass(ResizeService, [{
        key: "onResize",

        /**
         * Handler of 'resize' event. Passes data throw resizeSubject
         * @param event Event Object of 'resize' event
         */
        value: function onResize(event) {
          this.resizeSubject.next(event.target);
        }
        /**
         * Handler of 'onload' event. Defines the width of window
         * @param event Event Object of 'onload' event
         */

      }, {
        key: "onLoaded",
        value: function onLoaded(event) {
          this.windowWidth = event.target;
        }
      }, {
        key: "onResize$",
        get: function get() {
          return this.resizeSubject.asObservable();
        }
      }]);

      return ResizeService;
    }();

    ResizeService.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"]
      }];
    };

    ResizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ResizeService);
    /**
     * Defaults value of options
     */

    var OwlCarouselOConfig = function OwlCarouselOConfig() {
      _classCallCheck(this, OwlCarouselOConfig);

      this.items = 3;
      this.skip_validateItems = false;
      this.loop = false;
      this.center = false;
      this.rewind = false;
      this.mouseDrag = true;
      this.touchDrag = true;
      this.pullDrag = true;
      this.freeDrag = false;
      this.margin = 0;
      this.stagePadding = 0;
      this.merge = false;
      this.mergeFit = true;
      this.autoWidth = false;
      this.startPosition = 0;
      this.rtl = false;
      this.smartSpeed = 250;
      this.fluidSpeed = false;
      this.dragEndSpeed = false;
      this.responsive = {};
      this.responsiveRefreshRate = 200; // defaults to Navigation

      this.nav = false;
      this.navText = ['prev', 'next'];
      this.navSpeed = false;
      this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = true;
      this.dotsEach = false;
      this.dotsData = false;
      this.dotsSpeed = false; // defaults to Autoplay

      this.autoplay = false;
      this.autoplayTimeout = 5000;
      this.autoplayHoverPause = false;
      this.autoplaySpeed = false; // defaults to LazyLoading

      this.lazyLoad = false;
      this.lazyLoadEager = 0; // defaults to Animate

      this.slideTransition = '';
      this.animateOut = false;
      this.animateIn = false; // defaults to AutoHeight

      this.autoHeight = false; // defaults to Hash

      this.URLhashListener = false;
    };
    /**
     * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
     * class below is copy of OwlOptions but its all props have string value showing certain type;
     * this is class is being used just in method _validateOptions() of CarouselService;
     */


    var OwlOptionsMockedTypes = function OwlOptionsMockedTypes() {
      _classCallCheck(this, OwlOptionsMockedTypes);

      this.items = 'number';
      this.skip_validateItems = 'boolean';
      this.loop = 'boolean';
      this.center = 'boolean';
      this.rewind = 'boolean';
      this.mouseDrag = 'boolean';
      this.touchDrag = 'boolean';
      this.pullDrag = 'boolean';
      this.freeDrag = 'boolean';
      this.margin = 'number';
      this.stagePadding = 'number';
      this.merge = 'boolean';
      this.mergeFit = 'boolean';
      this.autoWidth = 'boolean';
      this.startPosition = 'number|string';
      this.rtl = 'boolean';
      this.smartSpeed = 'number';
      this.fluidSpeed = 'boolean';
      this.dragEndSpeed = 'number|boolean';
      this.responsive = {};
      this.responsiveRefreshRate = 'number'; // defaults to Navigation

      this.nav = 'boolean';
      this.navText = 'string[]';
      this.navSpeed = 'number|boolean';
      this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide

      this.dots = 'boolean';
      this.dotsEach = 'number|boolean';
      this.dotsData = 'boolean';
      this.dotsSpeed = 'number|boolean'; // defaults to Autoplay

      this.autoplay = 'boolean';
      this.autoplayTimeout = 'number';
      this.autoplayHoverPause = 'boolean';
      this.autoplaySpeed = 'number|boolean'; // defaults to LazyLoading

      this.lazyLoad = 'boolean';
      this.lazyLoadEager = 'number'; // defaults to Animate

      this.slideTransition = 'string';
      this.animateOut = 'string|boolean';
      this.animateIn = 'string|boolean'; // defaults to AutoHeight

      this.autoHeight = 'boolean'; // defaults to Hash

      this.URLhashListener = "boolean";
    };

    var OwlLogger = /*#__PURE__*/function () {
      function OwlLogger(errorHandler) {
        _classCallCheck(this, OwlLogger);

        this.errorHandler = errorHandler;
      }

      _createClass(OwlLogger, [{
        key: "log",
        value: function log(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            var _console;

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(_console, [value].concat(rest));
          }
        }
      }, {
        key: "error",
        value: function error(_error) {
          this.errorHandler.handleError(_error);
        }
      }, {
        key: "warn",
        value: function warn(value) {
          var _console2;

          for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).warn.apply(_console2, [value].concat(rest));
        }
      }]);

      return OwlLogger;
    }();

    OwlLogger.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]
      }];
    };

    OwlLogger = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], OwlLogger);
    /**
     * Current state information and their tags.
     */

    var States = function States() {
      _classCallCheck(this, States);
    };
    /**
     * Enumeration for types.
     * @enum {String}
     */


    var Type;

    (function (Type) {
      Type["Event"] = "event";
      Type["State"] = "state";
    })(Type || (Type = {}));

    ;
    /**
     * Enumeration for width.
     * @enum {String}
     */

    var Width;

    (function (Width) {
      Width["Default"] = "default";
      Width["Inner"] = "inner";
      Width["Outer"] = "outer";
    })(Width || (Width = {}));

    ;
    /**
     * Model for coords of .owl-stage
     */

    var Coords = function Coords() {
      _classCallCheck(this, Coords);
    };
    /**
     * Model for all current data of carousel
     */


    var CarouselCurrentData = function CarouselCurrentData() {
      _classCallCheck(this, CarouselCurrentData);
    };

    var CarouselService = /*#__PURE__*/function () {
      function CarouselService(logger) {
        var _this = this;

        _classCallCheck(this, CarouselService);

        this.logger = logger;
        /**
        * Subject for passing data needed for managing View
        */

        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel got initializes
        */

        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings start changinf
        */

        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's settings have changed
        */

        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel starts translating or moving
        */

        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel stopped translating or moving
        */

        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
        */

        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
        */

        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel starts
        */

        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the refresh of carousel is ended
        */

        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel starts
        */

        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
        * Subject for notification when the dragging of carousel is ended
        */

        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Current settings for the carousel.
         */

        this.settings = {
          items: 0
        };
        /**
        * Initial data for setting classes to element .owl-carousel
        */

        this.owlDOMData = {
          rtl: false,
          isResponsive: false,
          isRefreshed: false,
          isLoaded: false,
          isLoading: false,
          isMouseDragable: false,
          isGrab: false,
          isTouchDragable: false
        };
        /**
        * Initial data of .owl-stage
        */

        this.stageData = {
          transform: 'translate3d(0px,0px,0px)',
          transition: '0s',
          width: 0,
          paddingL: 0,
          paddingR: 0
        };
        /**
         * All real items.
         */

        this._items = []; // is equal to this.slides

        /**
        * Array with width of every slide.
        */

        this._widths = [];
        /**
        * Currently suppressed events to prevent them from beeing retriggered.
        */

        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */

        this._plugins = {};
        /**
        * Absolute current position.
        */

        this._current = null;
        /**
        * All cloned items.
        */

        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */

        this._mergers = [];
        /**
        * Animation speed in milliseconds.
        */

        this._speed = null;
        /**
        * Coordinates of all items in pixel.
        * @todo The name of this member is missleading.
        */

        this._coordinates = [];
        /**
        * Current breakpoint.
        * @todo Real media queries would be nice.
        */

        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */

        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */

        this._options = {};
        /**
         * Invalidated parts within the update process.
         */

        this._invalidated = {};
        /**
         * Current state information and their tags.
         */

        this._states = {
          current: {},
          tags: {
            initializing: ['busy'],
            animating: ['busy'],
            dragging: ['interacting']
          }
        };
        /**
         * Ordered list of workers for the update process.
        */

        this._pipe = [// {
        //   filter: ['width', 'settings'],
        //   run: () => {
        //     this._width = this.carouselWindowWidth;
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
          }
        }, // {
        //   filter: ['items', 'settings'],
        //   run: function() {
        //     // this.$stage.children('.cloned').remove();
        //   }
        // },
        {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var margin = _this.settings.margin || '',
                grid = !_this.settings.autoWidth,
                rtl = _this.settings.rtl,
                css = {
              'margin-left': rtl ? margin : '',
              'margin-right': rtl ? '' : margin
            };

            if (!grid) {
              _this.slidesData.forEach(function (slide) {
                slide.marginL = css['margin-left'];
                slide.marginR = css['margin-right'];
              });
            }

            cache.css = css;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin,
                grid = !_this.settings.autoWidth,
                widths = [];
            var merge = null,
                iterator = _this._items.length;
            cache.items = {
              merge: false,
              width: width
            };

            while (iterator--) {
              merge = _this._mergers[iterator];
              merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
            }

            _this._widths = widths;

            _this.slidesData.forEach(function (slide, i) {
              slide.width = _this._widths[i];
              slide.marginR = cache.css['margin-right'];
              slide.marginL = cache.css['margin-left'];
            });
          }
        }, {
          filter: ['items', 'settings'],
          run: function run() {
            var clones = [],
                items = _this._items,
                settings = _this.settings,
                // TODO: Should be computed from number of min width items in stage
            view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2;
            var append = [],
                prepend = [],
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
            repeat /= 2;

            while (repeat--) {
              // Switch to only using appended clones
              clones.push(_this.normalize(clones.length / 2, true));
              append.push(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
              clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend.unshift(Object.assign({}, _this.slidesData[clones[clones.length - 1]]));
            }

            _this._clones = clones;
            append = append.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            prepend = prepend.map(function (slide) {
              slide.id = "".concat(_this.clonedIdPrefix).concat(slide.id);
              slide.isActive = false;
              slide.isCloned = true;
              return slide;
            });
            _this.slidesData = prepend.concat(_this.slidesData).concat(append);
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                size = _this._clones.length + _this._items.length,
                coordinates = [];
            var iterator = -1,
                previous = 0,
                current = 0;

            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
              coordinates.push(previous + current * rtl);
            }

            _this._coordinates = coordinates;
          }
        }, {
          filter: ['width', 'items', 'settings'],
          run: function run() {
            var padding = _this.settings.stagePadding,
                coordinates = _this._coordinates,
                css = {
              'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              'padding-left': padding || '',
              'padding-right': padding || ''
            };
            _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element

            _this.stageData.paddingL = css['padding-left'];
            _this.stageData.paddingR = css['padding-right'];
          }
        }, {
          //   filter: [ 'width', 'items', 'settings' ],
          //   run: cache => {
          // 		// this method sets the width for every slide, but I set it in different way earlier
          // 		const grid = !this.settings.autoWidth,
          // 		items = this.$stage.children(); // use this.slidesData
          //     let iterator = this._coordinates.length;
          //     if (grid && cache.items.merge) {
          //       while (iterator--) {
          //         cache.css.width = this._widths[this.relative(iterator)];
          //         items.eq(iterator).css(cache.css);
          //       }
          //     } else if (grid) {
          //       cache.css.width = cache.items.width;
          //       items.css(cache.css);
          //     }
          //   }
          // }, {
          //   filter: [ 'items' ],
          //   run: function() {
          //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
          //   }
          // }, {
          filter: ['width', 'items', 'settings'],
          run: function run(cache) {
            var current = cache.current ? _this.slidesData.findIndex(function (slide) {
              return slide.id === cache.current;
            }) : 0;
            current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));

            _this.reset(current);
          }
        }, {
          filter: ['position'],
          run: function run() {
            _this.animate(_this.coordinates(_this._current));
          }
        }, {
          filter: ['width', 'position', 'items', 'settings'],
          run: function run() {
            var rtl = _this.settings.rtl ? 1 : -1,
                padding = _this.settings.stagePadding * 2,
                matches = [];
            var begin, end, inner, outer, i, n;
            begin = _this.coordinates(_this.current());

            if (typeof begin === 'number') {
              begin += padding;
            } else {
              begin = 0;
            }

            end = begin + _this.width() * rtl;

            if (rtl === -1 && _this.settings.center) {
              var result = _this._coordinates.filter(function (element) {
                return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
              });

              begin = result.length ? result[result.length - 1] : begin;
            }

            for (i = 0, n = _this._coordinates.length; i < n; i++) {
              inner = Math.ceil(_this._coordinates[i - 1] || 0);
              outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);

              if (_this._op(inner, '<=', begin) && _this._op(inner, '>', end) || _this._op(outer, '<', begin) && _this._op(outer, '>', end)) {
                matches.push(i);
              }
            }

            _this.slidesData.forEach(function (slide) {
              slide.isActive = false;
              return slide;
            });

            matches.forEach(function (item) {
              _this.slidesData[item].isActive = true;
            });

            if (_this.settings.center) {
              _this.slidesData.forEach(function (slide) {
                slide.isCentered = false;
                return slide;
              });

              _this.slidesData[_this.current()].isCentered = true;
            }
          }
        }];
      } // Is needed for tests


      _createClass(CarouselService, [{
        key: "getViewCurSettings",

        /**
         * Makes _viewSettingsShipper$ Subject become Observable
         * @returns Observable of _viewSettingsShipper$ Subject
         */
        value: function getViewCurSettings() {
          return this._viewSettingsShipper$.asObservable();
        }
        /**
         * Makes _initializedCarousel$ Subject become Observable
         * @returns Observable of _initializedCarousel$ Subject
         */

      }, {
        key: "getInitializedState",
        value: function getInitializedState() {
          return this._initializedCarousel$.asObservable();
        }
        /**
         * Makes _changeSettingsCarousel$ Subject become Observable
         * @returns Observable of _changeSettingsCarousel$ Subject
         */

      }, {
        key: "getChangeState",
        value: function getChangeState() {
          return this._changeSettingsCarousel$.asObservable();
        }
        /**
         * Makes _changedSettingsCarousel$ Subject become Observable
         * @returns Observable of _changedSettingsCarousel$ Subject
         */

      }, {
        key: "getChangedState",
        value: function getChangedState() {
          return this._changedSettingsCarousel$.asObservable();
        }
        /**
         * Makes _translateCarousel$ Subject become Observable
         * @returns Observable of _translateCarousel$ Subject
         */

      }, {
        key: "getTranslateState",
        value: function getTranslateState() {
          return this._translateCarousel$.asObservable();
        }
        /**
         * Makes _translatedCarousel$ Subject become Observable
         * @returns Observable of _translatedCarousel$ Subject
         */

      }, {
        key: "getTranslatedState",
        value: function getTranslatedState() {
          return this._translatedCarousel$.asObservable();
        }
        /**
         * Makes _resizeCarousel$ Subject become Observable
         * @returns Observable of _resizeCarousel$ Subject
         */

      }, {
        key: "getResizeState",
        value: function getResizeState() {
          return this._resizeCarousel$.asObservable();
        }
        /**
         * Makes _resizedCarousel$ Subject become Observable
         * @returns Observable of _resizedCarousel$ Subject
         */

      }, {
        key: "getResizedState",
        value: function getResizedState() {
          return this._resizedCarousel$.asObservable();
        }
        /**
         * Makes _refreshCarousel$ Subject become Observable
         * @returns Observable of _refreshCarousel$ Subject
         */

      }, {
        key: "getRefreshState",
        value: function getRefreshState() {
          return this._refreshCarousel$.asObservable();
        }
        /**
         * Makes _refreshedCarousel$ Subject become Observable
         * @returns Observable of _refreshedCarousel$ Subject
         */

      }, {
        key: "getRefreshedState",
        value: function getRefreshedState() {
          return this._refreshedCarousel$.asObservable();
        }
        /**
         * Makes _dragCarousel$ Subject become Observable
         * @returns Observable of _dragCarousel$ Subject
         */

      }, {
        key: "getDragState",
        value: function getDragState() {
          return this._dragCarousel$.asObservable();
        }
        /**
         * Makes _draggedCarousel$ Subject become Observable
         * @returns Observable of _draggedCarousel$ Subject
         */

      }, {
        key: "getDraggedState",
        value: function getDraggedState() {
          return this._draggedCarousel$.asObservable();
        }
        /**
         * Setups custom options expanding default options
         * @param options custom options
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          var configOptions = new OwlCarouselOConfig();

          var checkedOptions = this._validateOptions(options, configOptions);

          this._options = Object.assign({}, configOptions, checkedOptions);
        }
        /**
         * Checks whether user's option are set properly. Cheking is based on typings;
         * @param options options set by user
         * @param configOptions default options
         * @returns checked and modified (if it's needed) user's options
         *
         * Notes:
         * 	- if user set option with wrong type, it'll be written in console
         */

      }, {
        key: "_validateOptions",
        value: function _validateOptions(options, configOptions) {
          var _this2 = this;

          var checkedOptions = Object.assign({}, options);
          var mockedTypes = new OwlOptionsMockedTypes();

          var setRightOption = function setRightOption(type, key) {
            _this2.logger.log("options.".concat(key, " must be type of ").concat(type, "; ").concat(key, "=").concat(options[key], " skipped to defaults: ").concat(key, "=").concat(configOptions[key]));

            return configOptions[key];
          };

          for (var key in checkedOptions) {
            if (checkedOptions.hasOwnProperty(key)) {
              // condition could be shortened but it gets harder for understanding
              if (mockedTypes[key] === 'number') {
                if (this._isNumeric(checkedOptions[key])) {
                  checkedOptions[key] = +checkedOptions[key];
                  checkedOptions[key] = key === 'items' ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              } else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|boolean' && !this._isNumberOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'number|string' && !this._isNumberOrString(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string|boolean' && !this._isStringOrBoolean(checkedOptions[key])) {
                checkedOptions[key] = setRightOption(mockedTypes[key], key);
              } else if (mockedTypes[key] === 'string[]') {
                if (Array.isArray(checkedOptions[key])) {
                  var isString = false;
                  checkedOptions[key].forEach(function (element) {
                    isString = typeof element === 'string' ? true : false;
                  });

                  if (!isString) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                  }

                  ;
                } else {
                  checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
              }
            }
          }

          return checkedOptions;
        }
        /**
         * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
         * @param items option items set by user
         * @param skip_validateItems option `skip_validateItems` set by user
         * @returns right number of items
         */

      }, {
        key: "_validateItems",
        value: function _validateItems(items, skip_validateItems) {
          var result = items;

          if (items > this._items.length) {
            if (skip_validateItems) {
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            } else {
              result = this._items.length;
              this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
          } else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
              this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
          }

          return result;
        }
        /**
         * Set current width of carousel
         * @param width width of carousel Window
         */

      }, {
        key: "setCarouselWidth",
        value: function setCarouselWidth(width) {
          this._width = width;
        }
        /**
           * Setups the current settings.
           * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
           * @todo Support for media queries by using `matchMedia` would be nice.
           * @param carouselWidth width of carousel
           * @param slides array of slides
           * @param options options set by user
           */

      }, {
        key: "setup",
        value: function setup(carouselWidth, slides, options) {
          this.setCarouselWidth(carouselWidth);
          this.setItems(slides);

          this._defineSlidesData();

          this.setOptions(options);
          this.settings = Object.assign({}, this._options);
          this.setOptionsForViewport();

          this._trigger('change', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });

          this.invalidate('settings'); // must be call of this function;

          this._trigger('changed', {
            property: {
              name: 'settings',
              value: this.settings
            }
          });
        }
        /**
         * Set options for current viewport
         */

      }, {
        key: "setOptionsForViewport",
        value: function setOptionsForViewport() {
          var _this3 = this;

          var viewport = this._width,
              overwrites = this._options.responsive;
          var match = -1;

          if (!Object.keys(overwrites).length) {
            return;
          }

          if (!viewport) {
            this.settings.items = 1;
            return;
          }

          for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
              if (+key <= viewport && +key > match) {
                match = Number(key);
              }
            }
          }

          this.settings = Object.assign({}, this._options, overwrites[match], {
            items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
          }); // if (typeof this.settings.stagePadding === 'function') {
          // 	this.settings.stagePadding = this.settings.stagePadding();
          // }

          delete this.settings.responsive;
          this.owlDOMData.isResponsive = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          var mergers = [];

          this._items.forEach(function (item) {
            var mergeN = _this3.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
          });

          this._mergers = mergers;
          this._breakpoint = match;
          this.invalidate('settings');
        }
        /**
         * Initializes the carousel.
         * @param slides array of CarouselSlideDirective
         */

      }, {
        key: "initialize",
        value: function initialize(slides) {
          var _this4 = this;

          this.enter('initializing'); // this.trigger('initialize');

          this.owlDOMData.rtl = this.settings.rtl;

          if (this._mergers.length) {
            this._mergers = [];
          }

          slides.forEach(function (item) {
            var mergeN = _this4.settings.merge ? item.dataMerge : 1;

            _this4._mergers.push(mergeN);
          });
          this._clones = [];
          this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
          this.invalidate('items');
          this.refresh();
          this.owlDOMData.isLoaded = true;
          this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
          this.owlDOMData.isTouchDragable = this.settings.touchDrag;
          this.sendChanges();
          this.leave('initializing');

          this._trigger('initialized');
        }
      }, {
        key: "sendChanges",

        /**
         * Sends all data needed for View
         */
        value: function sendChanges() {
          this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
          });
        }
        /**
           * Updates option logic if necessery
           */

      }, {
        key: "_optionsLogic",
        value: function _optionsLogic() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
          }
        }
        /**
         * Updates the view
         */

      }, {
        key: "update",
        value: function update() {
          var _this5 = this;

          var i = 0;

          var n = this._pipe.length,
              filter = function filter(item) {
            return _this5._invalidated[item];
          },
              cache = {};

          while (i < n) {
            var filteredPipe = this._pipe[i].filter.filter(filter);

            if (this._invalidated.all || filteredPipe.length > 0) {
              this._pipe[i].run(cache);
            }

            i++;
          }

          this.slidesData.forEach(function (slide) {
            return slide.classes = _this5.setCurSlideClasses(slide);
          });
          this.sendChanges();
          this._invalidated = {};

          if (!this.is('valid')) {
            this.enter('valid');
          }
        }
        /**
           * Gets the width of the view.
           * @param [dimension=Width.Default] The dimension to return
           * @returns The width of the view in pixel.
           */

      }, {
        key: "width",
        value: function width(dimension) {
          dimension = dimension || Width.Default;

          switch (dimension) {
            case Width.Inner:
            case Width.Outer:
              return this._width;

            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        }
        /**
           * Refreshes the carousel primarily for adaptive purposes.
           */

      }, {
        key: "refresh",
        value: function refresh() {
          this.enter('refreshing');

          this._trigger('refresh');

          this._defineSlidesData();

          this.setOptionsForViewport();

          this._optionsLogic(); // this.$element.addClass(this.options.refreshClass);


          this.update(); // this.$element.removeClass(this.options.refreshClass);

          this.leave('refreshing');

          this._trigger('refreshed');
        }
        /**
           * Checks window `resize` event.
           * @param curWidth width of .owl-carousel
           */

      }, {
        key: "onResize",
        value: function onResize(curWidth) {
          if (!this._items.length) {
            return false;
          }

          this.setCarouselWidth(curWidth);
          this.enter('resizing'); // if (this.trigger('resize').isDefaultPrevented()) {
          // 	this.leave('resizing');
          // 	return false;
          // }

          this._trigger('resize');

          this.invalidate('width');
          this.refresh();
          this.leave('resizing');

          this._trigger('resized');
        }
        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */

      }, {
        key: "prepareDragging",
        value: function prepareDragging(event) {
          var stage = null,
              transformArr; // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
          // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
          // stage = {
          //   x: stage[stage.length === 16 ? 12 : 4],
          //   y: stage[stage.length === 16 ? 13 : 5]
          // };

          transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
          stage = {
            x: +transformArr[0],
            y: +transformArr[1]
          };

          if (this.is('animating')) {
            this.invalidate('position');
          }

          if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
          }

          this.speed(0);
          return stage;
        }
        /**
         * Enters into a 'dragging' state
         */

      }, {
        key: "enterDragging",
        value: function enterDragging() {
          this.enter('dragging');

          this._trigger('drag');
        }
        /**
           * Defines new coords for .owl-stage while dragging it
           * @todo #261
           * @param event the event arguments.
           * @param dragData initial data got after starting dragging
           * @returns coords or false
           */

      }, {
        key: "defineNewCoordsDrag",
        value: function defineNewCoordsDrag(event, dragData) {
          var minimum = null,
              maximum = null,
              pull = null;
          var delta = this.difference(dragData.pointer, this.pointer(event)),
              stage = this.difference(dragData.stage.start, delta);

          if (!this.is('dragging')) {
            return false;
          }

          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }

          return stage;
        }
        /**
           * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
           * @todo #261
           * @todo Threshold for click event
           * @param event the event arguments.
           * @param dragObj the object with dragging settings and states
           * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
           */

      }, {
        key: "finishDragging",
        value: function finishDragging(event, dragObj, clickAttacher) {
          var directions = ['right', 'left'],
              delta = this.difference(dragObj.pointer, this.pointer(event)),
              stage = dragObj.stage.current,
              direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
          var currentSlideI, current, newCurrent;

          if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);

            if (current !== newCurrent) {
              this.invalidate('position');
              this.update();
            }

            dragObj.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
              clickAttacher();
            }
          }

          if (!this.is('dragging')) {
            return;
          }

          this.leave('dragging');

          this._trigger('dragged');
        }
        /**
           * Gets absolute position of the closest item for a coordinate.
           * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
           * @param coordinate The coordinate in pixel.
           * @param direction The direction to check for the closest item. Ether `left` or `right`.
           * @returns The absolute position of the closest item.
           */

      }, {
        key: "closest",
        value: function closest(coordinate, direction) {
          var pull = 30,
              width = this.width();
          var coordinates = this.coordinates(),
              position = -1;

          if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
              if (item === 0) {
                item += 0.000001;
              }

              return item;
            });
          } // option 'freeDrag' doesn't have realization and using it here creates problem:
          // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
          // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
          // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
          // if (!this.settings.freeDrag) {
          // check closest item


          for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i; // on a right pull, check on previous index
              // to do so, subtract width from value and set position = index + 1
            } else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
              position = i + 1;
            } else if (this._op(coordinate, '<', coordinates[i]) && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
              position = direction === 'left' ? i + 1 : i;
            } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
              position = i;
            }

            if (position !== -1) {
              break;
            }

            ;
          } // }


          if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }

          return position;
        }
        /**
           * Animates the stage.
           * @todo #270
           * @param coordinate The coordinate in pixels.
           */

      }, {
        key: "animate",
        value: function animate(coordinate) {
          var animate = this.speed() > 0;

          if (this.is('animating')) {
            this.onTransitionEnd();
          }

          if (animate) {
            this.enter('animating');

            this._trigger('translate');
          }

          this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
          this.stageData.transition = this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''); // also there was transition by means of JQuery.animate or css-changing property left
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param state The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "is",
        value: function is(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        }
      }, {
        key: "current",

        /**
           * Sets the absolute position of the current item.
           * @param position The new absolute position or nothing to leave it unchanged.
           * @returns The absolute position of the current item.
           */
        value: function current(position) {
          if (position === undefined) {
            return this._current;
          }

          if (this._items.length === 0) {
            return undefined;
          }

          position = this.normalize(position);

          if (this._current !== position) {
            var event = this._trigger('change', {
              property: {
                name: 'position',
                value: position
              }
            }); // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }


            this._current = position;
            this.invalidate('position');

            this._trigger('changed', {
              property: {
                name: 'position',
                value: this._current
              }
            });
          }

          return this._current;
        }
        /**
           * Invalidates the given part of the update routine.
           * @param part The part to invalidate.
           * @returns The invalidated parts.
           */

      }, {
        key: "invalidate",
        value: function invalidate(part) {
          if (typeof part === 'string') {
            this._invalidated[part] = true;

            if (this.is('valid')) {
              this.leave('valid');
            }
          }

          return Object.keys(this._invalidated);
        }
      }, {
        key: "reset",

        /**
         * Resets the absolute position of the current item.
         * @param position the absolute position of the new item.
         */
        value: function reset(position) {
          position = this.normalize(position);

          if (position === undefined) {
            return;
          }

          this._speed = 0;
          this._current = position;

          this._suppress(['translate', 'translated']);

          this.animate(this.coordinates(position));

          this._release(['translate', 'translated']);
        }
        /**
           * Normalizes an absolute or a relative position of an item.
           * @param position The absolute or relative position to normalize.
           * @param relative Whether the given position is relative or not.
           * @returns The normalized position.
           */

      }, {
        key: "normalize",
        value: function normalize(position, relative) {
          var n = this._items.length,
              m = relative ? 0 : this._clones.length;

          if (!this._isNumeric(position) || n < 1) {
            position = undefined;
          } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
          }

          return position;
        }
        /**
           * Converts an absolute position of an item into a relative one.
           * @param position The absolute position to convert.
           * @returns The converted position.
           */

      }, {
        key: "relative",
        value: function relative(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        }
        /**
           * Gets the maximum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of maximum position
           */

      }, {
        key: "maximum",
        value: function maximum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var settings = this.settings;
          var maximum = this._coordinates.length,
              iterator,
              reciprocalItemsWidth,
              elementWidth;

          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;

            while (iterator--) {
              // it could be use this._items instead of this.slidesData;
              reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;

              if (reciprocalItemsWidth > elementWidth) {
                break;
              }
            }

            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }

          if (relative) {
            maximum -= this._clones.length / 2;
          }

          return Math.max(maximum, 0);
        }
        /**
           * Gets the minimum position for the current item.
           * @param relative Whether to return an absolute position or a relative position.
           * @returns number of minimum position
           */

      }, {
        key: "minimum",
        value: function minimum() {
          var relative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return relative ? 0 : this._clones.length / 2;
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "items",
        value: function items(position) {
          if (position === undefined) {
            return this._items.slice();
          }

          position = this.normalize(position, true);
          return [this._items[position]];
        }
        /**
           * Gets an item at the specified relative position.
           * @param position The relative position of the item.
           * @returns The item at the given position or all items if no position was given.
           */

      }, {
        key: "mergers",
        value: function mergers(position) {
          if (position === undefined) {
            return this._mergers.slice();
          }

          position = this.normalize(position, true);
          return this._mergers[position];
        }
        /**
           * Gets the absolute positions of clones for an item.
           * @param position The relative position of the item.
           * @returns The absolute positions of clones for the item or all if no position was given.
           */

      }, {
        key: "clones",
        value: function clones(position) {
          var odd = this._clones.length / 2,
              even = odd + this._items.length,
              map = function map(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };

          if (position === undefined) {
            return this._clones.map(function (v, i) {
              return map(i);
            });
          }

          return this._clones.map(function (v, i) {
            return v === position ? map(i) : null;
          }).filter(function (item) {
            return item;
          });
        }
        /**
           * Sets the current animation speed.
           * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
           * @returns The current animation speed in milliseconds.
           */

      }, {
        key: "speed",
        value: function speed(_speed) {
          if (_speed !== undefined) {
            this._speed = _speed;
          }

          return this._speed;
        }
        /**
           * Gets the coordinate of an item.
           * @todo The name of this method is missleanding.
           * @param position The absolute position of the item within `minimum()` and `maximum()`.
           * @returns The coordinate of the item in pixel or all coordinates.
           */

      }, {
        key: "coordinates",
        value: function coordinates(position) {
          var _this6 = this;

          var multiplier = 1,
              newPosition = position - 1,
              coordinate,
              result;

          if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
              return _this6.coordinates(index);
            });
            return result;
          }

          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }

          coordinate = Math.ceil(coordinate);
          return coordinate;
        }
        /**
           * Calculates the speed for a translation.
           * @param from The absolute position of the start item.
           * @param to The absolute position of the target item.
           * @param factor [factor=undefined] - The time factor in milliseconds.
           * @returns The time in milliseconds for the translation.
           */

      }, {
        key: "_duration",
        value: function _duration(from, to, factor) {
          if (factor === 0) {
            return 0;
          }

          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
        }
        /**
           * Slides to the specified item.
           * @param position The position of the item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "to",
        value: function to(position, speed) {
          var _this7 = this;

          var current = this.current(),
              revert = null,
              distance = position - this.relative(current),
              maximum = this.maximum(),
              delayForLoop = 0;
          var direction = +(distance > 0) - +(distance < 0),
              items = this._items.length,
              minimum = this.minimum();

          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              delayForLoop = 30;
              this.reset(current);
              this.sendChanges();
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }

          setTimeout(function () {
            _this7.speed(_this7._duration(current, position, speed));

            _this7.current(position);

            _this7.update();
          }, delayForLoop);
        }
        /**
           * Slides to the next item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "next",
        value: function next(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        }
        /**
           * Slides to the previous item.
           * @param speed The time in milliseconds for the transition.
           */

      }, {
        key: "prev",
        value: function prev(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        }
        /**
           * Handles the end of an animation.
           * @param event - The event arguments.
           */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd(event) {
          // if css2 animation then event object is undefined
          if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
          }

          this.leave('animating');

          this._trigger('translated');
        }
        /**
           * Gets viewport width.
           * @returns - The width in pixel.
           */

      }, {
        key: "_viewport",
        value: function _viewport() {
          var width;

          if (this._width) {
            width = this._width;
          } else {
            this.logger.log('Can not detect viewport width.');
          }

          return width;
        }
        /**
           * Sets _items
           * @param content The list of slides put into CarouselSlideDirectives.
           */

      }, {
        key: "setItems",
        value: function setItems(content) {
          this._items = content;
        }
        /**
         * Sets slidesData using this._items
         */

      }, {
        key: "_defineSlidesData",
        value: function _defineSlidesData() {
          // Maybe creating and using loadMap would be better in LazyLoadService.
          // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
          // Thus it would be needed to add that content into DOM again.
          // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
          var loadMap;

          if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
              if (item.load) {
                loadMap.set(item.id, item.load);
              }
            });
          }

          this.slidesData = this._items.map(function (slide) {
            return {
              id: "".concat(slide.id),
              isActive: false,
              tplRef: slide.tplRef,
              dataMerge: slide.dataMerge,
              width: 0,
              isCloned: false,
              load: loadMap ? loadMap.get(slide.id) : false,
              hashFragment: slide.dataHash
            };
          });
        }
        /**
         * Sets current classes for slide
         * @param slide Slide of carousel
         * @returns object with names of css-classes which are keys and true/false values
         */

      }, {
        key: "setCurSlideClasses",
        value: function setCurSlideClasses(slide) {
          // CSS classes: added/removed per current state of component properties
          var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
          };

          if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
          }

          if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
          }

          return currentClasses;
        }
        /**
           * Operators to calculate right-to-left and left-to-right.
           * @param a - The left side operand.
           * @param o - The operator.
           * @param b - The right side operand.
           * @returns true/false meaning right-to-left or left-to-right
           */

      }, {
        key: "_op",
        value: function _op(a, o, b) {
          var rtl = this.settings.rtl;

          switch (o) {
            case '<':
              return rtl ? a > b : a < b;

            case '>':
              return rtl ? a < b : a > b;

            case '>=':
              return rtl ? a <= b : a >= b;

            case '<=':
              return rtl ? a >= b : a <= b;

            default:
              break;
          }
        }
        /**
           * Triggers a public event.
           * @todo Remove `status`, `relatedTarget` should be used instead.
           * @param name The event name.
           * @param data The event data.
           * @param namespace The event namespace.
           * @param state The state which is associated with the event.
           * @param enter Indicates if the call enters the specified state or not.
           */

      }, {
        key: "_trigger",
        value: function _trigger(name, data, namespace, state, enter) {
          switch (name) {
            case 'initialized':
              this._initializedCarousel$.next(name);

              break;

            case 'change':
              this._changeSettingsCarousel$.next(data);

              break;

            case 'changed':
              this._changedSettingsCarousel$.next(data);

              break;

            case 'drag':
              this._dragCarousel$.next(name);

              break;

            case 'dragged':
              this._draggedCarousel$.next(name);

              break;

            case 'resize':
              this._resizeCarousel$.next(name);

              break;

            case 'resized':
              this._resizedCarousel$.next(name);

              break;

            case 'refresh':
              this._refreshCarousel$.next(name);

              break;

            case 'refreshed':
              this._refreshedCarousel$.next(name);

              break;

            case 'translate':
              this._translateCarousel$.next(name);

              break;

            case 'translated':
              this._translatedCarousel$.next(name);

              break;

            default:
              break;
          }
        }
        /**
         * Enters a state.
         * @param name - The state name.
         */

      }, {
        key: "enter",
        value: function enter(name) {
          var _this8 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this8._states.current[stateName] === undefined) {
              _this8._states.current[stateName] = 0;
            }

            _this8._states.current[stateName]++;
          });
        }
      }, {
        key: "leave",

        /**
           * Leaves a state.
           * @param name - The state name.
           */
        value: function leave(name) {
          var _this9 = this;

          [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this9._states.current[stateName] === 0 || !!_this9._states.current[stateName]) {
              _this9._states.current[stateName]--;
            }
          });
        }
      }, {
        key: "register",

        /**
           * Registers an event or state.
           * @param object - The event or state to register.
           */
        value: function register(object) {
          var _this10 = this;

          if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
              return _this10._states.tags[object.name].indexOf(tag) === i;
            });
          }
        }
        /**
           * Suppresses events.
           * @param events The events to suppress.
           */

      }, {
        key: "_suppress",
        value: function _suppress(events) {
          var _this11 = this;

          events.forEach(function (event) {
            _this11._supress[event] = true;
          });
        }
        /**
           * Releases suppressed events.
           * @param events The events to release.
           */

      }, {
        key: "_release",
        value: function _release(events) {
          var _this12 = this;

          events.forEach(function (event) {
            delete _this12._supress[event];
          });
        }
        /**
           * Gets unified pointer coordinates from event.
           * @todo #261
           * @param event The `mousedown` or `touchstart` event.
           * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "pointer",
        value: function pointer(event) {
          var result = {
            x: null,
            y: null
          };
          event = event.originalEvent || event || window.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }

          return result;
        }
        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param number The input to be tested
           * @returns An indication if the input is a Number or can be coerced to a Number
           */

      }, {
        key: "_isNumeric",
        value: function _isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
        /**
         * Determines whether value is number or boolean type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
         */

      }, {
        key: "_isNumberOrBoolean",
        value: function _isNumberOrBoolean(value) {
          return this._isNumeric(value) || typeof value === 'boolean';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isNumberOrString",
        value: function _isNumberOrString(value) {
          return this._isNumeric(value) || typeof value === 'string';
        }
        /**
         * Determines whether value is number or string type
         * @param value The input to be tested
         * @returns An indication if the input is a Number or can be coerced to a Number, or String
         */

      }, {
        key: "_isStringOrBoolean",
        value: function _isStringOrBoolean(value) {
          return typeof value === 'string' || typeof value === 'boolean';
        }
        /**
           * Gets the difference of two vectors.
           * @todo #261
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "difference",
        value: function difference(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        }
      }, {
        key: "invalidated",
        get: function get() {
          return this._invalidated;
        } // is needed for tests

      }, {
        key: "states",
        get: function get() {
          return this._states;
        }
      }]);

      return CarouselService;
    }();

    CarouselService.ctorParameters = function () {
      return [{
        type: OwlLogger
      }];
    };

    CarouselService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CarouselService);

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(carouselService) {
        _classCallCheck(this, NavigationService);

        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */

        this._initialized = false;
        /**
         * The current paging indexes.
         */

        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */

        this._navData = {
          disabled: false,
          prev: {
            disabled: false,
            htmlText: ''
          },
          next: {
            disabled: false,
            htmlText: ''
          }
        };
        /**
         * Data for dot elements of the user interface.
         */

        this._dotsData = {
          disabled: false,
          dots: []
        };
        this.spyDataStreams();
      }

      _createClass(NavigationService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this13 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) {
            _this13.initialize();

            _this13._updateNavPages();

            _this13.draw();

            _this13.update();

            _this13.carouselService.sendChanges();
          })); // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
          // Thus this method by calling carouselService.current(position) notifies about changes

          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) {
            return data.property.name === 'position';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this13.update(); // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();

          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this13._updateNavPages();

            _this13.draw();

            _this13.update();

            _this13.carouselService.sendChanges();
          }));
          var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.navSubscription = navMerge$.subscribe(function () {});
        }
        /**
           * Initializes the layout of the plugin and extends the carousel.
           */

      }, {
        key: "initialize",
        value: function initialize() {
          this._navData.disabled = true;
          this._navData.prev.htmlText = this.carouselService.settings.navText[0];
          this._navData.next.htmlText = this.carouselService.settings.navText[1];
          this._dotsData.disabled = true;
          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
        /**
         * Calculates internal states and updates prop _pages
         */

      }, {
        key: "_updateNavPages",
        value: function _updateNavPages() {
          var i, j, k;
          var lower = this.carouselService.clones().length / 2,
              upper = lower + this.carouselService.items().length,
              maximum = this.carouselService.maximum(true),
              pages = [],
              settings = this.carouselService.settings;
          var size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          size = +size;

          if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
          }

          if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
              if (j >= size || j === 0) {
                pages.push({
                  start: Math.min(maximum, i - lower),
                  end: i - lower + size - 1
                });

                if (Math.min(maximum, i - lower) === maximum) {
                  break;
                }

                j = 0, ++k;
              }

              j += this.carouselService.mergers(this.carouselService.relative(i));
            }
          }

          this._pages = pages;
        }
        /**
           * Draws the user interface.
           * @todo The option `dotsData` wont work.
           */

      }, {
        key: "draw",
        value: function draw() {
          var _this14 = this;

          var difference;
          var settings = this.carouselService.settings,
              items = this.carouselService.items(),
              disabled = items.length <= settings.items;
          this._navData.disabled = !settings.nav || disabled;
          this._dotsData.disabled = !settings.dots || disabled;

          if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;

            if (settings.dotsData && difference !== 0) {
              this._dotsData.dots = [];
              items.forEach(function (item) {
                _this14._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(item.id),
                  innerContent: item.dotContent,
                  showInnerContent: true
                });
              });
            } else if (difference > 0) {
              var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;

              for (var i = 0; i < difference; i++) {
                this._dotsData.dots.push({
                  active: false,
                  id: "dot-".concat(i + startI),
                  innerContent: '',
                  showInnerContent: false
                });
              }
            } else if (difference < 0) {
              this._dotsData.dots.splice(difference, Math.abs(difference));
            }
          }

          this.carouselService.navData = this._navData;
          this.carouselService.dotsData = this._dotsData;
        }
      }, {
        key: "update",

        /**
         * Updates navigation buttons's and dots's states
         */
        value: function update() {
          this._updateNavButtons();

          this._updateDots();
        }
        /**
         * Changes state of nav buttons (disabled, enabled)
         */

      }, {
        key: "_updateNavButtons",
        value: function _updateNavButtons() {
          var settings = this.carouselService.settings,
              loop = settings.loop || settings.rewind,
              index = this.carouselService.relative(this.carouselService.current());

          if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
          }

          this.carouselService.navData = this._navData;
        }
        /**
         * Changes active dot if page becomes changed
         */

      }, {
        key: "_updateDots",
        value: function _updateDots() {
          var curActiveDotI;

          if (!this.carouselService.settings.dots) {
            return;
          }

          this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
              item.active = false;
            }
          });

          curActiveDotI = this._current();

          if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
          }

          this.carouselService.dotsData = this._dotsData;
        }
        /**
           * Gets the current page position of the carousel.
           * @returns the current page position of the carousel
           */

      }, {
        key: "_current",
        value: function _current() {
          var current = this.carouselService.relative(this.carouselService.current());
          var finalCurrent;

          var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
          }).pop();

          finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
          });
          return finalCurrent;
        }
      }, {
        key: "_getPosition",

        /**
           * Gets the current succesor/predecessor position.
         * @param sussessor position of slide
           * @returns the current succesor/predecessor position
           */
        value: function _getPosition(successor) {
          var position, length;
          var settings = this.carouselService.settings;

          if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
          }

          return position;
        }
      }, {
        key: "next",

        /**
           * Slides to the next item or page.
           * @param speed The time in milliseconds for the transition.
           */
        value: function next(speed) {
          this.carouselService.to(this._getPosition(true), speed);
        }
      }, {
        key: "prev",

        /**
         * Slides to the previous item or page.
         * @param speed The time in milliseconds for the transition.
         */
        value: function prev(speed) {
          this.carouselService.to(this._getPosition(false), speed);
        }
      }, {
        key: "to",

        /**
         * Slides to the specified item or page.
         * @param position - The position of the item or page.
         * @param speed - The time in milliseconds for the transition.
         * @param standard - Whether to use the standard behaviour or not. Default meaning false
         */
        value: function to(position, speed, standard) {
          var length;

          if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
          } else {
            this.carouselService.to(position, speed);
          }
        }
      }, {
        key: "moveByDot",

        /**
         * Moves carousel after user's clicking on any dots
         */
        value: function moveByDot(dotId) {
          var index = this._dotsData.dots.findIndex(function (dot) {
            return dotId === dot.id;
          });

          this.to(index, this.carouselService.settings.dotsSpeed);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id id of slide
         */

      }, {
        key: "toSlideById",
        value: function toSlideById(id) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.id === id && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationService); // import { Injectable } from '@angular/core';

    /**
     * Create a new injection token for injecting the window into a component.
     */

    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
    /**
     * Define abstract class for obtaining reference to the global window object.
     */

    var WindowRef = /*#__PURE__*/function () {
      function WindowRef() {
        _classCallCheck(this, WindowRef);
      }

      _createClass(WindowRef, [{
        key: "nativeWindow",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return WindowRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native window object.
     */


    var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
      _inherits(BrowserWindowRef, _WindowRef);

      var _super = _createSuper(BrowserWindowRef);

      function BrowserWindowRef() {
        _classCallCheck(this, BrowserWindowRef);

        return _super.call(this);
      }
      /**
       * @returns window object
       */


      _createClass(BrowserWindowRef, [{
        key: "nativeWindow",
        get: function get() {
          return window;
        }
      }]);

      return BrowserWindowRef;
    }(WindowRef);
    /**
     * Create an factory function that returns the native window object.
     * @param browserWindowRef Native window object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */


    function windowFactory(browserWindowRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
      }

      var obj = {
        setTimeout: function setTimeout(func, time) {},
        clearTimeout: function clearTimeout(a) {}
      };
      return obj;
    }
    /**
     * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
     */


    var browserWindowProvider = {
      provide: WindowRef,
      useClass: BrowserWindowRef
    };
    /**
     * Create an injectable provider that uses the windowFactory function for returning the native window object.
     */

    var windowProvider = {
      provide: WINDOW,
      useFactory: windowFactory,
      deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
    /**
     * Create a new injection token for injecting the Document into a component.
     */

    var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DocumentToken');
    /**
     * Define abstract class for obtaining reference to the global Document object.
     */

    var DocumentRef = /*#__PURE__*/function () {
      function DocumentRef() {
        _classCallCheck(this, DocumentRef);
      }

      _createClass(DocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          throw new Error('Not implemented.');
        }
      }]);

      return DocumentRef;
    }();
    /**
     * Define class that implements the abstract class and returns the native Document object.
     */


    var BrowserDocumentRef = /*#__PURE__*/function (_DocumentRef) {
      _inherits(BrowserDocumentRef, _DocumentRef);

      var _super2 = _createSuper(BrowserDocumentRef);

      function BrowserDocumentRef() {
        _classCallCheck(this, BrowserDocumentRef);

        return _super2.call(this);
      }
      /**
       * @returns Document object
       */


      _createClass(BrowserDocumentRef, [{
        key: "nativeDocument",
        get: function get() {
          return document;
        }
      }]);

      return BrowserDocumentRef;
    }(DocumentRef);
    /**
     * Create an factory function that returns the native Document object.
     * @param browserDocumentRef Native Document object
     * @param platformId id of platform
     * @returns type of platform of empty object
     */


    function documentFactory(browserDocumentRef, platformId) {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
      }

      var doc = {
        hidden: false,
        visibilityState: 'visible'
      };
      return doc;
    }
    /**
     * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
     */


    var browserDocumentProvider = {
      provide: DocumentRef,
      useClass: BrowserDocumentRef
    };
    /**
     * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
     */

    var documentProvider = {
      provide: DOCUMENT,
      useFactory: documentFactory,
      deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
    };
    /**
     * Create an array of providers.
     */

    var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

    var AutoplayService = /*#__PURE__*/function () {
      function AutoplayService(carouselService, winRef, docRef) {
        _classCallCheck(this, AutoplayService);

        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */

        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */

        this._paused = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
      }

      _createClass(AutoplayService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoplaySubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this15 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this15.carouselService.settings.autoplay) {
              _this15.play();
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this15._handleChangeObservable(data);
          }));
          var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this15.carouselService.settings.autoplay) {
              _this15.play();
            } else {
              _this15.stop();
            }
          })); // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
          // They are triggered by Video Plugin

          var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, resized$);
          this.autoplaySubscription = autoplayMerge$.subscribe(function () {});
        }
        /**
           * Starts the autoplay.
           * @param timeout The interval before the next animation starts.
           * @param speed The animation speed for the animations.
           */

      }, {
        key: "play",
        value: function play(timeout, speed) {
          if (this._paused) {
            this._paused = false;

            this._setAutoPlayInterval(1);
          }

          if (this.carouselService.is('rotating')) {
            return;
          }

          this.carouselService.enter('rotating');

          this._setAutoPlayInterval();
        }
      }, {
        key: "_getNextTimeout",

        /**
           * Gets a new timeout
           * @param timeout - The interval before the next animation starts.
           * @param speed - The animation speed for the animations.
           * @return
           */
        value: function _getNextTimeout(timeout, speed) {
          var _this16 = this;

          if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
          }

          this._isArtificialAutoplayTimeout = timeout ? true : false;
          return this.winRef.setTimeout(function () {
            if (_this16._paused || _this16.carouselService.is('busy') || _this16.carouselService.is('interacting') || _this16.docRef.hidden) {
              return;
            }

            _this16.carouselService.next(speed || _this16.carouselService.settings.autoplaySpeed);
          }, timeout || this.carouselService.settings.autoplayTimeout);
        }
      }, {
        key: "_setAutoPlayInterval",

        /**
           * Sets autoplay in motion.
           */
        value: function _setAutoPlayInterval(timeout) {
          this._timeout = this._getNextTimeout(timeout);
        }
      }, {
        key: "stop",

        /**
         * Stops the autoplay.
         */
        value: function stop() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
          this.winRef.clearTimeout(this._timeout);
          this.carouselService.leave('rotating');
        }
      }, {
        key: "pause",

        /**
           * Stops the autoplay.
           */
        value: function pause() {
          if (!this.carouselService.is('rotating')) {
            return;
          }

          this._paused = true;
        }
      }, {
        key: "_handleChangeObservable",

        /**
         * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
         * @param data object with current position of carousel and type of change
         */
        value: function _handleChangeObservable(data) {
          if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
              this.play();
            } else {
              this.stop();
            }
          } else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
              this._setAutoPlayInterval();
            }
          }
        }
        /**
         * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
         */

      }, {
        key: "_playAfterTranslated",
        value: function _playAfterTranslated() {
          var _this17 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) {
            return _this17.carouselService.getTranslatedState();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this17._isArtificialAutoplayTimeout;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this17._setAutoPlayInterval();
          })).subscribe(function () {});
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
          }
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayingMouseLeave",
        value: function startPlayingMouseLeave() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayingTouchEnd",
        value: function startPlayingTouchEnd() {
          if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();

            this._playAfterTranslated();
          }
        }
      }]);

      return AutoplayService;
    }();

    AutoplayService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [WINDOW]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    AutoplayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], AutoplayService);

    var LazyLoadService = /*#__PURE__*/function () {
      function LazyLoadService(carouselService) {
        _classCallCheck(this, LazyLoadService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(LazyLoadService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.lazyLoadSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this18 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var isLazyLoad = _this18.carouselService.settings && !_this18.carouselService.settings.lazyLoad;

            _this18.carouselService.slidesData.forEach(function (item) {
              return item.load = isLazyLoad ? true : false;
            });
          }));
          var changeSettings$ = this.carouselService.getChangeState();
          var resizedCarousel$ = this.carouselService.getResizedState();
          var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this18._defineLazyLoadSlides(data);
          }));
          this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () {});
        }
      }, {
        key: "_defineLazyLoadSlides",
        value: function _defineLazyLoadSlides(data) {
          var _this19 = this;

          if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
          }

          if (data.property && data.property.name === 'position' || data === 'initialized' || data === "resized") {
            var settings = this.carouselService.settings,
                clones = this.carouselService.clones().length;
            var n = settings.center && Math.ceil(settings.items / 2) || settings.items,
                i = settings.center && n * -1 || 0,
                position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i; // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option

            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager; // If the carousel is looping also preload images that are to the "left"

              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }

            while (i++ < n) {
              this._load(clones / 2 + this.carouselService.relative(position));

              if (clones) {
                this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) {
                  return _this19._load(value);
                });
              }

              position++;
            }
          }
        }
        /**
           * Loads all resources of an item at the specified position.
           * @param position - The absolute position of the item.
           */

      }, {
        key: "_load",
        value: function _load(position) {
          if (this.carouselService.slidesData[position].load) {
            return;
          }

          this.carouselService.slidesData[position].load = true;
        }
      }]);

      return LazyLoadService;
    }();

    LazyLoadService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    LazyLoadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], LazyLoadService);

    var AnimateService = /*#__PURE__*/function () {
      function AnimateService(carouselService) {
        _classCallCheck(this, AnimateService);

        this.carouselService = carouselService;
        /**
         * s
         */

        this.swapping = true;
        /**
         * active slide before translating
         */

        this.previous = undefined;
        /**
         * new active slide after translating
         */

        this.next = undefined;
        this.spyDataStreams();
      }

      _createClass(AnimateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.animateSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this20 = this;

          var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data.property.name === 'position') {
              _this20.previous = _this20.carouselService.current();
              _this20.next = data.property.value;
            }
          }));
          var dragCarousel$ = this.carouselService.getDragState();
          var draggedCarousel$ = this.carouselService.getDraggedState();
          var translatedCarousel$ = this.carouselService.getTranslatedState();
          var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            return _this20.swapping = data === 'translated';
          }));
          var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this20.swapping && (_this20.carouselService._options.animateOut || _this20.carouselService._options.animateIn)) {
              _this20._swap();
            }
          }));
          var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
          this.animateSubscription = animateMerge$.subscribe(function () {});
        }
        /**
           * Toggles the animation classes whenever an translations starts.
           * @returns
           */

      }, {
        key: "_swap",
        value: function _swap() {
          if (this.carouselService.settings.items !== 1) {
            return;
          } // if (!$.support.animation || !$.support.transition) {
          // 	return;
          // }


          this.carouselService.speed(0);
          var left;
          var previous = this.carouselService.slidesData[this.previous],
              next = this.carouselService.slidesData[this.next],
              incoming = this.carouselService.settings.animateIn,
              outgoing = this.carouselService.settings.animateOut;

          if (this.carouselService.current() === this.previous) {
            return;
          }

          if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === previous.id) {
                slide.left = "".concat(left, "px");
                slide.isAnimated = true;
                slide.isDefAnimatedOut = true;
                slide.isCustomAnimatedOut = true;
              }
            });
          }

          if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
              if (slide.id === next.id) {
                slide.isAnimated = true;
                slide.isDefAnimatedIn = true;
                slide.isCustomAnimatedIn = true;
              }
            });
          }
        }
      }, {
        key: "clear",

        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */
        value: function clear(id) {
          var _this21 = this;

          this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
              slide.left = '';
              slide.isAnimated = false;
              slide.isDefAnimatedOut = false;
              slide.isCustomAnimatedOut = false;
              slide.isDefAnimatedIn = false;
              slide.isCustomAnimatedIn = false;
              slide.classes = _this21.carouselService.setCurSlideClasses(slide);
            }
          });
          this.carouselService.onTransitionEnd();
        }
      }]);

      return AnimateService;
    }();

    AnimateService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    AnimateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AnimateService);

    var AutoHeightService = /*#__PURE__*/function () {
      function AutoHeightService(carouselService) {
        _classCallCheck(this, AutoHeightService);

        this.carouselService = carouselService;
        this.spyDataStreams();
      }

      _createClass(AutoHeightService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.autoHeightSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this22 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight) {
              _this22.update();
            } else {
              _this22.carouselService.slidesData.forEach(function (slide) {
                return slide.heightState = 'full';
              });
            }
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight && data.property.name === 'position') {
              _this22.update();
            }
          }));
          var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this22.carouselService.settings.autoHeight) {
              _this22.update();
            }
          }));
          var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
          this.autoHeightSubscription = autoHeight$.subscribe(function () {});
        }
        /**
         * Updates the prop 'heightState' of slides
         */

      }, {
        key: "update",
        value: function update() {
          var items = this.carouselService.settings.items;
          var start = this.carouselService.current(),
              end = start + items;

          if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
          }

          this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = i >= start && i < end ? 'full' : 'nulled';
          });
        }
      }]);

      return AutoHeightService;
    }();

    AutoHeightService.ctorParameters = function () {
      return [{
        type: CarouselService
      }];
    };

    AutoHeightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AutoHeightService);

    var HashService = /*#__PURE__*/function () {
      function HashService(carouselService, route, router) {
        _classCallCheck(this, HashService);

        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();

        if (!this.route) {
          this.route = {
            fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
          };
        }

        ;

        if (!this.router) {
          this.router = {
            navigate: function navigate(commands, extras) {
              return;
            }
          };
        }
      }

      _createClass(HashService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.hashSubscription.unsubscribe();
        }
        /**
         * Defines Observables which service must observe
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this23 = this;

          var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            return _this23.listenToRoute();
          }));
          var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this23.carouselService.settings.URLhashListener && data.property.name === 'position') {
              var newCurSlide = _this23.carouselService.current();

              var newCurFragment = _this23.carouselService.slidesData[newCurSlide].hashFragment;

              if (!newCurFragment || newCurFragment === _this23.currentHashFragment) {
                return;
              }

              _this23.router.navigate(['./'], {
                fragment: newCurFragment,
                relativeTo: _this23.route
              });
            }
          }));
          var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$);
          this.hashSubscription = hashFragment$.subscribe(function () {});
        }
        /**
         * rewinds carousel to slide which has the same hashFragment as fragment of current url
         * @param fragment fragment of url
         */

      }, {
        key: "rewind",
        value: function rewind(fragment) {
          var position = this.carouselService.slidesData.findIndex(function (slide) {
            return slide.hashFragment === fragment && slide.isCloned === false;
          });

          if (position === -1 || position === this.carouselService.current()) {
            return;
          }

          this.carouselService.to(this.carouselService.relative(position), false);
        }
        /**
         * Initiate listening to ActivatedRoute.fragment
         */

      }, {
        key: "listenToRoute",
        value: function listenToRoute() {
          var _this24 = this;

          var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
          this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(count)).subscribe(function (fragment) {
            _this24.currentHashFragment = fragment;

            _this24.rewind(fragment);
          });
        }
      }]);

      return HashService;
    }();

    HashService.ctorParameters = function () {
      return [{
        type: CarouselService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    HashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], HashService);
    var nextId = 0;

    var CarouselSlideDirective = /*#__PURE__*/function () {
      function CarouselSlideDirective(tplRef) {
        _classCallCheck(this, CarouselSlideDirective);

        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */

        this.id = "owl-slide-".concat(nextId++);
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */

        this._dataMerge = 1;
        /**
         * Width of slide
         */

        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */

        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */

        this.dataHash = '';
      }

      _createClass(CarouselSlideDirective, [{
        key: "isNumeric",

        /**
           * Determines if the input is a Number or something that can be coerced to a Number
           * @param - The input to be tested
           * @returns - An indication if the input is a Number or can be coerced to a Number
           */
        value: function isNumeric(number) {
          return !isNaN(parseFloat(number));
        }
      }, {
        key: "dataMerge",
        set: function set(data) {
          this._dataMerge = this.isNumeric(data) ? data : 1;
        },
        get: function get() {
          return this._dataMerge;
        }
      }]);

      return CarouselSlideDirective;
    }();

    CarouselSlideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataMerge", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dotContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselSlideDirective.prototype, "dataHash", void 0);
    CarouselSlideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ng-template[carouselSlide]'
    })], CarouselSlideDirective);
    /**
     * Data which will be passed out after ending of transition of carousel
     */

    var SlidesOutputData = function SlidesOutputData() {
      _classCallCheck(this, SlidesOutputData);
    };

    ;

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        _classCallCheck(this, CarouselComponent);

        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           *  Data of every slide
           */

        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */

        this.carouselLoaded = false;
        this.docRef = docRef;
      }

      _createClass(CarouselComponent, [{
        key: "onVisibilityChange",
        value: function onVisibilityChange(ev) {
          if (!this.carouselService.settings.autoplay) return;

          switch (this.docRef.visibilityState) {
            case 'visible':
              this.autoplayService.play();
              break;

            case 'hidden':
              this.autoplayService.stop();
              break;

            default:
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spyDataStreams();
          this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {} // ngAfterContentChecked() END

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this25 = this;

          if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());

            this._winResizeWatcher();
          } else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
          }

          this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slides) {
            if (slides.toArray().length) {
              // this.carouselService.setItems(slides.toArray());
              _this25.carouselService.setup(_this25.carouselWindowWidth, slides.toArray(), _this25.options);

              _this25.carouselService.initialize(slides.toArray());
            } else {
              _this25.carouselLoaded = false;

              _this25.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
          })).subscribe(function () {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
          }

          if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
          }

          if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
          }
        }
        /**
         * Joins the observable login in one place: sets values to some observables, merges this observables and
         * subcribes to merge func
         */

      }, {
        key: "spyDataStreams",
        value: function spyDataStreams() {
          var _this26 = this;

          this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this26.owlDOMData = data.owlDOMData;
            _this26.stageData = data.stageData;
            _this26.slidesData = data.slidesData;

            if (!_this26.carouselLoaded) {
              _this26.carouselLoaded = true;
            }

            _this26.navData = data.navData;
            _this26.dotsData = data.dotsData;

            _this26.changeDetectorRef.markForCheck();
          }));
          this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.initialized.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.translated.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.change.emit(_this26.slidesOutputData); // this.slidesOutputData = {};

          }));
          this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return value.property.name === 'position';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this26.slidesData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(_this26.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slide) {
              var clonedIdPrefix = _this26.carouselService.clonedIdPrefix;
              var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
              return Object.assign({}, slide, {
                id: id,
                isActive: true
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slides) {
              return {
                slides: slides,
                startPosition: _this26.carouselService.relative(value.property.value)
              };
            })); // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changedPosition);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slidesData) {
            _this26.gatherTranslatedData();

            _this26.changed.emit(slidesData.slides.length ? slidesData : _this26.slidesOutputData); // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};

          }));
          this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.gatherTranslatedData();

            _this26.dragging.emit({
              dragging: true,
              data: _this26.slidesOutputData
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this26.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return !!_this26.carouselService.is('animating');
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (anim) {
            if (anim) {
              return _this26.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('not animating');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this26.dragging.emit({
              dragging: false,
              data: _this26.slidesOutputData
            });
          }));
          this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
          this._allObservSubscription = this._carouselMerge$.subscribe(function () {});
        }
        /**
         * Init subscription to resize event and attaches handler for this event
         */

      }, {
        key: "_winResizeWatcher",
        value: function _winResizeWatcher() {
          var _this27 = this;

          if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
              return _this27.carouselWindowWidth !== _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(this.carouselService.settings.responsiveRefreshRate)).subscribe(function () {
              _this27.carouselService.onResize(_this27.el.nativeElement.querySelector('.owl-carousel').clientWidth);

              _this27.carouselWindowWidth = _this27.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
          }
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
         * Handler for click event, attached to next button
         */

      }, {
        key: "next",
        value: function next() {
          if (!this.carouselLoaded) return;
          this.navigationService.next(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to prev button
         */

      }, {
        key: "prev",
        value: function prev() {
          if (!this.carouselLoaded) return;
          this.navigationService.prev(this.carouselService.settings.navSpeed);
        }
        /**
         * Handler for click event, attached to dots
         */

      }, {
        key: "moveByDot",
        value: function moveByDot(dotId) {
          if (!this.carouselLoaded) return;
          this.navigationService.moveByDot(dotId);
        }
        /**
         * rewinds carousel to slide with needed id
         * @param id fragment of url
         */

      }, {
        key: "to",
        value: function to(id) {
          // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
          if (!this.carouselLoaded) return;
          this.navigationService.toSlideById(id);
        }
        /**
         * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
         */

      }, {
        key: "gatherTranslatedData",
        value: function gatherTranslatedData() {
          var startPosition;
          var clonedIdPrefix = this.carouselService.clonedIdPrefix;
          var activeSlides = this.slidesData.filter(function (slide) {
            return slide.isActive === true;
          }).map(function (slide) {
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
              id: id,
              width: slide.width,
              marginL: slide.marginL,
              marginR: slide.marginR,
              center: slide.isCentered
            };
          });
          startPosition = this.carouselService.relative(this.carouselService.current());
          this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
          };
        }
        /**
         * Starts pausing
         */

      }, {
        key: "startPausing",
        value: function startPausing() {
          this.autoplayService.startPausing();
        }
        /**
         * Starts playing after mouse leaves carousel
         */

      }, {
        key: "startPlayML",
        value: function startPlayML() {
          this.autoplayService.startPlayingMouseLeave();
        }
        /**
         * Starts playing after touch ends
         */

      }, {
        key: "startPlayTE",
        value: function startPlayTE() {
          this.autoplayService.startPlayingTouchEnd();
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ResizeService
      }, {
        type: CarouselService
      }, {
        type: NavigationService
      }, {
        type: AutoplayService
      }, {
        type: LazyLoadService
      }, {
        type: AnimateService
      }, {
        type: AutoHeightService
      }, {
        type: HashService
      }, {
        type: OwlLogger
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [DOCUMENT]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CarouselSlideDirective)], CarouselComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "translated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CarouselComponent.prototype, "initialized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CarouselComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:visibilitychange', ['$event'])], CarouselComponent.prototype, "onVisibilityChange", null);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'owl-carousel-o',
      template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      styles: [".owl-theme { display: block; }"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))], CarouselComponent);

    var StageComponent = /*#__PURE__*/function () {
      function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this28 = this;

        _classCallCheck(this, StageComponent);

        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */

        this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: {
            start: null,
            current: null
          },
          direction: null,
          active: false,
          moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */

        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */

        this.bindOneMouseTouchMove = function (ev) {
          _this28._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragMove = function (ev) {
          _this28._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */


        this.bindOnDragEnd = function (ev) {
          // this.zone.run(() => {
          _this28._onDragEnd(ev); // });

        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */


        this._oneClickHandler = function () {
          _this28.listenerOneClick = _this28.renderer.listen(_this28._drag.target, 'click', function () {
            return false;
          });

          _this28.listenerOneClick();
        };
      }

      _createClass(StageComponent, [{
        key: "onMouseDown",
        value: function onMouseDown(event) {
          if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchStart",
        value: function onTouchStart(event) {
          if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
          }
        }
      }, {
        key: "onTouchCancel",
        value: function onTouchCancel(event) {
          this._onDragEnd(event);
        }
      }, {
        key: "onDragStart",
        value: function onDragStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "onSelectStart",
        value: function onSelectStart() {
          if (this.owlDraggable.isMouseDragable) {
            return false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this._oneMoveSubsription = this._oneDragMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this29._sendChanges();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._oneMoveSubsription.unsubscribe();
        }
        /**
           * Handles `touchstart` and `mousedown` events.
           * @todo Horizontal swipe threshold as option
           * @todo #261
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragStart",
        value: function _onDragStart(event) {
          var _this30 = this;

          var stage = null;

          if (event.which === 3) {
            return;
          }

          stage = this._prepareDragging(event);
          this._drag.time = new Date().getTime();
          this._drag.target = event.target;
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this._pointer(event);
          this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
          this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
          this.zone.runOutsideAngular(function () {
            _this30.listenerOneMouseMove = _this30.renderer.listen(document, 'mousemove', _this30.bindOneMouseTouchMove);
            _this30.listenerOneTouchMove = _this30.renderer.listen(document, 'touchmove', _this30.bindOneMouseTouchMove);
          });
        }
        /**
         * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
         * @param event event objech of mouse or touch event
         */

      }, {
        key: "_oneMouseTouchMove",
        value: function _oneMouseTouchMove(event) {
          var delta = this._difference(this._drag.pointer, this._pointer(event));

          if (this.listenerATag) {
            this.listenerATag();
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
          }

          if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is('valid')) {
            return;
          }

          this.listenerOneMouseMove();
          this.listenerOneTouchMove();
          this._drag.moving = true;
          this.blockClickAnchorInDragging(event);
          this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
          this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
          event.preventDefault();

          this._enterDragging();

          this._oneDragMove$.next(event); // this._sendChanges();

        }
        /**
         * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
         * @param event event object
         */

      }, {
        key: "blockClickAnchorInDragging",
        value: function blockClickAnchorInDragging(event) {
          var target = event.target;

          while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
          }

          if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () {
              return false;
            });
          }
        }
        /**
         * Handles the `touchmove` and `mousemove` events.
         * @todo #261
         * @param event - The event arguments.
         */

      }, {
        key: "_onDragMove",
        value: function _onDragMove(event) {
          var stage;
          var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);

          if (stageOrExit === false) {
            return;
          }

          stage = stageOrExit;
          event.preventDefault();
          this._drag.stage.current = stage;

          this._animate(stage.x - this._drag.stage.start.x);
        }
      }, {
        key: "_animate",

        /**
         * Moves .owl-stage left-right
         * @param coordinate coordinate to be set to .owl-stage
         */
        value: function _animate(coordinate) {
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(".concat(coordinate, "px,0px,0px"));
          this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
        }
        /**
           * Handles the `touchend` and `mouseup` events.
           * @todo #261
           * @todo Threshold for click event
           * @param event - The event arguments.
           */

      }, {
        key: "_onDragEnd",
        value: function _onDragEnd(event) {
          this.carouselService.owlDOMData.isGrab = false;
          this.listenerOneMouseMove();
          this.listenerOneTouchMove();

          if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');

            this._finishDragging(event);

            this.listenerMouseMove();
            this.listenerTouchMove();
          }

          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null,
            active: false,
            moving: false
          }; // this.carouselService.trigger('dragged');

          this.listenerMouseUp();
          this.listenerTouchEnd();
        }
      }, {
        key: "_prepareDragging",

        /**
           * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
           * @param event - The event arguments.
           * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
           */
        value: function _prepareDragging(event) {
          return this.carouselService.prepareDragging(event);
        }
        /**
         * Finishes dragging
         * @param event object event of 'mouseUp' of 'touchend' events
         */

      }, {
        key: "_finishDragging",
        value: function _finishDragging(event) {
          this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
        }
        /**
           * Gets unified pointer coordinates from event.
           * @param event The `mousedown` or `touchstart` event.
           * @returns Contains `x` and `y` coordinates of current pointer position.
           */

      }, {
        key: "_pointer",
        value: function _pointer(event) {
          return this.carouselService.pointer(event);
        }
        /**
           * Gets the difference of two vectors.
           * @param first The first vector.
           * @param second- The second vector.
           * @returns The difference.
           */

      }, {
        key: "_difference",
        value: function _difference(firstC, second) {
          return this.carouselService.difference(firstC, second);
        }
        /**
           * Checks whether the carousel is in a specific state or not.
           * @param specificState The state to check.
           * @returns The flag which indicates if the carousel is busy.
           */

      }, {
        key: "_is",
        value: function _is(specificState) {
          return this.carouselService.is(specificState);
        }
        /**
        * Enters a state.
        * @param name The state name.
        */

      }, {
        key: "_enter",
        value: function _enter(name) {
          this.carouselService.enter(name);
        }
        /**
           * Sends all data needed for View.
           */

      }, {
        key: "_sendChanges",
        value: function _sendChanges() {
          this.carouselService.sendChanges();
        }
        /**
         * Handler for transitioend event
         */

      }, {
        key: "onTransitionEnd",
        value: function onTransitionEnd() {
          this.carouselService.onTransitionEnd();
        }
        /**
           * Enters into a 'dragging' state
           */

      }, {
        key: "_enterDragging",
        value: function _enterDragging() {
          this.carouselService.enterDragging();
        }
        /**
         * Handles the end of 'animationend' event
         * @param id Id of slides
         */

      }, {
        key: "clear",
        value: function clear(id) {
          this.animateService.clear(id);
        }
      }]);

      return StageComponent;
    }();

    StageComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: CarouselService
      }, {
        type: AnimateService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "owlDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "stageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StageComponent.prototype, "slidesData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], StageComponent.prototype, "onMouseDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event'])], StageComponent.prototype, "onTouchStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event'])], StageComponent.prototype, "onTouchCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart')], StageComponent.prototype, "onDragStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('selectstart')], StageComponent.prototype, "onSelectStart", null);
    StageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'owl-stage',
      template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        height: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [// style({height: '*'}),
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [// style({height: 0}),
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)])])]
    })], StageComponent);

    var OwlRouterLinkDirective = /*#__PURE__*/function () {
      function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        _classCallCheck(this, OwlRouterLinkDirective);

        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];

        if (tabIndex == null) {
          renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
      }

      _createClass(OwlRouterLinkDirective, [{
        key: "onClick",
        value: function onClick() {
          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };

          if (this.stopLink) {
            return false;
          }

          this.router.navigateByUrl(this.urlTree, extras);
          return true;
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */

      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkDirective;
    }();

    OwlRouterLinkDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], OwlRouterLinkDirective.prototype, "onClick", null);
    OwlRouterLinkDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: ':not(a)[owlRouterLink]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))], OwlRouterLinkDirective);
    /**
     * @description
     *
     * Lets you link to specific routes in your app.
     *
     * See `RouterLink` for more information.
     *
     * @ngModule RouterModule
     *
     * @publicApi
     */

    var OwlRouterLinkWithHrefDirective = /*#__PURE__*/function () {
      function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this31 = this;

        _classCallCheck(this, OwlRouterLinkWithHrefDirective);

        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
          if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
            _this31.updateTargetUrlAndHref();
          }
        });
      }

      _createClass(OwlRouterLinkWithHrefDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.updateTargetUrlAndHref();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onClick",
        value: function onClick(button, ctrlKey, metaKey, shiftKey) {
          if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
          }

          if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
          }

          if (this.stopLink) {
            return false;
          }

          var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl)
          };
          this.router.navigateByUrl(this.urlTree, extras);
          return false;
        }
      }, {
        key: "updateTargetUrlAndHref",
        value: function updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
        }
      }, {
        key: "owlRouterLink",
        set: function set(commands) {
          if (commands != null) {
            this.commands = Array.isArray(commands) ? commands : [commands];
          } else {
            this.commands = [];
          }
        }
      }, {
        key: "preserveQueryParams",
        set: function set(value) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          }

          this.preserve = value;
        }
      }, {
        key: "urlTree",
        get: function get() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: attrBoolValue(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: attrBoolValue(this.preserveFragment)
          });
        }
      }]);

      return OwlRouterLinkWithHrefDirective;
    }();

    OwlRouterLinkWithHrefDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.target'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])()], OwlRouterLinkWithHrefDirective.prototype, "href", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])], OwlRouterLinkWithHrefDirective.prototype, "onClick", null);
    OwlRouterLinkWithHrefDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'a[owlRouterLink]'
    })], OwlRouterLinkWithHrefDirective);

    function attrBoolValue(s) {
      return s === '' || !!s;
    }

    var routes = [];

    var CarouselModule = function CarouselModule() {
      _classCallCheck(this, CarouselModule);
    };

    CarouselModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    })], CarouselModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-owl-carousel-o.js.map

    /***/
  },

  /***/
  "./node_modules/primeng/galleria.js":
  /*!******************************************!*\
    !*** ./node_modules/primeng/galleria.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrimengGalleriaJs(module, exports, __webpack_require__) {
    "use strict";
    /* Shorthand */

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./components/galleria/galleria */
    "./node_modules/primeng/components/galleria/galleria.js"));
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/article/article.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/article/article.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutArticleArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--start-article-->\r\n<div class=\"container\">\r\n  <div class=\"row row-article\">\r\n    <div class=\"caption\">\r\n      <span>مقالات آموزشی</span>\r\n      <a class=\"pull-left\" routerLink=\"/Courses/articles\">همه<i class=\"fas fa-angle-left\"></i></a>\r\n    </div>\r\n    <div class=\"col-sm-3\" *ngFor=\"let item of listArticle\">\r\n      <div class=\"thumbnail thumbnail-body \"[routerLink]=\"['./detailArticle',item._id]\">\r\n           <div class=\"panel-heading\">\r\n             <img class=\"img-responsive\" [src]=\"item.image\" alt=\"\">\r\n           </div>\r\n           <div class=\"panel-body\">\r\n             <a [routerLink]=\"['./detailArticle',item._id]\"><span><i class=\"fa fa-circle\"></i>{{item.title}}</span></a>\r\n           </div>\r\n        <div class=\"panel-footer\">\r\n          <i class=\"fas fa-thumbs-up pull-right\"><span style=\"font-family:IRANSans_Light;margin-left: 5px;\">12</span></i>\r\n          <a  [routerLink]=\"['./detailArticle',item._id]\"><span class=\"pull-left\">ادامه مطالب</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n<!--end-article-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cart/cart.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cart/cart.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header dir=\"rtl\"></app-header>\n<p-toast [baseZIndex]=\"999999999\" dir=\"rtl\" position=\"center\"></p-toast>\n\n<nav aria-label=\"breadcrumb\" dir=\"rtl\">\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">صفحه اصلی</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">سفارش محصول</li>\n  </ol>\n</nav>\n<form [formGroup]=\"formGroup\" class=\"pc\">\n\n  <mat-horizontal-stepper labelPosition=\"bottom\" linear #stepper1 formArrayName=\"formArray\" dir=\"rtl\"\n                          class=\"white border-stepper mb-5\">\n    <mat-step formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n\n      <ng-template matStepLabel>لیست سفارشات </ng-template>\n\n      <div>\n        <button matStepperNext class=\"mt-5 p-button-danger\" pButton type=\"button\" label=\"مرحله بعدی\"\n                icon=\"pi pi-angle-left\" iconPos=\"right\"   [disabled]=\"formArray.get([0]).invalid\"></button>\n      </div>\n\n    </mat-step>\n    <mat-step formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\" >\n\n      <ng-template matStepLabel>ورود/ثبت نام</ng-template>\n\n\n      <div>\n        <button matStepperNext class=\"mt-5 p-button-danger float-left\" pButton type=\"button\" label=\"مرحله بعدی\"\n                icon=\"pi pi-angle-left\" iconPos=\"left\" ></button>\n\n        <!--          <button matStepperNext class=\"btn primary-color btn-rounded float-left text-white\"-->\n        <!--                  [disabled]=\"formArray.get([1]).invalid\"-->\n        <!--          >مرحله بعدی <i class=\"fab fa-1x text-white fa-angle-left ml-3\"></i>-->\n        <!--          </button>-->\n        <button matStepperPrevious class=\"mt-5 p-button-danger float-right\" pButton type=\"button\" label=\"برگشت \"\n                icon=\"pi pi-angle-right\" iconPos=\"left\"></button>\n\n        <!--          <button matStepperPrevious class=\"btn primary-color btn-rounded  float-right text-white \"><i-->\n        <!--            class=\"fas fa-1x text-white fa-angle-right mr-3\"></i>برگشت-->\n        <!--          </button>-->\n      </div>\n\n    </mat-step>\n    <mat-step formGroupName=\"2\" [stepControl]=\"formArray?.get([2])\">\n\n      <ng-template matStepLabel>اطلاعات خریدار</ng-template>\n\n      <div>\n        <button matStepperNext class=\"mt-5 p-button-danger float-left\" pButton type=\"button\" label=\"مرحله بعدی\"\n                icon=\"pi pi-angle-left\" iconPos=\"right\"  [disabled]=\"formArray.get([2]).invalid\"></button>\n\n        <button matStepperPrevious class=\"mt-5 p-button-danger float-right\" pButton type=\"button\" label=\"برگشت \"\n                icon=\"pi pi-angle-right\" iconPos=\"left\"></button>\n\n      </div>\n\n    </mat-step>\n    <mat-step formGroupName=\"3\" [stepControl]=\"formArray?.get([3])\" >\n      <ng-template matStepLabel>نحوه ارسال</ng-template>\n\n\n      <div>\n        <button matStepperNext class=\" p-button-danger float-left\" pButton type=\"button\" label=\"بعدی\"\n                icon=\"pi pi-angle-left\" iconPos=\"right\" [disabled]=\"formArray.get([3]).invalid\"></button>\n\n        <button matStepperPrevious class=\"p-button-danger float-right\" pButton type=\"button\" label=\"برگشت\"\n                icon=\"pi pi-angle-right\" iconPos=\"left\"></button>\n      </div>\n    </mat-step>\n    <mat-step formGroupName=\"4\" [stepControl]=\"formArray?.get([4])\">\n      <ng-template matStepLabel>پیش فاکتور</ng-template>\n\n      <div>\n        <button matStepperNext class=\" p-button-danger float-left\" pButton type=\"button\" label=\"مرحله بعدی\"\n                icon=\"pi pi-angle-left\" iconPos=\"right\" [disabled]=\"formArray.get([4]).invalid\"></button>\n\n        <button matStepperPrevious class=\" p-button-danger float-right\" pButton type=\"button\" label=\"برگشت\"\n                icon=\"pi pi-angle-right\" iconPos=\"left\"></button>\n\n      </div>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>پرداخت</ng-template>\n\n      <h4 class=\"text-success text-center mt-2\">\n        کاربر محترم جهت پرداخت هزینه روی دکمه پرداخت کلیک کنید.\n      </h4>\n\n\n      <div>\n        <button class=\" p-button-danger\" pButton type=\"button\" label=\"پرداخت \" ></button>\n\n      </div>\n      <!--      </div>-->\n    </mat-step>\n  </mat-horizontal-stepper>\n</form>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/center-menu/center-menu.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/center-menu/center-menu.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCenterMenuCenterMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"col-sm-6 col-md-7\">\r\n    <div class=\"row row-center-menu\">\r\n      <img src=\"./assets/bootstrap/img/logo.png\" alt=\"\">\r\n      <h2>همـراه دانـش</h2>\r\n      <h6>آکادمی آموزشی همراه دانش با تیمی کاملا مجرب</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6 col-md-5\">\r\n    <div class=\"row row-center-menu-left\">\r\n      <ul class=\"nav navbar-nav pull-left\">\r\n        <li><img style=\"width: 50px;height:50px;\" src=\"./assets/bootstrap/img/teacher.png\" alt=\"\"><br><span><span>3215</span>اساتید</span></li>\r\n        <li><img style=\"width: 50px;height: 50px;\" src=\"./assets/bootstrap/img/user.png\" alt=\"\"><br><span><span style=\"color: #03af8c\">3254</span>دانشجویان</span></li>\r\n        <li><img style=\"width: 50px;height: 50px;\" src=\"./assets/bootstrap/img/time.png\" alt=\"\"><br><span><span>3215</span>زمان</span></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/comment/comment.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/comment/comment.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--start-comment-->\r\n<div class=\"container\">\r\n  <div class=\"caption\">\r\n    <span>نظرات کاربران</span>\r\n    <a class=\"pull-left\" href=\"#\">همه<i class=\"fas fa-angle-left\"></i></a>\r\n  </div>\r\n  <div class=\"row row-comment\">\r\n    <div class=\"col-md-5 row-comment-right\">\r\n      <a href=\"#\"><span><i class=\"fas fa-pen\"></i>آموزش کافیگ کردن مودم میتروتیک</span></a>\r\n      <div class=\"clearfix\"></div>\r\n      <h6><i class=\"fas fa-tag\"></i>کانفیگ</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>شبکه</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>میکروتیک</h6>\r\n    </div>\r\n    <div class=\"col-md-7 row-comment-left\">\r\n      <span class=\"pull-left\">125<i class=\"fas fa-thumbs-up\"></i></span>\r\n      <span class=\"pull-left\">154<i class=\"fas fa-comment\"></i></span>\r\n      <span class=\"pull-left\">541<i class=\"fas fa-eye\"></i></span>\r\n      <span class=\"pull-left\">1367/6/31<i class=\"fas fa-calendar\"></i></span>\r\n      <span class=\"pull-left\">رسول صیدی<i class=\"fas fa-user\"></i></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-comment\">\r\n    <div class=\"col-md-5 row-comment-right\">\r\n      <a href=\"#\"><span><i class=\"fas fa-pen\"></i>آموزش کافیگ کردن مودم میتروتیک</span></a>\r\n      <div class=\"clearfix\"></div>\r\n      <h6><i class=\"fas fa-tag\"></i>کانفیگ</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>شبکه</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>میکروتیک</h6>\r\n    </div>\r\n    <div class=\"col-md-7 row-comment-left\">\r\n      <span class=\"pull-left\">125<i class=\"fas fa-thumbs-up\"></i></span>\r\n      <span class=\"pull-left\">154<i class=\"fas fa-comment\"></i></span>\r\n      <span class=\"pull-left\">541<i class=\"fas fa-eye\"></i></span>\r\n      <span class=\"pull-left\">1367/6/31<i class=\"fas fa-calendar\"></i></span>\r\n      <span class=\"pull-left\">رسول صیدی<i class=\"fas fa-user\"></i></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-comment\">\r\n    <div class=\"col-md-5 row-comment-right\">\r\n      <a href=\"#\"><span><i class=\"fas fa-pen\"></i>آموزش کافیگ کردن مودم میتروتیک</span></a>\r\n      <div class=\"clearfix\"></div>\r\n      <h6><i class=\"fas fa-tag\"></i>کانفیگ</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>شبکه</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>میکروتیک</h6>\r\n    </div>\r\n    <div class=\"col-md-7 row-comment-left\">\r\n      <span class=\"pull-left\">125<i class=\"fas fa-thumbs-up\"></i></span>\r\n      <span class=\"pull-left\">154<i class=\"fas fa-comment\"></i></span>\r\n      <span class=\"pull-left\">541<i class=\"fas fa-eye\"></i></span>\r\n      <span class=\"pull-left\">1367/6/31<i class=\"fas fa-calendar\"></i></span>\r\n      <span class=\"pull-left\">رسول صیدی<i class=\"fas fa-user\"></i></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-comment\">\r\n    <div class=\"col-md-5 row-comment-right\">\r\n      <a href=\"#\"><span><i class=\"fas fa-pen\"></i>آموزش کافیگ کردن مودم میتروتیک</span></a>\r\n      <div class=\"clearfix\"></div>\r\n      <h6><i class=\"fas fa-tag\"></i>کانفیگ</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>شبکه</h6>\r\n      <h6><i class=\"fas fa-tag\"></i>میکروتیک</h6>\r\n    </div>\r\n    <div class=\"col-md-7 row-comment-left\">\r\n      <span class=\"pull-left\">125<i class=\"fas fa-thumbs-up\"></i></span>\r\n      <span class=\"pull-left\">154<i class=\"fas fa-comment\"></i></span>\r\n      <span class=\"pull-left\">541<i class=\"fas fa-eye\"></i></span>\r\n      <span class=\"pull-left\">1367/6/31<i class=\"fas fa-calendar\"></i></span>\r\n      <span class=\"pull-left\">رسول صیدی<i class=\"fas fa-user\"></i></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end-comment-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cooperation/cooperation.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cooperation/cooperation.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCooperationCooperationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"caption\">\n      <span>رشته های که با همراه دانش همکاری میکنند.</span>\n      <a class=\"pull-left\" routerLink=\"/Courses/films\">همه<i class=\"fas fa-angle-left\"></i></a>\n    </div>\n\n    <div class=\"col-sm-2 text-center\">\n      <img src=\"../../../assets/bootstrap/img/hack.jpg\" class=\"img-circle\" alt=\"\">\n      <h2>هک و امنیت</h2>\n      <span>123دوره</span>\n    </div>\n    <div class=\"col-sm-2 text-center\">\n      <img src=\"../../../assets/bootstrap/img/mobail-m.png\" class=\"img-circle\" alt=\"\">\n      <h2>مبایل مارکتینگ</h2>\n      <span>123دوره</span>\n    </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/content.png\" class=\"img-circle\" alt=\"\">\n    <h2>تولید محتوا</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/Math.png\" class=\"img-circle\" alt=\"\">\n    <h2>ریاضیات</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/controlbargh.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>کنترل و ابزار دقیق برق</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/tamiratbarg.png\" class=\"img-circle\" alt=\"\">\n    <h2>تعمییرات برق</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/nasbbargh.png\" class=\"img-circle\" alt=\"\">\n    <h2>نصب و راه اندازی برق</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/omran.png\" class=\"img-circle\" alt=\"\">\n    <h2>سازه های عمران</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/memari.png\" class=\"img-circle\" alt=\"\">\n    <h2>معماری ساختمان</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/mekanik.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>مهندسی مکانیک</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/hardware.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>مهندسی سخت افزار</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/memari.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>معماری کامپیوتر</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/network.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>شبکه کامپیوتر</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/hosh.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>هوش مصنوعی</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/honar.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>رشته هنر</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/keshavarzi.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>رشته کشاورزی</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/sanayeh.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>رشته صنایع</h2>\n    <span>123دوره</span>\n  </div>\n  <div class=\"col-sm-2 text-center\">\n    <img src=\"../../../assets/bootstrap/img/language.jpg\" class=\"img-circle\" alt=\"\">\n    <h2>رشته زبان</h2>\n    <span>123دوره</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/all-cantent/all-cantent.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/all-cantent/all-cantent.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmAllCantentAllCantentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row row-film\">\n    <div class=\"caption\">\n      <span>همه مطالب</span>\n      <a class=\"pull-left\" routerLink=\"/Courses/films\">همه<i class=\"fas fa-angle-left\"></i></a>\n    </div>\n    <div class=\"card-content\">\n      <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide>\n\n            <div class=\"thumbnail thumbnail-body-film\">\n              <a>\n                <div class=\"panel-heading\">\n                  <img class=\"img-responsive\" src=\"../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                  <a>1200تومان</a>\n                </div>\n                <div class=\"panel-body\">\n                  <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n                </div>\n              </a>\n              <a routerLink=\"/detail\">\n                <div class=\"panel-footer\">\n                  <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                  <span class=\"pull-left\" >رسول صیدی پیری</span>\n                </div>\n              </a>\n            </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n            <div class=\"thumbnail thumbnail-body-film\">\n              <a>\n                <div class=\"panel-heading\">\n                  <img class=\"img-responsive\" src=\"../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                  <a>1200تومان</a>\n                </div>\n                <div class=\"panel-body\">\n                  <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n                </div>\n              </a>\n              <a routerLink=\"/detail\">\n                <div class=\"panel-footer\">\n                  <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                  <span class=\"pull-left\" >رسول صیدی پیری</span>\n                </div>\n              </a>\n            </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n            <div class=\"thumbnail thumbnail-body-film\">\n              <a>\n                <div class=\"panel-heading\">\n                  <img class=\"img-responsive\" src=\"../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                  <a>1200تومان</a>\n                </div>\n                <div class=\"panel-body\">\n                  <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n                </div>\n              </a>\n              <a routerLink=\"/detail\">\n                <div class=\"panel-footer\">\n                  <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                  <span class=\"pull-left\" >رسول صیدی پیری</span>\n                </div>\n              </a>\n            </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n            <div class=\"thumbnail thumbnail-body-film\">\n              <a>\n                <div class=\"panel-heading\">\n                  <img class=\"img-responsive\" src=\"../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                  <a>1200تومان</a>\n                </div>\n                <div class=\"panel-body\">\n                  <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n                </div>\n              </a>\n              <a routerLink=\"/detail\">\n                <div class=\"panel-footer\">\n                  <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                  <span class=\"pull-left\" >رسول صیدی پیری</span>\n                </div>\n              </a>\n            </div>\n\n        </ng-template>\n\n      </owl-carousel-o>\n\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/film.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/film.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmFilmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-all-cantent></app-all-cantent>\r\n<app-most-downloads></app-most-downloads>\r\n<app-most-popular-content></app-most-popular-content>\r\n<app-hottest-content></app-hottest-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/content-all/content-all.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/content-all/content-all.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmHottestContentContentAllContentAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-menu></app-top-menu>\n<app-center-menu></app-center-menu>\n<app-menu></app-menu>\n<app-header></app-header>\n\n<div class=\"container\">\n  <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4\">\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4\">\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-4\">\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"thumbnail thumbnail-body-film\">\n        <a>\n          <div class=\"panel-heading\">\n            <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n          </div>\n          <div class=\"panel-body\">\n            <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n          </div>\n        </a>\n        <a >\n          <div class=\"panel-footer\">\n            <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n            <span class=\"pull-left\" >همراه دانش</span>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/hottest-content.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/hottest-content.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmHottestContentHottestContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row row-film\">\n    <div class=\"caption\">\n      <span>داغ ترین مطالب</span>\n<!--      <a class=\"pull-left\" routerLink=\"/Courses/films\">همه<i class=\"fas fa-angle-left\"></i></a>-->\n    </div>\n    <div class=\"card-content\">\n      <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a [routerLink]=\"['content-all']\">\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/schoole.jpg\"  alt=\"\">\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی مدارس</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n                <span class=\"pull-left\" >همراه دانش</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/daneshga.jpg\"  alt=\"\">\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه سوالات امتحانی دانشگاهی</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n                <span class=\"pull-left\" >همراه دانش</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/jozveh.jpg\"  alt=\"\">\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>جزوه های درسی دانشگاه </span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n                <span class=\"pull-left\" >همراه دانش</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/nemoneh.jpg\"  alt=\"\">\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>نمونه کارهای طراحی شده</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"./../../../../assets/bootstrap/img/logo.png\" alt=\"\">\n                <span class=\"pull-left\" >همراه دانش</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n\n      </owl-carousel-o>\n\n    </div>\n  </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-downloads/most-downloads.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-downloads/most-downloads.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmMostDownloadsMostDownloadsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row row-film\">\n    <div class=\"caption\">\n      <span>بیشترین دانلود ها</span>\n      <a class=\"pull-left\" routerLink=\"/Courses/films\">همه<i class=\"fas fa-angle-left\"></i></a>\n    </div>\n    <div class=\"card-content\">\n      <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n\n      </owl-carousel-o>\n\n    </div>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-popular-content/most-popular-content.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-popular-content/most-popular-content.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFilmMostPopularContentMostPopularContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row row-film\">\n    <div class=\"caption\">\n      <span>محبوب ترین مطالب</span>\n      <a class=\"pull-left\" routerLink=\"/Courses/films\">همه<i class=\"fas fa-angle-left\"></i></a>\n    </div>\n    <div class=\"card-content\">\n      <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n        <ng-template carouselSlide>\n\n          <div class=\"thumbnail thumbnail-body-film\">\n            <a>\n              <div class=\"panel-heading\">\n                <img class=\"img-responsive\" src=\"./../../../../assets/bootstrap/img/box.jpg\"  alt=\"\">\n                <a>1200تومان</a>\n              </div>\n              <div class=\"panel-body\">\n                <a href=\"#\"><span><i class=\"fa fa-circle\"></i>طراحی سایت</span></a>\n              </div>\n            </a>\n            <a routerLink=\"/detail\">\n              <div class=\"panel-footer\">\n                <img class=\"img-responsive img-circle\" src=\"/assets/bootstrap/img/default.png\" alt=\"\">\n                <span class=\"pull-left\" >رسول صیدی پیری</span>\n              </div>\n            </a>\n          </div>\n\n        </ng-template>\n\n      </owl-carousel-o>\n\n    </div>\n  </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--start-footer-top-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"col-md-3\">\r\n    <div class=\"row row-address\">\r\n      <div class=\"caption\">\r\n        <span>آدرس</span>\r\n      </div>\r\n      <ul>\r\n        <li><span><i class=\"fas fa-map-marker-alt\"></i><span>تهران:</span>خیابان وحدت اسلامتی کوچه حسین زاده پلاک 32 طبقه 4</span></li>\r\n        <li><span><i class=\"fas fa-phone\"></i><span>تلفن:</span>09169651136_021-33234565</span></li>\r\n        <li><span><i class=\"fas fa-fax\"></i><span>فکس:</span>021-33234245_021-33214584</span></li>\r\n        <li><span><i class=\"fas fa-envelope\"></i><span>ایمیل:</span>HD724@info.com</span></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-5\">\r\n    <div class=\"row row-emil\">\r\n      <div class=\"caption\">\r\n        <span>ما را دنبال کنید....</span>\r\n      </div>\r\n      <p>برای حرفه ای شدن در دنیای دیجیتال و اگاه شدن از تخفیفات وساخت دوره های جدید با خبر شوید!</p>\r\n<!--      <form  class=\"form-horizontal \" >-->\r\n        <div class=\"form-group input-group \">\r\n          <input class=\"form-control\" type=\"text\" name=\"txt\" placeholder=\"ایمیل خود را وارد کنید....\">\r\n          <div class=\"input-group-btn\"><button type=\"submit\" class=\"btn\" >ثبت</button></div>\r\n        </div>\r\n<!--      </form>-->\r\n      <div class=\"row center-block\">\r\n        <a href=\"javascript:showZPTrust();\" title=\"Ø¯Ø±ÙˆØ§Ø²Ù‡ Ù¾Ø±Ø¯Ø§Ø®Øª Ù…Ø¹ØªØ¨Ø±\"><img src=\"https://cdn.zarinpal.com/badges/trustLogo/1.svg\" border=\"0\" alt=\"Ø¯Ø±ÙˆØ§Ø²Ù‡ Ù¾Ø±Ø¯Ø§Ø®Øª Ù…Ø¹ØªØ¨Ø±\"></a>'\r\n        <img  class=\"img-responsive pull-right text-center\" src=\"/assets/bootstrap/img/enamad.png\"/>\r\n        <img  class=\"img-responsive pull-right text-center\" src=\"/assets/bootstrap/img/nashr-d3.png\">\r\n        <img  class=\"img-responsive pull-right text-center\" src=\"/assets/bootstrap/img/samand.png\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"row row-service\">\r\n      <div class=\"caption\">\r\n        <span>خدمات سایت</span>\r\n      </div>\r\n      <ul>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>فایل تدریس</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>دوره های آموزشی</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>استخدامی</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>فیلم های آموزشی</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>نمونه کار</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>طراحی پروژه</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"row row-learn\">\r\n      <div class=\"caption\">\r\n        <span>خدمات آموزشی</span>\r\n      </div>\r\n      <ul>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>دوره های طراحی سایت</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>دوره های کامل اندروید</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>اموزش تولید محتوا و سئو</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>آموزش برنامه نویسی</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>شبکه و امنیت</a></li>\r\n        <li><a href=\"#\"><i class=\"fas fa-play-circle\"></i>بانک های اطلاعاتی</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end-footer-top-->\r\n<!--start-footer-center-->\r\n<div class=\"container-fluid container-fluid-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-center\">\r\n      <div class=\"col-md-8\">\r\n        <span class=\"col-md-2\">در باره ما</span>\r\n        <p class=\"col-md-10\">همراه دانش یکی از بهترین سایت ها در زمینه طراحی و آموزش های حرفه ای کامپیوتر فعالیت میکند و این نتیجه کاری با فعالیت های شبا نه روزی تیم و همکاری بسیار قوی و همچنین همایت شما کاربران عزیز از تیم همراه دانش به دست آمده شما هم میتوانید با پیوسنم به خانواده بزرگ همراه دانش میتوانید.</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <a class=\"pull-left\" href=\"#\"><img src=\"./assets/bootstrap/img/twitter.png\" alt=\"\"></a>\r\n        <a class=\"pull-left\" href=\"#\"><img src=\"./assets/bootstrap/img/instagram.png\" alt=\"\"></a>\r\n        <a class=\"pull-left\" href=\"#\"><img src=\"./assets/bootstrap/img/telegram.png\" alt=\"\"></a>\r\n        <a class=\"pull-left\" href=\"#\"><img src=\"./assets/bootstrap/img/facebook.png\" alt=\"\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end-footer-center-->\r\n<!--start-footer-down-->\r\n<div class=\"container-fluid container-footer-down\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <span> تمام حقوق این سایت قانونی می باشد و مربوط به تیم همراه دانش می باشد و همچنین دارای مجوز های رسمی از مراجع مربوطه می باشد و همه فعالیت های ذکر شده کاملا قانونی می باشد.</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--end-footer-down-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<owl-carousel-o [options]=\"customOptions\">\r\n  <ng-template carouselSlide>\r\n    <img src=\"../../../assets/bootstrap/img/slider1.jpeg\" alt=\"first slide\" >\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n    </div>\r\n  </ng-template>\r\n  <ng-template carouselSlide>\r\n    <img src=\"../../../assets/bootstrap/img/slider2.jpeg\" alt=\"first slide\" >\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n    </div>\r\n  </ng-template>\r\n  <ng-template carouselSlide>\r\n    <img src=\"../../../assets/bootstrap/img/slider1.jpeg\" alt=\"first slide\" >\r\n    <div class=\"carousel-caption d-none d-md-block\">\r\n    </div>\r\n  </ng-template>\r\n</owl-carousel-o>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/index/index.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/index/index.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-menu></app-top-menu>\r\n<app-center-menu></app-center-menu>\r\n<app-menu></app-menu>\r\n<app-header></app-header>\r\n<app-article></app-article>\r\n<app-film></app-film>\r\n<app-cooperation></app-cooperation>\r\n<!--<app-comment></app-comment>-->\r\n\r\n<app-footer></app-footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-8\">\r\n      <div class=\"row row-menu-right\">\r\n      <div class=\"navbar-header navbar-header-custom\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">\r\n          <div class=\"icon-bar\"></div>\r\n          <div class=\"icon-bar\"></div>\r\n          <div class=\"icon-bar\"></div>\r\n        </button>\r\n      </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"menu\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li><a href=\"#\">طراحی سایت</a></li>\r\n            <li><a href=\"#\">برنامه نویسی</a></li>\r\n            <li><a href=\"#\">شبکه</a></li>\r\n            <li><a href=\"#\">بانک اطلاعاتی</a></li>\r\n            <li><a href=\"#\">سئو</a></li>\r\n            <li><a href=\"#\">اندروید</a></li>\r\n            <li><a href=\"#\">گرافیک</a></li>\r\n            <li><a href=\"#\">محتوا</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-sm-6 col-md-4 \">\r\n    <div class=\"row row-menu-left pull-left\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\"><img src=\"./assets/bootstrap/img/twitter.png\" alt=\"\"></a></li>\r\n        <li><a href=\"#\"><img src=\"./assets/bootstrap/img/instagram.png\" alt=\"\"></a></li>\r\n        <li><a href=\"#\"><img src=\"./assets/bootstrap/img/telegram.png\" alt=\"\"></a></li>\r\n        <li><a href=\"#\"><img src=\"./assets/bootstrap/img/facebook.png\" alt=\"\"></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-menu/top-menu.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-menu/top-menu.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutTopMenuTopMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"container-fluid\">\r\n  <div id=\"top-menu-right\" class=\"col-xs-8 col-md-8\">\r\n      <nav class=\"navbar\">\r\n          <div class=\"collapse navbar-collapse\" id=\"top-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li><a href=\"#\">خانه</a></li>\r\n              <li><a routerLink=\"/support\">پشتیبانی</a></li>\r\n              <li><a href=\"#\">تبلیغات</a></li>\r\n              <li data-toggle=\"modal\" data-target=\".modal-custom-ozviat\"><a routerLink=\"/auth/register\"  >عضویت</a></li>\r\n              <li><a routerLink=\"/about\">درباره ما</a></li>\r\n              <li><a routerLink=\"/contact\">تماس با ما</a></li>\r\n            </ul>\r\n          </div>\r\n      </nav>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-4 col-md-4 pull-left\" id=\"top-menu-left\">\r\n    <div class=\"row row-top-menu-left\">\r\n      <ul class=\"nav navbar-nav pull-left\">\r\n        <li><a href=\"#\"><span class=\"fa fa-search\"></span>جستجو</a></li>\r\n        <li><a routerLink=\"/teacher\"><span class=\"fa fa-user\"></span>مدرس شوید</a></li>\r\n        <li><a routerLink=\"/auth/login\"><span class=\"fa fa-key\"></span>ورود</a></li>\r\n        <li><a href=\"#\"><span class=\"fa fa-shopping-cart\"></span>فروشگاه</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/article/article.component.css":
  /*!******************************************************!*\
    !*** ./src/app/layout/article/article.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutArticleArticleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*start-article*/\r\n.container .row-article .col-sm-3{\r\n  margin-top: 30px;\r\n}\r\n.container .row-article .caption{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n.container .row-article .caption span{\r\n  font-family: IRANSans_Bold;\r\n  font-size: 18px;\r\n  color: #03af8c;\r\n}\r\n.container .row-article .caption a{\r\n  font-family: IRANSans_Bold;\r\n  text-decoration: none;\r\n  color: #000000;\r\n  margin-left: 30px;\r\n}\r\n.container .row-article .caption a i{\r\n  margin-right: 5px;\r\n}\r\n.container .row-article .thumbnail-body{\r\n  padding: 0px;\r\n  border: none;\r\n}\r\n.container .row-article .thumbnail-body .panel-heading{\r\n  border-bottom: none;\r\n  padding: 0px;\r\n}\r\n.container .row-article .thumbnail-body .panel-heading img{\r\n  width: 100%;\r\n}\r\n.container .row-article .thumbnail-body .panel-body{\r\n  background-color:#03af8c ;\r\n}\r\n.container .row-article .thumbnail-body .panel-body a{\r\n  text-decoration: none;\r\n}\r\n.container .row-article .thumbnail-body .panel-body a span{\r\n  font-family:IRANSans_Light;\r\n  color: #ffffff;\r\n  font-size: 14px;\r\n}\r\n.container .row-article .thumbnail-body .panel-body a span i{\r\n  margin-left: 10px;\r\n  font-size: 18px;\r\n}\r\n.container .row-article  .panel-footer{\r\n  background-color: #ff7800;\r\n  margin: 0px 3px;\r\n  box-shadow: 0px 5px 7px -5px #000 inset;\r\n  border-bottom-left-radius:7px ;\r\n  border-bottom-right-radius:7px ;\r\n  height: 40px;\r\n  color: #ffffff;\r\n}\r\n.container .row-article  .panel-footer a{\r\n  text-decoration: none;\r\n  font-family: IRANSans_Light;\r\n  color: #ffffff;\r\n}\r\n/*end-article*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCO0FBQ0EsY0FBYyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qc3RhcnQtYXJ0aWNsZSovXHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlIC5jb2wtc20tM3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlIC5jYXB0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlIC5jYXB0aW9uIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMDNhZjhjO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlIC5jYXB0aW9uIGF7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlIC5jYXB0aW9uIGEgaXtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYXJ0aWNsZSAudGh1bWJuYWlsLWJvZHl7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYXJ0aWNsZSAudGh1bWJuYWlsLWJvZHkgLnBhbmVsLWhlYWRpbmd7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWFydGljbGUgLnRodW1ibmFpbC1ib2R5IC5wYW5lbC1oZWFkaW5nIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYXJ0aWNsZSAudGh1bWJuYWlsLWJvZHkgLnBhbmVsLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDNhZjhjIDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYXJ0aWNsZSAudGh1bWJuYWlsLWJvZHkgLnBhbmVsLWJvZHkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWFydGljbGUgLnRodW1ibmFpbC1ib2R5IC5wYW5lbC1ib2R5IGEgc3BhbntcclxuICBmb250LWZhbWlseTpJUkFOU2Fuc19MaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWFydGljbGUgLnRodW1ibmFpbC1ib2R5IC5wYW5lbC1ib2R5IGEgc3BhbiBpe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctYXJ0aWNsZSAgLnBhbmVsLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODAwO1xyXG4gIG1hcmdpbjogMHB4IDNweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDdweCAtNXB4ICMwMDAgaW5zZXQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo3cHggO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjdweCA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1hcnRpY2xlICAucGFuZWwtZm9vdGVyIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4vKmVuZC1hcnRpY2xlKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/article/article.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/article/article.component.ts ***!
    \*****************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppLayoutArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
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


    var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout.service */
    "./src/app/layout/layout.service.ts");

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(service) {
        _classCallCheck(this, ArticleComponent);

        this.service = service;
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.service.listArticle().subscribe(function (response) {
            if (response['success'] === true) {
              _this32.listArticle = response['data'];
            }
          });
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ctorParameters = function () {
      return [{
        type: _layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/article/article.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article.component.css */
      "./src/app/layout/article/article.component.css"))["default"]]
    })], ArticleComponent);
    /***/
  },

  /***/
  "./src/app/layout/cart/cart.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/layout/cart/cart.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*.fas{*/\n/*  font-family: \"Font Awesome 5 Pro\"!important;*/\n/*}*/\n.container {\n  border-width: thick;\n  border-style: solid;\n  border-color: #1e7e34 !important;\n  border-radius: 20px !important;\n}\n:host::ng-deep.mat-step-icon-content {\n  font-family: IRANSansWeb_Bold !important;\n}\n:host::ng-deep.mat-horizontal-stepper-header-container {\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.mat-stepper-horizontal {\n  font-family: IRANSansWeb_Bold;\n  border-radius: 25px;\n}\n:host::ng-deep.mat-step-header .mat-step-icon-selected {\n  background: #EF2B2F;\n  height: 50px;\n  width: 50px;\n}\n:host::ng-deep.mat-step-header .mat-step-label {\n  color: white;\n}\n:host::ng-deep.mat-step-header .mat-step-label.mat-step-label-active {\n  color: white;\n}\n#headerstepmobile {\n  color: #CC0000;\n  text-align: center;\n  margin-top: -30px;\n  margin-bottom: 30px;\n}\n.alert-danger {\n  font-family: IRANSansWeb;\n  font-size: 12px;\n  margin-right: 1px !important;\n  margin-left: 1px !important;\n}\n/*::ng-deep.ng-star-inserted{*/\n/*font-family: Iransans-Bold;*/\n/*}*/\n.material-icons {\n  font-family: \"Material Icons\" !important;\n}\n.btn-primary {\n  font-family: IRANSansWeb_Bold;\n  font-size: 14px;\n}\n.fa {\n  font-family: \"Material Icons\" !important;\n}\n.panel {\n  font-family: IRANSansWeb_Bold;\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.alert-danger {\n  margin-left: -15px;\n  margin-right: -15px;\n}\np {\n  font-family: IRANSansWeb_Bold;\n  font-size: 12px;\n  color: #333;\n  text-align: center;\n  margin-right: -15px !important;\n  margin-left: -15px !important;\n}\n.step2-panel-right {\n  font-family: IRANSansWeb_Bold;\n  font-size: 17px;\n  color: black !important;\n}\n.btn {\n  font-family: IRANSansWeb_Bold;\n  font-size: 14px;\n}\nspan {\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:hover {\n  /*background: #00b8d4;*/\n  border-color: #0d47a1;\n}\n:host::ng-deep.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {\n  box-sizing: border-box;\n  flex-direction: column;\n  height: auto;\n  padding: 10px !important;\n}\n:host::ng-deep.matStepLabel {\n  color: #060705 !important;\n  font-size: 13px;\n}\n:host::ng-deep.mat-stepper-vertical {\n  margin-top: -15px !important;\n  margin-right: -15px !important;\n  margin-left: -15px !important;\n}\n:host::ng-deep.mat-step-icon-content.ng-star-inserted {\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.mat-icon.notranslate.material-icons.mat-icon-no-color.ng-star-inserted {\n  font-family: \"Material Icons\" !important;\n}\n:host::ng-deep.mat-step-header .mat-step-label {\n  color: black !important;\n  font-size: 13px !important;\n}\n:host::ng-deep.mat-stepper-vertical-line::before {\n  color: #e64a19 !important;\n  border-width: medium !important;\n  border-style: solid !important;\n  margin-right: 10px !important;\n  margin-top: 5px !important;\n  margin-bottom: 5px !important;\n  margin-right: -10px !important;\n}\n:host::ng-deep.mat-vertical-stepper-header .mat-step-icon {\n  /*margin-right: -20px!important;*/\n}\n:host::ng-deep.mat-step-header .mat-step-icon {\n  height: 50px !important;\n  width: 50px !important;\n  /*margin-right: -20px!important;*/\n  border-style: solid !important;\n  border-width: thin !important;\n  border-color: #d39e00 !important;\n}\n:host::ng-deep.mat-step-header .mat-step-icon:hover {\n  background: #EF2B2F;\n}\n:host::ng-deep.ck.ck-editor__editable_inline > :first-child {\n  height: 100px !important;\n}\n:host::ng-deep.mat-form-field-appearance-outline .mat-form-field-infix {\n  margin-top: -5px;\n}\ntextarea#tozihat {\n  color: black;\n  border-width: thin;\n  border-style: solid;\n  border-color: #29b6f6;\n  height: 150%;\n  width: 100%;\n  margin-right: -3%;\n}\n/*@media (min-width: 768px)  and (max-width: 991px){*/\n/*#mobile{*/\n/*display: block;*/\n/*margin-left:3%;*/\n/*}*/\n/*::ng-deep ng-template{*/\n/*font-size: 13px!important;*/\n/*}*/\n/*#headerstepmobile{*/\n/*font-size: 14px;*/\n/*color: #CC0000;*/\n/*text-align: center;*/\n/*margin-top: -30px;*/\n/*margin-bottom: 30px;*/\n/*}*/\n/*#mobile-title{*/\n/*font-size: 14px;*/\n/*}*/\n/*#pc{*/\n/*display: none;*/\n/*}*/\n/*}*/\n@media (max-width: 768px) {\n  ::ng-deep ng-template {\n    font-size: 13px !important;\n  }\n\n  #headerstepmobile {\n    font-size: 14px;\n    color: #CC0000;\n    text-align: center;\n    margin-top: -30px;\n    margin-bottom: 30px;\n  }\n\n  label {\n    font-size: 12px;\n  }\n\n  #title {\n    font-size: 14px;\n  }\n}\n.input-group-prepend input {\n  font-family: IRANSansWeb_Bold;\n  border-width: thin;\n  border-style: solid;\n  border-bottom-color: #29b6f6 !important;\n  border-right-color: #29b6f6 !important;\n  border-top-color: #29b6f6 !important;\n  font-size: 15px;\n}\nselect {\n  font-size: 15px;\n  border-width: thin;\n  border-style: solid;\n  border-color: #a94442;\n}\ninput::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.input-group-text {\n  /*border-color: #29b6f6!important;*/\n  border-bottom-color: #29b6f6 !important;\n  border-left-color: #29b6f6 !important;\n  border-top-color: #29b6f6 !important;\n}\n:host::ng-deep.modal-dialog.modal-notify .modal-body {\n  text-align: center !important;\n}\n.modal-footer {\n  justify-content: center !important;\n}\n.modal-dialog.modal-notify.modal-danger .modal-header {\n  /*background-color: #FF8800;*/\n  border-radius: 10px;\n}\n.modal-content {\n  border-radius: 10px !important;\n}\n.modal-dialog.modal-notify.modal-warning .modal-header {\n  background-color: #FF8800;\n  border-radius: 10px;\n}\n.modal-content {\n  border-radius: 10px !important;\n}\n/*Phones*/\n@media (max-width: 359px) and (min-width: 300px) {\n  /*.mat-stepper-horizontal {*/\n  /*margin-left: -4%!important;*/\n  /*margin-right: -4%!important;*/\n  /*}*/\n  .input-group-prepend {\n    margin-left: -40%;\n    margin-right: -20%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -240%;\n    font-size: 11px;\n  }\n\n  .tozihat {\n    margin-right: -90%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  ::ng-deep .mat-step-label {\n    font-size: 11px !important;\n  }\n}\n/*Phones*/\n@media (max-width: 399px) and (min-width: 360px) {\n  ::ng-deep.mat-stepper-horizontal {\n    margin-left: -6%;\n    margin-right: -3%;\n  }\n\n  .input-group-prepend {\n    margin-left: -30%;\n    margin-right: -20%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -165% !important;\n    font-size: 11px;\n  }\n\n  .tozihat {\n    margin-left: 20%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  :host::ng-deep .mat-step-label {\n    font-size: 12px !important;\n  }\n}\n@media (max-width: 449px) and (min-width: 400px) {\n  .input-group-prepend {\n    margin-left: -25%;\n    margin-right: -20%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -120%;\n    font-size: 11px;\n  }\n\n  .tozihat {\n    margin-left: 30%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  ::ng-deep .mat-step-label {\n    font-size: 12px !important;\n  }\n}\n/*Phones*/\n@media (max-width: 549px) and (min-width: 450px) {\n  .input-group-prepend {\n    margin-left: -20%;\n    margin-right: -10%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -60%;\n    font-size: 12px;\n  }\n\n  .tozihat {\n    margin-left: 20%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  ::ng-deep .mat-step-label {\n    font-size: 11px !important;\n  }\n}\n@media (max-width: 767px) and (min-width: 550px) {\n  table thead th {\n    font-size: 13px;\n    cursor: pointer;\n  }\n\n  table tr th {\n    font-size: 13px !important;\n    cursor: pointer;\n  }\n\n  #titleUploadFile {\n    font-family: IRANSansWeb_Bold !important;\n    font-size: 13px;\n  }\n\n  .input-group-prepend {\n    margin-left: -10%;\n    margin-right: -10%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -60%;\n    font-size: 12px;\n  }\n\n  .tozihat {\n    margin-left: 50%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  :host::ng-deep .mat-step-label {\n    font-size: 13px !important;\n  }\n}\n/*Tables*/\n@media (max-width: 991px) and (min-width: 768px) {\n  .input-group-prepend {\n    margin-left: -10%;\n    margin-right: -10%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -110%;\n    font-size: 12px;\n  }\n\n  .tozihat {\n    margin-left: 10%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n\n  :host::ng-deep .mat-step-label {\n    font-size: 14px !important;\n  }\n}\n/*Small Laptop*/\n@media (max-width: 1199px) and (min-width: 992px) {\n  .input-group-prepend {\n    margin-left: -10%;\n    margin-right: -10%;\n  }\n\n  input::-webkit-input-placeholder {\n    font-size: 10px;\n  }\n\n  .input-group label {\n    margin-right: -50%;\n    font-size: 12px;\n  }\n\n  .tozihat {\n    margin-left: 10%;\n    float: left;\n  }\n\n  #tozihat {\n    margin-left: -120%;\n  }\n}\n:host::ng-deep.form-control.is-invalid {\n  background-position: center left calc(.375em + .1875rem);\n}\n.validationForm {\n  font-size: 11px !important;\n}\ntable thead th {\n  font-size: 14px;\n  cursor: pointer;\n}\ntable tr th {\n  font-size: 14px !important;\n  cursor: pointer;\n}\ntable tbody tr:hover {\n  background: #FF8800;\n  color: white;\n}\n#titleUploadFile {\n  font-family: IRANSansWeb_Bold !important;\n  font-size: 15px;\n}\n.progress-bar {\n  font-size: 14px;\n}\n.modal-title {\n  margin-left: 40%;\n}\n.modal {\n  padding-right: 15px !important;\n  padding-left: 15px !important;\n}\n.imgUploadFile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.imgUploadFilePDF {\n  display: flex;\n  justify-content: center;\n}\n.view.view-cascade {\n  margin-left: 70% !important;\n  /*margin-right: 10%!important;*/\n  margin-top: -20px;\n  background: #a5becf;\n  /*color: white;*/\n  color: #333;\n  font-size: 12px;\n  border-radius: 10px !important;\n  border-style: solid;\n  border-width: thin;\n  border-color: #a5becf;\n}\n.card {\n  border-radius: 10px !important;\n  border-style: solid;\n  border-width: thin;\n  border-color: white;\n}\n.card.card-cascade {\n  width: 100rem;\n}\n.input-group {\n  font-family: IRANSansWeb;\n}\n/*.form-control{*/\n/*  border-style: solid;*/\n/*  border-width: thin;*/\n/*  border-color:#e0e0e0;*/\n/*  font-family: IRANSansWeb;*/\n/*  font-size: 15px;*/\n/*  background:#fff3e0 ;*/\n/*}*/\n.fas {\n  color: #e65100;\n}\n.btn-primary {\n  font-family: IRANSansWeb;\n  font-size: 15px;\n  line-height: 1;\n  border-radius: 10px !important;\n  border-style: solid;\n  border-width: thin;\n  border-color: white;\n}\nmat-radio-button {\n  font-family: IRANSansWeb;\n}\n.list-group-item {\n  margin-right: 15px !important;\n  display: list-item !important;\n  padding-top: -15px !important;\n}\nhr {\n  margin-bottom: -16px !important;\n}\n.card.card-cascade.narrower .view.view-cascade {\n  margin-top: -1.85rem !important;\n}\n@media (max-width: 768px) {\n  .view.view-cascade {\n    margin-left: 65% !important;\n  }\n}\n.border-stepper {\n  border-radius: 10px !important;\n  border: 2px solid #a5becf;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n/*.classic-tabs{*/\n/*  margin-right: 100px!important;*/\n/*  margin-left: 100px!important;*/\n/*}*/\n.classic-tabs .nav li a {\n  color: #fff;\n  font-size: 14px;\n}\n::ng-deep.mat-step-header .mat-step-icon-state-edit {\n  background-color: #4d4d4d !important;\n  color: white;\n}\n.mobile {\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile {\n    display: block;\n  }\n\n  ::ng-deep.mat-vertical-content-container {\n    margin-left: 0;\n    margin-right: 55px !important;\n  }\n\n  .pc {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .mobile {\n    display: none;\n  }\n\n  ::ng-deep.mat-vertical-content-container {\n    margin-left: 0;\n    margin-right: 55px !important;\n  }\n\n  .pc {\n    display: block;\n  }\n}\n.example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin-right: 60px !important;\n}\n.example-radio-button {\n  margin: 5px;\n}\n.example-container .mat-form-field + .mat-form-field {\n  margin-left: 1px;\n}\n.example-right-align {\n  text-align: left;\n}\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: block;\n}\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n::ng-deep.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: transparent !important;\n}\n::ng-deep.mat-form-field-label-wrapper {\n  font-family: IRANSansWeb;\n  text-align: right;\n}\n#IranMap .map {\n  width: 100% !important;\n}\n.fa-info-circle {\n  color: #90caf9 !important;\n  border-color: #bbdefb;\n  background: white !important;\n  text-align: left;\n  font-size: 100px;\n}\n:host::ng-deep.ui-fileupload-row > div {\n  display: table-cell;\n  padding: 0.5em 1em;\n  vertical-align: middle;\n  width: 200px;\n  /* margin-right: 200px; */\n}\n:host::ng-deep legend {\n  display: block;\n  width: 20% !important;\n  /*max-width: 100%;*/\n  padding: 0;\n}\n:host::ng-deep.ui-inputtext.ng-valid {\n  border: 1.3px solid #00C851 !important;\n}\n::ng-deep .ui-inputtext.ng-dirty.ng-invalid {\n  border: 1.3px solid #ff0808 !important;\n}\nlabel {\n  font-family: IRANSansWeb;\n}\ninput {\n  font-family: IRANSansWeb_Bold;\n}\n/*:host::ng-deep.ui-fieldset {*/\n/*  border: 1px solid #c8c8c8;*/\n/*  background-color: #d5e3ec!important;*/\n/*  color: #333333;*/\n/*}*/\n:host::ng-deep.ui-fieldset {\n  border-radius: 10px !important;\n  border: 2px solid #a5becf;\n}\n:host::ng-deep.ui-fieldset .ui-fieldset-legend a {\n  padding: 0.571em 1em;\n  border: 2px solid #a5becf;\n  background-color: #0099CC;\n  border-radius: 7px;\n  color: #fff;\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  :host::ng-deep.ui-fieldset .ui-fieldset-legend a {\n    padding-left: 2em;\n    border: 2px solid #a5becf;\n    background-color: #0099CC;\n    border-radius: 7px;\n    color: #fff;\n  }\n}\n:host::ng-deep.ui-button {\n  font-family: IRANSansWeb_Bold !important;\n}\n:host::ng-deep.ui-toast-message-text-content {\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.ui-chkbox-label {\n  color: #0d5bdd !important;\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.ui-fileupload-files img {\n  /* border: 0; */\n  border-style: solid;\n  border-color: black;\n  border-width: thin;\n  height: 100px;\n  width: 100px;\n}\ntextarea {\n  font-family: IRANSansWeb_Bold;\n}\n:host::ng-deep.x.p-panel .p-panel-header {\n  color: #4d4d4d !important;\n  font-family: IRANSans_Light !important;\n}\n:host::ng-deep.p-datatable .p-datatable-tbody > tr > td {\n  font-family: IRANSans_Light !important;\n  text-align: center;\n}\n:host::ng-deep.p-datatable .p-datatable-thead > tr > th {\n  background: #e0e0e0 !important;\n  color: #4d4d4d !important;\n  font-family: IRANSans_Light !important;\n  text-align: center;\n}\n/*.pi {*/\n/*  font-family: 'primeicons'!important;*/\n/*}*/\n.TitlePanel {\n  font-family: IRANSans_Light !important;\n  color: black !important;\n  font-size: 15px;\n}\n:host::ng-deep.p-card {\n  border: 1px solid #bdbdbd !important;\n}\n.titleCard {\n  font-family: IRANSans_Bold;\n  font-size: 16px;\n}\n.subTitleCard {\n  font-family: IRANSans_Light;\n  font-size: 15px;\n}\n.breadcrumb-item {\n  font-family: IRANSans_Light;\n  font-size: 15px;\n}\n:host::ng-deep.mat-step-text-label {\n  font-family: IRANSans_Bold;\n}\n:host::ng-deep.ng-star-inserted {\n  /*font-family: IRANSans_Bold;*/\n}\nlabel {\n  font-family: IRANSans_Light;\n}\n:host::ng-deep.p-dropdown.p-dropdown-clearable .p-dropdown-label {\n  text-align: right !important;\n  margin-right: 20px !important;\n}\n:host::ng-deep.p-dropdown .p-dropdown-clear-icon {\n  right: 1rem !important;\n}\n:host::ng-deep.p-dropdown-panel .p-dropdown-items {\n  font-family: IRANSans_Light !important;\n  text-align: right !important;\n}\n.postText {\n  font-family: IRANSans_Light;\n  font-size: 16px;\n  color: #2e6da4;\n}\n.login-link {\n  font-size: 12px;\n}\n.nav-tabs .nav-item {\n  width: 50%;\n  text-align: center;\n}\n.nav-tabs .nav-item .nav-link {\n  background-color: #f2f2f2 !important;\n  border: none !important;\n  border-top: 2px #f2f2f2 solid !important;\n  color: darkgrey;\n  font-weight: normal;\n  border-radius: unset !important;\n  line-height: 35px;\n}\n.nav-tabs .nav-item .nav-link.active {\n  background-color: #ffffff !important;\n  border: none !important;\n  border-top: 2px #EF2B2F solid !important;\n  color: #EF2B2F;\n  font-weight: bold;\n  line-height: 35px;\n}\n.nav-tabs {\n  margin-bottom: 25px;\n  border-bottom: none !important;\n}\n.nav-tabs .nav-item.show .nav-link, .login-nav .nav-link.active {\n  color: #ffffff;\n  font-weight: bold;\n}\n:host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th, :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n    text-align: right !important;\n  }\n\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: right;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em -0.4em -0.4em 1rem;\n    font-weight: bold;\n  }\n\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*df*/\n.product-item {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  width: 100%;\n}\nimg {\n  width: 75px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 1rem;\n}\n.product-list-detail {\n  flex: 1 1 0;\n}\n.product-list-action {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.product-category-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n.product-category {\n  vertical-align: middle;\n  line-height: 1;\n}\n@media screen and (max-width: 576px) {\n  .product-item {\n    flex-wrap: wrap;\n  }\n\n  .image-container {\n    width: 100%;\n    text-align: center;\n  }\n\n  img {\n    margin: 0 0 1rem 0;\n    width: 100px;\n  }\n}\n.pi-trash {\n  margin-right: 150px;\n  z-index: 999999;\n  position: absolute;\n}\ninput, select {\n  font-family: IRANSans_Bold;\n}\n:host::ng-deep.mat-radio-label-content {\n  font-family: IRANSans_Bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhcnQvRDpcXGhkNzIzMTQwMC9zcmNcXGFwcFxcbGF5b3V0XFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFFBQUE7QUFDQSxpREFBQTtBQUNBLElBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDQUY7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7QURDQTtFQUNFLDZCQUFBO0FDRUY7QURBQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7QUNHRjtBRERBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0lGO0FERkE7RUFDRSxZQUFBO0FDS0Y7QURIQTtFQUNFLFlBQUE7QUNNRjtBREpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09GO0FETEE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDUUY7QUROQSw4QkFBQTtBQUNBLDhCQUFBO0FBRUEsSUFBQTtBQUNBO0VBQ0Usd0NBQUE7QUNRRjtBRE5BO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FDU0Y7QURQQTtFQUNFLHdDQUFBO0FDVUY7QURSQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1dGO0FEVEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDWUY7QURWQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNhRjtBRFhBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNjRjtBRFpBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FDZUY7QURiQTtFQUNFLDZCQUFBO0FDZ0JGO0FEYkE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0FDZ0JGO0FEZEE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDaUJGO0FEZkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNrQkY7QURoQkE7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNtQkY7QURoQkE7RUFDRSw2QkFBQTtBQ21CRjtBRGpCQTtFQUNFLHdDQUFBO0FDb0JGO0FEbEJBO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtBQ3FCRjtBRGxCQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDcUJGO0FEbkJBO0VBQ0UsaUNBQUE7QUNzQkY7QURwQkE7RUFFRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNzQkY7QURwQkE7RUFFRSxtQkFBQTtBQ3NCRjtBRHBCQTtFQUNFLHdCQUFBO0FDdUJGO0FEckJBO0VBQ0UsZ0JBQUE7QUN3QkY7QURyQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3dCRjtBRG5CQSxxREFBQTtBQUNBLFdBQUE7QUFDQSxrQkFBQTtBQUNBLGtCQUFBO0FBQ0EsSUFBQTtBQUNBLHlCQUFBO0FBQ0EsNkJBQUE7QUFDQSxJQUFBO0FBQ0EscUJBQUE7QUFDQSxtQkFBQTtBQUNBLGtCQUFBO0FBQ0Esc0JBQUE7QUFDQSxxQkFBQTtBQUNBLHVCQUFBO0FBQ0EsSUFBQTtBQUNBLGlCQUFBO0FBQ0EsbUJBQUE7QUFDQSxJQUFBO0FBQ0EsT0FBQTtBQUNBLGlCQUFBO0FBQ0EsSUFBQTtBQUNBLElBQUE7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUNzQkY7O0VEcEJBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUN1QkY7O0VEckJBO0lBQ0UsZUFBQTtFQ3dCRjs7RURyQkE7SUFDRSxlQUFBO0VDd0JGO0FBQ0Y7QURyQkE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFFQSxlQUFBO0FDc0JGO0FEbkJBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ3NCRjtBRHBCQTtFQUNFLGVBQUE7QUN1QkY7QURuQkE7RUFDRSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtBQ3NCRjtBRGxCQTtFQUNFLDZCQUFBO0FDcUJGO0FEbkJBO0VBQ0Usa0NBQUE7QUNzQkY7QURwQkE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0FDdUJGO0FEckJBO0VBQ0UsOEJBQUE7QUN3QkY7QUR0QkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDeUJGO0FEdkJBO0VBQ0UsOEJBQUE7QUMwQkY7QUR4QkEsU0FBQTtBQUNBO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsSUFBQTtFQUNBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQzJCRjs7RUR6QkE7SUFDRSxlQUFBO0VDNEJGOztFRDFCQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQzZCRjs7RUQzQkE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUM4QkY7O0VENUJBO0lBQ0Usa0JBQUE7RUMrQkY7O0VEN0JBO0lBRUUsMEJBQUE7RUMrQkY7QUFDRjtBRDdCQSxTQUFBO0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUMrQkY7O0VEN0JBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ2dDRjs7RUQ5QkE7SUFDRSxlQUFBO0VDaUNGOztFRC9CQTtJQUNFLDhCQUFBO0lBQ0EsZUFBQTtFQ2tDRjs7RURoQ0E7SUFDRSxnQkFBQTtJQUVBLFdBQUE7RUNrQ0Y7O0VEaENBO0lBQ0Usa0JBQUE7RUNtQ0Y7O0VEakNBO0lBRUUsMEJBQUE7RUNtQ0Y7QUFDRjtBRGpDQTtFQUVFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ2tDRjs7RURoQ0E7SUFDRSxlQUFBO0VDbUNGOztFRGpDQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQ29DRjs7RURsQ0E7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUNxQ0Y7O0VEakNBO0lBQ0Usa0JBQUE7RUNvQ0Y7O0VEbENBO0lBRUUsMEJBQUE7RUNvQ0Y7QUFDRjtBRGpDQSxTQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUNtQ0Y7O0VEakNBO0lBQ0UsZUFBQTtFQ29DRjs7RURsQ0E7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUNxQ0Y7O0VEbkNBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDc0NGOztFRHBDQTtJQUNFLGtCQUFBO0VDdUNGOztFRHJDQTtJQUVFLDBCQUFBO0VDdUNGO0FBQ0Y7QURwQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VDc0NGOztFRHBDQTtJQUNFLDBCQUFBO0lBQ0EsZUFBQTtFQ3VDRjs7RURyQ0E7SUFDRSx3Q0FBQTtJQUNBLGVBQUE7RUN3Q0Y7O0VEdENBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ3lDRjs7RUR2Q0E7SUFDRSxlQUFBO0VDMENGOztFRHhDQTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQzJDRjs7RUR6Q0E7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUM0Q0Y7O0VEMUNBO0lBQ0Usa0JBQUE7RUM2Q0Y7O0VEM0NBO0lBRUUsMEJBQUE7RUM2Q0Y7QUFDRjtBRHpDQSxTQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7RUMyQ0Y7O0VEekNBO0lBQ0UsZUFBQTtFQzRDRjs7RUQxQ0E7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUM2Q0Y7O0VEM0NBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0VDOENGOztFRDVDQTtJQUNFLGtCQUFBO0VDK0NGOztFRDdDQTtJQUVFLDBCQUFBO0VDK0NGO0FBQ0Y7QUQzQ0EsZUFBQTtBQUNBO0VBRUU7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDNENGOztFRDFDQTtJQUNFLGVBQUE7RUM2Q0Y7O0VEM0NBO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VDOENGOztFRDVDQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtFQytDRjs7RUQ3Q0E7SUFDRSxrQkFBQTtFQ2dERjtBQUNGO0FEN0NBO0VBQ0Usd0RBQUE7QUMrQ0Y7QUQ3Q0E7RUFDRSwwQkFBQTtBQ2dERjtBRDlDQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDaURGO0FEL0NBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDa0RGO0FEaERBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDbURGO0FEakRBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0FDb0RGO0FEbERBO0VBQ0UsZUFBQTtBQ3FERjtBRG5EQTtFQUNFLGdCQUFBO0FDc0RGO0FEcERBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQ3VERjtBRHJEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDd0RGO0FEdERBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDeURGO0FEdERBO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUN5REY7QUR0REE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3lERjtBRHZEQTtFQUNFLGFBQUE7QUMwREY7QUR4REE7RUFDRSx3QkFBQTtBQzJERjtBRHpEQSxpQkFBQTtBQUVBLHlCQUFBO0FBQ0Esd0JBQUE7QUFDQSwwQkFBQTtBQUNBLDhCQUFBO0FBQ0EscUJBQUE7QUFDQSx5QkFBQTtBQUVBLElBQUE7QUFDQTtFQUNFLGNBQUE7QUMwREY7QUR4REE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUMyREY7QUR6REE7RUFDRSx3QkFBQTtBQzRERjtBRHpEQTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQzRERjtBRDFEQTtFQUNFLCtCQUFBO0FDNkRGO0FEM0RBO0VBQ0UsK0JBQUE7QUM4REY7QUQzREE7RUFDRTtJQUNFLDJCQUFBO0VDOERGO0FBQ0Y7QUQ1REE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQzhERjtBRDVEQSxpQkFBQTtBQUNBLG1DQUFBO0FBQ0Esa0NBQUE7QUFDQSxJQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQytERjtBRDdEQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ2dFRjtBRDlEQTtFQUNFLGFBQUE7QUNpRUY7QUQvREE7RUFDRTtJQUNFLGNBQUE7RUNrRUY7O0VEL0RBO0lBQ0UsY0FBQTtJQUNBLDZCQUFBO0VDa0VGOztFRGhFQTtJQUNFLGFBQUE7RUNtRUY7QUFDRjtBRGpFQTtFQUNFO0lBQ0UsYUFBQTtFQ21FRjs7RURoRUE7SUFDRSxjQUFBO0lBQ0EsNkJBQUE7RUNtRUY7O0VEakVBO0lBQ0UsY0FBQTtFQ29FRjtBQUNGO0FEbEVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUNvRUY7QURqRUE7RUFDRSxXQUFBO0FDb0VGO0FEbEVBO0VBQ0UsZ0JBQUE7QUNxRUY7QURsRUE7RUFDRSxnQkFBQTtBQ3FFRjtBRGxFQTs7RUFFRSxjQUFBO0FDcUVGO0FEbEVBO0VBQ0UsMEJBQUE7QUNxRUY7QURuRUE7RUFDRSx3Q0FBQTtBQ3NFRjtBRHBFQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUN1RUY7QURyRUE7RUFFRSxzQkFBQTtBQ3VFRjtBRHBFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN1RUY7QURyRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUN3RUY7QUR0RUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUN5RUY7QUR0RUE7RUFDRSxzQ0FBQTtBQ3lFRjtBRHZFQTtFQUNFLHNDQUFBO0FDMEVGO0FEeEVBO0VBQU8sd0JBQUE7QUM0RVA7QUQzRUE7RUFBTSw2QkFBQTtBQytFTjtBRDlFQSwrQkFBQTtBQUNBLCtCQUFBO0FBQ0EseUNBQUE7QUFDQSxvQkFBQTtBQUNBLElBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUNpRkY7QUQvRUE7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBWSxlQUFBO0FDbUZkO0FEakZBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNvRkY7QUFDRjtBRGxGQTtFQUNFLHdDQUFBO0FDb0ZGO0FEakZBO0VBQTZDLDZCQUFBO0FDcUY3QztBRHBGQTtFQUErQix5QkFBQTtFQUF5Qiw2QkFBQTtBQ3lGeEQ7QUR4RkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUMyRkY7QUR6RkE7RUFBUyw2QkFBQTtBQzZGVDtBRDVGQTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7QUMrRkY7QUQ1RkE7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0FDK0ZGO0FEN0ZBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUNnR0Y7QUQ3RkEsUUFBQTtBQUNBLHlDQUFBO0FBQ0EsSUFBQTtBQUNBO0VBQ0Usc0NBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNnR0Y7QUQ5RkE7RUFDRSxvQ0FBQTtBQ2lHRjtBRC9GQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ2tHRjtBRGhHQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ21HRjtBRGpHQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ29HRjtBRGpHQTtFQUNFLDBCQUFBO0FDb0dGO0FEbEdBO0VBQ0UsOEJBQUE7QUNxR0Y7QURsR0E7RUFDRSwyQkFBQTtBQ3FHRjtBRGxHQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNxR0Y7QURuR0E7RUFDRSxzQkFBQTtBQ3NHRjtBRHBHQTtFQUNFLHNDQUFBO0VBQ0EsNEJBQUE7QUN1R0Y7QURyR0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDd0dGO0FEdEdBO0VBQ0UsZUFBQTtBQ3lHRjtBRHZHQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQzBHRjtBRHhHQTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUMyR0Y7QUR6R0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQzRHRjtBRDFHQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUM2R0Y7QUQzR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUM4R0Y7QUR6R0E7RUFDRSxhQUFBO0FDNEdGO0FEMUdBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLDRCQUFBO0VDNkdGOztFRDNHQTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUM4R0Y7O0VENUdBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlDQUFBO0lBQ0EsaUJBQUE7RUMrR0Y7O0VEN0dBO0lBQ0UseUNBQUE7RUNnSEY7QUFDRjtBRDdHQSxLQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQytHRjtBRDdHQTtFQUNFLFdBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FDZ0hGO0FEN0dBO0VBQ0UsV0FBQTtBQ2dIRjtBRDdHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDZ0hGO0FEN0dBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQ2dIRjtBRDdHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQ2dIRjtBRDVHQTtFQUNFO0lBQ0UsZUFBQTtFQytHRjs7RUQ3R0E7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUNnSEY7O0VEN0dBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VDZ0hGO0FBQ0Y7QUQ3R0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQytHRjtBRDdHQTtFQUNFLDBCQUFBO0FDZ0hGO0FEOUdBO0VBRUUscUNBQUE7QUNnSEYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qLmZhc3sqL1xyXG4vKiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgUHJvXCIhaW1wb3J0YW50OyovXHJcbi8qfSovXHJcbi5jb250YWluZXJ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGljaztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzFlN2UzNCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50e1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwcGVyLWhvcml6b250YWx7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZDogI0VGMkIyRiA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWx7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2hlYWRlcnN0ZXBtb2JpbGV7XHJcbiAgY29sb3I6ICNDQzAwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmFsZXJ0LWRhbmdlcntcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMXB4IWltcG9ydGFudDtcclxufVxyXG4vKjo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkeyovXHJcbi8qZm9udC1mYW1pbHk6IElyYW5zYW5zLUJvbGQ7Ki9cclxuXHJcbi8qfSovXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mYXtcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiIWltcG9ydGFudDtcclxufVxyXG4ucGFuZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcbi5hbGVydC1kYW5nZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxucHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0ZXAyLXBhbmVsLXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG59XHJcbi5idG57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbnNwYW57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6aG92ZXJ7XHJcbiAgLypiYWNrZ3JvdW5kOiAjMDBiOGQ0OyovXHJcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExIDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdFN0ZXBMYWJlbHtcclxuICBjb2xvcjogIzA2MDcwNSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtcclxuICBtYXJnaW4tdG9wOiAtMTVweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4IWltcG9ydGFudDtcclxuXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50Lm5nLXN0YXItaW5zZXJ0ZWR7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAubWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Iubmctc3Rhci1pbnNlcnRlZHtcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtcclxuICBjb2xvcjogI2U2NGExOSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW0haW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB4IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTEwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgLyptYXJnaW4tcmlnaHQ6IC0yMHB4IWltcG9ydGFudDsqL1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvblxyXG57XHJcbiAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcclxuICB3aWR0aDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgLyptYXJnaW4tcmlnaHQ6IC0yMHB4IWltcG9ydGFudDsqL1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogdGhpbiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDM5ZTAwIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb246aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6ICNFRjJCMkY7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAuY2suY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmU+OmZpcnN0LWNoaWxkIHtcclxuICBoZWlnaHQ6IDEwMHB4IWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSN0b3ppaGF0e1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyOWI2ZjY7XHJcbiAgaGVpZ2h0OiAxNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogLTMlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSAgYW5kIChtYXgtd2lkdGg6IDk5MXB4KXsqL1xyXG4vKiNtb2JpbGV7Ki9cclxuLypkaXNwbGF5OiBibG9jazsqL1xyXG4vKm1hcmdpbi1sZWZ0OjMlOyovXHJcbi8qfSovXHJcbi8qOjpuZy1kZWVwIG5nLXRlbXBsYXRleyovXHJcbi8qZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDsqL1xyXG4vKn0qL1xyXG4vKiNoZWFkZXJzdGVwbW9iaWxleyovXHJcbi8qZm9udC1zaXplOiAxNHB4OyovXHJcbi8qY29sb3I6ICNDQzAwMDA7Ki9cclxuLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxuLyptYXJnaW4tdG9wOiAtMzBweDsqL1xyXG4vKm1hcmdpbi1ib3R0b206IDMwcHg7Ki9cclxuLyp9Ki9cclxuLyojbW9iaWxlLXRpdGxleyovXHJcbi8qZm9udC1zaXplOiAxNHB4OyovXHJcbi8qfSovXHJcbi8qI3BjeyovXHJcbi8qZGlzcGxheTogbm9uZTsqL1xyXG4vKn0qL1xyXG4vKn0qL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICA6Om5nLWRlZXAgbmctdGVtcGxhdGV7XHJcbiAgICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAjaGVhZGVyc3RlcG1vYmlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjQ0MwMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgfVxyXG4gICN0aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIGlucHV0e1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IzI5YjZmNiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiMyOWI2ZjYhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IzI5YjZmNiFpbXBvcnRhbnQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICNhOTQ0NDI7XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICAvKmJvcmRlci1jb2xvcjogIzI5YjZmNiFpbXBvcnRhbnQ7Ki9cclxuICBib3JkZXItYm90dG9tLWNvbG9yOiMyOWI2ZjYhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiMyOWI2ZjYhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IzI5YjZmNiFpbXBvcnRhbnQ7XHJcblxyXG5cclxufVxyXG46aG9zdDo6bmctZGVlcC5tb2RhbC1kaWFsb2cubW9kYWwtbm90aWZ5IC5tb2RhbC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZGlhbG9nLm1vZGFsLW5vdGlmeS5tb2RhbC1kYW5nZXIgLm1vZGFsLWhlYWRlciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4ODAwOyovXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubW9kYWwtY29udGVudHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZGlhbG9nLm1vZGFsLW5vdGlmeS5tb2RhbC13YXJuaW5nIC5tb2RhbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjg4MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubW9kYWwtY29udGVudHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG4vKlBob25lcyovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTlweCkgYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XHJcbiAgLyoubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7Ki9cclxuICAvKm1hcmdpbi1sZWZ0OiAtNCUhaW1wb3J0YW50OyovXHJcbiAgLyptYXJnaW4tcmlnaHQ6IC00JSFpbXBvcnRhbnQ7Ki9cclxuICAvKn0qL1xyXG4gIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjAlO1xyXG4gIH1cclxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbnB1dC1ncm91cCBsYWJlbHtcclxuICAgIG1hcmdpbi1yaWdodDogLTI0MCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC50b3ppaGF0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICN0b3ppaGF0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAlO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1zdGVwLWxhYmVsIHtcclxuXHJcbiAgICBmb250LXNpemU6IDExcHghaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4vKlBob25lcyovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTlweCkgYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XHJcbiAgOjpuZy1kZWVwLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02JTtcclxuICAgIG1hcmdpbi1yaWdodDogLTMlO1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwJTtcclxuICB9XHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAgbGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNjUlIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLnRvemloYXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG5cclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAjdG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIwJTtcclxuICB9XHJcbiAgOmhvc3Q6Om5nLWRlZXAgLm1hdC1zdGVwLWxhYmVsIHtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG5cclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1JTtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwJTtcclxuICB9XHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAgbGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMjAlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuICAudG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcblxyXG4gIH1cclxuICAjdG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIwJTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUGhvbmVzKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0OXB4KSBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwJTtcclxuICB9XHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAgbGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC50b3ppaGF0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAjdG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIwJTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcbiAgdGFibGUgdGhlYWQgdGh7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIHRhYmxlIHRyIHRoe1xyXG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI3RpdGxlVXBsb2FkRmlsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMCU7XHJcbiAgfVxyXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmlucHV0LWdyb3VwIGxhYmVse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNjAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAudG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI3RvemloYXR7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEyMCU7XHJcbiAgfVxyXG4gIDpob3N0OjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKlRhYmxlcyovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMCU7XHJcbiAgfVxyXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmlucHV0LWdyb3VwIGxhYmVse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTEwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLnRvemloYXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICN0b3ppaGF0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAlO1xyXG4gIH1cclxuICA6aG9zdDo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWwge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLypTbWFsbCBMYXB0b3AqL1xyXG5AbWVkaWEgKG1heC13aWR0aDoxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwJTtcclxuICB9XHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaW5wdXQtZ3JvdXAgbGFiZWx7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC50b3ppaGF0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAjdG96aWhhdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTIwJTtcclxuICB9XHJcblxyXG59XHJcbjpob3N0OjpuZy1kZWVwLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdCBjYWxjKC4zNzVlbSArIC4xODc1cmVtKTtcclxufVxyXG4udmFsaWRhdGlvbkZvcm17XHJcbiAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcclxufVxyXG50YWJsZSB0aGVhZCB0aHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRhYmxlIHRyIHRoe1xyXG4gIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRhYmxlIHRib2R5IHRyOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNGRjg4MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiN0aXRsZVVwbG9hZEZpbGV7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4IWltcG9ydGFudDtcclxufVxyXG4uaW1nVXBsb2FkRmlsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmltZ1VwbG9hZEZpbGVQREZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnZpZXcudmlldy1jYXNjYWRlIHtcclxuICBtYXJnaW4tbGVmdDogNzAlIWltcG9ydGFudDtcclxuICAvKm1hcmdpbi1yaWdodDogMTAlIWltcG9ydGFudDsqL1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJhY2tncm91bmQ6I2E1YmVjZjtcclxuICAvKmNvbG9yOiB3aGl0ZTsqL1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICBib3JkZXItY29sb3I6ICNhNWJlY2Y7XHJcblxyXG59XHJcbi5jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmNhcmQuY2FyZC1jYXNjYWRle1xyXG4gIHdpZHRoOiAxMDByZW07XHJcbn1cclxuLmlucHV0LWdyb3Vwe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYjtcclxufVxyXG4vKi5mb3JtLWNvbnRyb2x7Ki9cclxuXHJcbi8qICBib3JkZXItc3R5bGU6IHNvbGlkOyovXHJcbi8qICBib3JkZXItd2lkdGg6IHRoaW47Ki9cclxuLyogIGJvcmRlci1jb2xvcjojZTBlMGUwOyovXHJcbi8qICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7Ki9cclxuLyogIGZvbnQtc2l6ZTogMTVweDsqL1xyXG4vKiAgYmFja2dyb3VuZDojZmZmM2UwIDsqL1xyXG5cclxuLyp9Ki9cclxuLmZhc3tcclxuICBjb2xvcjojZTY1MTAwO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxubWF0LXJhZGlvLWJ1dHRvbntcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XHJcblxyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogLTE1cHghaW1wb3J0YW50O1xyXG59XHJcbmhye1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNnB4IWltcG9ydGFudDtcclxufVxyXG4uY2FyZC5jYXJkLWNhc2NhZGUubmFycm93ZXIgLnZpZXcudmlldy1jYXNjYWRlIHtcclxuICBtYXJnaW4tdG9wOiAtMS44NXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWV3LnZpZXctY2FzY2FkZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5ib3JkZXItc3RlcHBlcntcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYTViZWNmO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4vKi5jbGFzc2ljLXRhYnN7Ki9cclxuLyogIG1hcmdpbi1yaWdodDogMTAwcHghaW1wb3J0YW50OyovXHJcbi8qICBtYXJnaW4tbGVmdDogMTAwcHghaW1wb3J0YW50OyovXHJcbi8qfSovXHJcbi5jbGFzc2ljLXRhYnMgLm5hdiBsaSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1vYmlsZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgfVxyXG4gIDo6bmctZGVlcC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubW9iaWxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgfVxyXG4gIDo6bmctZGVlcC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tcmlnaHQ6IDYwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI0lyYW5NYXAgLm1hcCB7XHJcblxyXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmZhLWluZm8tY2lyY2xle1xyXG4gIGNvbG9yOiM5MGNhZjkhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2JiZGVmYjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLWZpbGV1cGxvYWQtcm93PmRpdiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAuNWVtIDFlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDIwMHB4OyAqL1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIGxlZ2VuZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIwJSFpbXBvcnRhbnQ7XHJcbiAgLyptYXgtd2lkdGg6IDEwMCU7Ki9cclxuICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG46aG9zdDo6bmctZGVlcC51aS1pbnB1dHRleHQubmctdmFsaWQge1xyXG4gIGJvcmRlcjogMS4zcHggc29saWQgIzAwQzg1MSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAgLnVpLWlucHV0dGV4dC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcclxuICBib3JkZXI6IDEuM3B4IHNvbGlkICNmZjA4MDghaW1wb3J0YW50O1xyXG59XHJcbmxhYmVseyBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7fVxyXG5pbnB1dHtmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDt9XHJcbi8qOmhvc3Q6Om5nLWRlZXAudWktZmllbGRzZXQgeyovXHJcbi8qICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4OyovXHJcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlM2VjIWltcG9ydGFudDsqL1xyXG4vKiAgY29sb3I6ICMzMzMzMzM7Ki9cclxuLyp9Ki9cclxuOmhvc3Q6Om5nLWRlZXAudWktZmllbGRzZXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhNWJlY2Y7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWktZmllbGRzZXQgLnVpLWZpZWxkc2V0LWxlZ2VuZCBhIHtcclxuICBwYWRkaW5nOiAwLjU3MWVtIDFlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYTViZWNmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Q0M7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGNvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCApIHtcclxuICA6aG9zdDo6bmctZGVlcC51aS1maWVsZHNldCAudWktZmllbGRzZXQtbGVnZW5kIGEge1xyXG4gICAgcGFkZGluZy1sZWZ0OjJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhNWJlY2Y7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OUNDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQhaW1wb3J0YW50O1xyXG5cclxufVxyXG46aG9zdDo6bmctZGVlcC51aS10b2FzdC1tZXNzYWdlLXRleHQtY29udGVudHtmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDt9XHJcbjpob3N0OjpuZy1kZWVwLnVpLWNoa2JveC1sYWJlbHtjb2xvcjogIzBkNWJkZCFpbXBvcnRhbnQ7Zm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7fVxyXG46aG9zdDo6bmctZGVlcC51aS1maWxldXBsb2FkLWZpbGVzIGltZyB7XHJcbiAgLyogYm9yZGVyOiAwOyAqL1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxudGV4dGFyZWF7Zm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7fVxyXG46aG9zdDo6bmctZGVlcC54LnAtcGFuZWwgLnAtcGFuZWwtaGVhZGVyIHtcclxuICBjb2xvcjojNGQ0ZDRkICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0IWltcG9ydGFudDtcclxuXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0IWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aHtcclxuICBiYWNrZ3JvdW5kOiNlMGUwZTAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiM0ZDRkNGQgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyoucGkgeyovXHJcbi8qICBmb250LWZhbWlseTogJ3ByaW1laWNvbnMnIWltcG9ydGFudDsqL1xyXG4vKn0qL1xyXG4uVGl0bGVQYW5lbHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLnAtY2FyZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgI2JkYmRiZCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlQ2FyZHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnN1YlRpdGxlQ2FyZHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5icmVhZGNydW1iLWl0ZW17XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXAtdGV4dC1sYWJlbHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVke1xyXG4gIC8qZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7Ki9cclxuXHJcbn1cclxubGFiZWx7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG5cclxufVxyXG46aG9zdDo6bmctZGVlcC5wLWRyb3Bkb3duLnAtZHJvcGRvd24tY2xlYXJhYmxlIC5wLWRyb3Bkb3duLWxhYmVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4IWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5wLWRyb3Bkb3duIC5wLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gIHJpZ2h0OiAxcmVtIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5wLWRyb3Bkb3duLXBhbmVsIC5wLWRyb3Bkb3duLWl0ZW1zIHtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcclxufVxyXG4ucG9zdFRleHR7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzJlNmRhNDtcclxufVxyXG4ubG9naW4tbGlua3tcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtaXRlbXtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAycHggI2YyZjJmMiBzb2xpZCFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGRhcmtncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogdW5zZXQhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAycHggI0VGMkIyRiBzb2xpZCFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNFRjJCMkY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuLm5hdi10YWJze1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLmxvZ2luLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IC0wLjRlbSAtMC40ZW0gLTAuNGVtIDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG4gIH1cclxufVxyXG5cclxuLypkZiovXHJcbi5wcm9kdWN0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3QtZGV0YWlsIHtcclxuICBmbGV4OiAxIDEgMDtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhdGVnb3J5LWljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtY2F0ZWdvcnkge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5waS10cmFzaHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuaW5wdXQsc2VsZWN0e1xyXG4gIGZvbnQtZmFtaWx5OklSQU5TYW5zX0JvbGQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xyXG5cclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZCFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLyouZmFzeyovXG4vKiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgUHJvXCIhaW1wb3J0YW50OyovXG4vKn0qL1xuLmNvbnRhaW5lciB7XG4gIGJvcmRlci13aWR0aDogdGhpY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzFlN2UzNCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNFRjJCMkY7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jaGVhZGVyc3RlcG1vYmlsZSB7XG4gIGNvbG9yOiAjQ0MwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcHggIWltcG9ydGFudDtcbn1cblxuLyo6Om5nLWRlZXAubmctc3Rhci1pbnNlcnRlZHsqL1xuLypmb250LWZhbWlseTogSXJhbnNhbnMtQm9sZDsqL1xuLyp9Ki9cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZhIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIiAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbn1cblxuLnN0ZXAyLXBhbmVsLXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6aG92ZXIge1xuICAvKmJhY2tncm91bmQ6ICMwMGI4ZDQ7Ki9cbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdFN0ZXBMYWJlbCB7XG4gIGNvbG9yOiAjMDYwNzA1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBtYXJnaW4tdG9wOiAtMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQubmctc3Rhci1pbnNlcnRlZCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtaWNvbi5ub3RyYW5zbGF0ZS5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbi1uby1jb2xvci5uZy1zdGFyLWluc2VydGVkIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIiAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICBjb2xvcjogI2U2NGExOSAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IG1lZGl1bSAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgLyptYXJnaW4tcmlnaHQ6IC0yMHB4IWltcG9ydGFudDsqL1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgLyptYXJnaW4tcmlnaHQ6IC0yMHB4IWltcG9ydGFudDsqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkMzllMDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0VGMkIyRjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAuY2suY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUgPiA6Zmlyc3QtY2hpbGQge1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG50ZXh0YXJlYSN0b3ppaGF0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzI5YjZmNjtcbiAgaGVpZ2h0OiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMyU7XG59XG5cbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSAgYW5kIChtYXgtd2lkdGg6IDk5MXB4KXsqL1xuLyojbW9iaWxleyovXG4vKmRpc3BsYXk6IGJsb2NrOyovXG4vKm1hcmdpbi1sZWZ0OjMlOyovXG4vKn0qL1xuLyo6Om5nLWRlZXAgbmctdGVtcGxhdGV7Ki9cbi8qZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDsqL1xuLyp9Ki9cbi8qI2hlYWRlcnN0ZXBtb2JpbGV7Ki9cbi8qZm9udC1zaXplOiAxNHB4OyovXG4vKmNvbG9yOiAjQ0MwMDAwOyovXG4vKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuLyptYXJnaW4tdG9wOiAtMzBweDsqL1xuLyptYXJnaW4tYm90dG9tOiAzMHB4OyovXG4vKn0qL1xuLyojbW9iaWxlLXRpdGxleyovXG4vKmZvbnQtc2l6ZTogMTRweDsqL1xuLyp9Ki9cbi8qI3BjeyovXG4vKmRpc3BsYXk6IG5vbmU7Ki9cbi8qfSovXG4vKn0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCBuZy10ZW1wbGF0ZSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjaGVhZGVyc3RlcG1vYmlsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjQ0MwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gICN0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyOWI2ZjYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMjliNmY2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyOWI2ZjYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYTk0NDQyO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICAvKmJvcmRlci1jb2xvcjogIzI5YjZmNiFpbXBvcnRhbnQ7Ki9cbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI5YjZmNiAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzI5YjZmNiAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjMjliNmY2ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLm1vZGFsLWRpYWxvZy5tb2RhbC1ub3RpZnkgLm1vZGFsLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1kaWFsb2cubW9kYWwtbm90aWZ5Lm1vZGFsLWRhbmdlciAubW9kYWwtaGVhZGVyIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4ODAwOyovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZGlhbG9nLm1vZGFsLW5vdGlmeS5tb2RhbC13YXJuaW5nIC5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4ODAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLypQaG9uZXMqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDM1OXB4KSBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcbiAgLyoubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7Ki9cbiAgLyptYXJnaW4tbGVmdDogLTQlIWltcG9ydGFudDsqL1xuICAvKm1hcmdpbi1yaWdodDogLTQlIWltcG9ydGFudDsqL1xuICAvKn0qL1xuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC00MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjAlO1xuICB9XG5cbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjQwJTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuICAudG96aWhhdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtOTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI3RvemloYXQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTIwJTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICB9XG59XG4vKlBob25lcyovXG5AbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIGFuZCAobWluLXdpZHRoOiAzNjBweCkge1xuICA6Om5nLWRlZXAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IC02JTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zJTtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogLTMwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMCU7XG4gIH1cblxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmlucHV0LWdyb3VwIGxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNjUlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgLnRvemloYXQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjdG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAlO1xuICB9XG5cbiAgOmhvc3Q6Om5nLWRlZXAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0OXB4KSBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUlO1xuICAgIG1hcmdpbi1yaWdodDogLTIwJTtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogLTEyMCU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgLnRvemloYXQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjdG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qUGhvbmVzKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDlweCkgYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMCU7XG4gIH1cblxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgLmlucHV0LWdyb3VwIGxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC02MCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnRvemloYXQge1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjdG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMjAlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gIHRhYmxlIHRoZWFkIHRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgdGFibGUgdHIgdGgge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICN0aXRsZVVwbG9hZEZpbGUge1xuICAgIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYl9Cb2xkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIG1hcmdpbi1yaWdodDogLTEwJTtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogLTYwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAudG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICN0b3ppaGF0IHtcbiAgICBtYXJnaW4tbGVmdDogLTEyMCU7XG4gIH1cblxuICA6aG9zdDo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG59XG4vKlRhYmxlcyovXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAlO1xuICB9XG5cbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5pbnB1dC1ncm91cCBsYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTEwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAudG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICN0b3ppaGF0IHtcbiAgICBtYXJnaW4tbGVmdDogLTEyMCU7XG4gIH1cblxuICA6aG9zdDo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG4vKlNtYWxsIExhcHRvcCovXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIG1hcmdpbi1yaWdodDogLTEwJTtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAuaW5wdXQtZ3JvdXAgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAudG96aWhhdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gICN0b3ppaGF0IHtcbiAgICBtYXJnaW4tbGVmdDogLTEyMCU7XG4gIH1cbn1cbjpob3N0OjpuZy1kZWVwLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQgY2FsYyguMzc1ZW0gKyAuMTg3NXJlbSk7XG59XG5cbi52YWxpZGF0aW9uRm9ybSB7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB0aGVhZCB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG50YWJsZSB0ciB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZGODgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jdGl0bGVVcGxvYWRGaWxlIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuXG4ubW9kYWwge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nVXBsb2FkRmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nVXBsb2FkRmlsZVBERiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udmlldy52aWV3LWNhc2NhZGUge1xuICBtYXJnaW4tbGVmdDogNzAlICFpbXBvcnRhbnQ7XG4gIC8qbWFyZ2luLXJpZ2h0OiAxMCUhaW1wb3J0YW50OyovXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBiYWNrZ3JvdW5kOiAjYTViZWNmO1xuICAvKmNvbG9yOiB3aGl0ZTsqL1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLWNvbG9yOiAjYTViZWNmO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC5jYXJkLWNhc2NhZGUge1xuICB3aWR0aDogMTAwcmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XG59XG5cbi8qLmZvcm0tY29udHJvbHsqL1xuLyogIGJvcmRlci1zdHlsZTogc29saWQ7Ki9cbi8qICBib3JkZXItd2lkdGg6IHRoaW47Ki9cbi8qICBib3JkZXItY29sb3I6I2UwZTBlMDsqL1xuLyogIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYjsqL1xuLyogIGZvbnQtc2l6ZTogMTVweDsqL1xuLyogIGJhY2tncm91bmQ6I2ZmZjNlMCA7Ki9cbi8qfSovXG4uZmFzIHtcbiAgY29sb3I6ICNlNjUxMDA7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc1dlYjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogbGlzdC1pdGVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAtMTVweCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIG1hcmdpbi1ib3R0b206IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLmNhcmQtY2FzY2FkZS5uYXJyb3dlciAudmlldy52aWV3LWNhc2NhZGUge1xuICBtYXJnaW4tdG9wOiAtMS44NXJlbSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnZpZXcudmlldy1jYXNjYWRlIHtcbiAgICBtYXJnaW4tbGVmdDogNjUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5ib3JkZXItc3RlcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2E1YmVjZjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLyouY2xhc3NpYy10YWJzeyovXG4vKiAgbWFyZ2luLXJpZ2h0OiAxMDBweCFpbXBvcnRhbnQ7Ki9cbi8qICBtYXJnaW4tbGVmdDogMTAwcHghaW1wb3J0YW50OyovXG4vKn0qL1xuLmNsYXNzaWMtdGFicyAubmF2IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogNTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBjIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogNTVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBjIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI0lyYW5NYXAgLm1hcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5mYS1pbmZvLWNpcmNsZSB7XG4gIGNvbG9yOiAjOTBjYWY5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2JiZGVmYjtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAudWktZmlsZXVwbG9hZC1yb3cgPiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgLyogbWFyZ2luLXJpZ2h0OiAyMDBweDsgKi9cbn1cblxuOmhvc3Q6Om5nLWRlZXAgbGVnZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgLyptYXgtd2lkdGg6IDEwMCU7Ki9cbiAgcGFkZGluZzogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAudWktaW5wdXR0ZXh0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCAjMDBDODUxICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudWktaW5wdXR0ZXh0Lm5nLWRpcnR5Lm5nLWludmFsaWQge1xuICBib3JkZXI6IDEuM3B4IHNvbGlkICNmZjA4MDggIWltcG9ydGFudDtcbn1cblxubGFiZWwge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWI7XG59XG5cbmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG59XG5cbi8qOmhvc3Q6Om5nLWRlZXAudWktZmllbGRzZXQgeyovXG4vKiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6ICNkNWUzZWMhaW1wb3J0YW50OyovXG4vKiAgY29sb3I6ICMzMzMzMzM7Ki9cbi8qfSovXG46aG9zdDo6bmctZGVlcC51aS1maWVsZHNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2E1YmVjZjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAudWktZmllbGRzZXQgLnVpLWZpZWxkc2V0LWxlZ2VuZCBhIHtcbiAgcGFkZGluZzogMC41NzFlbSAxZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhNWJlY2Y7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Q0M7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwLnVpLWZpZWxkc2V0IC51aS1maWVsZHNldC1sZWdlbmQgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2E1YmVjZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OUNDO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuOmhvc3Q6Om5nLWRlZXAudWktYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQgIWltcG9ydGFudDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAudWktdG9hc3QtbWVzc2FnZS10ZXh0LWNvbnRlbnQge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAudWktY2hrYm94LWxhYmVsIHtcbiAgY29sb3I6ICMwZDViZGQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zV2ViX0JvbGQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLnVpLWZpbGV1cGxvYWQtZmlsZXMgaW1nIHtcbiAgLyogYm9yZGVyOiAwOyAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNXZWJfQm9sZDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAueC5wLXBhbmVsIC5wLXBhbmVsLWhlYWRlciB7XG4gIGNvbG9yOiAjNGQ0ZDRkICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodCAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ZDRkNGQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyoucGkgeyovXG4vKiAgZm9udC1mYW1pbHk6ICdwcmltZWljb25zJyFpbXBvcnRhbnQ7Ki9cbi8qfSovXG4uVGl0bGVQYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG46aG9zdDo6bmctZGVlcC5wLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZUNhcmQge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3ViVGl0bGVDYXJkIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAubWF0LXN0ZXAtdGV4dC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xufVxuXG46aG9zdDo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkIHtcbiAgLypmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDsqL1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAucC1kcm9wZG93bi5wLWRyb3Bkb3duLWNsZWFyYWJsZSAucC1kcm9wZG93bi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5wLWRyb3Bkb3duIC5wLWRyb3Bkb3duLWNsZWFyLWljb24ge1xuICByaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdDo6bmctZGVlcC5wLWRyb3Bkb3duLXBhbmVsIC5wLWRyb3Bkb3duLWl0ZW1zIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0VGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJlNmRhNDtcbn1cblxuLmxvZ2luLWxpbmsge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMnB4ICNmMmYyZjIgc29saWQgIWltcG9ydGFudDtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMnB4ICNFRjJCMkYgc29saWQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNFRjJCMkY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLm5hdi10YWJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubG9naW4tbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDByZW0pIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCwgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogbGVmdDtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogLTAuNGVtIC0wLjRlbSAtMC40ZW0gMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XG4gIH1cbn1cbi8qZGYqL1xuLnByb2R1Y3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnByb2R1Y3QtbGlzdC1kZXRhaWwge1xuICBmbGV4OiAxIDEgMDtcbn1cblxuLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5wcm9kdWN0LWNhdGVnb3J5LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnkge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2R1Y3QtaXRlbSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG59XG4ucGktdHJhc2gge1xuICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW5wdXQsIHNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xufVxuXG46aG9zdDo6bmctZGVlcC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/cart/cart.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/cart/cart.component.ts ***!
    \***********************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppLayoutCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/api.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(_formBuilder) {
        _classCallCheck(this, CartComponent);

        this._formBuilder = _formBuilder;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([this._formBuilder.group({
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }), this._formBuilder.group({
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }), this._formBuilder.group({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              plaque: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
            }), this._formBuilder.group({
              ServiceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            }), this._formBuilder.group({
              offerPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            }), this._formBuilder.group({
              uploadFile: ['']
            })])
          });
        }
      }, {
        key: "formArray",
        get: function get() {
          return this.formGroup.get('formArray');
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cart/cart.component.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./src/app/layout/cart/cart.component.scss"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/layout/center-menu/center-menu.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/layout/center-menu/center-menu.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCenterMenuCenterMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  background-color: #f5f3f4;\r\n  height: 150px;\r\n}\r\n.container-fluid .row-center-menu img{\r\n  margin-top: 45px;\r\n  margin-right: 75px;\r\n  float: right;\r\n}\r\n.container-fluid .row-center-menu h2{\r\n  font-family: IRANSans_Bold;\r\n  font-size: 26px;\r\n  margin-top: 40px;\r\n  color: #ff5000;\r\n}\r\n.container-fluid .row-center-menu h6{\r\n  font-family:IRANSans_Light;\r\n  color: #b9b9b9;\r\n}\r\n.container-fluid .row-center-menu-left{\r\n  margin-top: 30px;\r\n}\r\n.container-fluid .row-center-menu-left ul{\r\n  margin-left: 20px;\r\n}\r\n.container-fluid .row-center-menu-left ul li{\r\n  padding-left: 20px;\r\n  text-align: center;\r\n}\r\n.container-fluid .row-center-menu-left ul li span{\r\n  font-family: IRANSans_Bold;\r\n}\r\n.container-fluid .row-center-menu-left ul li span>span{\r\n  color:#ff5000 ;\r\n}\r\n@media (max-width: 770px) {\r\n  .container-fluid .col-md-5 .row-center-menu-left{\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NlbnRlci1tZW51L2NlbnRlci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2VudGVyLW1lbnUvY2VudGVyLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjNmNDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1jZW50ZXItbWVudSBpbWd7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1jZW50ZXItbWVudSBoMntcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBjb2xvcjogI2ZmNTAwMDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctY2VudGVyLW1lbnUgaDZ7XHJcbiAgZm9udC1mYW1pbHk6SVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNiOWI5Yjk7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWNlbnRlci1tZW51LWxlZnR7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctY2VudGVyLW1lbnUtbGVmdCB1bHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctY2VudGVyLW1lbnUtbGVmdCB1bCBsaXtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1jZW50ZXItbWVudS1sZWZ0IHVsIGxpIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWNlbnRlci1tZW51LWxlZnQgdWwgbGkgc3Bhbj5zcGFue1xyXG4gIGNvbG9yOiNmZjUwMDAgO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQgLmNvbC1tZC01IC5yb3ctY2VudGVyLW1lbnUtbGVmdHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/center-menu/center-menu.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/center-menu/center-menu.component.ts ***!
    \*************************************************************/

  /*! exports provided: CenterMenuComponent */

  /***/
  function srcAppLayoutCenterMenuCenterMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CenterMenuComponent", function () {
      return CenterMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CenterMenuComponent = /*#__PURE__*/function () {
      function CenterMenuComponent() {
        _classCallCheck(this, CenterMenuComponent);
      }

      _createClass(CenterMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CenterMenuComponent;
    }();

    CenterMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-center-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./center-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/center-menu/center-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./center-menu.component.css */
      "./src/app/layout/center-menu/center-menu.component.css"))["default"]]
    })], CenterMenuComponent);
    /***/
  },

  /***/
  "./src/app/layout/comment/comment.component.css":
  /*!******************************************************!*\
    !*** ./src/app/layout/comment/comment.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCommentCommentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*start-comment*/\r\n.container  .caption{\r\n  text-align: center;\r\n  margin-top: 30px;\r\n}\r\n.container .caption span{\r\n  font-family: IRANSans_Bold;\r\n  font-size: 18px;\r\n  color: #03af8c;\r\n}\r\n.container  .caption a{\r\n  font-family: IRANSans_Bold;\r\n  text-decoration: none;\r\n  color: #000000;\r\n  margin-left: 30px;\r\n}\r\n.container  .caption a i{\r\n  margin-right: 5px;\r\n}\r\n.container .row-comment{\r\n  border: 1px solid #eeeeee;\r\n  margin-top: 10px;\r\n}\r\n.container .row-comment .row-comment-right a{\r\n  text-decoration: none;\r\n  line-height: 2;\r\n}\r\n.container .row-comment .row-comment-right a span{\r\n  font-family: IRANSans_Bold;\r\n  color: #000000;\r\n}\r\n.container .row-comment .row-comment-right a span i{\r\n  margin-left: 5px;\r\n}\r\n.container .row-comment .row-comment-right h6{\r\n  display: inline;\r\n  color: #ffffff;\r\n  padding: 7px 5px 7px 20px;\r\n  background-color: #4b4b4b;\r\n  margin-left: 10px;\r\n  line-height: 3;\r\n  font-family: IRANSans_Light;\r\n  border-top-left-radius:8px ;\r\n  border-top-right-radius: 8px;\r\n}\r\n.container .row-comment .row-comment-right h6 i{\r\n  margin-left: 5px;\r\n}\r\n.container .row-comment .row-comment-left{}\r\n.container .row-comment .row-comment-left span{\r\n  display: inline-grid;\r\n  text-align: center;\r\n  padding: 5px 35px;\r\n  line-height: 3;\r\n  font-family: IRANSans_Light;\r\n}\r\n.container .row-comment .row-comment-left span i{}\r\n/*end-comment*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0EsMENBQTBDO0FBQzFDO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBLGlEQUFpRDtBQUNqRCxjQUFjIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypzdGFydC1jb21tZW50Ki9cclxuLmNvbnRhaW5lciAgLmNhcHRpb257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmNvbnRhaW5lciAuY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAzYWY4YztcclxufVxyXG4uY29udGFpbmVyICAuY2FwdGlvbiBhe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyICAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWNvbW1lbnR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1jb21tZW50IC5yb3ctY29tbWVudC1yaWdodCBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctY29tbWVudCAucm93LWNvbW1lbnQtcmlnaHQgYSBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1jb21tZW50IC5yb3ctY29tbWVudC1yaWdodCBhIHNwYW4gaXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1jb21tZW50IC5yb3ctY29tbWVudC1yaWdodCBoNntcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogN3B4IDVweCA3cHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRiO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjhweCA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctY29tbWVudCAucm93LWNvbW1lbnQtcmlnaHQgaDYgaXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1jb21tZW50IC5yb3ctY29tbWVudC1sZWZ0e31cclxuLmNvbnRhaW5lciAucm93LWNvbW1lbnQgLnJvdy1jb21tZW50LWxlZnQgc3BhbntcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDM1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1jb21tZW50IC5yb3ctY29tbWVudC1sZWZ0IHNwYW4gaXt9XHJcbi8qZW5kLWNvbW1lbnQqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/comment/comment.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/comment/comment.component.ts ***!
    \*****************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppLayoutCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommentComponent = /*#__PURE__*/function () {
      function CommentComponent() {
        _classCallCheck(this, CommentComponent);
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CommentComponent;
    }();

    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/comment/comment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment.component.css */
      "./src/app/layout/comment/comment.component.css"))["default"]]
    })], CommentComponent);
    /***/
  },

  /***/
  "./src/app/layout/cooperation/cooperation.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/layout/cooperation/cooperation.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCooperationCooperationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host::ng-deep .container .caption {\n  text-align: center;\n  margin-top: 30px;\n}\n\n:host::ng-deep .container .caption span {\n  font-family: IRANSans_Bold;\n  font-size: 18px;\n  color: #03af8c;\n}\n\n:host::ng-deep .container .caption a {\n  font-family: IRANSans_Bold;\n  text-decoration: none;\n  color: #000000;\n  margin-left: 30px;\n}\n\n:host::ng-deep .container .caption a i {\n  margin-right: 5px;\n}\n\n:host::ng-deep .col-sm-2.text-center {\n  top: 20px;\n  margin-bottom: 20px;\n}\n\n:host::ng-deep .col-sm-2.text-center h2 {\n  font-size: 16px;\n  font-family: IRANSans_Bold;\n  color: #655e5e;\n}\n\n:host::ng-deep .col-sm-2.text-center span {\n  font-family: IRANSans_Light;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Nvb3BlcmF0aW9uL0Q6XFxoZDcyMzE0MDAvc3JjXFxhcHBcXGxheW91dFxcY29vcGVyYXRpb25cXGNvb3BlcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29vcGVyYXRpb24vY29vcGVyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSwyQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Nvb3BlcmF0aW9uL2Nvb3BlcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q6Om5nLWRlZXAgLmNvbnRhaW5lciAgLmNhcHRpb257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRhaW5lciAgLmNhcHRpb24gc3BhbntcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwM2FmOGM7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRhaW5lciAgLmNhcHRpb24gYXtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLmNvbnRhaW5lciAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLmNvbC1zbS0yLnRleHQtY2VudGVyIHtcclxuICB0b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG46aG9zdDo6bmctZGVlcCAgLmNvbC1zbS0yLnRleHQtY2VudGVyIGgye1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBjb2xvcjogIzY1NWU1ZTtcclxufVxyXG46aG9zdDo6bmctZGVlcCAgLmNvbC1zbS0yLnRleHQtY2VudGVyIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG59XHJcbiIsIjpob3N0OjpuZy1kZWVwIC5jb250YWluZXIgLmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5jb250YWluZXIgLmNhcHRpb24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDNhZjhjO1xufVxuXG46aG9zdDo6bmctZGVlcCAuY29udGFpbmVyIC5jYXB0aW9uIGEge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5jb250YWluZXIgLmNhcHRpb24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5jb2wtc20tMi50ZXh0LWNlbnRlciB7XG4gIHRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAgLmNvbC1zbS0yLnRleHQtY2VudGVyIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgY29sb3I6ICM2NTVlNWU7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5jb2wtc20tMi50ZXh0LWNlbnRlciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/cooperation/cooperation.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/cooperation/cooperation.component.ts ***!
    \*************************************************************/

  /*! exports provided: CooperationComponent */

  /***/
  function srcAppLayoutCooperationCooperationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CooperationComponent", function () {
      return CooperationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CooperationComponent = /*#__PURE__*/function () {
      function CooperationComponent() {
        _classCallCheck(this, CooperationComponent);
      }

      _createClass(CooperationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CooperationComponent;
    }();

    CooperationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cooperation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cooperation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/cooperation/cooperation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cooperation.component.scss */
      "./src/app/layout/cooperation/cooperation.component.scss"))["default"]]
    })], CooperationComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/all-cantent/all-cantent.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/layout/film/all-cantent/all-cantent.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmAllCantentAllCantentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .row-film .caption {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.container .row-film .caption span {\n  font-family: IRANSans_Bold;\n  font-size: 18px;\n  color: #03af8c;\n}\n\n.container .row-film .caption a {\n  font-family: IRANSans_Bold;\n  text-decoration: none;\n  color: #000000;\n  margin-left: 30px;\n}\n\n.container .row-film .caption a i {\n  margin-right: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film {\n  border: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading {\n  border-bottom: none;\n  padding: 0px;\n  position: relative;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::before {\n  content: \"\";\n  background: #ff7800;\n  display: block;\n  color: #eeeeee;\n  font-family: IRANSans_Light;\n  text-align: center;\n  width: 40%;\n  height: 20px;\n  position: absolute;\n  z-index: 999999;\n  top: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::after {\n  content: \"\";\n  border: 10px solid #ff7800;\n  position: absolute;\n  top: 5px;\n  right: 40%;\n  border-left: 10px solid transparent;\n  padding: 0px 7px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading a {\n  position: absolute;\n  font-family: IRANSans_Light;\n  top: 5px;\n  color: #ffffff;\n  z-index: 999999;\n  margin-right: 10px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading img {\n  width: 100%;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body {\n  background-color: #03af8c;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span {\n  font-family: IRANSans_Light;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span i {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.container .row-film .card-content .panel-footer {\n  background-color: #ff7800;\n  margin: 0px 3px;\n  box-shadow: 0px 5px 7px -5px #000 inset;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  height: 40px;\n  color: #ffffff;\n  border-top: none;\n}\n\n.container .row-film .card-content .panel-footer img {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #ffffff;\n  position: absolute;\n}\n\n.container .row-film .card-content .panel-footer span {\n  text-decoration: none;\n  font-family: IRANSans_Light;\n  color: #ffffff;\n}\n\n:host::ng-deep .owl-prev,\n:host::ng-deep .owl-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host::ng-deep.owl-prev {\n  left: 0;\n}\n\n:host::ng-deep.owl-next {\n  right: 0;\n}\n\n:host::ng-deep.carousel .carousel-control-next-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n\n:host::ng-deep.carousel .carousel-control-prev-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZpbG0vYWxsLWNhbnRlbnQvRDpcXGhkNzIzMTQwMC9zcmNcXGFwcFxcbGF5b3V0XFxmaWxtXFxhbGwtY2FudGVudFxcYWxsLWNhbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9maWxtL2FsbC1jYW50ZW50L2FsbC1jYW50ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSx5QkFBQTtBQ1lGOztBRFZBO0VBQ0UscUJBQUE7QUNhRjs7QURYQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjRjs7QURaQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURmQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGhCQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxPQUFBO0FDb0JGOztBRGxCQTtFQUNFLFFBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDdUJGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ZpbG0vYWxsLWNhbnRlbnQvYWxsLWNhbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAzYWY4YztcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5ne1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmV7XHJcbiAgY29udGVudDonJztcclxuICBiYWNrZ3JvdW5kOiNmZjc4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmc6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmY3ODAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDBweCA3cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwM2FmOGMgO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6SVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYSBzcGFuIGl7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50IC5wYW5lbC1mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzgwMDtcclxuICBtYXJnaW46IDBweCAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6N3B4IDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo3cHggO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50ICAucGFuZWwtZm9vdGVyIGltZ3tcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gIC5jYXJkLWNvbnRlbnQgIC5wYW5lbC1mb290ZXIgc3BhbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5vd2wtcHJldixcclxuOmhvc3Q6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXB0aW9uIHNwYW4ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmY3ODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDVweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmNzgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDQwJTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmcgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICB0b3A6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4gaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XG4gIG1hcmdpbjogMHB4IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdDo6bmctZGVlcCAub3dsLXByZXYsXG46aG9zdDo6bmctZGVlcCAub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/film/all-cantent/all-cantent.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/film/all-cantent/all-cantent.component.ts ***!
    \******************************************************************/

  /*! exports provided: AllCantentComponent */

  /***/
  function srcAppLayoutFilmAllCantentAllCantentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllCantentComponent", function () {
      return AllCantentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AllCantentComponent = /*#__PURE__*/function () {
      function AllCantentComponent() {
        _classCallCheck(this, AllCantentComponent);

        this.customOptions = {
          rtl: true,
          autoplay: true,
          autoplaySpeed: 1000,
          autoplayTimeout: 5000,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          nav: true,
          navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 4
            }
          }
        };
      }

      _createClass(AllCantentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllCantentComponent;
    }();

    AllCantentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-cantent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-cantent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/all-cantent/all-cantent.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-cantent.component.scss */
      "./src/app/layout/film/all-cantent/all-cantent.component.scss"))["default"]]
    })], AllCantentComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/film.component.css":
  /*!************************************************!*\
    !*** ./src/app/layout/film/film.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmFilmComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9maWxtL2ZpbG0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/film/film.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/film/film.component.ts ***!
    \***********************************************/

  /*! exports provided: FilmComponent */

  /***/
  function srcAppLayoutFilmFilmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilmComponent", function () {
      return FilmComponent;
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


    var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../layout.service */
    "./src/app/layout/layout.service.ts");

    var FilmComponent = /*#__PURE__*/function () {
      function FilmComponent(service) {
        _classCallCheck(this, FilmComponent);

        this.service = service;
      }

      _createClass(FilmComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.service.listCourse().subscribe(function (response) {
            if (response['success'] === true) {
              console.log(response);
              _this33.listCourse = response['data'];
            }
          });
        }
      }, {
        key: "listViewMax",
        value: function listViewMax() {
          var _this34 = this;

          this.service.listViewMaxCourse().subscribe(function (response) {
            if (response['success'] === true) {
              _this34.listCourse = response['data'];
            }
          });
        }
      }, {
        key: "listNewCourse",
        value: function listNewCourse() {
          var _this35 = this;

          this.service.listNewCourse().subscribe(function (response) {
            if (response['success'] === true) {
              _this35.listCourse = response['data'];
            }
          });
        }
      }, {
        key: "onChangeCourse",
        value: function onChangeCourse(id) {
          switch (id) {
            case 0:
              {
                this.ngOnInit();
                break;
              }

            case 1:
              {
                this.listViewMax();
                break;
              }

            case 3:
              {
                this.listNewCourse();
                break;
              }
          }
        }
      }]);

      return FilmComponent;
    }();

    FilmComponent.ctorParameters = function () {
      return [{
        type: _layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }];
    };

    FilmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-film',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./film.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/film.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./film.component.css */
      "./src/app/layout/film/film.component.css"))["default"]]
    })], FilmComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/hottest-content/content-all/content-all.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/film/hottest-content/content-all/content-all.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmHottestContentContentAllContentAllComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .row {\n  display: flex;\n}\n\n.container .thumbnail-body-film {\n  border: none;\n}\n\n.container .thumbnail-body-film a {\n  text-decoration: none;\n}\n\n.container .thumbnail-body-film .panel-heading {\n  border-bottom: none;\n  padding: 0px;\n  position: relative;\n}\n\n.container .thumbnail-body-film .panel-heading a {\n  position: absolute;\n  font-family: IRANSans_Light;\n  top: 5px;\n  color: #ffffff;\n  z-index: 999999;\n  margin-right: 10px;\n}\n\n.container .thumbnail-body-film .panel-heading img {\n  width: 100%;\n}\n\n.container .thumbnail-body-film .panel-body {\n  background-color: #03af8c;\n}\n\n.container .thumbnail-body-film .panel-body a {\n  text-decoration: none;\n}\n\n.container .thumbnail-body-film .panel-body a span {\n  font-family: IRANSans_Light;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.container .thumbnail-body-film .panel-body a span i {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.container .panel-footer {\n  background-color: #ff7800;\n  margin: 0px 3px;\n  box-shadow: 0px 5px 7px -5px #000 inset;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  height: 40px;\n  color: #ffffff;\n  border-top: none;\n}\n\n.container .panel-footer img {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #ffffff;\n  position: absolute;\n}\n\n.container .panel-footer span {\n  text-decoration: none;\n  font-family: IRANSans_Light;\n  color: #ffffff;\n}\n\n@media (max-width: 760px) {\n  .container .row {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZpbG0vaG90dGVzdC1jb250ZW50L2NvbnRlbnQtYWxsL0Q6XFxoZDcyMzE0MDAvc3JjXFxhcHBcXGxheW91dFxcZmlsbVxcaG90dGVzdC1jb250ZW50XFxjb250ZW50LWFsbFxcY29udGVudC1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9maWxtL2hvdHRlc3QtY29udGVudC9jb250ZW50LWFsbC9jb250ZW50LWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0FDTUY7O0FESkE7RUFDRSx5QkFBQTtBQ09GOztBRExBO0VBQ0UscUJBQUE7QUNRRjs7QUROQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1dGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDWUY7O0FEVkE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQ2FGOztBRFhBO0VBQ0U7SUFDRSxjQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9maWxtL2hvdHRlc3QtY29udGVudC9jb250ZW50LWFsbC9jb250ZW50LWFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgLnJvd3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWluZXIgIC50aHVtYm5haWwtYm9keS1maWxte1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC50aHVtYm5haWwtYm9keS1maWxtIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5jb250YWluZXIgIC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5ne1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyICAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29udGFpbmVyICAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWluZXIgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDNhZjhjIDtcclxufVxyXG4uY29udGFpbmVyICAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyICAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6SVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250YWluZXIgIC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbiBpe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY29udGFpbmVyICAucGFuZWwtZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XHJcbiAgbWFyZ2luOiAwcHggM3B4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggN3B4IC01cHggIzAwMCBpbnNldDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjdweCA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6N3B4IDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uY29udGFpbmVyICAgLnBhbmVsLWZvb3RlciBpbWd7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jb250YWluZXIgICAucGFuZWwtZm9vdGVyIHNwYW57XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAuY29udGFpbmVyIC5yb3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbiIsIi5jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIgLnRodW1ibmFpbC1ib2R5LWZpbG0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnRodW1ibmFpbC1ib2R5LWZpbG0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgdG9wOiA1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbnRhaW5lciAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2FmOGM7XG59XG5cbi5jb250YWluZXIgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250YWluZXIgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYSBzcGFuIGkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFpbmVyIC5wYW5lbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODAwO1xuICBtYXJnaW46IDBweCAzcHg7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggN3B4IC01cHggIzAwMCBpbnNldDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5wYW5lbC1mb290ZXIgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIC5wYW5lbC1mb290ZXIgc3BhbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5jb250YWluZXIgLnJvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/film/hottest-content/content-all/content-all.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/film/hottest-content/content-all/content-all.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ContentAllComponent */

  /***/
  function srcAppLayoutFilmHottestContentContentAllContentAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentAllComponent", function () {
      return ContentAllComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContentAllComponent = /*#__PURE__*/function () {
      function ContentAllComponent() {
        _classCallCheck(this, ContentAllComponent);
      }

      _createClass(ContentAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentAllComponent;
    }();

    ContentAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content-all',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content-all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/content-all/content-all.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content-all.component.scss */
      "./src/app/layout/film/hottest-content/content-all/content-all.component.scss"))["default"]]
    })], ContentAllComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/hottest-content/hottest-content.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/film/hottest-content/hottest-content.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmHottestContentHottestContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .row-film .caption {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.container .row-film .caption span {\n  font-family: IRANSans_Bold;\n  font-size: 18px;\n  color: #03af8c;\n}\n\n.container .row-film .caption a {\n  font-family: IRANSans_Bold;\n  text-decoration: none;\n  color: #000000;\n  margin-left: 30px;\n}\n\n.container .row-film .caption a i {\n  margin-right: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film {\n  border: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading {\n  border-bottom: none;\n  padding: 0px;\n  position: relative;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading a {\n  position: absolute;\n  font-family: IRANSans_Light;\n  top: 5px;\n  color: #ffffff;\n  z-index: 999999;\n  margin-right: 10px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading img {\n  width: 100%;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body {\n  background-color: #03af8c;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span {\n  font-family: IRANSans_Light;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span i {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.container .row-film .card-content .panel-footer {\n  background-color: #ff7800;\n  margin: 0px 3px;\n  box-shadow: 0px 5px 7px -5px #000 inset;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  height: 40px;\n  color: #ffffff;\n  border-top: none;\n}\n\n.container .row-film .card-content .panel-footer img {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #ffffff;\n  position: absolute;\n}\n\n.container .row-film .card-content .panel-footer span {\n  text-decoration: none;\n  font-family: IRANSans_Light;\n  color: #ffffff;\n}\n\n:host::ng-deep .owl-prev,\n:host::ng-deep .owl-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host::ng-deep.owl-prev {\n  left: 0;\n}\n\n:host::ng-deep.owl-next {\n  right: 0;\n}\n\n:host::ng-deep.carousel .carousel-control-next-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n\n:host::ng-deep.carousel .carousel-control-prev-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZpbG0vaG90dGVzdC1jb250ZW50L0Q6XFxoZDcyMzE0MDAvc3JjXFxhcHBcXGxheW91dFxcZmlsbVxcaG90dGVzdC1jb250ZW50XFxob3R0ZXN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9maWxtL2hvdHRlc3QtY29udGVudC9ob3R0ZXN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7QUNTRjs7QURQQTtFQUNFLHlCQUFBO0FDVUY7O0FEUkE7RUFDRSxxQkFBQTtBQ1dGOztBRFRBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1lGOztBRFZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDY0Y7O0FEWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNlRjs7QURiQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDZ0JGOztBRGRBOztFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDaUJGOztBRGZBO0VBQ0UsT0FBQTtBQ2tCRjs7QURoQkE7RUFDRSxRQUFBO0FDbUJGOztBRGpCQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ3FCRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9maWxtL2hvdHRlc3QtY29udGVudC9ob3R0ZXN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAzYWY4YztcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5ne1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcclxuICB0b3A6IDVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmcgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAzYWY4YyA7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbntcclxuICBmb250LWZhbWlseTpJUkFOU2Fuc19MaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4gaXtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODAwO1xyXG4gIG1hcmdpbjogMHB4IDNweDtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDdweCAtNXB4ICMwMDAgaW5zZXQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo3cHggO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjdweCA7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gIC5jYXJkLWNvbnRlbnQgIC5wYW5lbC1mb290ZXIgaW1ne1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAgLmNhcmQtY29udGVudCAgLnBhbmVsLWZvb3RlciBzcGFue1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLm93bC1wcmV2LFxyXG46aG9zdDo6bmctZGVlcCAub3dsLW5leHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAub3dsLXByZXYge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAub3dsLW5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICB3aWR0aDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcclxufVxyXG4iLCIuY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDNhZjhjO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIHtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmcgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICB0b3A6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4gaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XG4gIG1hcmdpbjogMHB4IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdDo6bmctZGVlcCAub3dsLXByZXYsXG46aG9zdDo6bmctZGVlcCAub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/film/hottest-content/hottest-content.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/film/hottest-content/hottest-content.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HottestContentComponent */

  /***/
  function srcAppLayoutFilmHottestContentHottestContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HottestContentComponent", function () {
      return HottestContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HottestContentComponent = /*#__PURE__*/function () {
      function HottestContentComponent() {
        _classCallCheck(this, HottestContentComponent);

        this.customOptions = {
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2000,
          autoplayTimeout: 6000,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          nav: true,
          navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 4
            }
          }
        };
      }

      _createClass(HottestContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HottestContentComponent;
    }();

    HottestContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hottest-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hottest-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/hottest-content/hottest-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hottest-content.component.scss */
      "./src/app/layout/film/hottest-content/hottest-content.component.scss"))["default"]]
    })], HottestContentComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/most-downloads/most-downloads.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/film/most-downloads/most-downloads.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmMostDownloadsMostDownloadsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .row-film .caption {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.container .row-film .caption span {\n  font-family: IRANSans_Bold;\n  font-size: 18px;\n  color: #03af8c;\n}\n\n.container .row-film .caption a {\n  font-family: IRANSans_Bold;\n  text-decoration: none;\n  color: #000000;\n  margin-left: 30px;\n}\n\n.container .row-film .caption a i {\n  margin-right: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film {\n  border: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading {\n  border-bottom: none;\n  padding: 0px;\n  position: relative;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::before {\n  content: \"\";\n  background: #ff7800;\n  display: block;\n  color: #eeeeee;\n  font-family: IRANSans_Light;\n  text-align: center;\n  width: 40%;\n  height: 20px;\n  position: absolute;\n  z-index: 999999;\n  top: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::after {\n  content: \"\";\n  border: 10px solid #ff7800;\n  position: absolute;\n  top: 5px;\n  right: 40%;\n  border-left: 10px solid transparent;\n  padding: 0px 7px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading a {\n  position: absolute;\n  font-family: IRANSans_Light;\n  top: 5px;\n  color: #ffffff;\n  z-index: 999999;\n  margin-right: 10px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading img {\n  width: 100%;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body {\n  background-color: #03af8c;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span {\n  font-family: IRANSans_Light;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span i {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.container .row-film .card-content .panel-footer {\n  background-color: #ff7800;\n  margin: 0px 3px;\n  box-shadow: 0px 5px 7px -5px #000 inset;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  height: 40px;\n  color: #ffffff;\n  border-top: none;\n}\n\n.container .row-film .card-content .panel-footer img {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #ffffff;\n  position: absolute;\n}\n\n.container .row-film .card-content .panel-footer span {\n  text-decoration: none;\n  font-family: IRANSans_Light;\n  color: #ffffff;\n}\n\n:host::ng-deep .owl-prev,\n:host::ng-deep .owl-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host::ng-deep.owl-prev {\n  left: 0;\n}\n\n:host::ng-deep.owl-next {\n  right: 0;\n}\n\n:host::ng-deep.carousel .carousel-control-next-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n\n:host::ng-deep.carousel .carousel-control-prev-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZpbG0vbW9zdC1kb3dubG9hZHMvRDpcXGhkNzIzMTQwMC9zcmNcXGFwcFxcbGF5b3V0XFxmaWxtXFxtb3N0LWRvd25sb2Fkc1xcbW9zdC1kb3dubG9hZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9maWxtL21vc3QtZG93bmxvYWRzL21vc3QtZG93bmxvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSx5QkFBQTtBQ1lGOztBRFZBO0VBQ0UscUJBQUE7QUNhRjs7QURYQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjRjs7QURaQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURmQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGhCQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxPQUFBO0FDb0JGOztBRGxCQTtFQUNFLFFBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDdUJGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ZpbG0vbW9zdC1kb3dubG9hZHMvbW9zdC1kb3dubG9hZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAzYWY4YztcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5ne1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmV7XHJcbiAgY29udGVudDonJztcclxuICBiYWNrZ3JvdW5kOiNmZjc4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmc6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmY3ODAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDBweCA3cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwM2FmOGMgO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6SVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYSBzcGFuIGl7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50IC5wYW5lbC1mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzgwMDtcclxuICBtYXJnaW46IDBweCAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6N3B4IDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo3cHggO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50ICAucGFuZWwtZm9vdGVyIGltZ3tcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gIC5jYXJkLWNvbnRlbnQgIC5wYW5lbC1mb290ZXIgc3BhbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5vd2wtcHJldixcclxuOmhvc3Q6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXB0aW9uIHNwYW4ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmY3ODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDVweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmNzgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDQwJTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmcgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICB0b3A6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4gaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XG4gIG1hcmdpbjogMHB4IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdDo6bmctZGVlcCAub3dsLXByZXYsXG46aG9zdDo6bmctZGVlcCAub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/film/most-downloads/most-downloads.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/film/most-downloads/most-downloads.component.ts ***!
    \************************************************************************/

  /*! exports provided: MostDownloadsComponent */

  /***/
  function srcAppLayoutFilmMostDownloadsMostDownloadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostDownloadsComponent", function () {
      return MostDownloadsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MostDownloadsComponent = /*#__PURE__*/function () {
      function MostDownloadsComponent() {
        _classCallCheck(this, MostDownloadsComponent);

        this.customOptions = {
          rtl: true,
          autoplay: true,
          autoplaySpeed: 2000,
          autoplayTimeout: 6000,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          nav: true,
          navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 4
            }
          }
        };
      }

      _createClass(MostDownloadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MostDownloadsComponent;
    }();

    MostDownloadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-most-downloads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./most-downloads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-downloads/most-downloads.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./most-downloads.component.scss */
      "./src/app/layout/film/most-downloads/most-downloads.component.scss"))["default"]]
    })], MostDownloadsComponent);
    /***/
  },

  /***/
  "./src/app/layout/film/most-popular-content/most-popular-content.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/film/most-popular-content/most-popular-content.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFilmMostPopularContentMostPopularContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container .row-film .caption {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.container .row-film .caption span {\n  font-family: IRANSans_Bold;\n  font-size: 18px;\n  color: #03af8c;\n}\n\n.container .row-film .caption a {\n  font-family: IRANSans_Bold;\n  text-decoration: none;\n  color: #000000;\n  margin-left: 30px;\n}\n\n.container .row-film .caption a i {\n  margin-right: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film {\n  border: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading {\n  border-bottom: none;\n  padding: 0px;\n  position: relative;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::before {\n  content: \"\";\n  background: #ff7800;\n  display: block;\n  color: #eeeeee;\n  font-family: IRANSans_Light;\n  text-align: center;\n  width: 40%;\n  height: 20px;\n  position: absolute;\n  z-index: 999999;\n  top: 5px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading::after {\n  content: \"\";\n  border: 10px solid #ff7800;\n  position: absolute;\n  top: 5px;\n  right: 40%;\n  border-left: 10px solid transparent;\n  padding: 0px 7px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading a {\n  position: absolute;\n  font-family: IRANSans_Light;\n  top: 5px;\n  color: #ffffff;\n  z-index: 999999;\n  margin-right: 10px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-heading img {\n  width: 100%;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body {\n  background-color: #03af8c;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a {\n  text-decoration: none;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span {\n  font-family: IRANSans_Light;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.container .row-film .card-content .thumbnail-body-film .panel-body a span i {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n.container .row-film .card-content .panel-footer {\n  background-color: #ff7800;\n  margin: 0px 3px;\n  box-shadow: 0px 5px 7px -5px #000 inset;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  height: 40px;\n  color: #ffffff;\n  border-top: none;\n}\n\n.container .row-film .card-content .panel-footer img {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #ffffff;\n  position: absolute;\n}\n\n.container .row-film .card-content .panel-footer span {\n  text-decoration: none;\n  font-family: IRANSans_Light;\n  color: #ffffff;\n}\n\n:host::ng-deep .owl-prev,\n:host::ng-deep .owl-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host::ng-deep.owl-prev {\n  left: 0;\n}\n\n:host::ng-deep.owl-next {\n  right: 0;\n}\n\n:host::ng-deep.carousel .carousel-control-next-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n\n:host::ng-deep.carousel .carousel-control-prev-icon {\n  width: 50px !important;\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2ZpbG0vbW9zdC1wb3B1bGFyLWNvbnRlbnQvRDpcXGhkNzIzMTQwMC9zcmNcXGFwcFxcbGF5b3V0XFxmaWxtXFxtb3N0LXBvcHVsYXItY29udGVudFxcbW9zdC1wb3B1bGFyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9maWxtL21vc3QtcG9wdWxhci1jb250ZW50L21vc3QtcG9wdWxhci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURIQTtFQUNFLHFCQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSx5QkFBQTtBQ1lGOztBRFZBO0VBQ0UscUJBQUE7QUNhRjs7QURYQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjRjs7QURaQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ2VGOztBRGJBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2lCRjs7QURmQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGhCQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxPQUFBO0FDb0JGOztBRGxCQTtFQUNFLFFBQUE7QUNxQkY7O0FEbkJBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDdUJGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2ZpbG0vbW9zdC1wb3B1bGFyLWNvbnRlbnQvbW9zdC1wb3B1bGFyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBzcGFue1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAzYWY4YztcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhe1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FwdGlvbiBhIGl7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbXtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5ne1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmV7XHJcbiAgY29udGVudDonJztcclxuICBiYWNrZ3JvdW5kOiNmZjc4MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmc6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmY3ODAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNDAlO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDBweCA3cHg7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyBhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgdG9wOiA1cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwM2FmOGMgO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6SVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWJvZHkgYSBzcGFuIGl7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50IC5wYW5lbC1mb290ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzgwMDtcclxuICBtYXJnaW46IDBweCAzcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6N3B4IDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo3cHggO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5jb250YWluZXIgLnJvdy1maWxtICAuY2FyZC1jb250ZW50ICAucGFuZWwtZm9vdGVyIGltZ3tcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNvbnRhaW5lciAucm93LWZpbG0gIC5jYXJkLWNvbnRlbnQgIC5wYW5lbC1mb290ZXIgc3BhbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5vd2wtcHJldixcclxuOmhvc3Q6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLm93bC1uZXh0IHtcclxuICByaWdodDogMDtcclxufVxyXG46aG9zdDo6bmctZGVlcC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXB0aW9uIHNwYW4ge1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcHRpb24gYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmY3ODAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNlZWVlZWU7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTk5O1xuICB0b3A6IDVweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtaGVhZGluZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmNzgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDQwJTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnRodW1ibmFpbC1ib2R5LWZpbG0gLnBhbmVsLWhlYWRpbmcgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xuICB0b3A6IDVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1oZWFkaW5nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYWY4Yztcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIC5yb3ctZmlsbSAuY2FyZC1jb250ZW50IC50aHVtYm5haWwtYm9keS1maWxtIC5wYW5lbC1ib2R5IGEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhaW5lciAucm93LWZpbG0gLmNhcmQtY29udGVudCAudGh1bWJuYWlsLWJvZHktZmlsbSAucGFuZWwtYm9keSBhIHNwYW4gaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XG4gIG1hcmdpbjogMHB4IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA3cHggLTVweCAjMDAwIGluc2V0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb250YWluZXIgLnJvdy1maWxtIC5jYXJkLWNvbnRlbnQgLnBhbmVsLWZvb3RlciBzcGFuIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdDo6bmctZGVlcCAub3dsLXByZXYsXG46aG9zdDo6bmctZGVlcCAub3dsLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbjpob3N0OjpuZy1kZWVwLm93bC1wcmV2IHtcbiAgbGVmdDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAub3dsLW5leHQge1xuICByaWdodDogMDtcbn1cblxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/film/most-popular-content/most-popular-content.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/film/most-popular-content/most-popular-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: MostPopularContentComponent */

  /***/
  function srcAppLayoutFilmMostPopularContentMostPopularContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MostPopularContentComponent", function () {
      return MostPopularContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MostPopularContentComponent = /*#__PURE__*/function () {
      function MostPopularContentComponent() {
        _classCallCheck(this, MostPopularContentComponent);

        this.customOptions = {
          rtl: true,
          autoplay: true,
          autoplaySpeed: 1000,
          autoplayTimeout: 5000,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          nav: true,
          navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 4
            }
          }
        };
      }

      _createClass(MostPopularContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MostPopularContentComponent;
    }();

    MostPopularContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-most-popular-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./most-popular-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/film/most-popular-content/most-popular-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./most-popular-content.component.scss */
      "./src/app/layout/film/most-popular-content/most-popular-content.component.scss"))["default"]]
    })], MostPopularContentComponent);
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/footer/footer.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*start-footer-top*/\r\n.container-fluid{\r\n  border-top: 6px solid #009c7d;\r\n  margin-top: 15px;\r\n}\r\n.container-fluid .row-address{\r\n  margin-top: 10px;\r\n}\r\n.container-fluid .row-address .caption span{\r\n  padding: 5px 15px;\r\n  font-family: IRANSans_Bold;\r\n  border-bottom: 4px solid #009c7d;\r\n  font-size: 15px;\r\n  color: #009c7d;\r\n}\r\n.container-fluid .row-address ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n.container-fluid .row-address ul li{\r\n  padding: 10px 0px;\r\n}\r\n.container-fluid .row-address ul li span{\r\n  font-family: IRANSans_Bold;\r\n  font-size: 12px;\r\n}\r\n.container-fluid .row-address ul li span i{\r\n  margin-left: 5px;\r\n  color: #1c22ff;\r\n  font-size: 16px;\r\n}\r\n.container-fluid .row-emil{\r\n  margin-top: 10px;\r\n}\r\n.container-fluid .row-emil .caption span{\r\n  padding: 5px 15px;\r\n  font-family: IRANSans_Bold;\r\n  border-bottom: 4px solid #009c7d;\r\n  font-size: 15px;\r\n  color: #009c7d;\r\n}\r\n.container-fluid .row-emil p{\r\n  margin-top: 15px;\r\n  font-family: IRANSans_Light;\r\n  font-size: 14px;\r\n  text-align: justify;\r\n}\r\n.container-fluid .row-emil .form-group {\r\n  background-color: #009c7d;\r\n  padding: 5px 15px 5px 5px;\r\n  border-radius: 35px;\r\n}\r\n.container-fluid .row-emil .form-group input{\r\n  background-color:transparent;\r\n  padding: 15px 0px;\r\n  border-radius: 35px;\r\n  line-height: 0;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  border: none;\r\n  color: #ffffff;\r\n  font-family: IRANSans_Light;\r\n}\r\n.container-fluid .row-emil .form-group input::-webkit-input-placeholder{\r\n  color: #ffffff;\r\n\r\n}\r\n.container-fluid .row-emil .form-group input::-moz-placeholder{\r\n  color: #ffffff;\r\n\r\n}\r\n.container-fluid .row-emil .form-group input::-ms-input-placeholder{\r\n  color: #ffffff;\r\n\r\n}\r\n.container-fluid .row-emil .form-group input::placeholder{\r\n  color: #ffffff;\r\n\r\n}\r\n.container-fluid .row-emil .form-group .input-group-btn button{\r\n  background-color: #ff7800;\r\n  font-family: IRANSans_Light;\r\n  border-radius: 50px;\r\n  color: #ffffff;\r\n  outline: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.container-fluid .row-emil .center-block img{\r\n  width: 80px;\r\n  height: 80px;\r\n  margin-right: 35px;\r\n}\r\n.container-fluid .row-service{\r\n   margin-top: 10px;\r\n   margin-right: 10px;\r\n }\r\n.container-fluid .row-service .caption span{\r\n  padding: 5px 15px;\r\n  font-family: IRANSans_Bold;\r\n  border-bottom: 4px solid #009c7d;\r\n  font-size: 15px;\r\n  color: #009c7d;\r\n}\r\n.container-fluid .row-service ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n.container-fluid .row-service ul li{\r\n  padding: 5px 0px;\r\n}\r\n.container-fluid .row-service ul li a{\r\n  text-decoration: none;\r\n  font-family: IRANSans_Bold;\r\n  color: #000000;\r\n  font-size: 12px;\r\n}\r\n.container-fluid .row-service ul li a i{\r\n  margin-left: 5px;\r\n  color: #ff7800;\r\n  font-size: 16px;\r\n}\r\n.container-fluid .row-learn{\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n}\r\n.container-fluid .row-learn .caption span{\r\n  padding: 5px 15px;\r\n  font-family: IRANSans_Bold;\r\n  border-bottom: 4px solid #009c7d;\r\n  font-size: 15px;\r\n  color: #009c7d;\r\n}\r\n.container-fluid .row-learn ul{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 10px;\r\n}\r\n.container-fluid .row-learn ul li{\r\n  padding: 5px 0px;\r\n}\r\n.container-fluid .row-learn ul li a{\r\n  text-decoration: none;\r\n  font-family: IRANSans_Bold;\r\n  color: #000000;\r\n  font-size: 12px;\r\n}\r\n.container-fluid .row-learn ul li a i{\r\n  margin-left: 5px;\r\n  color: #ff7800;\r\n  font-size: 16px;\r\n}\r\n/*end-footer-top*/\r\n/*start-footer-center*/\r\n.container-fluid-center{\r\n background-color: #009c7d;\r\n}\r\n.container-fluid-center .container{\r\n  margin-top: -6px;\r\n  border-top: 3px solid #00ffe4;\r\n}\r\n.container-fluid-center .container .row-center{\r\n  margin-top: 20px;\r\n}\r\n.container-fluid-center .container .row-center span{\r\n  text-align: left;\r\n  margin-top: 30px;\r\n  color: #fff;\r\n  font-family: IRANSans_Bold;\r\n}\r\n.container-fluid-center .container .row-center p{\r\n  border-right: 3px solid #ff7800;\r\n  padding: 0px 5px;\r\n  line-height: 2;\r\n  text-align: justify;\r\n  color: #ffffff;\r\n  font-family: IRANSans_Light;\r\n}\r\n.container-fluid-center .container .row-center img{\r\n  padding: 15px 10px;\r\n}\r\n/*end-footer-center*/\r\n/*start-footer-down*/\r\n.container-footer-down {\r\n  background-color: #00896e;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  border-top: 3px solid #00ffe4;\r\n  text-align: center;\r\n}\r\n.container-footer-down .container .row{\r\n  padding: 6px 0px;\r\n}\r\n.container-footer-down .container .row span{\r\n  font-family: IRANSans_Light;\r\n  color: #ffffff;\r\n\r\n}\r\n/*end-footer-down*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYzs7QUFFaEI7QUFIQTtFQUNFLGNBQWM7O0FBRWhCO0FBSEE7RUFDRSxjQUFjOztBQUVoQjtBQUhBO0VBQ0UsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLGtCQUFrQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEI7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7O0FBRWhCO0FBQ0Esa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qc3RhcnQtZm9vdGVyLXRvcCovXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICMwMDljN2Q7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctYWRkcmVzc3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1hZGRyZXNzIC5jYXB0aW9uIHNwYW57XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDljN2Q7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDA5YzdkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1hZGRyZXNzIHVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1hZGRyZXNzIHVsIGxpe1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1hZGRyZXNzIHVsIGxpIHNwYW57XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1hZGRyZXNzIHVsIGxpIHNwYW4gaXtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGNvbG9yOiAjMWMyMmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctZW1pbHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1lbWlsIC5jYXB0aW9uIHNwYW57XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDljN2Q7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjMDA5YzdkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1lbWlsIHB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWVtaWwgLmZvcm0tZ3JvdXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDljN2Q7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1lbWlsIC5mb3JtLWdyb3VwIGlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19MaWdodDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctZW1pbCAuZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1lbWlsIC5mb3JtLWdyb3VwIC5pbnB1dC1ncm91cC1idG4gYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc4MDA7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWVtaWwgLmNlbnRlci1ibG9jayBpbWd7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzVweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctc2VydmljZXtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gfVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctc2VydmljZSAuY2FwdGlvbiBzcGFue1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA5YzdkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwOWM3ZDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctc2VydmljZSB1bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctc2VydmljZSB1bCBsaXtcclxuICBwYWRkaW5nOiA1cHggMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1zZXJ2aWNlIHVsIGxpIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctc2VydmljZSB1bCBsaSBhIGl7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogI2ZmNzgwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWxlYXJue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1sZWFybiAuY2FwdGlvbiBzcGFue1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA5YzdkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwOWM3ZDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctbGVhcm4gdWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWxlYXJuIHVsIGxpe1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LWxlYXJuIHVsIGxpIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctbGVhcm4gdWwgbGkgYSBpe1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICNmZjc4MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi8qZW5kLWZvb3Rlci10b3AqL1xyXG4vKnN0YXJ0LWZvb3Rlci1jZW50ZXIqL1xyXG4uY29udGFpbmVyLWZsdWlkLWNlbnRlcntcclxuIGJhY2tncm91bmQtY29sb3I6ICMwMDljN2Q7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZC1jZW50ZXIgLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMDBmZmU0O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQtY2VudGVyIC5jb250YWluZXIgLnJvdy1jZW50ZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkLWNlbnRlciAuY29udGFpbmVyIC5yb3ctY2VudGVyIHNwYW57XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQtY2VudGVyIC5jb250YWluZXIgLnJvdy1jZW50ZXIgcHtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmY3ODAwO1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZC1jZW50ZXIgLmNvbnRhaW5lciAucm93LWNlbnRlciBpbWd7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG59XHJcbi8qZW5kLWZvb3Rlci1jZW50ZXIqL1xyXG4vKnN0YXJ0LWZvb3Rlci1kb3duKi9cclxuLmNvbnRhaW5lci1mb290ZXItZG93biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODk2ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMGZmZTQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXItZm9vdGVyLWRvd24gLmNvbnRhaW5lciAucm93e1xyXG4gIHBhZGRpbmc6IDZweCAwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mb290ZXItZG93biAuY29udGFpbmVyIC5yb3cgc3BhbntcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG59XHJcbi8qZW5kLWZvb3Rlci1kb3duKi9cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layout/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host::ng-deep h3{\r\n  font-family: IRANSans_Bold;\r\n}\r\n:host::ng-deep p{\r\n  font-family: IRANSans_Light;\r\n}\r\n:host::ng-deep img{\r\n  /*height: 350px;*/\r\n  width: 100%;\r\n}\r\n:host::ng-deep.carousel .carousel-control-next-icon {\r\n  width: 50px!important;\r\n  height: 50px!important;\r\n}\r\n:host::ng-deep.carousel .carousel-control-prev-icon {\r\n  width: 50px!important;\r\n  height: 50px!important;\r\n}\r\n:host::ng-deep.carousel-inner {\r\n  border-radius: 20px!important;\r\n}\r\n.slider{\r\n  height: 400px;\r\n}\r\n.image-box {\r\n  border-radius: 20px;\r\n  height: 195px!important;\r\n  width: 100%;\r\n}\r\n.slider-image{\r\n  height: 400px;\r\n  display: block;\r\n}\r\n@media (max-width: 768px) {\r\n  /*.slider{*/\r\n  /*  height: unset;*/\r\n  /*}*/\r\n  /*.image-box {*/\r\n  /*  height: unset!important;*/\r\n  /*}*/\r\n  /*.slider-image{*/\r\n  /*  height: 200px;*/\r\n  /*}*/\r\n}\r\n:host::ng-deep .owl-prev,\r\n:host::ng-deep .owl-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n:host::ng-deep .owl-prev {\r\n  left: 0;\r\n}\r\n:host::ng-deep .owl-next {\r\n  right: 0;\r\n}\r\n:host::ng-deep .owl-theme .owl-nav [class*=owl-] {\r\n  color: #bfbdbd !important;\r\n  font-size: 14px;\r\n  margin: 5px;\r\n  padding: 4px 7px;\r\n  background-color: transparent!important;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  /*border-radius: 3px;*/\r\n}\r\n::ng-deep .owl-stage-outer{\r\n  /*border-radius: 20px!important;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLElBQUk7RUFDSixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLElBQUk7RUFDSixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLElBQUk7QUFDTjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFFBQVE7QUFDVjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBJUkFOU2Fuc19Cb2xkO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIHB7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0xpZ2h0O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIGltZ3tcclxuICAvKmhlaWdodDogMzUwcHg7Ki9cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdDo6bmctZGVlcC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHghaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2xpZGVye1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLmltYWdlLWJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBoZWlnaHQ6IDE5NXB4IWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2xpZGVyLWltYWdle1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLyouc2xpZGVyeyovXHJcbiAgLyogIGhlaWdodDogdW5zZXQ7Ki9cclxuICAvKn0qL1xyXG4gIC8qLmltYWdlLWJveCB7Ki9cclxuICAvKiAgaGVpZ2h0OiB1bnNldCFpbXBvcnRhbnQ7Ki9cclxuICAvKn0qL1xyXG4gIC8qLnNsaWRlci1pbWFnZXsqL1xyXG4gIC8qICBoZWlnaHQ6IDIwMHB4OyovXHJcbiAgLyp9Ki9cclxufVxyXG46aG9zdDo6bmctZGVlcCAub3dsLXByZXYsXHJcbjpob3N0OjpuZy1kZWVwIC5vd2wtbmV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLm93bC1wcmV2IHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbjpob3N0OjpuZy1kZWVwIC5vd2wtbmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dIHtcclxuICBjb2xvcjogI2JmYmRiZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA0cHggN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qYm9yZGVyLXJhZGl1czogM3B4OyovXHJcbn1cclxuOjpuZy1kZWVwIC5vd2wtc3RhZ2Utb3V0ZXJ7XHJcbiAgLypib3JkZXItcmFkaXVzOiAyMHB4IWltcG9ydGFudDsqL1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        // images: any[];
        //
        // responsiveOptions: any[] = [
        //   {
        //     breakpoint: '1024px',
        //     numVisible: 5
        //   },
        //   {
        //     breakpoint: '768px',
        //     numVisible: 3
        //   },
        //   {
        //     breakpoint: '560px',
        //     numVisible: 1
        //   }
        // ];
        this.customOptions = {
          rtl: true,
          autoplay: true,
          autoplaySpeed: 1000,
          autoplayTimeout: 5000,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          navSpeed: 700,
          autoHeight: false,
          nav: true,
          navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 1
            },
            740: {
              items: 1
            },
            940: {
              items: 1
            }
          }
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.photoService.getImages().then(images =>{ this.images = images;  console.log(this.images)});
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/layout/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/index/index.component.css":
  /*!**************************************************!*\
    !*** ./src/app/layout/index/index.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutIndexIndexComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/index/index.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/index/index.component.ts ***!
    \*************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppLayoutIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent() {
        _classCallCheck(this, IndexComponent);
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndexComponent;
    }();

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/index/index.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.css */
      "./src/app/layout/index/index.component.css"))["default"]]
    })], IndexComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
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


    var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layout/index/index.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/layout/cart/cart.component.ts");
    /* harmony import */


    var _film_hottest_content_content_all_content_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./film/hottest-content/content-all/content-all.component */
    "./src/app/layout/film/hottest-content/content-all/content-all.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }, {
      path: 'detail/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | content-detail-film-module */
        [__webpack_require__.e("default~Core-LayoutAdmin-layout-admin-module~content-detail-film-module"), __webpack_require__.e("common"), __webpack_require__.e("content-detail-film-module")]).then(__webpack_require__.bind(null,
        /*! ./content/detail-film.module */
        "./src/app/layout/content/detail-film.module.ts")).then(function (m) {
          return m.DetailFilmModule;
        });
      }
    }, {
      path: 'detailArticle/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | article-detailarticle-detailarticle-module */
        "article-detailarticle-detailarticle-module").then(__webpack_require__.bind(null,
        /*! ./article/detailarticle/detailarticle.module */
        "./src/app/layout/article/detailarticle/detailarticle.module.ts")).then(function (m) {
          return m.DetailarticleModule;
        });
      }
    }, {
      path: 'content-all',
      component: _film_hottest_content_content_all_content_all_component__WEBPACK_IMPORTED_MODULE_5__["ContentAllComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/layout/layout-routing.module.ts");
    /* harmony import */


    var _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comment/comment.component */
    "./src/app/layout/comment/comment.component.ts");
    /* harmony import */


    var _film_film_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./film/film.component */
    "./src/app/layout/film/film.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layout/index/index.component.ts");
    /* harmony import */


    var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./top-menu/top-menu.component */
    "./src/app/layout/top-menu/top-menu.component.ts");
    /* harmony import */


    var _center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./center-menu/center-menu.component */
    "./src/app/layout/center-menu/center-menu.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/layout/menu/menu.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/galleria */
    "./node_modules/primeng/galleria.js");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/primeng */
    "./node_modules/primeng/primeng.js");
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/layout/article/article.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/layout/cart/cart.component.ts");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./cooperation/cooperation.component */
    "./src/app/layout/cooperation/cooperation.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _film_all_cantent_all_cantent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./film/all-cantent/all-cantent.component */
    "./src/app/layout/film/all-cantent/all-cantent.component.ts");
    /* harmony import */


    var _film_hottest_content_hottest_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./film/hottest-content/hottest-content.component */
    "./src/app/layout/film/hottest-content/hottest-content.component.ts");
    /* harmony import */


    var _film_most_downloads_most_downloads_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./film/most-downloads/most-downloads.component */
    "./src/app/layout/film/most-downloads/most-downloads.component.ts");
    /* harmony import */


    var _film_most_popular_content_most_popular_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./film/most-popular-content/most-popular-content.component */
    "./src/app/layout/film/most-popular-content/most-popular-content.component.ts");
    /* harmony import */


    var _film_hottest_content_content_all_content_all_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./film/hottest-content/content-all/content-all.component */
    "./src/app/layout/film/hottest-content/content-all/content-all.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"], _film_film_component__WEBPACK_IMPORTED_MODULE_5__["FilmComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__["TopMenuComponent"], _center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_9__["CenterMenuComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"], _cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_20__["CooperationComponent"], _film_all_cantent_all_cantent_component__WEBPACK_IMPORTED_MODULE_22__["AllCantentComponent"], _film_hottest_content_hottest_content_component__WEBPACK_IMPORTED_MODULE_23__["HottestContentComponent"], _film_most_downloads_most_downloads_component__WEBPACK_IMPORTED_MODULE_24__["MostDownloadsComponent"], _film_most_popular_content_most_popular_content_component__WEBPACK_IMPORTED_MODULE_25__["MostPopularContentComponent"], _film_hottest_content_content_all_content_all_component__WEBPACK_IMPORTED_MODULE_26__["ContentAllComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_12__["GalleriaModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["CardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["InputTextareaModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["OrderListModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["PanelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["AccordionModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__["CarouselModule"], _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"]],
      exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _film_film_component__WEBPACK_IMPORTED_MODULE_5__["FilmComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"], _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_8__["TopMenuComponent"], _center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_9__["CenterMenuComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/layout/layout.service.ts":
  /*!******************************************!*\
    !*** ./src/app/layout/layout.service.ts ***!
    \******************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppLayoutLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LayoutService = /*#__PURE__*/function () {
      function LayoutService(http) {
        _classCallCheck(this, LayoutService);

        this.http = http;
      }

      _createClass(LayoutService, [{
        key: "listCourse",
        value: function listCourse() {
          return this.http.get('http://api.hd724.com/api/v1/users/course');
        }
      }, {
        key: "listNewCourse",
        value: function listNewCourse() {
          return this.http.get('http://api.hd724.com/api/v1/users/newCourse');
        }
      }, {
        key: "listViewMaxCourse",
        value: function listViewMaxCourse() {
          return this.http.get('http://api.hd724.com/api/v1/users/viewMaxCourse');
        }
      }, {
        key: "findCourse",
        value: function findCourse(id) {
          return this.http.post('http://api.hd724.com/api/v1/users/courseFind', id);
        }
      }, {
        key: "listArticle",
        value: function listArticle() {
          return this.http.get('http://api.hd724.com/api/v1/users/article');
        }
      }, {
        key: "findArticle",
        value: function findArticle(id) {
          return this.http.get('http://api.hd724.com/api/v1/users/findArticle/' + id);
        }
      }, {
        key: "newestArticle",
        value: function newestArticle() {
          return this.http.get('http://api.hd724.com/api/v1/users/newest');
        }
      }, {
        key: "newComment",
        value: function newComment(data) {
          return this.http.post('http://api.hd724.com/api/v1/users/comment', data);
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/app/layout/menu/menu.component.css":
  /*!************************************************!*\
    !*** ./src/app/layout/menu/menu.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #04af8d;\r\n}\r\n.container-fluid  .navbar-header-custom button{\r\n  background-color: #ff7800;\r\n  border: #ffffff;\r\n}\r\n.container-fluid  .navbar-header-custom button .icon-bar{\r\n  background-color: #ffffff;\r\n}\r\n.container-fluid .row-menu-right ul{\r\n  margin: 0px;\r\n}\r\n.container-fluid .row-menu-right ul li{\r\n  border-right: 2px solid #009c7d;\r\n}\r\n.container-fluid .row-menu-right ul li:last-child{\r\n  border-left: 2px solid #009c7d;\r\n}\r\n.container-fluid .row-menu-right ul li a{\r\n  color: #ffffff;\r\n  font-family: IRANSans_Light;\r\n}\r\n.container-fluid .row-menu-right ul li a:hover{\r\n  background-color: #ff7800;\r\n}\r\n.container-fluid .row-menu-left ul{\r\n  padding: 0px;\r\n  margin-left: 10px;\r\n}\r\n.container-fluid .row-menu-left ul li{\r\n  margin-top: 2px;\r\n  border-left: 2px solid #009c7d;\r\n  padding: 1px;\r\n  width: 50px;\r\n  transform: skew(-20deg);\r\n}\r\n.container-fluid .row-menu-left ul li:first-child{\r\n  border-right: 2px solid #009c7d;\r\n}\r\n.container-fluid .row-menu-left ul li a{\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.container-fluid .row-menu-left ul li a:hover{\r\n  background: none;\r\n}\r\n@media (max-width: 1012px) {\r\n  .container-fluid .col-md-4{\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNGFmOGQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAgLm5hdmJhci1oZWFkZXItY3VzdG9tIGJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODAwO1xyXG4gIGJvcmRlcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkICAubmF2YmFyLWhlYWRlci1jdXN0b20gYnV0dG9uIC5pY29uLWJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1tZW51LXJpZ2h0IHVse1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1tZW51LXJpZ2h0IHVsIGxpe1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDljN2Q7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LW1lbnUtcmlnaHQgdWwgbGk6bGFzdC1jaGlsZHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDljN2Q7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LW1lbnUtcmlnaHQgdWwgbGkgYXtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfTGlnaHQ7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LW1lbnUtcmlnaHQgdWwgbGkgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ODAwO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1tZW51LWxlZnQgdWx7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1tZW51LWxlZnQgdWwgbGl7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwOWM3ZDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC0yMGRlZyk7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LW1lbnUtbGVmdCB1bCBsaTpmaXJzdC1jaGlsZHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDA5YzdkO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy1tZW51LWxlZnQgdWwgbGkgYXtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LW1lbnUtbGVmdCB1bCBsaSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMTJweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQgLmNvbC1tZC00e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/menu/menu.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/menu/menu.component.ts ***!
    \***********************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppLayoutMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/layout/menu/menu.component.css"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/layout/top-menu/top-menu.component.css":
  /*!********************************************************!*\
    !*** ./src/app/layout/top-menu/top-menu.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutTopMenuTopMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.container-fluid{\r\n  background-color: #eeeeee;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  height: 58px;\r\n  border-bottom: 2px solid #ffffff;\r\n}\r\n.container-fluid .col-md-7,nav {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n.container-fluid .navbar #top-menu ul li a{\r\n  color: #000000;\r\n  font-family: IRANSans_Bold;\r\n  font-size: 14px;\r\n  height: 58px;\r\n}\r\n.container-fluid .navbar #top-menu ul li a:hover{\r\n  color: #ff5000;\r\n  border-bottom: 2px solid #ff5000;\r\n}\r\n.container-fluid .row-top-menu-left ul{\r\n  margin-left: 10px;\r\n}\r\n.container-fluid .row-top-menu-left ul li{\r\n   border-left: 2px solid #ffffff;\r\n  width: 60px;\r\n}\r\n.container-fluid .row-top-menu-left ul li:first-child{\r\n  border-right: 2px solid #ffffff;\r\n}\r\n.container-fluid .row-top-menu-left ul li a{\r\n  height: 56px;\r\n  color: #03af8c;\r\n  position: relative;\r\n  font-family: IRANSans_Bold;\r\n  font-size: 11px;\r\n  padding: unset;\r\n  text-align: center;\r\n}\r\n.container-fluid .row-top-menu-left ul li a .fa-user{\r\n  margin-right: 5px;\r\n}\r\n.container-fluid .row-top-menu-left ul li a .fa-key{\r\n  margin-right: -13px;\r\n}\r\n.container-fluid .row-top-menu-left ul li a .fa-shopping-cart{\r\n  margin-right: -5px;\r\n}\r\n.container-fluid .row-top-menu-left ul li a:hover{\r\n  background: none;\r\n}\r\n.container-fluid .row-top-menu-left ul li a span{\r\n  color: #ffffff;\r\n  background-color: #03af8c;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  padding: 12px;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  margin-top: 30px;\r\n  width: 45px;\r\n  height: 45px;\r\n  left: 5px;\r\n}\r\n@media (max-width:  770px) {\r\n  .container-fluid .row-top-menu-left ul{\r\n    margin-left: 10px;\r\n    display: inline-flex;\r\n    margin-top: 0px;\r\n  }\r\n}\r\n@media (max-width:  770px) {\r\n  .container-fluid #top-menu-right{\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtHQUNHLDhCQUE4QjtFQUMvQixXQUFXO0FBQ2I7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogNThweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5jb2wtbWQtNyxuYXYge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5uYXZiYXIgI3RvcC1tZW51IHVsIGxpIGF7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IElSQU5TYW5zX0JvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGhlaWdodDogNThweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5uYXZiYXIgI3RvcC1tZW51IHVsIGxpIGE6aG92ZXJ7XHJcbiAgY29sb3I6ICNmZjUwMDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjUwMDA7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LXRvcC1tZW51LWxlZnQgdWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LXRvcC1tZW51LWxlZnQgdWwgbGl7XHJcbiAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmZmZmZjtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIC5yb3ctdG9wLW1lbnUtbGVmdCB1bCBsaTpmaXJzdC1jaGlsZHtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy10b3AtbWVudS1sZWZ0IHVsIGxpIGF7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGNvbG9yOiAjMDNhZjhjO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogSVJBTlNhbnNfQm9sZDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogdW5zZXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy10b3AtbWVudS1sZWZ0IHVsIGxpIGEgLmZhLXVzZXJ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LXRvcC1tZW51LWxlZnQgdWwgbGkgYSAuZmEta2V5e1xyXG4gIG1hcmdpbi1yaWdodDogLTEzcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LXRvcC1tZW51LWxlZnQgdWwgbGkgYSAuZmEtc2hvcHBpbmctY2FydHtcclxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCAucm93LXRvcC1tZW51LWxlZnQgdWwgbGkgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5jb250YWluZXItZmx1aWQgLnJvdy10b3AtbWVudS1sZWZ0IHVsIGxpIGEgc3BhbntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhZjhjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBsZWZ0OiA1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6ICA3NzBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQgLnJvdy10b3AtbWVudS1sZWZ0IHVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6ICA3NzBweCkge1xyXG4gIC5jb250YWluZXItZmx1aWQgI3RvcC1tZW51LXJpZ2h0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/top-menu/top-menu.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/top-menu/top-menu.component.ts ***!
    \*******************************************************/

  /*! exports provided: TopMenuComponent */

  /***/
  function srcAppLayoutTopMenuTopMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function () {
      return TopMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TopMenuComponent = /*#__PURE__*/function () {
      function TopMenuComponent() {
        _classCallCheck(this, TopMenuComponent);
      }

      _createClass(TopMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopMenuComponent;
    }();

    TopMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/top-menu/top-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-menu.component.css */
      "./src/app/layout/top-menu/top-menu.component.css"))["default"]]
    })], TopMenuComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~Core-LayoutUsers-layoutusers-module~about-about-module~auth-auth-module~contact-contact-modu~ba636bad-es5.js.map