"use strict";



;define("ember-observer/adapters/application", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-data/adapters/json-api"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ApplicationEmberObject = (0, _decorate2.default)(null, function (_initialize, _JSONAPIAdapter) {
    var ApplicationEmberObject =
    /*#__PURE__*/
    function (_JSONAPIAdapter2) {
      (0, _inherits2.default)(ApplicationEmberObject, _JSONAPIAdapter2);

      function ApplicationEmberObject() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ApplicationEmberObject);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ApplicationEmberObject)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ApplicationEmberObject;
    }(_JSONAPIAdapter);

    return {
      F: ApplicationEmberObject,
      d: [{
        kind: "field",
        key: "namespace",
        value: function value() {
          return 'api/v2';
        }
      }, {
        kind: "field",
        key: "coalesceFindRequests",
        value: function value() {
          return true;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('session.{isAuthenticated,header}')],
        key: "headers",
        value: function headers() {
          if (this.get('session.isAuthenticated')) {
            return this.get('session.header');
          }
        }
      }, {
        kind: "method",
        key: "shouldBackgroundReloadRecord",
        value: function shouldBackgroundReloadRecord() {
          return false;
        }
      }, {
        kind: "method",
        key: "shouldBackgroundReloadAll",
        value: function shouldBackgroundReloadAll() {
          return false;
        }
      }]
    };
  }, _jsonApi.default);
  _exports.default = ApplicationEmberObject;
});
;define("ember-observer/app", ["exports", "ember-observer/resolver", "ember-load-initializers", "ember-observer/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  if (_environment.default.environment === 'production') {
    Ember.onerror = function (error) {
      if (window.trackJs) {
        window.trackJs.track(error);
      }

      console.error(error); // eslint-disable-line no-console
    };

    Ember.RSVP.on('error', function (error) {
      if (window.trackJs) {
        window.trackJs.track(error);
      }

      console.error(error); // eslint-disable-line no-console
    });
  }

  if (_environment.default.environment === 'development' || _environment.default.environment === 'test') {
    Error.stackTraceLimit = 200;
  }

  var _default = App;
  _exports.default = _default;
});
;define("ember-observer/components/addon-details", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonDetailsComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(AddonDetailsComponent, _EmberComponent);

    function AddonDetailsComponent() {
      (0, _classCallCheck2.default)(this, AddonDetailsComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonDetailsComponent).apply(this, arguments));
    }

    return AddonDetailsComponent;
  }(Ember.Component);

  _exports.default = AddonDetailsComponent;
});
;define("ember-observer/components/addon-list", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonListComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(AddonListComponent, _EmberComponent);

    function AddonListComponent() {
      (0, _classCallCheck2.default)(this, AddonListComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonListComponent).apply(this, arguments));
    }

    return AddonListComponent;
  }(Ember.Component);

  _exports.default = AddonListComponent;
});
;define("ember-observer/components/addon-note", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonNoteComponent = (0, _decorate2.default)([(0, _component.tagName)('fieldset'), (0, _component.classNames)('note', 'test-addon-note')], function (_initialize, _EmberComponent) {
    var AddonNoteComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AddonNoteComponent, _EmberComponent2);

      function AddonNoteComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonNoteComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonNoteComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonNoteComponent;
    }(_EmberComponent);

    return {
      F: AddonNoteComponent,
      d: [{
        kind: "field",
        key: "content",
        value: function value() {
          return '';
        }
      }]
    };
  }, Ember.Component);
  _exports.default = AddonNoteComponent;
});
;define("ember-observer/components/addon-review-form", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonReviewFormComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var AddonReviewFormComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AddonReviewFormComponent, _EmberComponent2);

      function AddonReviewFormComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonReviewFormComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonReviewFormComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonReviewFormComponent;
    }(_EmberComponent);

    return {
      F: AddonReviewFormComponent,
      d: [{
        kind: "field",
        key: "questionOptions",
        value: function value() {
          return [{
            label: 'Yes',
            value: 1
          }, {
            label: 'No',
            value: 2
          }, {
            label: 'N/A',
            value: 3
          }, {
            label: 'Unknown',
            value: 4
          }];
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "save",
        value: function save() {
          this.sendAction('save', this.get('review'));
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "selectOption",
        value: function selectOption(fieldName, value) {
          this.get('review').set(fieldName, value);
        }
      }]
    };
  }, Ember.Component);
  _exports.default = AddonReviewFormComponent;
});
;define("ember-observer/components/addon-review", ["exports", "ember-observer/models/review"], function (_exports, _review) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    answerMap: {
      1: 'Yes',
      2: 'No',
      3: 'N/A',
      4: 'Unknown'
    },
    answeredQuestions: Ember.computed('review', function () {
      var component = this;
      var review = this.review;
      return _review.questions.filter(function (question) {
        return !Ember.isEmpty(review.get(question.fieldName));
      }).map(function (question) {
        return {
          text: question.text,
          answer: component.answerMap[review.get(question.fieldName)]
        };
      });
    })
  });

  _exports.default = _default;
});
;define("ember-observer/components/addon-source-usages", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object", "ember-concurrency"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonSourceUsagesComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var AddonSourceUsagesComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AddonSourceUsagesComponent, _EmberComponent2);

      function AddonSourceUsagesComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonSourceUsagesComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonSourceUsagesComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonSourceUsagesComponent;
    }(_EmberComponent);

    return {
      F: AddonSourceUsagesComponent,
      d: [{
        kind: "field",
        key: "visibleUsageCount",
        value: function value() {
          return 25;
        }
      }, {
        kind: "field",
        key: "showUsages",
        value: function value() {
          return false;
        }
      }, {
        kind: "field",
        key: "usages",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "regex",
        value: function value() {
          return false;
        }
      }, {
        kind: "field",
        key: "fileFilter",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "codeSearch",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('visibleUsageCount', 'usages')],
        key: "visibleUsages",
        value: function visibleUsages() {
          return this.get('usages').slice(0, this.get('visibleUsageCount'));
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('visibleUsageCount', 'usages')],
        key: "moreUsages",
        value: function moreUsages() {
          return this.get('visibleUsageCount') < this.get('usages.length');
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var usages;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.get('codeSearch.usages').perform(this.get('addon.id'), this.get('query'), this.get('regex'));

                case 2:
                  usages = _context.sent;
                  this.set('usages', filterByFilePath(usages, this.get('fileFilter')));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })).drop()],
        key: "fetchUsages",
        value: void 0
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "toggleUsages",
        value: function toggleUsages() {
          this.toggleProperty('showUsages');

          if (this.get('showUsages') && this.get('usages') === null) {
            this.get('fetchUsages').perform();
          }
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "viewMore",
        value: function viewMore() {
          var newUsageCount = this.get('visibleUsageCount') + 25;
          this.set('visibleUsageCount', newUsageCount);
        }
      }]
    };
  }, Ember.Component);
  _exports.default = AddonSourceUsagesComponent;

  function filterByFilePath(usages, filterTerm) {
    if (Ember.isEmpty(filterTerm)) {
      return usages;
    }

    var filterRegex;

    try {
      filterRegex = new RegExp(filterTerm);
    } catch (e) {
      return [];
    }

    return usages.filter(function (usage) {
      return usage.filename.match(filterRegex);
    });
  }
});
;define("ember-observer/components/addon-version-item", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonVersionItemComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var AddonVersionItemComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AddonVersionItemComponent, _EmberComponent2);

      function AddonVersionItemComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonVersionItemComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonVersionItemComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonVersionItemComponent;
    }(_EmberComponent);

    return {
      F: AddonVersionItemComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = AddonVersionItemComponent;
});
;define("ember-observer/components/addon-version-list", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonVersionListComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var AddonVersionListComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AddonVersionListComponent, _EmberComponent2);

      function AddonVersionListComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonVersionListComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonVersionListComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonVersionListComponent;
    }(_EmberComponent);

    return {
      F: AddonVersionListComponent,
      d: [{
        kind: "field",
        key: "showAll",
        value: function value() {
          return false;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "emberVersions",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('versions', 'showAll')],
        key: "showingVersions",
        value: function showingVersions() {
          if (this.get('showAll')) {
            return this.get('versions');
          }

          return (this.get('versions') || []).slice(0, 10);
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('emberVersions.versionData', 'showingVersions.lastObject')],
        key: "emberVersionDataAfterOldestShowingAddonVersion",
        value: function emberVersionDataAfterOldestShowingAddonVersion() {
          var oldestVersionDate = this.get('showingVersions.lastObject.released');
          return this.get('emberVersions.versionData').filter(function (version) {
            return version.released > oldestVersionDate;
          });
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('emberVersionDataAfterOldestShowingAddonVersion', 'showingVersions')],
        key: "combinedVersions",
        value: function combinedVersions() {
          return (this.get('emberVersionDataAfterOldestShowingAddonVersion') || []).concat(this.get('showingVersions')).sortBy('released').reverse();
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.gt('versions.length', 10)],
        key: "moreThan10Versions",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('moreThan10Versions', 'showAll')],
        key: "thereAreHiddenVersions",
        value: function thereAreHiddenVersions() {
          return this.get('moreThan10Versions') && !this.get('showAll');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "showAllVersions",
        value: function showAllVersions() {
          this.set('showAll', true);
        }
      }]
    };
  }, Ember.Component);
  _exports.default = AddonVersionListComponent;
});
;define("ember-observer/components/admin-addon-review-form", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "ember-concurrency", "ember-observer/models/review"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _inherits2, _assertThisInitialized2, _decorate2, _getPrototypeOf3, _get2, _emberConcurrency, _review) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AdminAddonReviewFormComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var AdminAddonReviewFormComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AdminAddonReviewFormComponent, _EmberComponent2);

      function AdminAddonReviewFormComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AdminAddonReviewFormComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AdminAddonReviewFormComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AdminAddonReviewFormComponent;
    }(_EmberComponent);

    return {
      F: AdminAddonReviewFormComponent,
      d: [{
        kind: "field",
        key: "addon",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "reviewProperties",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "questions",
        value: function value() {
          return _review.questions;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "method",
        key: "didReceiveAttrs",
        value: function didReceiveAttrs() {
          (0, _get2.default)((0, _getPrototypeOf3.default)(AdminAddonReviewFormComponent.prototype), "didReceiveAttrs", this).apply(this, arguments);
          this.reset();
        }
      }, {
        kind: "method",
        key: "reset",
        value: function reset() {
          this.set('reviewProperties', {});
        }
      }, {
        kind: "method",
        key: "selectOption",
        value: function selectOption(fieldName, value) {
          this.set("reviewProperties.".concat(fieldName), value);
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var newReview;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  newReview = this.get('store').createRecord('review', this.get('reviewProperties'));
                  newReview.set('review', this.get('reviewText'));
                  newReview.set('version', this.get('addon.latestAddonVersion'));
                  _context.prev = 3;
                  _context.next = 6;
                  return newReview.save();

                case 6:
                  this.addon.set('latestReview', newReview);
                  _context.next = 9;
                  return this.addon.save();

                case 9:
                  this.reset();
                  this.complete.perform();
                  _context.next = 17;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](3);
                  console.error(_context.t0); // eslint-disable-line no-console

                  window.alert('Failed to create review');

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 13]]);
        })).drop()],
        key: "saveReview",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.set('recentlySaved', true);
                  _context2.next = 3;
                  return (0, _emberConcurrency.timeout)(2000);

                case 3:
                  this.set('recentlySaved', false);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).drop()],
        key: "complete",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = AdminAddonReviewFormComponent;
});
;define("ember-observer/components/admin-addon", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component", "ember-concurrency", "ember-observer/models/review"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component, _emberConcurrency, _review) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AdminAddonComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var AdminAddonComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(AdminAddonComponent, _EmberComponent2);

      function AdminAddonComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AdminAddonComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AdminAddonComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AdminAddonComponent;
    }(_EmberComponent);

    return {
      F: AdminAddonComponent,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        key: "addon",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "recentlyRenewed",
        value: function value() {
          return false;
        }
      }, {
        kind: "method",
        key: "updateInvalidRepoFlag",
        value: function updateInvalidRepoFlag(value) {
          this.set('addon.hasInvalidGithubRepo', !value);
        }
      }, {
        kind: "method",
        key: "updateIsWipFlag",
        value: function updateIsWipFlag(value) {
          this.set('addon.isWip', !value);
        }
      }, {
        kind: "method",
        key: "updateIsDeprecatedFlag",
        value: function updateIsDeprecatedFlag(value) {
          this.set('addon.isDeprecated', !value);
        }
      }, {
        kind: "method",
        key: "updateIsHiddenFlag",
        value: function updateIsHiddenFlag(value) {
          this.set('addon.isHidden', !value);
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.get('addon').save();

                case 3:
                  _context.next = 8;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context["catch"](0);
                  window.alert('Failed to save addon');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        })).drop()],
        key: "saveAddon",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var newReview, latestReview;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  newReview = this.get('store').createRecord('review');
                  latestReview = this.get('addon.latestReview');

                  _review.questions.forEach(function (question) {
                    newReview.set(question.fieldName, latestReview.get(question.fieldName));
                  });

                  newReview.set('review', latestReview.get('review'));
                  newReview.set('version', this.get('addon.latestAddonVersion'));
                  _context2.prev = 5;
                  _context2.next = 8;
                  return newReview.save();

                case 8:
                  this.addon.set('latestReview', newReview);
                  _context2.next = 11;
                  return this.addon.save();

                case 11:
                  this.completeRenew.perform();
                  _context2.next = 18;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](5);
                  console.error(_context2.t0); // eslint-disable-line no-console

                  window.alert('Failed to renew review');

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[5, 14]]);
        })).drop()],
        key: "renewLatestReview",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.set('recentlyRenewed', true);
                  _context3.next = 3;
                  return (0, _emberConcurrency.timeout)(2000);

                case 3:
                  this.set('recentlyRenewed', false);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        })).drop()],
        key: "completeRenew",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = AdminAddonComponent;
});
;define("ember-observer/components/basic-dropdown", ["exports", "ember-basic-dropdown/components/basic-dropdown"], function (_exports, _basicDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _basicDropdown.default;
    }
  });
});
;define("ember-observer/components/basic-dropdown/content-element", ["exports", "ember-basic-dropdown/components/basic-dropdown/content-element"], function (_exports, _contentElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _contentElement.default;
    }
  });
});
;define("ember-observer/components/basic-dropdown/content", ["exports", "ember-basic-dropdown/components/basic-dropdown/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _content.default;
    }
  });
});
;define("ember-observer/components/basic-dropdown/trigger", ["exports", "ember-basic-dropdown/components/basic-dropdown/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("ember-observer/components/canary-test-result-summary", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-observer/utils/computed-percent"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _computedPercent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFormattedPercent(percentPropertyName) {
    return Ember.computed(percentPropertyName, function () {
      var value = this.get(percentPropertyName);

      if (!value) {
        return '--';
      }

      value = value.toFixed(2);
      return "".concat(value, "%");
    });
  }

  var CanaryTestResultSummaryComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var CanaryTestResultSummaryComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(CanaryTestResultSummaryComponent, _EmberComponent2);

      function CanaryTestResultSummaryComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CanaryTestResultSummaryComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CanaryTestResultSummaryComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CanaryTestResultSummaryComponent;
    }(_EmberComponent);

    return {
      F: CanaryTestResultSummaryComponent,
      d: [{
        kind: "field",
        decorators: [Ember.computed.filter('testResults', function (testResult) {
          return !testResult.get('succeeded');
        })],
        key: "errorBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.filter('testResults', function (testResult) {
          return testResult.get('succeeded') && !testResult.get('emberVersionCompatibilities.firstObject.compatible');
        })],
        key: "failedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.filter('testResults', function (testResult) {
          return testResult.get('succeeded') && testResult.get('emberVersionCompatibilities.firstObject.compatible');
        })],
        key: "passedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('errorBuilds.length')],
        key: "numberOfErrorBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('failedBuilds.length')],
        key: "numberOfFailedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('passedBuilds.length')],
        key: "numberOfPassedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('testResults.length')],
        key: "numberOfBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _computedPercent.default)('numberOfErrorBuilds', 'numberOfBuilds')],
        key: "percentOfErrorBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _computedPercent.default)('numberOfFailedBuilds', 'numberOfBuilds')],
        key: "percentOfFailedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _computedPercent.default)('numberOfPassedBuilds', 'numberOfBuilds')],
        key: "percentOfPassedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [computedFormattedPercent('percentOfErrorBuilds')],
        key: "formattedPercentOfErrorBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [computedFormattedPercent('percentOfFailedBuilds')],
        key: "formattedPercentOfFailedBuilds",
        value: void 0
      }, {
        kind: "field",
        decorators: [computedFormattedPercent('percentOfPassedBuilds')],
        key: "formattedPercentOfPassedBuilds",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = CanaryTestResultSummaryComponent;
});
;define("ember-observer/components/category-chooser", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CategoryChooserComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var CategoryChooserComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(CategoryChooserComponent, _EmberComponent2);

      function CategoryChooserComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CategoryChooserComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CategoryChooserComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CategoryChooserComponent;
    }(_EmberComponent);

    return {
      F: CategoryChooserComponent,
      d: [{
        kind: "field",
        key: "categories",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "addon",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "categorySorting",
        value: function value() {
          return ['displayName:asc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('categories', 'categorySorting')],
        key: "sortedCategories",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = CategoryChooserComponent;
});
;define("ember-observer/components/category-finder", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CategoryFinderComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var CategoryFinderComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(CategoryFinderComponent, _EmberComponent2);

      function CategoryFinderComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CategoryFinderComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CategoryFinderComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CategoryFinderComponent;
    }(_EmberComponent);

    return {
      F: CategoryFinderComponent,
      d: [{
        kind: "field",
        key: "categorySorting",
        value: function value() {
          return ['position:asc'];
        }
      }, {
        kind: "field",
        key: "categoryLinkRoute",
        value: function value() {
          return 'categories.show';
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.filterBy('categories', 'parent', null)],
        key: "topLevelCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('topLevelCategories', 'categorySorting')],
        key: "sortedTopLevelCategories",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = CategoryFinderComponent;
});
;define("ember-observer/components/category-position-dropdown", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CategoryPositionDropdownComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(CategoryPositionDropdownComponent, _EmberComponent);

    function CategoryPositionDropdownComponent() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, CategoryPositionDropdownComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CategoryPositionDropdownComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.categories = null;
      _this.position = -1;
      return _this;
    }

    return CategoryPositionDropdownComponent;
  }(Ember.Component);

  _exports.default = CategoryPositionDropdownComponent;
});
;define("ember-observer/components/code-search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "@ember-decorators/component", "ember-concurrency", "ember-observer/config/environment"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _inherits2, _assertThisInitialized2, _decorate2, _getPrototypeOf3, _get2, _component, _emberConcurrency, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var PageSize = _environment.default.codeSearchPageSize;
  var CodeSearchComponent = (0, _decorate2.default)([(0, _component.classNames)('code-search')], function (_initialize, _EmberComponent) {
    var CodeSearchComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(CodeSearchComponent, _EmberComponent2);

      function CodeSearchComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CodeSearchComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CodeSearchComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CodeSearchComponent;
    }(_EmberComponent);

    return {
      F: CodeSearchComponent,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "metrics",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "codeSearch",
        value: void 0
      }, {
        kind: "field",
        key: "codeQuery",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "sort",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "sortAscending",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "fileFilter",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "quotedLastSearch",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "page",
        value: function value() {
          return 1;
        }
      }, {
        kind: "field",
        key: "focusNode",
        value: function value() {
          return '#code-search-input';
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.mapBy('results', 'count')],
        key: "usageCounts",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sum('usageCounts')],
        key: "totalUsageCount",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.mapBy('filteredResults', 'count')],
        key: "filteredUsageCounts",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sum('filteredUsageCounts')],
        key: "totalFilteredUsageCount",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.notEmpty('fileFilter')],
        key: "isFilterApplied",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('isFilterApplied', 'isUpdatingFilter')],
        key: "isDisplayingFilteredResults",
        value: function isDisplayingFilteredResults() {
          return this.get('isFilterApplied') && !this.get('isUpdatingFilter');
        }
      }, {
        kind: "method",
        key: "init",
        value: function init() {
          (0, _get2.default)((0, _getPrototypeOf3.default)(CodeSearchComponent.prototype), "init", this).apply(this, arguments);
          this.set('searchInput', this.get('codeQuery') || '');
          this.get('search').perform();
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('results.length', 'search.isIdle')],
        key: "hasSearchedAndNoResults",
        value: function hasSearchedAndNoResults() {
          return this.get('results.length') === 0 && this.get('search.isIdle');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('searchInput')],
        key: "queryIsValid",
        value: function queryIsValid() {
          var input = this.get('searchInput');
          return !(Ember.isBlank(input) || input.length < 2);
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('searchInput')],
        key: "cleanedSearchInput",
        value: function cleanedSearchInput() {
          return this.get('searchInput').trim();
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('results', 'fileFilter')],
        key: "filteredResults",
        value: function filteredResults() {
          if (this.get('fileFilter')) {
            return filterByFilePath(this.get('results'), this.get('fileFilter'));
          } else {
            return this.get('results');
          }
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('filteredResults', 'sort', 'sortAscending')],
        key: "sortedFilteredResults",
        value: function sortedFilteredResults() {
          return sortResults(this.get('filteredResults'), this.get('sort'), this.get('sortAscending'));
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('sortedFilteredResults', 'page')],
        key: "displayingResults",
        value: function displayingResults() {
          return this._getResultsUpToPage(this.get('sortedFilteredResults'), this.get('page'));
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var query, results;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  query = this.get('cleanedSearchInput');
                  this.set('results', null);
                  this.set('page', 1);

                  if (this.get('queryIsValid')) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  this.get('metrics').trackEvent({
                    category: 'Code Search',
                    action: 'Search',
                    label: query
                  });
                  this.set('codeQuery', query);
                  _context.next = 9;
                  return this.get('codeSearch.addons').perform(query, this.get('regex'));

                case 9:
                  results = _context.sent;
                  this.set('quotedLastSearch', quoteSearchTerm(query, this.get('regex')));
                  this.set('results', results);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })).restartable()],
        key: "search",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(fileFilter) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0, _emberConcurrency.timeout)(250);

                case 2:
                  if (!Ember.isEmpty(fileFilter)) {
                    this.set('fileFilter', fileFilter);
                  }

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).restartable()],
        key: "applyFileFilter",
        value: void 0
      }, {
        kind: "method",
        key: "clearFileFilter",
        value: function clearFileFilter() {
          this.set('page', 1);
          this.set('fileFilter', null);
        }
      }, {
        kind: "method",
        key: "_getResultsUpToPage",
        value: function _getResultsUpToPage(results, page) {
          if (!results || !results.length) {
            return null;
          }

          return results.slice(0, page * PageSize);
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('displayingResults.length', 'filteredResults.length')],
        key: "canViewMore",
        value: function canViewMore() {
          return this.get('displayingResults.length') < this.get('filteredResults.length');
        }
      }, {
        kind: "method",
        key: "viewMore",
        value: function viewMore() {
          this.set('page', this.get('page') + 1);
        }
      }, {
        kind: "method",
        key: "sortBy",
        value: function sortBy(key) {
          var oldKey = this.get('sort');

          if (oldKey === key || this.get('sortAscending') !== defaultSortAscendingFor(key)) {
            this.set('sortAscending', !this.get('sortAscending'));
          }

          this.set('sort', key);
        }
      }, {
        kind: "method",
        key: "focus",
        value: function focus() {
          this.$(this.get('focusNode')).focus();
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('applyFileFilter.isRunning')],
        key: "isUpdatingResults",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('applyFileFilter.isRunning')],
        key: "isUpdatingFilter",
        value: void 0
      }, {
        kind: "method",
        key: "clearSearch",
        value: function clearSearch() {
          this.set('codeQuery', '');
          this.set('searchInput', '');
          this.set('results', null);
          this.set('page', 1);
          Ember.run.scheduleOnce('afterRender', this, 'focus');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = CodeSearchComponent;

  function sortResults(results, sort, sortAscending) {
    var sorted;

    if (sort === 'usages') {
      sorted = results.sortBy('count');
    }

    if (sort === 'name') {
      sorted = results.sortBy('addon.name');
    }

    if (sort === 'score') {
      sorted = results.sortBy('addon.score');
    }

    if (sort === 'updated') {
      sorted = results.sortBy('addon.latestVersionDate');
    }

    if (!sortAscending) {
      sorted = sorted.reverse();
    }

    return sorted;
  }

  function quoteSearchTerm(searchTerm, isRegex) {
    var character = isRegex ? '/' : '"';
    return "".concat(character).concat(searchTerm).concat(character);
  }

  function filterByFilePath(results, filterTerm) {
    if (Ember.isEmpty(filterTerm)) {
      return results;
    }

    var filteredList = [];
    var filterRegex;

    try {
      filterRegex = new RegExp(filterTerm);
    } catch (e) {
      return [];
    }

    results.forEach(function (result) {
      var filteredFiles = result.files.filter(function (filePath) {
        return filePath.match(filterRegex);
      });

      if (filteredFiles.length > 0) {
        filteredList.push({
          addon: result.addon,
          files: filteredFiles,
          count: filteredFiles.length
        });
      }
    });
    return filteredList;
  }

  function defaultSortAscendingFor(key) {
    if (key === 'name') {
      return true;
    }

    return false;
  }
});
;define("ember-observer/components/comma-separated", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CommaSeparatedComponent = (0, _decorate2.default)([(0, _component.tagName)('span')], function (_initialize, _EmberComponent) {
    var CommaSeparatedComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(CommaSeparatedComponent, _EmberComponent2);

      function CommaSeparatedComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CommaSeparatedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CommaSeparatedComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CommaSeparatedComponent;
    }(_EmberComponent);

    return {
      F: CommaSeparatedComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('list.lastObject', 'item')],
        key: "separator",
        value: function separator() {
          if (this.get('list.lastObject') === this.get('item')) {
            return '';
          } else {
            return ', ';
          }
        }
      }]
    };
  }, Ember.Component);
  _exports.default = CommaSeparatedComponent;
});
;define("ember-observer/components/dependency-icon", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DependencyIconComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var DependencyIconComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(DependencyIconComponent, _EmberComponent2);

      function DependencyIconComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, DependencyIconComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DependencyIconComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return DependencyIconComponent;
    }(_EmberComponent);

    return {
      F: DependencyIconComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = DependencyIconComponent;
});
;define("ember-observer/components/ember-version-compatibility-list", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var EmberVersionCompatibilityListComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var EmberVersionCompatibilityListComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(EmberVersionCompatibilityListComponent, _EmberComponent2);

      function EmberVersionCompatibilityListComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EmberVersionCompatibilityListComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EmberVersionCompatibilityListComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return EmberVersionCompatibilityListComponent;
    }(_EmberComponent);

    return {
      F: EmberVersionCompatibilityListComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = EmberVersionCompatibilityListComponent;
});
;define("ember-observer/components/ember-version-compatibility", ["exports", "@babel/runtime/helpers/esm/slicedToArray", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component", "@ember-decorators/object"], function (_exports, _slicedToArray2, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var EmberVersionCompatibilityComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var EmberVersionCompatibilityComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(EmberVersionCompatibilityComponent, _EmberComponent2);

      function EmberVersionCompatibilityComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EmberVersionCompatibilityComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EmberVersionCompatibilityComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return EmberVersionCompatibilityComponent;
    }(_EmberComponent);

    return {
      F: EmberVersionCompatibilityComponent,
      d: [{
        kind: "field",
        key: "showTable",
        value: function value() {
          return false;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('testResult.emberVersionCompatibilities.@each.emberVersion')],
        key: "versionCompatibilitiesForReleasedVersions",
        value: function versionCompatibilitiesForReleasedVersions() {
          return this.get('testResult.emberVersionCompatibilities').filter(function (versionCompatibility) {
            return !versionCompatibility.get('emberVersion').match(/(beta|canary)/);
          });
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('versionCompatibilitiesForReleasedVersions.@each.emberVersion')],
        key: "sortedVersionCompatibilities",
        value: function sortedVersionCompatibilities() {
          return this.get('versionCompatibilitiesForReleasedVersions').toArray().sort(sortByVersion);
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('versionCompatibilitiesForReleasedVersions.@each.compatible')],
        key: "allTestsPassed",
        value: function allTestsPassed() {
          return this.get('versionCompatibilitiesForReleasedVersions').every(function (versionCompatibility) {
            return versionCompatibility.get('compatible');
          });
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('sortedVersionCompatibilities.[]')],
        key: "compatibilitySemverString",
        value: function compatibilitySemverString() {
          var earliestVersion = this.get('sortedVersionCompatibilities.lastObject.emberVersion');
          var latestVersion = this.get('sortedVersionCompatibilities.firstObject.emberVersion');
          return ">=".concat(earliestVersion, " <=").concat(latestVersion);
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "toggleShowTable",
        value: function toggleShowTable() {
          this.toggleProperty('showTable');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = EmberVersionCompatibilityComponent;

  function extractVersionParts(versionNumber) {
    var matches = versionNumber.match(/^(\d+)\.(\d+)\.(\d+)/);

    if (matches) {
      return matches.slice(1).map(function (x) {
        return parseInt(x, 10);
      });
    }

    return null;
  }

  function sortByVersion(a, b) {
    var _extractVersionParts = extractVersionParts(a.get('emberVersion')),
        _extractVersionParts2 = (0, _slicedToArray2.default)(_extractVersionParts, 3),
        majorA = _extractVersionParts2[0],
        minorA = _extractVersionParts2[1],
        patchA = _extractVersionParts2[2];

    var _extractVersionParts3 = extractVersionParts(b.get('emberVersion')),
        _extractVersionParts4 = (0, _slicedToArray2.default)(_extractVersionParts3, 3),
        majorB = _extractVersionParts4[0],
        minorB = _extractVersionParts4[1],
        patchB = _extractVersionParts4[2];

    if (Ember.compare(majorB, majorA) !== 0) {
      return Ember.compare(majorB, majorA);
    }

    if (Ember.compare(minorB, minorA) !== 0) {
      return Ember.compare(minorB, minorA);
    }

    return Ember.compare(patchB, patchA);
  }
});
;define("ember-observer/components/ember-version-item", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var EmberVersionItemComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var EmberVersionItemComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(EmberVersionItemComponent, _EmberComponent2);

      function EmberVersionItemComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EmberVersionItemComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EmberVersionItemComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return EmberVersionItemComponent;
    }(_EmberComponent);

    return {
      F: EmberVersionItemComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = EmberVersionItemComponent;
});
;define("ember-observer/components/exclusive-button-group", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ExclusiveButtonGroupComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(ExclusiveButtonGroupComponent, _EmberComponent);

    function ExclusiveButtonGroupComponent() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ExclusiveButtonGroupComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExclusiveButtonGroupComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.selectedValue = null;
      _this.updateSelectedValue = null;
      return _this;
    }

    return ExclusiveButtonGroupComponent;
  }(Ember.Component);

  _exports.default = ExclusiveButtonGroupComponent;
});
;define("ember-observer/components/exclusive-button", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ExclusiveButtonComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var ExclusiveButtonComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(ExclusiveButtonComponent, _EmberComponent2);

      function ExclusiveButtonComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ExclusiveButtonComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ExclusiveButtonComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ExclusiveButtonComponent;
    }(_EmberComponent);

    return {
      F: ExclusiveButtonComponent,
      d: [{
        kind: "field",
        key: "label",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "value",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "selectedValue",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "updateSelectedValue",
        value: function value() {
          return null;
        }
      }]
    };
  }, Ember.Component);
  _exports.default = ExclusiveButtonComponent;
});
;define("ember-observer/components/gravatar-avatar", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var GravatarAvatarComponent = (0, _decorate2.default)([(0, _component.tagName)('img')], function (_initialize, _EmberComponent) {
    var GravatarAvatarComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(GravatarAvatarComponent, _EmberComponent2);

      function GravatarAvatarComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, GravatarAvatarComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(GravatarAvatarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return GravatarAvatarComponent;
    }(_EmberComponent);

    return {
      F: GravatarAvatarComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('gravatarId'), _component.attribute],
        key: "src",
        value: function src() {
          var gravatarId = this.get('gravatarId') || '';
          return "https://secure.gravatar.com/avatar/".concat(gravatarId, "?d=identicon");
        }
      }]
    };
  }, Ember.Component);
  _exports.default = GravatarAvatarComponent;
});
;define("ember-observer/components/human-url", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var HumanUrlComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var HumanUrlComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(HumanUrlComponent, _EmberComponent2);

      function HumanUrlComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, HumanUrlComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HumanUrlComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return HumanUrlComponent;
    }(_EmberComponent);

    return {
      F: HumanUrlComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('url')],
        key: "parsed",
        value: function parsed() {
          if (this.get('url')) {
            var a = document.createElement('a');
            a.href = this.get('url');
            var host = a.hostname;
            var pathname = a.pathname.replace(/^\/?/, '/');
            return {
              host: host,
              pathname: pathname
            };
          }
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('parsed.host')],
        key: "domain",
        value: function domain() {
          return this.getWithDefault('parsed.host', '').replace(/^(www.)?/, '');
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('parsed.pathname')],
        key: "pathname",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = HumanUrlComponent;
});
;define("ember-observer/components/inline-category-list", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var InlineCategoryListComponent = (0, _decorate2.default)([(0, _component.tagName)('span'), (0, _component.classNames)('category-list', 'test-category-list')], function (_initialize, _EmberComponent) {
    var InlineCategoryListComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(InlineCategoryListComponent, _EmberComponent2);

      function InlineCategoryListComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, InlineCategoryListComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InlineCategoryListComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return InlineCategoryListComponent;
    }(_EmberComponent);

    return {
      F: InlineCategoryListComponent,
      d: [{
        kind: "field",
        key: "categorySorting",
        value: function value() {
          return ['totalAddonCount:desc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('categories', 'categorySorting')],
        key: "categoriesSortedByAddonCount",
        value: void 0
      }]
    };
  }, Ember.Component);
  _exports.default = InlineCategoryListComponent;
});
;define("ember-observer/components/large-search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "ember-concurrency"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _inherits2, _assertThisInitialized2, _decorate2, _getPrototypeOf3, _get2, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var PageSize = 10;
  var LargeSearchComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var LargeSearchComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(LargeSearchComponent, _EmberComponent2);

      function LargeSearchComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, LargeSearchComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LargeSearchComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return LargeSearchComponent;
    }(_EmberComponent);

    return {
      F: LargeSearchComponent,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "session",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service('search')],
        key: "searchService",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service('-routing')],
        key: "routing",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "metrics",
        value: void 0
      }, {
        kind: "field",
        key: "focusNode",
        value: function value() {
          return '#search-input';
        }
      }, {
        kind: "method",
        key: "init",
        value: function init() {
          (0, _get2.default)((0, _getPrototypeOf3.default)(LargeSearchComponent.prototype), "init", this).apply(this, arguments);
          this.get('search').perform(this.get('query'));
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('queryIsValid', 'results.length', 'search.isIdle')],
        key: "hasSearchedAndNoResults",
        value: function hasSearchedAndNoResults() {
          return this.get('queryIsValid') && !this.get('results.length') && this.get('search.isIdle');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('query')],
        key: "queryIsValid",
        value: function queryIsValid() {
          var emMatcher = /(^e$|^em$|^emb$|^embe$|^ember$|^ember-$)/;
          var query = this.get('query');
          return !(Ember.isBlank(query) || query.length < 3 || emMatcher.test(query));
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var pageToFetch, moreAddons;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pageToFetch = this.get('_results.lastAddonPageDisplaying') + 1;
                  _context.next = 3;
                  return this._fetchPageOfAddonResults(this.get('_results.rawResults.addonResults'), pageToFetch);

                case 3:
                  moreAddons = _context.sent;
                  this.get('_results.displayingAddons').pushObjects(moreAddons);
                  this.set('_results.lastAddonPageDisplaying', pageToFetch);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))],
        key: "fetchMoreAddons",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var pageToFetch, moreMaintainers;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  pageToFetch = this.get('_results.lastMaintainerPageDisplaying') + 1;
                  _context2.next = 3;
                  return this._fetchPageOfMaintainerResults(this.get('_results.rawResults.maintainerResults'), pageToFetch);

                case 3:
                  moreMaintainers = _context2.sent;
                  this.get('_results.displayingMaintainers').pushObjects(moreMaintainers);
                  this.set('_results.lastMaintainerPageDisplaying', pageToFetch);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))],
        key: "fetchMoreMaintainers",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var pageToFetch, moreCategories;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  pageToFetch = this.get('_results.lastCategoryPageDisplaying') + 1;
                  _context3.next = 3;
                  return this._fetchPageOfCategoryResults(this.get('_results.rawResults.categoryResults'), pageToFetch);

                case 3:
                  moreCategories = _context3.sent;
                  this.get('_results.displayingCategories').pushObjects(moreCategories);
                  this.set('_results.lastCategoryPageDisplaying', pageToFetch);

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))],
        key: "fetchMoreCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var pageToFetch, moreReadmes;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  pageToFetch = this.get('_results.lastReadmePageDisplaying') + 1;
                  _context4.next = 3;
                  return this._fetchPageOfAddonResults(this.get('_results.rawResults.readmeResults'), pageToFetch);

                case 3:
                  moreReadmes = _context4.sent;
                  this.get('_results.displayingReadmes').pushObjects(moreReadmes);
                  this.set('_results.lastReadmePageDisplaying', pageToFetch);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))],
        key: "fetchMoreReadmes",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(query) {
          var results, firstPageOfResults;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.set('query', query.trim());

                  if (this.get('queryIsValid')) {
                    _context5.next = 4;
                    break;
                  }

                  this.set('_results', null);
                  return _context5.abrupt("return");

                case 4:
                  _context5.next = 6;
                  return (0, _emberConcurrency.timeout)(250);

                case 6:
                  this.get('metrics').trackEvent({
                    category: 'Search',
                    action: 'Search on /',
                    label: this.get('query')
                  });
                  _context5.next = 9;
                  return this.get('searchService.search').perform(this.get('query'), {
                    includeReadmes: this.get('searchReadmes')
                  });

                case 9:
                  results = _context5.sent;
                  _context5.next = 12;
                  return this._fetchFirstPageOfResults(results);

                case 12:
                  firstPageOfResults = _context5.sent;
                  this.set('_results', {
                    displayingAddons: firstPageOfResults.addons,
                    lastAddonPageDisplaying: 1,
                    totalAddonsCount: results.addonResults.matchCount,
                    displayingCategories: firstPageOfResults.categories,
                    lastCategoryPageDisplaying: 1,
                    totalCategoriesCount: results.categoryResults.matchCount,
                    displayingMaintainers: firstPageOfResults.maintainers,
                    totalMaintainersCount: results.maintainerResults.matchCount,
                    lastMaintainerPageDisplaying: 1,
                    displayingReadmes: firstPageOfResults.readmes,
                    readmeMatchMap: results.readmeResults.matchMap,
                    totalReadmeCount: results.readmeResults.matchCount,
                    lastReadmePageDisplaying: 1,
                    rawResults: results,
                    length: results.length
                  });

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        })).restartable()],
        key: "search",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  this.toggleProperty('searchReadmes');
                  _context6.next = 3;
                  return this.get('search').perform(this.get('query'));

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }))],
        key: "toggleReadmeSearch",
        value: void 0
      }, {
        kind: "method",
        key: "_fetchFirstPageOfResults",
        value: function _fetchFirstPageOfResults(results) {
          var addonsPromise = this._fetchPageOfAddonResults(results.addonResults, 1);

          var categoriesPromise = this._fetchPageOfCategoryResults(results.categoryResults, 1);

          var maintainersPromise = this._fetchPageOfMaintainerResults(results.maintainerResults, 1);

          var readmePromise = this._fetchPageOfAddonResults(results.readmeResults, 1);

          return Ember.RSVP.hash({
            addons: addonsPromise,
            categories: categoriesPromise,
            maintainers: maintainersPromise,
            readmes: readmePromise
          });
        }
      }, {
        kind: "method",
        key: "_fetchPageOfMaintainerResults",
        value: function _fetchPageOfMaintainerResults(results, page) {
          if (!results || !results.matchCount) {
            return Ember.RSVP.resolve(null);
          }

          var ids = results.matchIds.slice((page - 1) * PageSize, page * PageSize);
          return this.get('store').query('maintainer', {
            filter: {
              id: ids.join(',')
            },
            sort: 'name'
          }).then(function (maintainers) {
            return maintainers.toArray();
          });
        }
      }, {
        kind: "method",
        key: "_fetchPageOfCategoryResults",
        value: function _fetchPageOfCategoryResults(results, page) {
          if (!results || !results.matchCount) {
            return Ember.RSVP.resolve(null);
          }

          var ids = results.matchIds.slice((page - 1) * PageSize, page * PageSize);
          return this.get('store').query('category', {
            filter: {
              id: ids.join(',')
            },
            sort: 'name'
          }).then(function (categories) {
            return categories.toArray();
          });
        }
      }, {
        kind: "method",
        key: "_fetchPageOfAddonResults",
        value: function _fetchPageOfAddonResults(results, page) {
          if (!results || !results.matchCount) {
            return Ember.RSVP.resolve(null);
          }

          var ids = results.matchIds.slice((page - 1) * PageSize, page * PageSize);
          return this.get('store').query('addon', {
            filter: {
              id: ids.join(',')
            },
            sort: '-score',
            include: 'categories'
          }).then(function (addons) {
            return addons.toArray();
          });
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('query', '_results')],
        key: "results",
        value: function results() {
          if (this.get('queryIsValid')) {
            return this.get('_results');
          }

          return null;
        }
      }, {
        kind: "method",
        key: "focus",
        value: function focus() {
          this.$(this.get('focusNode')).focus();
        }
      }, {
        kind: "method",
        key: "clearSearch",
        value: function clearSearch() {
          this.get('metrics').trackEvent({
            category: 'Clear Search',
            action: "Clear on ".concat(document.location.pathname)
          });
          this.set('query', '');
          this.set('_results', null);
          Ember.run.scheduleOnce('afterRender', this, 'focus');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = LargeSearchComponent;
});
;define("ember-observer/components/login-form", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var LoginFormComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var LoginFormComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(LoginFormComponent, _EmberComponent2);

      function LoginFormComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, LoginFormComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LoginFormComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return LoginFormComponent;
    }(_EmberComponent);

    return {
      F: LoginFormComponent,
      d: [{
        kind: "method",
        decorators: [_object.action],
        key: "login",
        value: function login() {
          this.sendAction('loginAction', this.get('email'), this.get('password'));
        }
      }]
    };
  }, Ember.Component);
  _exports.default = LoginFormComponent;
});
;define("ember-observer/components/markdown-to-html", ["exports", "ember-cli-showdown/components/markdown-to-html"], function (_exports, _markdownToHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _markdownToHtml.default;
    }
  });
});
;define("ember-observer/components/markdown-to-sanitized-html", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component", "ember-cli-showdown/components/markdown-to-html"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component, _markdownToHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var MarkdownToSanitizedHtmlComponent = (0, _decorate2.default)([(0, _component.layout)('')], function (_initialize, _MarkdownToHtml) {
    var MarkdownToSanitizedHtmlComponent =
    /*#__PURE__*/
    function (_MarkdownToHtml2) {
      (0, _inherits2.default)(MarkdownToSanitizedHtmlComponent, _MarkdownToHtml2);

      function MarkdownToSanitizedHtmlComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, MarkdownToSanitizedHtmlComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MarkdownToSanitizedHtmlComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return MarkdownToSanitizedHtmlComponent;
    }(_MarkdownToHtml);

    return {
      F: MarkdownToSanitizedHtmlComponent,
      d: []
    };
  }, _markdownToHtml.default);
  _exports.default = MarkdownToSanitizedHtmlComponent;
});
;define("ember-observer/components/official-icon", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var OfficialIconComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var OfficialIconComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(OfficialIconComponent, _EmberComponent2);

      function OfficialIconComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, OfficialIconComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(OfficialIconComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return OfficialIconComponent;
    }(_EmberComponent);

    return {
      F: OfficialIconComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = OfficialIconComponent;
});
;define("ember-observer/components/page-layout", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-concurrency"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var PageLayoutComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var PageLayoutComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(PageLayoutComponent, _EmberComponent2);

      function PageLayoutComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, PageLayoutComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PageLayoutComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return PageLayoutComponent;
    }(_EmberComponent);

    return {
      F: PageLayoutComponent,
      d: [{
        kind: "field",
        key: "showHeaderSearch",
        value: function value() {
          return true;
        }
      }, {
        kind: "field",
        key: "searchTerm",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "session",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "routing",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "metrics",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service('search')],
        key: "searchService",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed()],
        key: "categories",
        value: function categories() {
          return this.get('store').peekAll('category');
        }
      }, {
        kind: "method",
        key: "goSearch",
        value: function goSearch(term) {
          if (!Ember.isBlank(term)) {
            this.get('metrics').trackEvent({
              category: 'Header search',
              action: "Search on ".concat(document.location.pathname),
              label: this.get('searchTerm')
            });
            this.get('routing').transitionTo('index', {
              queryParams: {
                query: term
              }
            });
          }
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(term) {
          var results, limitedResults;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(term.length === 0)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", Ember.RSVP.resolve([]));

                case 2:
                  _context.next = 4;
                  return (0, _emberConcurrency.timeout)(250);

                case 4:
                  this.get('metrics').trackEvent({
                    category: 'Header autocomplete',
                    action: "Autocomplete on ".concat(document.location.pathname),
                    label: term
                  });
                  _context.next = 7;
                  return this.get('searchService.searchAddonNames').perform(term);

                case 7:
                  results = _context.sent;
                  limitedResults = results.slice(0, 5);

                  if (limitedResults.length) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", [{
                    noResults: true,
                    isFullSearchLink: true
                  }]);

                case 11:
                  limitedResults.insertAt(1, {
                    isFullSearchLink: true
                  });
                  return _context.abrupt("return", limitedResults);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })).restartable()],
        key: "searchForAddons",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(selected, options) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!selected.isFullSearchLink) {
                    _context2.next = 4;
                    break;
                  }

                  this.goSearch(options.searchText);
                  _context2.next = 8;
                  break;

                case 4:
                  this.set('selectedAddon', selected);
                  _context2.next = 7;
                  return this.get('routing').transitionTo('addons.show', selected);

                case 7:
                  this.set('selectedAddon', null);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))],
        key: "goToAddon",
        value: void 0
      }, {
        kind: "method",
        key: "logoutUser",
        value: function logoutUser() {
          var _this2 = this;

          this.get('session').close().finally(function () {
            _this2.get('routing').transitionTo('index');
          });
        }
      }]
    };
  }, Ember.Component);
  _exports.default = PageLayoutComponent;
});
;define("ember-observer/components/power-select-multiple", ["exports", "ember-power-select/components/power-select-multiple"], function (_exports, _powerSelectMultiple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectMultiple.default;
    }
  });
});
;define("ember-observer/components/power-select-multiple/trigger", ["exports", "ember-power-select/components/power-select-multiple/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("ember-observer/components/power-select-typeahead", ["exports", "ember-power-select-typeahead/components/power-select-typeahead"], function (_exports, _powerSelectTypeahead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectTypeahead.default;
    }
  });
});
;define("ember-observer/components/power-select-typeahead/trigger", ["exports", "ember-power-select-typeahead/components/power-select-typeahead/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("ember-observer/components/power-select", ["exports", "ember-power-select/components/power-select"], function (_exports, _powerSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelect.default;
    }
  });
});
;define("ember-observer/components/power-select/before-options", ["exports", "ember-power-select/components/power-select/before-options"], function (_exports, _beforeOptions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _beforeOptions.default;
    }
  });
});
;define("ember-observer/components/power-select/options", ["exports", "ember-power-select/components/power-select/options"], function (_exports, _options) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _options.default;
    }
  });
});
;define("ember-observer/components/power-select/placeholder", ["exports", "ember-power-select/components/power-select/placeholder"], function (_exports, _placeholder) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _placeholder.default;
    }
  });
});
;define("ember-observer/components/power-select/power-select-group", ["exports", "ember-power-select/components/power-select/power-select-group"], function (_exports, _powerSelectGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _powerSelectGroup.default;
    }
  });
});
;define("ember-observer/components/power-select/search-message", ["exports", "ember-power-select/components/power-select/search-message"], function (_exports, _searchMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _searchMessage.default;
    }
  });
});
;define("ember-observer/components/power-select/trigger", ["exports", "ember-power-select/components/power-select/trigger"], function (_exports, _trigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _trigger.default;
    }
  });
});
;define("ember-observer/components/radio-button-set", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var RadioButtonSetComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(RadioButtonSetComponent, _EmberComponent);

    function RadioButtonSetComponent() {
      (0, _classCallCheck2.default)(this, RadioButtonSetComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadioButtonSetComponent).apply(this, arguments));
    }

    (0, _createClass2.default)(RadioButtonSetComponent, [{
      key: "select",
      value: function select(option) {
        this.set('selected', option);
        this.get('selectOption')(this.get('valueField'), option.value);
      }
    }]);
    return RadioButtonSetComponent;
  }(Ember.Component);

  _exports.default = RadioButtonSetComponent;
});
;define("ember-observer/components/radio-button", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var RadioButtonComponent = (0, _decorate2.default)([(0, _component.tagName)('span')], function (_initialize, _EmberComponent) {
    var RadioButtonComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(RadioButtonComponent, _EmberComponent2);

      function RadioButtonComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, RadioButtonComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RadioButtonComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return RadioButtonComponent;
    }(_EmberComponent);

    return {
      F: RadioButtonComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('selected', 'option')],
        key: "isSelected",
        value: function isSelected() {
          var selected = this.get('selected');
          var opt = this.get('option');

          if (!selected) {
            return false;
          }

          return opt.value === selected.value;
        }
      }]
    };
  }, Ember.Component);
  _exports.default = RadioButtonComponent;
});
;define("ember-observer/components/relative-time", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var RelativeTimeComponent = (0, _decorate2.default)([(0, _component.tagName)('time')], function (_initialize, _EmberComponent) {
    var RelativeTimeComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(RelativeTimeComponent, _EmberComponent2);

      function RelativeTimeComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, RelativeTimeComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RelativeTimeComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return RelativeTimeComponent;
    }(_EmberComponent);

    return {
      F: RelativeTimeComponent,
      d: [{
        kind: "field",
        key: "date",
        value: function value() {
          return null;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date'), (0, _component.attribute)('title')],
        key: "isoDate",
        value: function isoDate() {
          var date = this.get('date');
          return date ? date.toISOString() : null;
        }
      }]
    };
  }, Ember.Component);
  _exports.default = RelativeTimeComponent;
});
;define("ember-observer/components/route-index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var RouteIndexComponent =
  /*#__PURE__*/
  function (_EmberComponent) {
    (0, _inherits2.default)(RouteIndexComponent, _EmberComponent);

    function RouteIndexComponent() {
      (0, _classCallCheck2.default)(this, RouteIndexComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RouteIndexComponent).apply(this, arguments));
    }

    return RouteIndexComponent;
  }(Ember.Component);

  _exports.default = RouteIndexComponent;
});
;define("ember-observer/components/score-detail", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ScoreDetailComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var ScoreDetailComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(ScoreDetailComponent, _EmberComponent2);

      function ScoreDetailComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ScoreDetailComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ScoreDetailComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ScoreDetailComponent;
    }(_EmberComponent);

    return {
      F: ScoreDetailComponent,
      d: [{
        kind: "field",
        key: "showExplanation",
        value: function value() {
          return false;
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "toggleExplainScore",
        value: function toggleExplainScore() {
          this.toggleProperty('showExplanation');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = ScoreDetailComponent;
});
;define("ember-observer/components/score-display", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ScoreDisplayComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var ScoreDisplayComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(ScoreDisplayComponent, _EmberComponent2);

      function ScoreDisplayComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ScoreDisplayComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ScoreDisplayComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ScoreDisplayComponent;
    }(_EmberComponent);

    return {
      F: ScoreDisplayComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('addon.score')],
        key: "hasNumericScore",
        value: function hasNumericScore() {
          var score = this.get('addon.score');
          return typeof score === 'number';
        }
      }]
    };
  }, Ember.Component);
  _exports.default = ScoreDisplayComponent;
});
;define("ember-observer/components/search-result-set", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SearchResultSetComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var SearchResultSetComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(SearchResultSetComponent, _EmberComponent2);

      function SearchResultSetComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SearchResultSetComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SearchResultSetComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SearchResultSetComponent;
    }(_EmberComponent);

    return {
      F: SearchResultSetComponent,
      d: [{
        kind: "field",
        key: "resultsCollapsed",
        value: function value() {
          return false;
        }
      }, {
        kind: "method",
        key: "toggleResultsExpansion",
        value: function toggleResultsExpansion() {
          this.toggleProperty('resultsCollapsed');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = SearchResultSetComponent;
});
;define("ember-observer/components/sort-option", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SortOptionComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var SortOptionComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(SortOptionComponent, _EmberComponent2);

      function SortOptionComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SortOptionComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SortOptionComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SortOptionComponent;
    }(_EmberComponent);

    return {
      F: SortOptionComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('selectedSort', 'key')],
        key: "isSelected",
        value: function isSelected() {
          return this.get('selectedSort') === this.get('key');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "sortBy",
        value: function sortBy(key) {
          this.sendAction('sortBy', key);
        }
      }]
    };
  }, Ember.Component);
  _exports.default = SortOptionComponent;
});
;define("ember-observer/components/sort-order-option", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SortOrderOptionComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var SortOrderOptionComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(SortOrderOptionComponent, _EmberComponent2);

      function SortOrderOptionComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SortOrderOptionComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SortOrderOptionComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SortOrderOptionComponent;
    }(_EmberComponent);

    return {
      F: SortOrderOptionComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = SortOrderOptionComponent;
});
;define("ember-observer/components/stats-bar", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var StatsBarComponent = (0, _decorate2.default)(null, function (_initialize, _EmberComponent) {
    var StatsBarComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(StatsBarComponent, _EmberComponent2);

      function StatsBarComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, StatsBarComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StatsBarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return StatsBarComponent;
    }(_EmberComponent);

    return {
      F: StatsBarComponent,
      d: [{
        kind: "field",
        key: "showBadgeText",
        value: function value() {
          return false;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('addon.license')],
        key: "licenseUrl",
        value: function licenseUrl() {
          return "https://spdx.org/licenses/".concat(this.get('addon.license'));
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('addon.name')],
        key: "installCommandText",
        value: function installCommandText() {
          return "ember install ".concat(this.get('addon.name'));
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "toggleBadgeText",
        value: function toggleBadgeText() {
          this.toggleProperty('showBadgeText');
        }
      }]
    };
  }, Ember.Component);
  _exports.default = StatsBarComponent;
});
;define("ember-observer/components/svg-icon", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SvgIconComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var SvgIconComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(SvgIconComponent, _EmberComponent2);

      function SvgIconComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SvgIconComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SvgIconComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SvgIconComponent;
    }(_EmberComponent);

    return {
      F: SvgIconComponent,
      d: [{
        kind: "field",
        static: true,
        key: "positionalParams",
        value: function value() {
          return ['iconName'];
        }
      }, {
        kind: "field",
        key: "alignBaseline",
        value: function value() {
          return true;
        }
      }]
    };
  }, Ember.Component);
  _exports.default = SvgIconComponent;
});
;define("ember-observer/components/svg-icons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SvgIconsComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var SvgIconsComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(SvgIconsComponent, _EmberComponent2);

      function SvgIconsComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SvgIconsComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SvgIconsComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SvgIconsComponent;
    }(_EmberComponent);

    return {
      F: SvgIconsComponent,
      d: []
    };
  }, Ember.Component);
  _exports.default = SvgIconsComponent;
});
;define("ember-observer/components/test-result-status", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var TestResultStatusComponent = (0, _decorate2.default)([(0, _component.classNames)('test-result-status')], function (_initialize, _EmberComponent) {
    var TestResultStatusComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(TestResultStatusComponent, _EmberComponent2);

      function TestResultStatusComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, TestResultStatusComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TestResultStatusComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return TestResultStatusComponent;
    }(_EmberComponent);

    return {
      F: TestResultStatusComponent,
      d: [{
        kind: "get",
        decorators: [Ember.computed('testResult.succeeded', 'testResult.emberVersionCompatibilities.firstObject.compatible')],
        key: "statusText",
        value: function statusText() {
          if (this.get('testResult.succeeded')) {
            if (this.get('testResult.emberVersionCompatibilities.firstObject.compatible')) {
              return 'Passed';
            } else {
              return 'Failed';
            }
          } else {
            return 'Error';
          }
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('testResult.succeeded', 'testResult.statusMessage')],
        key: "statusDetail",
        value: function statusDetail() {
          if (!this.get('testResult.succeeded')) {
            return this.get('testResult.statusMessage') || 'unknown';
          }
        }
      }]
    };
  }, Ember.Component);
  _exports.default = TestResultStatusComponent;
});
;define("ember-observer/components/toggle-switch", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/component"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ToggleSwitchComponent = (0, _decorate2.default)([(0, _component.tagName)('')], function (_initialize, _EmberComponent) {
    var ToggleSwitchComponent =
    /*#__PURE__*/
    function (_EmberComponent2) {
      (0, _inherits2.default)(ToggleSwitchComponent, _EmberComponent2);

      function ToggleSwitchComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ToggleSwitchComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ToggleSwitchComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ToggleSwitchComponent;
    }(_EmberComponent);

    return {
      F: ToggleSwitchComponent,
      d: [{
        kind: "field",
        key: "label",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "onToggle",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "isChecked",
        value: function value() {
          return null;
        }
      }]
    };
  }, Ember.Component);
  _exports.default = ToggleSwitchComponent;
});
;define("ember-observer/components/x-option", ["exports", "emberx-select/components/x-option"], function (_exports, _xOption) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _xOption.default;
  _exports.default = _default;
});
;define("ember-observer/components/x-select", ["exports", "emberx-select/components/x-select"], function (_exports, _xSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _xSelect.default;
  _exports.default = _default;
});
;define("ember-observer/controllers/addons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(AddonsController, _EmberController);

    function AddonsController() {
      (0, _classCallCheck2.default)(this, AddonsController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsController).apply(this, arguments));
    }

    return AddonsController;
  }(Ember.Controller);

  _exports.default = AddonsController;
});
;define("ember-observer/controllers/addons/correct", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var CorrectController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var CorrectController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(CorrectController, _EmberController2);

      function CorrectController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CorrectController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CorrectController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CorrectController;
    }(_EmberController);

    return {
      F: CorrectController,
      d: [{
        kind: "method",
        decorators: [_object.action],
        key: "submitCorrection",
        value: function submitCorrection() {
          var controller = this;
          Ember.$.post('/api/v2/corrections', {
            name: this.get('name'),
            email: this.get('email'),
            addon: this.get('model.name'),
            correction: this.get('correction')
          }).done(function () {
            controller.transitionToRoute('addons.show', controller.get('model.name'));
          });
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "cancel",
        value: function cancel() {
          this.transitionToRoute('addons.show', this.get('model.name'));
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = CorrectController;
});
;define("ember-observer/controllers/addons/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "moment"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var ShowController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(ShowController, _EmberController2);

      function ShowController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowController;
    }(_EmberController);

    return {
      F: ShowController,
      d: [{
        kind: "field",
        decorators: [Ember.computed.alias('model.addon')],
        key: "addon",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('addon.latestReview')],
        key: "latestReview",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('addon.versions')],
        key: "sortedAddonVersions",
        value: function sortedAddonVersions() {
          return (this.get('addon.versions') || []).sortBy('released').reverse();
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('addon.latestAddonVersion')],
        key: "latestVersion",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('latestVersion.released')],
        key: "isLatestReleaseInLast3Months",
        value: function isLatestReleaseInLast3Months() {
          if (!this.get('latestVersion.released')) {
            return false;
          }

          var threeMonthsAgo = (0, _moment.default)().subtract(3, 'months');
          return (0, _moment.default)(this.get('latestVersion.released')).isAfter(threeMonthsAgo);
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('latestReview.version.version', 'latestVersion.version')],
        key: "isLatestReviewForLatestVersion",
        value: function isLatestReviewForLatestVersion() {
          return this.get('latestReview.version.version') === this.get('latestVersion.version');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('model.latestTestResult.version', 'latestVersion')],
        key: "isTestResultForLatestVersion",
        value: function isTestResultForLatestVersion() {
          return this.get('model.latestTestResult.version.version') === this.get('latestVersion.version');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('addon.hasInvalidGithubRepo', 'addon.githubStats.firstCommitDate')],
        key: "hasGithubData",
        value: function hasGithubData() {
          return !this.get('addon.hasInvalidGithubRepo') && this.get('addon.githubStats.firstCommitDate');
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = ShowController;
});
;define("ember-observer/controllers/admin/build-results/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "moment"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var IndexController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var IndexController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(IndexController, _EmberController2);

      function IndexController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, IndexController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IndexController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return IndexController;
    }(_EmberController);

    return {
      F: IndexController,
      d: [{
        kind: "field",
        key: "queryParams",
        value: function value() {
          return ['date'];
        }
      }, {
        kind: "field",
        key: "buildResultSorting",
        value: function value() {
          return ['testsRunAt:desc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('model', 'buildResultSorting')],
        key: "sortedBuildResults",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedDisplayDate",
        value: function formattedDisplayDate() {
          return (0, _moment.default)(this.get('date')).utc().format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedPreviousDate",
        value: function formattedPreviousDate() {
          var date = this.get('date');
          return (0, _moment.default)(date).subtract(1, 'day').format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedFollowingDate",
        value: function formattedFollowingDate() {
          var date = this.get('date');
          return (0, _moment.default)(date).add(1, 'day').format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "showFollowingDayLink",
        value: function showFollowingDayLink() {
          var dateFromParam = (0, _moment.default)(this.get('date'));
          var currentDate = (0, _moment.default)();
          return !dateFromParam.isSame(currentDate, 'day');
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = IndexController;
});
;define("ember-observer/controllers/admin/build-results/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var ShowController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(ShowController, _EmberController2);

      function ShowController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowController;
    }(_EmberController);

    return {
      F: ShowController,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service('apiAjax')],
        key: "ajax",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('model')],
        key: "buildResult",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('buildResult.version')],
        key: "addonVersion",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('addonVersion.addon')],
        key: "addon",
        value: void 0
      }, {
        kind: "field",
        key: "hasRetriedBuild",
        value: function value() {
          return false;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('buildResult.succeeded', 'buildResult.statusMessage')],
        key: "buildStatus",
        value: function buildStatus() {
          if (this.get('buildResult.succeeded')) {
            return 'succeeded';
          }

          return this.get('buildResult.statusMessage');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('buildResult.succeeded', 'hasRetriedBuild')],
        key: "canRetryBuild",
        value: function canRetryBuild() {
          return !this.get('buildResult.succeeded') && !this.get('hasRetriedBuild');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "retryBuild",
        value: function retryBuild() {
          var _this2 = this;

          this.set('hasRetriedBuild', true);
          this.get('ajax').post("test_results/".concat(this.get('buildResult.id'), "/retry")).catch(function () {
            return _this2.get('hasRetriedBuild', false);
          });
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = ShowController;
});
;define("ember-observer/controllers/admin/build-servers", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var BuildServersController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var BuildServersController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(BuildServersController, _EmberController2);

      function BuildServersController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, BuildServersController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BuildServersController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return BuildServersController;
    }(_EmberController);

    return {
      F: BuildServersController,
      d: [{
        kind: "field",
        key: "newBuildServerName",
        value: function value() {
          return '';
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "addBuildServer",
        value: function addBuildServer() {
          this.store.createRecord('build-server', {
            name: this.get('newBuildServerName')
          }).save();
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = BuildServersController;
});
;define("ember-observer/controllers/admin/categories/edit", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var EditController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var EditController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(EditController, _EmberController2);

      function EditController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EditController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EditController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return EditController;
    }(_EmberController);

    return {
      F: EditController,
      d: [{
        kind: "field",
        key: "categoryNameSorting",
        value: function value() {
          return ['name:asc'];
        }
      }, {
        kind: "field",
        key: "categoryPositionSorting",
        value: function value() {
          return ['position:asc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('model.categories')],
        key: "categories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('model.category')],
        key: "category",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.oneWay('category.description')],
        key: "categoryDescription",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.oneWay('category.name')],
        key: "categoryName",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.oneWay('category.parent.id')],
        key: "categoryParent",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.oneWay('category.position')],
        key: "categoryPosition",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('category.subcategories', 'categoryPositionSorting')],
        key: "subcategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.filter('categories', function (item) {
          return item.get('parent.id') === this.get('category.parent.id');
        })],
        key: "siblingCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('siblingCategories', 'categoryPositionSorting')],
        key: "sortedSiblingCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.gt('siblingCategories.length', 1)],
        key: "hasSiblingCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.empty('category.parent')],
        key: "isTopLevelCategory",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.filterBy('categories', 'parent', null)],
        key: "topLevelCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('topLevelCategories', 'categoryNameSorting')],
        key: "alphabeticTopLevelCategories",
        value: void 0
      }, {
        kind: "field",
        key: "newCategoryName",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "newCategoryDescription",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "newCategoryPosition",
        value: function value() {
          return -1;
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "addSubcategory",
        value: function addSubcategory() {
          var _this2 = this;

          var newCategory = this.get('store').createRecord('category', {
            name: this.get('newCategoryName'),
            description: this.get('newCategoryDescription'),
            position: this.get('newCategoryPosition'),
            parent: this.get('category')
          });
          newCategory.save().then(function () {
            _this2.transitionToRoute('admin.categories.index');
          }).catch(function (message) {
            newCategory.deleteRecord();
            alert(message);
          });
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "updateCategory",
        value: function updateCategory() {
          var _this3 = this;

          var category = this.get('category');
          var parentId = this.get('categoryParent');
          var position = this.get('categoryPosition');

          if (parentId === category.get('id')) {
            alert("You can't make a category a subcategory of itself");
            return;
          }

          if (parentId != category.get('parent.id')) {
            // when changing a category's parent, always put it at the end of the list
            position = -1;
          }

          category.set('name', this.get('categoryName'));
          category.set('description', this.get('categoryDescription'));
          category.set('position', position);
          var findPromise;

          if (parentId) {
            findPromise = this.get('store').find('category', parentId);
          } else {
            findPromise = new Ember.RSVP.Promise(function (resolve) {
              return resolve(null);
            });
          }

          findPromise.then(function (parentCategory) {
            category.set('parent', parentCategory);
            return category.save();
          }).then(function () {
            _this3.transitionToRoute('admin.categories.index');
          }).catch(function (message) {
            category.rollbackAttributes();
            alert(message);
          });
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = EditController;
});
;define("ember-observer/controllers/admin/categories/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var IndexController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var IndexController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(IndexController, _EmberController2);

      function IndexController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, IndexController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IndexController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return IndexController;
    }(_EmberController);

    return {
      F: IndexController,
      d: [{
        kind: "field",
        key: "categorySorting",
        value: function value() {
          return ['position:desc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.filterBy('model', 'parent', null)],
        key: "unsortedTopLevelCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('unsortedTopLevelCategories', 'categorySorting')],
        key: "topLevelCategories",
        value: void 0
      }]
    };
  }, Ember.Controller);
  _exports.default = IndexController;
});
;define("ember-observer/controllers/admin/categories/new", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var NewController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var NewController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(NewController, _EmberController2);

      function NewController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, NewController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NewController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return NewController;
    }(_EmberController);

    return {
      F: NewController,
      d: [{
        kind: "field",
        key: "newCategoryName",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "newCategoryDescription",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "newCategoryPosition",
        value: function value() {
          return '';
        }
      }, {
        kind: "field",
        key: "categorySorting",
        value: function value() {
          return ['position:asc'];
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.filterBy('model.categories', 'parent', null)],
        key: "topLevelCategories",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('topLevelCategories', 'categorySorting')],
        key: "sortedTopLevelCategories",
        value: void 0
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "addCategory",
        value: function addCategory() {
          var _this2 = this;

          var newCategory = this.get('store').createRecord('category', {
            name: this.get('newCategoryName'),
            description: this.get('newCategoryDescription'),
            position: this.get('newCategoryPosition')
          });
          newCategory.save().then(function () {
            _this2.transitionToRoute('admin.categories.index');
          }).catch(function (message) {
            newCategory.deleteRecord();
            alert(message);
          });
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = NewController;
});
;define("ember-observer/controllers/admin/review", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-observer/services/admin-lists"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _adminLists) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var possibleLists = Object.keys(_adminLists.lists).map(function (key) {
    return {
      title: _adminLists.lists[key].title,
      key: key
    };
  });
  var ReviewController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var ReviewController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(ReviewController, _EmberController2);

      function ReviewController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ReviewController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ReviewController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ReviewController;
    }(_EmberController);

    return {
      F: ReviewController,
      d: [{
        kind: "field",
        key: "queryParams",
        value: function value() {
          return ['list'];
        }
      }, {
        kind: "field",
        key: "list",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "adminLists",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "router",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.readOnly('adminLists.find.lastSuccessful.value.addons')],
        key: "addons",
        value: void 0
      }, {
        kind: "field",
        key: "possibleLists",
        value: function value() {
          return possibleLists;
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.oneWay('model.key')],
        key: "selectedListKey",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('selectedListKey')],
        key: "selectedList",
        value: function selectedList() {
          var _this2 = this;

          return possibleLists.find(function (l) {
            return l.key === _this2.get('selectedListKey');
          });
        }
      }, {
        kind: "method",
        key: "selectList",
        value: function selectList(list) {
          this.set('selectedListKey', list.key);
          this.get('router').transitionTo('admin.review', {
            queryParams: {
              list: list.key
            }
          });
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = ReviewController;
});
;define("ember-observer/controllers/application", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ApplicationController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(ApplicationController, _EmberController);

    function ApplicationController() {
      (0, _classCallCheck2.default)(this, ApplicationController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ApplicationController).apply(this, arguments));
    }

    return ApplicationController;
  }(Ember.Controller);

  _exports.default = ApplicationController;
});
;define("ember-observer/controllers/canary-test-results/date", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "moment"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DateController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var DateController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(DateController, _EmberController2);

      function DateController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, DateController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DateController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return DateController;
    }(_EmberController);

    return {
      F: DateController,
      d: [{
        kind: "field",
        decorators: [Ember.computed.alias('model.date')],
        key: "date",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedDisplayDate",
        value: function formattedDisplayDate() {
          return (0, _moment.default)(this.get('date')).utc().format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedPreviousDate",
        value: function formattedPreviousDate() {
          var date = this.get('date');
          return (0, _moment.default)(date).subtract(1, 'day').format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "formattedFollowingDate",
        value: function formattedFollowingDate() {
          var date = this.get('date');
          return (0, _moment.default)(date).add(1, 'day').format('YYYY-MM-DD');
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('date')],
        key: "showFollowingDayLink",
        value: function showFollowingDayLink() {
          var dateFromParam = (0, _moment.default)(this.get('date'));
          var currentDate = (0, _moment.default)();
          return !dateFromParam.isSame(currentDate, 'day');
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = DateController;
});
;define("ember-observer/controllers/canary-test-results/detail", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var DetailController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var DetailController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(DetailController, _EmberController2);

      function DetailController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, DetailController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DetailController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return DetailController;
    }(_EmberController);

    return {
      F: DetailController,
      d: [{
        kind: "field",
        decorators: [Ember.computed.alias('model')],
        key: "testResult",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('testResult.version')],
        key: "addonVersion",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('addonVersion.addon')],
        key: "addon",
        value: void 0
      }]
    };
  }, Ember.Controller);
  _exports.default = DetailController;
});
;define("ember-observer/controllers/categories", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CategoriesController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(CategoriesController, _EmberController);

    function CategoriesController() {
      (0, _classCallCheck2.default)(this, CategoriesController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CategoriesController).apply(this, arguments));
    }

    return CategoriesController;
  }(Ember.Controller);

  _exports.default = CategoriesController;
});
;define("ember-observer/controllers/categories/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowController = (0, _decorate2.default)(null, function (_initialize, _EmberController) {
    var ShowController =
    /*#__PURE__*/
    function (_EmberController2) {
      (0, _inherits2.default)(ShowController, _EmberController2);

      function ShowController() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowController);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowController)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowController;
    }(_EmberController);

    return {
      F: ShowController,
      d: [{
        kind: "field",
        key: "queryParams",
        value: function value() {
          return {
            addonSortKey: 'sort'
          };
        }
      }, {
        kind: "field",
        key: "addonSortKey",
        value: function value() {
          return 'score';
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('model.category')],
        key: "category",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.alias('model.addons')],
        key: "addons",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.computed.sort('addons', 'addonSorting')],
        key: "sortedAddons",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('category.subcategories')],
        key: "hasSubcategories",
        value: function hasSubcategories() {
          return this.get('category.subcategories.length') > 0;
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('addonSortKey')],
        key: "addonSorting",
        value: function addonSorting() {
          var sortKeyMapping = {
            latestVersionDate: ['latestVersionDate:desc'],
            name: ['name:asc'],
            score: ['isDeprecated:asc', 'score:desc']
          };
          var sortKey = sortKeyMapping[this.get('addonSortKey')] || sortKeyMapping.score;
          return sortKey;
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "sortBy",
        value: function sortBy(key) {
          this.set('addonSortKey', key);
        }
      }]
    };
  }, Ember.Controller);
  _exports.default = ShowController;
});
;define("ember-observer/controllers/code-search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CodeSearchController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(CodeSearchController, _EmberController);

    function CodeSearchController() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, CodeSearchController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CodeSearchController)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.queryParams = ['codeQuery', 'sort', 'sortAscending', 'regex', 'fileFilter'];
      _this.codeQuery = '';
      _this.sort = 'name';
      _this.sortAscending = true;
      _this.regex = false;
      _this.fileFilter = null;
      return _this;
    }

    return CodeSearchController;
  }(Ember.Controller);

  _exports.default = CodeSearchController;
});
;define("ember-observer/controllers/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "ember-observer/mixins/controller-with-search"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _controllerWithSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexController =
  /*#__PURE__*/
  function (_EmberController$ext) {
    (0, _inherits2.default)(IndexController, _EmberController$ext);

    function IndexController() {
      (0, _classCallCheck2.default)(this, IndexController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IndexController).apply(this, arguments));
    }

    return IndexController;
  }(Ember.Controller.extend(_controllerWithSearch.default));

  _exports.default = IndexController;
});
;define("ember-observer/controllers/lists", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ListsController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(ListsController, _EmberController);

    function ListsController() {
      (0, _classCallCheck2.default)(this, ListsController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListsController).apply(this, arguments));
    }

    return ListsController;
  }(Ember.Controller);

  _exports.default = ListsController;
});
;define("ember-observer/controllers/maintainers", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var MaintainersController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(MaintainersController, _EmberController);

    function MaintainersController() {
      (0, _classCallCheck2.default)(this, MaintainersController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaintainersController).apply(this, arguments));
    }

    return MaintainersController;
  }(Ember.Controller);

  _exports.default = MaintainersController;
});
;define("ember-observer/controllers/model-not-found", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ModelNotFoundController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(ModelNotFoundController, _EmberController);

    function ModelNotFoundController() {
      (0, _classCallCheck2.default)(this, ModelNotFoundController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModelNotFoundController).apply(this, arguments));
    }

    return ModelNotFoundController;
  }(Ember.Controller);

  _exports.default = ModelNotFoundController;
});
;define("ember-observer/controllers/not-found", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var NotFoundController =
  /*#__PURE__*/
  function (_EmberController) {
    (0, _inherits2.default)(NotFoundController, _EmberController);

    function NotFoundController() {
      (0, _classCallCheck2.default)(this, NotFoundController);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NotFoundController).apply(this, arguments));
    }

    return NotFoundController;
  }(Ember.Controller);

  _exports.default = NotFoundController;
});
;define("ember-observer/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function get() {
      return _and.and;
    }
  });
});
;define("ember-observer/helpers/app-version", ["exports", "ember-observer/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-observer/helpers/badge-path", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.badgePath = badgePath;
  _exports.default = void 0;

  function badgePath(_ref
  /*, hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        addonName = _ref2[0];

    var safeName = addonName.replace(/[^A-Za-z0-9]/g, '-');
    return "/badges/".concat(safeName, ".svg");
  }

  var _default = Ember.Helper.helper(badgePath);

  _exports.default = _default;
});
;define("ember-observer/helpers/canary-version", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function canaryVersion(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        testResult = _ref2[0];

    var version = testResult.get('emberVersionCompatibilities.firstObject.emberVersion');

    if (!version) {
      return 'an unknown version';
    }

    var matches = version.match(/-(null|canary)\+(.+)$/);

    if (matches && matches.length > 0) {
      return matches[2];
    }

    return 'an unknown version';
  });

  _exports.default = _default;
});
;define("ember-observer/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
});
;define("ember-observer/helpers/clean-repo-url", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cleanRepoUrl = cleanRepoUrl;
  _exports.default = void 0;

  function cleanRepoUrl(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        repoUrl = _ref2[0];

    return (repoUrl || '').replace(/\.git$/, '');
  }

  var _default = Ember.Helper.helper(cleanRepoUrl);

  _exports.default = _default;
});
;define("ember-observer/helpers/commify", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.commify = commify;
  _exports.default = void 0;

  function commify(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        number = _ref2[0];

    if (!number) {
      return '0';
    }

    return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  var _default = Ember.Helper.helper(commify);

  _exports.default = _default;
});
;define("ember-observer/helpers/dom-purify", ["exports", "@babel/runtime/helpers/esm/slicedToArray", "dom-purify"], function (_exports, _slicedToArray2, _domPurify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.domPurify = domPurify;
  _exports.default = void 0;
  var config = {
    ALLOWED_TAGS: ['#text', 'a', 'b', 'blockquote', 'br', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'dl', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'img', 'li', 'ol', 'p', 'pre', 'q', 'small', 'strike', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul', 'span'],
    ALLOWED_ATTR: ['class', 'href', 'title', 'span', 'width', 'cite', 'align', 'alt', 'height', 'src', 'title', 'type', 'abbr', 'axis', 'colspan', 'rowspan', 'scope'],
    KEEP_CONTENT: false
  };

  function domPurify(_ref
  /* , hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        content = _ref2[0];

    var DOMPurify = (0, _domPurify.default)(window);
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
      if (node instanceof HTMLAnchorElement) {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener nofollow');
      }
    });
    return Ember.String.htmlSafe(DOMPurify.sanitize(content, config));
  }

  var _default = Ember.Helper.helper(domPurify);

  _exports.default = _default;
});
;define("ember-observer/helpers/ember-power-select-is-group", ["exports", "ember-power-select/helpers/ember-power-select-is-group"], function (_exports, _emberPowerSelectIsGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsGroup", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define("ember-observer/helpers/ember-power-select-is-selected", ["exports", "ember-power-select/helpers/ember-power-select-is-selected"], function (_exports, _emberPowerSelectIsSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectIsSelected", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define("ember-observer/helpers/ember-power-select-true-string-if-present", ["exports", "ember-power-select/helpers/ember-power-select-true-string-if-present"], function (_exports, _emberPowerSelectTrueStringIfPresent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(_exports, "emberPowerSelectTrueStringIfPresent", {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define("ember-observer/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function get() {
      return _equal.equal;
    }
  });
});
;define("ember-observer/helpers/feature-flag", ["exports", "ember-feature-flags/helpers/feature-flag"], function (_exports, _featureFlag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _featureFlag.default;
    }
  });
});
;define("ember-observer/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function get() {
      return _gt.gt;
    }
  });
});
;define("ember-observer/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function get() {
      return _gte.gte;
    }
  });
});
;define("ember-observer/helpers/includes", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.includes = includes;
  _exports.default = void 0;

  function includes(_ref
  /*, hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        arr = _ref2[0],
        item = _ref2[1];

    return (arr || []).includes(item);
  }

  var _default = Ember.Helper.helper(includes);

  _exports.default = _default;
});
;define("ember-observer/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isAfter.default;
    }
  });
});
;define("ember-observer/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function get() {
      return _isArray.isArray;
    }
  });
});
;define("ember-observer/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isBefore.default;
    }
  });
});
;define("ember-observer/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isBetween.default;
    }
  });
});
;define("ember-observer/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isEmpty.default;
    }
  });
});
;define("ember-observer/helpers/is-equal", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isEqual = isEqual;
  _exports.default = void 0;

  function isEqual(params) {
    return params[0] === params[1];
  }

  var _default = Ember.Helper.helper(isEqual);

  _exports.default = _default;
});
;define("ember-observer/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSameOrAfter.default;
    }
  });
});
;define("ember-observer/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSameOrBefore.default;
    }
  });
});
;define("ember-observer/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isSame.default;
    }
  });
});
;define("ember-observer/helpers/less-than", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.lessThan = lessThan;
  _exports.default = void 0;

  function lessThan(_ref
  /* , hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        a = _ref2[0],
        b = _ref2[1];

    return a < b;
  }

  var _default = Ember.Helper.helper(lessThan);

  _exports.default = _default;
});
;define("ember-observer/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function get() {
      return _lt.lt;
    }
  });
});
;define("ember-observer/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function get() {
      return _lte.lte;
    }
  });
});
;define("ember-observer/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentAdd.default;
    }
  });
});
;define("ember-observer/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentCalendar.default;
    }
  });
});
;define("ember-observer/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentDiff.default;
    }
  });
});
;define("ember-observer/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentDuration.default;
    }
  });
});
;define("ember-observer/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFormat.default;
    }
  });
});
;define("ember-observer/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFromNow.default;
    }
  });
});
;define("ember-observer/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentFrom.default;
    }
  });
});
;define("ember-observer/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentSubtract.default;
    }
  });
});
;define("ember-observer/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentToDate.default;
    }
  });
});
;define("ember-observer/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentToNow.default;
    }
  });
});
;define("ember-observer/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _momentTo.default;
    }
  });
});
;define("ember-observer/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _unix.default;
    }
  });
});
;define("ember-observer/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _moment.default;
    }
  });
});
;define("ember-observer/helpers/next-item", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.nextItem = nextItem;
  _exports.default = void 0;

  function nextItem(_ref
  /*, hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        arr = _ref2[0],
        item = _ref2[1];

    var ind = (arr || []).indexOf(item);

    if (ind >= 0 && ind < arr.get('length') - 1) {
      return arr.objectAt(ind + 1);
    }
  }

  var _default = Ember.Helper.helper(nextItem);

  _exports.default = _default;
});
;define("ember-observer/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function get() {
      return _notEqual.notEq;
    }
  });
});
;define("ember-observer/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function get() {
      return _not.not;
    }
  });
});
;define("ember-observer/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _now.default;
    }
  });
});
;define("ember-observer/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function get() {
      return _or.or;
    }
  });
});
;define("ember-observer/helpers/pad-end", ["exports", "ember-pad/helpers/pad-end"], function (_exports, _padEnd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _padEnd.default;
    }
  });
  Object.defineProperty(_exports, "padEnd", {
    enumerable: true,
    get: function get() {
      return _padEnd.padEnd;
    }
  });
});
;define("ember-observer/helpers/pad-line-number", ["exports", "@babel/runtime/helpers/esm/slicedToArray", "ember-pad/utils/pad"], function (_exports, _slicedToArray2, _pad) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.padLineNumber = padLineNumber;
  _exports.default = void 0;

  function padLineNumber(params
  /* , hash*/
  ) {
    var _params = (0, _slicedToArray2.default)(params, 1),
        numberToPad = _params[0];

    var maxLineNumber = params[1].mapBy('number').pop();
    return (0, _pad.padEnd)(numberToPad.toString(), maxLineNumber.toString().length, ' ');
  }

  var _default = Ember.Helper.helper(padLineNumber);

  _exports.default = _default;
});
;define("ember-observer/helpers/pad-start", ["exports", "ember-pad/helpers/pad-start"], function (_exports, _padStart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _padStart.default;
    }
  });
  Object.defineProperty(_exports, "padStart", {
    enumerable: true,
    get: function get() {
      return _padStart.padStart;
    }
  });
});
;define("ember-observer/helpers/pad", ["exports", "ember-pad/helpers/pad"], function (_exports, _pad) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pad.default;
    }
  });
  Object.defineProperty(_exports, "pad", {
    enumerable: true,
    get: function get() {
      return _pad.pad;
    }
  });
});
;define("ember-observer/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
});
;define("ember-observer/helpers/pluralize-this", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.pluralizeThis = pluralizeThis;
  _exports.default = void 0;

  function pluralizeThis(_ref
  /* , hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 3),
        count = _ref2[0],
        singular = _ref2[1],
        plural = _ref2[2];

    var pluralized = plural || "".concat(singular, "s");

    if (count === 1) {
      return "1 ".concat(singular);
    }

    return "".concat(count, " ").concat(pluralized);
  }

  var _default = Ember.Helper.helper(pluralizeThis);

  _exports.default = _default;
});
;define("ember-observer/helpers/pluralize", ["exports", "@babel/runtime/helpers/esm/slicedToArray", "ember-inflector"], function (_exports, _slicedToArray2, _emberInflector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function pluralizeHelper(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        count = _ref2[0],
        singular = _ref2[1];

    if (count > 1) {
      return (0, _emberInflector.pluralize)(singular);
    }

    return singular;
  });

  _exports.default = _default;
});
;define("ember-observer/helpers/previous-item", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.previousItem = previousItem;
  _exports.default = void 0;

  function previousItem(_ref
  /*, hash*/
  ) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        arr = _ref2[0],
        item = _ref2[1];

    var ind = (arr || []).indexOf(item);

    if (ind > 0) {
      return arr.objectAt(ind - 1);
    }
  }

  var _default = Ember.Helper.helper(previousItem);

  _exports.default = _default;
});
;define("ember-observer/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-observer/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
});
;define("ember-observer/helpers/test-result-status-class", ["exports", "@babel/runtime/helpers/esm/slicedToArray"], function (_exports, _slicedToArray2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function testResultStatusClass(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        testResult = _ref2[0];

    if (testResult.get('succeeded')) {
      if (testResult.get('emberVersionCompatibilities.firstObject.compatible')) {
        return 'passed';
      } else {
        return 'failed';
      }
    } else {
      return 'error';
    }
  });

  _exports.default = _default;
});
;define("ember-observer/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _unix.default;
    }
  });
});
;define("ember-observer/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function get() {
      return _utc.utc;
    }
  });
});
;define("ember-observer/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function get() {
      return _xor.xor;
    }
  });
});
;define("ember-observer/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-observer/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/ember-cli-mirage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-cli-mirage',
    initialize: function initialize() {}
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberConcurrency.default;
    }
  });
});
;define("ember-observer/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/export-application-global", ["exports", "ember-observer/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/inflections", ["exports", "ember-inflector"], function (_exports, _emberInflector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* application */
  {
    _emberInflector.default.inflector.uncountable('github-stats');
  }

  var _default = {
    name: 'inflections',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/metrics", ["exports", "ember-observer/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$metricsAdapte = _environment.default.metricsAdapters,
        metricsAdapters = _config$metricsAdapte === void 0 ? [] : _config$metricsAdapte;
    var _config$environment = _environment.default.environment,
        environment = _config$environment === void 0 ? 'development' : _config$environment;
    var options = {
      metricsAdapters: metricsAdapters,
      environment: environment
    };
    application.register('config:metrics', options, {
      instantiate: false
    });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  var _default = {
    name: 'metrics',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-observer/initializers/session-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize(application) {
    application.inject('adapter', 'session', 'service:session');
    application.inject('route', 'session', 'service:session');
    application.inject('controller', 'session', 'service:session');
  }

  var _default = {
    name: 'session-service',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-observer/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-observer/locations/router-scroll", ["exports", "ember-router-scroll/locations/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _routerScroll.default;
    }
  });
});
;define("ember-observer/metrics-adapters/local-adapter", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "ember-metrics/metrics-adapters/base"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _base) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var LocalAdapterEmberObject =
  /*#__PURE__*/
  function (_BaseAdapter) {
    (0, _inherits2.default)(LocalAdapterEmberObject, _BaseAdapter);

    function LocalAdapterEmberObject() {
      (0, _classCallCheck2.default)(this, LocalAdapterEmberObject);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LocalAdapterEmberObject).apply(this, arguments));
    }

    (0, _createClass2.default)(LocalAdapterEmberObject, [{
      key: "toStringExtension",
      value: function toStringExtension() {
        return 'LocalAdapter';
      }
    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "identify",
      value: function identify() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('Metrics:', 'identify', options); // eslint-disable-line no-console
      }
    }, {
      key: "trackEvent",
      value: function trackEvent() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('Metrics:', 'trackEvent', options); // eslint-disable-line no-console
      }
    }, {
      key: "trackPage",
      value: function trackPage() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('Metrics:', 'trackPage', options); // eslint-disable-line no-console
      }
    }, {
      key: "alias",
      value: function alias() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        console.log('Metrics:', 'alias', options); // eslint-disable-line no-console
      }
    }]);
    return LocalAdapterEmberObject;
  }(_base.default);

  _exports.default = LocalAdapterEmberObject;
});
;define("ember-observer/mixins/controller-with-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    queryParams: ['query', 'searchReadmes'],
    query: '',
    searchReadmes: false
  });

  _exports.default = _default;
});
;define("ember-observer/mixins/route-with-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Mixin.create({
    queryParams: {
      query: {
        replace: true
      },
      searchReadmes: {
        replace: true
      }
    }
  });

  _exports.default = _default;
});
;define("ember-observer/models/addon", ["exports", "ember-data/model", "ember-data/attr", "ember-data/relationships", "moment"], function (_exports, _model, _attr, _relationships, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    isAddon: true,
    name: (0, _attr.default)('string'),
    description: (0, _attr.default)('string'),
    repositoryUrl: (0, _attr.default)('string'),
    latestVersionDate: (0, _attr.default)('date'),
    publishedDate: (0, _attr.default)('date'),
    license: (0, _attr.default)('string'),
    isDeprecated: (0, _attr.default)('boolean'),
    note: (0, _attr.default)('string'),
    isOfficial: (0, _attr.default)('boolean'),
    isCliDependency: (0, _attr.default)('boolean'),
    isHidden: (0, _attr.default)('boolean'),
    hasInvalidGithubRepo: (0, _attr.default)('boolean'),
    score: (0, _attr.default)('number'),
    ranking: (0, _attr.default)('number'),
    githubUsers: (0, _relationships.hasMany)('github-user'),
    lastMonthDownloads: (0, _attr.default)('number'),
    isWip: (0, _attr.default)('boolean'),
    isTopDownloaded: (0, _attr.default)('boolean'),
    isTopStarred: (0, _attr.default)('boolean'),
    demoUrl: (0, _attr.default)('string'),
    updatedAt: (0, _attr.default)('date'),
    githubStats: (0, _relationships.belongsTo)('github-stats', {
      async: true
    }),
    latestAddonVersion: (0, _relationships.belongsTo)('version', {
      async: true
    }),
    latestReview: (0, _relationships.belongsTo)('review', {
      async: true
    }),
    categories: (0, _relationships.hasMany)('category', {
      async: true
    }),
    keywords: (0, _relationships.hasMany)('keyword', {
      async: true
    }),
    versions: (0, _relationships.hasMany)('version', {
      async: true
    }),
    maintainers: (0, _relationships.hasMany)('maintainer', {
      async: true
    }),
    readme: (0, _relationships.belongsTo)('readme', {
      async: true
    }),
    hasMoreThan1Contributor: Ember.computed.gt('githubUsers.length', 1),
    npmUrl: Ember.computed('name', function () {
      return "https://www.npmjs.com/package/".concat(this.get('name'));
    }),
    isNewAddon: Ember.computed('publishedDate', function () {
      return (0, _moment.default)(this.get('publishedDate')).isAfter((0, _moment.default)().subtract(2, 'weeks'));
    })
  });

  _exports.default = _default;
});
;define("ember-observer/models/build-server", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    token: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("ember-observer/models/category", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo,
      hasMany = _emberData.default.hasMany;

  var _default = _emberData.default.Model.extend({
    name: attr('string'),
    description: attr('string'),
    position: attr('number'),
    addonCount: attr('number'),
    addons: hasMany('addon'),
    parent: belongsTo('category', {
      async: false,
      inverse: 'subcategories'
    }),
    subcategories: hasMany('category', {
      inverse: 'parent',
      async: false
    }),
    slug: Ember.computed('name', function () {
      return this.get('name').dasherize();
    }),
    displayName: Ember.computed('parent.name', 'name', function () {
      if (this.get('parent')) {
        return "".concat(this.get('parent.name'), " > ").concat(this.get('name'));
      } else {
        return this.get('name');
      }
    }),
    totalAddonCount: Ember.computed('subcategories.@each.addonCount', function () {
      return this.get('subcategories').mapBy('addonCount').reduce(function (categoryA, categoryB) {
        return categoryA + categoryB;
      }, this.get('addonCount'));
    })
  });

  _exports.default = _default;
});
;define("ember-observer/models/ember-version-compatibility", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    version: _emberData.default.belongsTo('version'),
    emberVersion: _emberData.default.attr('string'),
    compatible: _emberData.default.attr('boolean')
  });

  _exports.default = _default;
});
;define("ember-observer/models/ember-versions", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    githubResponse: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("ember-observer/models/github-stats", ["exports", "ember-data", "ember-data/attr", "ember-data/relationships"], function (_exports, _emberData, _attr, _relationships) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    stars: (0, _attr.default)('number'),
    firstCommitDate: (0, _attr.default)('date'),
    latestCommitDate: (0, _attr.default)('date'),
    forks: (0, _attr.default)('number'),
    openIssues: (0, _attr.default)('number'),
    committedToRecently: (0, _attr.default)('boolean'),
    addon: (0, _relationships.belongsTo)('addon')
  });

  _exports.default = _default;
});
;define("ember-observer/models/github-user", ["exports", "ember-data", "ember-data/attr"], function (_exports, _emberData, _attr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    name: (0, _attr.default)('string'),
    avatarUrl: (0, _attr.default)('string')
  });

  _exports.default = _default;
});
;define("ember-observer/models/keyword", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var attr = _emberData.default.attr,
      hasMany = _emberData.default.hasMany;

  var _default = _emberData.default.Model.extend({
    keyword: attr('string'),
    addons: hasMany('addon')
  });

  _exports.default = _default;
});
;define("ember-observer/models/maintainer", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var attr = _emberData.default.attr,
      hasMany = _emberData.default.hasMany;

  var _default = _emberData.default.Model.extend({
    name: attr('string'),
    gravatar: attr('string'),
    addons: hasMany('addon', {
      async: true
    })
  });

  _exports.default = _default;
});
;define("ember-observer/models/readme", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-data/model", "ember-data/attr"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _model, _attr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ReadmeEmberObject = (0, _decorate2.default)(null, function (_initialize, _Model) {
    var ReadmeEmberObject =
    /*#__PURE__*/
    function (_Model2) {
      (0, _inherits2.default)(ReadmeEmberObject, _Model2);

      function ReadmeEmberObject() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ReadmeEmberObject);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ReadmeEmberObject)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ReadmeEmberObject;
    }(_Model);

    return {
      F: ReadmeEmberObject,
      d: [{
        kind: "field",
        decorators: [(0, _attr.default)('string')],
        key: "contents",
        value: void 0
      }]
    };
  }, _model.default);
  _exports.default = ReadmeEmberObject;
});
;define("ember-observer/models/review", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.questions = void 0;
  var attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo;
  var questions = [{
    text: 'Are there meaningful tests?',
    fieldName: 'hasTests'
  }, {
    text: 'Is the README filled out?',
    fieldName: 'hasReadme'
  }, {
    text: 'Does the addon have a build?',
    fieldName: 'hasBuild'
  }];
  _exports.questions = questions;

  var _default = _emberData.default.Model.extend({
    questions: questions,
    review: attr('string'),
    createdAt: attr('date'),
    hasTests: attr('number'),
    hasReadme: attr('number'),
    hasBuild: attr('number'),
    version: belongsTo('version'),
    versionReleased: Ember.computed.alias('version.released'),
    score: Ember.computed('hasTests', 'hasBuild', 'hasReadme', function () {
      var s = 2;
      /* eslint-disable */

      if (this.get('hasTests') === 1) {
        s++;
      }

      if (this.get('hasBuild') === 1) {
        s++;
      }

      if (this.get('hasReadme') === 1) {
        s++;
      }
      /* eslint-enable */


      return s;
    })
  });

  _exports.default = _default;
});
;define("ember-observer/models/test-result", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    succeeded: _emberData.default.attr('boolean'),
    statusMessage: _emberData.default.attr('string'),
    createdAt: _emberData.default.attr('date'),
    canary: _emberData.default.attr('boolean'),
    output: _emberData.default.attr('string'),
    semverString: _emberData.default.attr('string'),
    version: _emberData.default.belongsTo('version'),
    emberVersionCompatibilities: _emberData.default.hasMany('emberVersionCompatibility'),
    testsRunAt: Ember.computed.alias('createdAt')
  });

  _exports.default = _default;
});
;define("ember-observer/models/version", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo;

  var _default = _emberData.default.Model.extend({
    version: attr('string'),
    released: attr('date'),
    emberCliVersion: attr('string'),
    addon: belongsTo('addon', {
      inverse: 'versions'
    }),
    review: belongsTo('review')
  });

  _exports.default = _default;
});
;define("ember-observer/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-observer/router", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/get", "ember-observer/config/environment", "ember-router-scroll"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _inherits2, _assertThisInitialized2, _decorate2, _getPrototypeOf3, _get2, _environment, _emberRouterScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var Router = (0, _decorate2.default)(null, function (_initialize, _EmberRouter$extend) {
    var Router =
    /*#__PURE__*/
    function (_EmberRouter$extend2) {
      (0, _inherits2.default)(Router, _EmberRouter$extend2);

      function Router() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, Router);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Router)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return Router;
    }(_EmberRouter$extend);

    return {
      F: Router,
      d: [{
        kind: "field",
        key: "location",
        value: function value() {
          return _environment.default.locationType;
        }
      }, {
        kind: "field",
        key: "rootURL",
        value: function value() {
          return _environment.default.rootURL;
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "metrics",
        value: void 0
      }, {
        kind: "method",
        key: "willTransition",
        value: function willTransition() {
          (0, _get2.default)((0, _getPrototypeOf3.default)(Router.prototype), "willTransition", this).apply(this, arguments);
          performance.mark('willTransition');
        }
      }, {
        kind: "method",
        key: "didTransition",
        value: function didTransition() {
          (0, _get2.default)((0, _getPrototypeOf3.default)(Router.prototype), "didTransition", this).apply(this, arguments);

          this._trackPage();

          performance.mark('didTransition');
        }
      }, {
        kind: "field",
        key: "previousPage",
        value: function value() {
          return null;
        }
      }, {
        kind: "method",
        key: "_trackPage",
        value: function _trackPage() {
          var _this2 = this;

          Ember.run.scheduleOnce('afterRender', this, function () {
            var page = document.location.pathname;

            var title = _this2.getWithDefault('currentRouteName', 'unknown');

            var previousPage = _this2.get('previousPage');

            var hasQuery = /query=/.test(document.location.search);

            if (hasQuery) {
              page = "".concat(page, "/?query=");
            }

            if (page !== previousPage) {
              _this2.set('previousPage', page);

              Ember.get(_this2, 'metrics').trackPage({
                page: page,
                title: title
              });
            }
          });
        }
      }]
    };
  }, Ember.Router.extend(_emberRouterScroll.default));
  Router.map(function () {
    this.route('categories', function () {
      this.route('show', {
        path: '/:slug'
      });
    });
    this.route('addons', function () {
      this.route('correct', {
        path: '/*name/correct'
      });
      this.route('show', {
        path: '/*name'
      });
      this.route('top', {
        path: '/lists/top'
      });
    });
    this.route('lists', function () {
      this.route('top-addons');
      this.route('new-addons');
      this.route('recently-scored-addons');
      this.route('invalid-repo-url');
    });
    this.route('maintainers', function () {
      this.route('show', {
        path: '/:name'
      });
    });
    this.route('code-search');
    this.route('canary-test-results', function () {
      this.route('date', {
        path: '/:date'
      });
      this.route('detail', {
        path: '/:id/detail'
      });
    });
    this.route('login');
    this.route('admin', function () {
      this.route('categories', function () {
        this.route('index', {
          path: '/'
        });
        this.route('new');
        this.route('edit', {
          path: '/:slug'
        });
      });
      this.route('build-servers');
      this.route('build-results', function () {
        this.route('show', {
          path: '/:id'
        });
      });
      this.route('addon-lists', function () {
        this.route('addons-needing-categorization');
        this.route('addons-needing-review');
        this.route('addons-needing-rereview');
        this.route('addons-hidden');
        this.route('addons-wip');
      });
      this.route('review', function () {
        this.route('addon', {
          path: '/*name'
        });
      });
    });
    this.route('about');
    this.route('model-not-found');
    this.route('not-found', {
      path: '/*path'
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("ember-observer/routes/addons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsRoute, _EmberRoute);

    function AddonsRoute() {
      (0, _classCallCheck2.default)(this, AddonsRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsRoute).apply(this, arguments));
    }

    return AddonsRoute;
  }(Ember.Route);

  _exports.default = AddonsRoute;
});
;define("ember-observer/routes/addons/correct", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CorrectRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(CorrectRoute, _EmberRoute);

    function CorrectRoute() {
      (0, _classCallCheck2.default)(this, CorrectRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CorrectRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(CorrectRoute, [{
      key: "model",
      value: function model(params) {
        var name = params.name.replace(/%2F/i, '/');
        return this.get('store').query('addon', {
          filter: {
            name: name
          },
          page: {
            limit: 1
          }
        }, {
          reload: true
        }).then(function (addons) {
          return addons.get('firstObject');
        });
      }
    }]);
    return CorrectRoute;
  }(Ember.Route);

  _exports.default = CorrectRoute;
});
;define("ember-observer/routes/addons/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var ShowRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(ShowRoute, _EmberRoute2);

      function ShowRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowRoute;
    }(_EmberRoute);

    return {
      F: ShowRoute,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "session",
        value: void 0
      }, {
        kind: "method",
        key: "model",
        value: function model(params) {
          var name = params.name.replace(/%2F/i, '/');
          var addon = this.get('store').query('addon', {
            filter: {
              name: name
            },
            include: 'versions,maintainers,keywords,latest-review,latest-review.version,latest-addon-version,categories',
            page: {
              limit: 1
            }
          }, {
            reload: true
          }).then(function (addons) {
            return addons.get('firstObject');
          });
          var latestTestResult = this.get('store').query('test-result', {
            filter: {
              canary: false,
              addonName: name
            },
            sort: '-createdAt',
            page: {
              limit: 1
            },
            include: 'ember-version-compatibilities,version'
          }).then(function (results) {
            return results.get('firstObject');
          });
          var data = {
            addon: addon,
            latestTestResult: latestTestResult
          };

          if (this.get('session.isAuthenticated')) {
            data.categories = this.get('store').findAll('category', {
              include: 'subcategories'
            });
          }

          return Ember.RSVP.hash(data);
        }
      }, {
        kind: "method",
        key: "titleToken",
        value: function titleToken(model) {
          return model.addon.get('name');
        }
      }, {
        kind: "method",
        key: "afterModel",
        value: function afterModel() {
          this.get('emberVersions').fetch();
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "emberVersions",
        value: void 0
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "error",
        value: function error() {
          this.replaceWith('model-not-found');
        }
      }]
    };
  }, Ember.Route);
  _exports.default = ShowRoute;
});
;define("ember-observer/routes/addons/top", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var TopRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(TopRoute, _EmberRoute);

    function TopRoute() {
      (0, _classCallCheck2.default)(this, TopRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(TopRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        this.transitionTo('lists.top-addons');
      }
    }]);
    return TopRoute;
  }(Ember.Route);

  _exports.default = TopRoute;
});
;define("ember-observer/routes/admin", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AdminRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AdminRoute, _EmberRoute);

    function AdminRoute() {
      (0, _classCallCheck2.default)(this, AdminRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AdminRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AdminRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        if (!this.get('session.isAuthenticated')) {
          this.transitionTo('index');
        }
      }
    }, {
      key: "titleToken",
      value: function titleToken() {
        return 'Admin';
      }
    }]);
    return AdminRoute;
  }(Ember.Route);

  _exports.default = AdminRoute;
});
;define("ember-observer/routes/admin/addon-lists/addons-hidden", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsHiddenRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsHiddenRoute, _EmberRoute);

    function AddonsHiddenRoute() {
      (0, _classCallCheck2.default)(this, AddonsHiddenRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsHiddenRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AddonsHiddenRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            hidden: true
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return AddonsHiddenRoute;
  }(Ember.Route);

  _exports.default = AddonsHiddenRoute;
});
;define("ember-observer/routes/admin/addon-lists/addons-needing-categorization", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsNeedingCategorizationRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsNeedingCategorizationRoute, _EmberRoute);

    function AddonsNeedingCategorizationRoute() {
      (0, _classCallCheck2.default)(this, AddonsNeedingCategorizationRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsNeedingCategorizationRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AddonsNeedingCategorizationRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            isWip: false,
            notCategorized: true
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return AddonsNeedingCategorizationRoute;
  }(Ember.Route);

  _exports.default = AddonsNeedingCategorizationRoute;
});
;define("ember-observer/routes/admin/addon-lists/addons-needing-rereview", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsNeedingRereviewRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsNeedingRereviewRoute, _EmberRoute);

    function AddonsNeedingRereviewRoute() {
      (0, _classCallCheck2.default)(this, AddonsNeedingRereviewRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsNeedingRereviewRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AddonsNeedingRereviewRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            needsReReview: true
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return AddonsNeedingRereviewRoute;
  }(Ember.Route);

  _exports.default = AddonsNeedingRereviewRoute;
});
;define("ember-observer/routes/admin/addon-lists/addons-needing-review", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsNeedingReviewRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsNeedingReviewRoute, _EmberRoute);

    function AddonsNeedingReviewRoute() {
      (0, _classCallCheck2.default)(this, AddonsNeedingReviewRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsNeedingReviewRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AddonsNeedingReviewRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            notReviewed: true,
            isWip: false
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return AddonsNeedingReviewRoute;
  }(Ember.Route);

  _exports.default = AddonsNeedingReviewRoute;
});
;define("ember-observer/routes/admin/addon-lists/addons-wip", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var AddonsWipRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(AddonsWipRoute, _EmberRoute);

    function AddonsWipRoute() {
      (0, _classCallCheck2.default)(this, AddonsWipRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AddonsWipRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(AddonsWipRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            isWip: true
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return AddonsWipRoute;
  }(Ember.Route);

  _exports.default = AddonsWipRoute;
});
;define("ember-observer/routes/admin/build-results/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "moment"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(IndexRoute, _EmberRoute);

    function IndexRoute() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, IndexRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IndexRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.queryParams = {
        date: {
          refreshModel: true
        }
      };
      return _this;
    }

    (0, _createClass2.default)(IndexRoute, [{
      key: "model",
      value: function model(params) {
        params = params || {};

        if (!params.date) {
          params.date = (0, _moment.default)().format('YYYY-MM-DD');
        }

        return this.store.query('test-result', {
          filter: {
            date: params.date
          },
          include: 'version,version.addon'
        });
      }
    }]);
    return IndexRoute;
  }(Ember.Route);

  _exports.default = IndexRoute;
});
;define("ember-observer/routes/admin/build-results/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ShowRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(ShowRoute, _EmberRoute);

    function ShowRoute() {
      (0, _classCallCheck2.default)(this, ShowRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ShowRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(ShowRoute, [{
      key: "model",
      value: function model(params) {
        return this.store.findRecord('test-result', params.id, {
          include: 'version,version.addon'
        });
      }
    }]);
    return ShowRoute;
  }(Ember.Route);

  _exports.default = ShowRoute;
});
;define("ember-observer/routes/admin/build-servers", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var BuildServersRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(BuildServersRoute, _EmberRoute);

    function BuildServersRoute() {
      (0, _classCallCheck2.default)(this, BuildServersRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BuildServersRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(BuildServersRoute, [{
      key: "model",
      value: function model() {
        return this.store.findAll('build-server');
      }
    }]);
    return BuildServersRoute;
  }(Ember.Route);

  _exports.default = BuildServersRoute;
});
;define("ember-observer/routes/admin/categories", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CategoriesRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(CategoriesRoute, _EmberRoute);

    function CategoriesRoute() {
      (0, _classCallCheck2.default)(this, CategoriesRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CategoriesRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(CategoriesRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').findAll('category');
      }
    }]);
    return CategoriesRoute;
  }(Ember.Route);

  _exports.default = CategoriesRoute;
});
;define("ember-observer/routes/admin/categories/edit", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var EditRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(EditRoute, _EmberRoute);

    function EditRoute() {
      (0, _classCallCheck2.default)(this, EditRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(EditRoute, [{
      key: "model",
      value: function model(params) {
        var categories = this.modelFor('admin.categories');
        return Ember.RSVP.hash({
          categories: categories,
          category: this.get('store').peekAll('category').findBy('slug', params.slug)
        });
      }
    }]);
    return EditRoute;
  }(Ember.Route);

  _exports.default = EditRoute;
});
;define("ember-observer/routes/admin/categories/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(IndexRoute, _EmberRoute);

    function IndexRoute() {
      (0, _classCallCheck2.default)(this, IndexRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IndexRoute).apply(this, arguments));
    }

    return IndexRoute;
  }(Ember.Route);

  _exports.default = IndexRoute;
});
;define("ember-observer/routes/admin/categories/new", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var NewRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(NewRoute, _EmberRoute);

    function NewRoute() {
      (0, _classCallCheck2.default)(this, NewRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewRoute).apply(this, arguments));
    }

    return NewRoute;
  }(Ember.Route);

  _exports.default = NewRoute;
});
;define("ember-observer/routes/admin/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(IndexRoute, _EmberRoute);

    function IndexRoute() {
      (0, _classCallCheck2.default)(this, IndexRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IndexRoute).apply(this, arguments));
    }

    return IndexRoute;
  }(Ember.Route);

  _exports.default = IndexRoute;
});
;define("ember-observer/routes/admin/review", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ReviewRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var ReviewRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(ReviewRoute, _EmberRoute2);

      function ReviewRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ReviewRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ReviewRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ReviewRoute;
    }(_EmberRoute);

    return {
      F: ReviewRoute,
      d: [{
        kind: "field",
        key: "queryParams",
        value: function value() {
          return {
            list: {
              refreshModel: true
            }
          };
        }
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "adminLists",
        value: void 0
      }, {
        kind: "method",
        key: "model",
        value: function model(_ref) {
          var list = _ref.list;

          if (list) {
            return this.get('adminLists.find').perform(list);
          }
        }
      }, {
        kind: "method",
        key: "redirect",
        value: function redirect(model, transition) {
          if (transition.targetName === 'admin.review.index') {
            if (model && model.addons.get('length')) {
              return this.replaceWith('admin.review.addon', model.addons.get('firstObject.name'));
            }

            if (!transition.queryParams.list) {
              transition.abort();
              return this.replaceWith('admin.review.index', {
                queryParams: {
                  list: 'needing-review'
                }
              });
            }
          }
        }
      }, {
        kind: "method",
        key: "titleToken",
        value: function titleToken() {
          return 'Review';
        }
      }]
    };
  }, Ember.Route);
  _exports.default = ReviewRoute;
});
;define("ember-observer/routes/admin/review/addon", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var AddonRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var AddonRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(AddonRoute, _EmberRoute2);

      function AddonRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, AddonRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AddonRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return AddonRoute;
    }(_EmberRoute);

    return {
      F: AddonRoute,
      d: [{
        kind: "method",
        key: "model",
        value: function model(params) {
          var name = params.name.replace(/%2F/i, '/');
          var list = this.modelFor('admin.review');
          var addon = this.get('store').query('addon', {
            filter: {
              name: name,
              hidden: [true, false]
            },
            include: 'latest-addon-version,versions,maintainers,keywords,latest-review,latest-review.version,categories',
            page: {
              limit: 1
            }
          }, {
            reload: true
          }).then(function (addons) {
            return addons.get('firstObject');
          });
          var data = {
            addon: addon,
            list: list,
            categories: this.get('store').findAll('category', {
              include: 'subcategories,parent'
            })
          };
          return Ember.RSVP.hash(data);
        }
      }, {
        kind: "method",
        key: "titleToken",
        value: function titleToken(model) {
          return model.addon.get('name');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "error",
        value: function error() {
          this.replaceWith('model-not-found');
        }
      }]
    };
  }, Ember.Route);
  _exports.default = AddonRoute;
});
;define("ember-observer/routes/application", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ApplicationRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var ApplicationRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(ApplicationRoute, _EmberRoute2);

      function ApplicationRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ApplicationRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ApplicationRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ApplicationRoute;
    }(_EmberRoute);

    return {
      F: ApplicationRoute,
      d: [{
        kind: "method",
        key: "beforeModel",
        value: function beforeModel() {
          this.get('session').fetch();
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "login",
        value: function login(email, password) {
          var route = this;
          this.get('session').open(email, password).then(function () {
            route.transitionTo('admin.index');
          });
        }
      }, {
        kind: "method",
        key: "model",
        value: function model() {
          return {
            categories: this.get('store').findAll('category', {
              include: 'subcategories,parent'
            })
          };
        }
      }, {
        kind: "method",
        key: "title",
        value: function title(tokens) {
          var tokenStr = tokens.join(' | ');

          if (tokenStr) {
            return "".concat(tokenStr, " - Ember Observer");
          } else {
            return 'Ember Observer';
          }
        }
      }]
    };
  }, Ember.Route);
  _exports.default = ApplicationRoute;
});
;define("ember-observer/routes/canary-test-results/date", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var DateRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(DateRoute, _EmberRoute);

    function DateRoute() {
      (0, _classCallCheck2.default)(this, DateRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DateRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(DateRoute, [{
      key: "model",
      value: function model(params) {
        return Ember.RSVP.hash({
          date: params.date,
          testResults: this.store.query('test-result', {
            fields: {
              'test-result': 'succeeded,status-message,created-at,semver-string,canary'
            },
            filter: {
              canary: true,
              date: params.date
            },
            include: ['ember-version-compatibilities', 'version', 'version.addon'].join(',')
          })
        });
      }
    }]);
    return DateRoute;
  }(Ember.Route);

  _exports.default = DateRoute;
});
;define("ember-observer/routes/canary-test-results/detail", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var DetailRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(DetailRoute, _EmberRoute);

    function DetailRoute() {
      (0, _classCallCheck2.default)(this, DetailRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DetailRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(DetailRoute, [{
      key: "model",
      value: function model(_ref) {
        var id = _ref.id;
        return this.store.findRecord('test-result', id, {
          include: ['ember-version-compatibilities', 'version', 'version.addon'].join(',')
        });
      }
    }]);
    return DetailRoute;
  }(Ember.Route);

  _exports.default = DetailRoute;
});
;define("ember-observer/routes/canary-test-results/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "moment"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(IndexRoute, _EmberRoute);

    function IndexRoute() {
      (0, _classCallCheck2.default)(this, IndexRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(IndexRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(IndexRoute, [{
      key: "beforeModel",
      value: function beforeModel() {
        this.transitionTo('canary-test-results.date', (0, _moment.default)().format('YYYY-MM-DD'));
      }
    }]);
    return IndexRoute;
  }(Ember.Route);

  _exports.default = IndexRoute;
});
;define("ember-observer/routes/categories", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CategoriesRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(CategoriesRoute, _EmberRoute);

    function CategoriesRoute() {
      (0, _classCallCheck2.default)(this, CategoriesRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CategoriesRoute).apply(this, arguments));
    }

    return CategoriesRoute;
  }(Ember.Route);

  _exports.default = CategoriesRoute;
});
;define("ember-observer/routes/categories/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object", "ember-observer/utils/measure"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object, _measure) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var ShowRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(ShowRoute, _EmberRoute2);

      function ShowRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowRoute;
    }(_EmberRoute);

    return {
      F: ShowRoute,
      d: [{
        kind: "method",
        key: "model",
        value: function model(params) {
          var _this2 = this;

          return this.modelFor('application').categories.then(function () {
            var category = _this2.get('store').peekAll('category').findBy('slug', params.slug);

            var addons = _this2.get('store').query('addon', {
              filter: {
                inCategory: category.get('id')
              },
              include: 'categories'
            });

            return Ember.RSVP.hash({
              category: category,
              addons: addons
            });
          });
        }
      }, {
        kind: "field",
        key: "afterModel",
        value: function value() {
          return _measure.default;
        }
      }, {
        kind: "method",
        key: "titleToken",
        value: function titleToken(model) {
          return model.category.get('name');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "error",
        value: function error() {
          this.replaceWith('model-not-found');
        }
      }]
    };
  }, Ember.Route);
  _exports.default = ShowRoute;
});
;define("ember-observer/routes/code-search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var CodeSearchRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(CodeSearchRoute, _EmberRoute);

    function CodeSearchRoute() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, CodeSearchRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CodeSearchRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.queryParams = {
        codeQuery: {
          replace: true
        },
        regex: {
          replace: true
        }
      };
      return _this;
    }

    return CodeSearchRoute;
  }(Ember.Route);

  _exports.default = CodeSearchRoute;
});
;define("ember-observer/routes/index", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "ember-observer/mixins/route-with-search", "ember-observer/utils/measure"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _routeWithSearch, _measure) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var IndexRoute =
  /*#__PURE__*/
  function (_EmberRoute$extend) {
    (0, _inherits2.default)(IndexRoute, _EmberRoute$extend);

    function IndexRoute() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, IndexRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IndexRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.afterModel = _measure.default;
      return _this;
    }

    (0, _createClass2.default)(IndexRoute, [{
      key: "model",
      value: function model() {
        return Ember.RSVP.hash({
          topAddons: this.get('store').query('addon', {
            page: {
              limit: 10
            },
            filter: {
              top: true
            },
            sort: 'ranking',
            include: 'categories'
          }),
          newAddons: this.get('store').query('addon', {
            page: {
              limit: 10
            },
            sort: '-publishedDate',
            include: 'categories'
          }),
          recentlyScoredAddons: this.get('store').query('addon', {
            page: {
              limit: 10
            },
            filter: {
              recentlyReviewed: true
            },
            include: 'categories'
          })
        });
      }
    }]);
    return IndexRoute;
  }(Ember.Route.extend(_routeWithSearch.default));

  _exports.default = IndexRoute;
});
;define("ember-observer/routes/lists", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ListsRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(ListsRoute, _EmberRoute);

    function ListsRoute() {
      (0, _classCallCheck2.default)(this, ListsRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListsRoute).apply(this, arguments));
    }

    return ListsRoute;
  }(Ember.Route);

  _exports.default = ListsRoute;
});
;define("ember-observer/routes/lists/invalid-repo-url", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var InvalidRepoUrlRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(InvalidRepoUrlRoute, _EmberRoute);

    function InvalidRepoUrlRoute() {
      (0, _classCallCheck2.default)(this, InvalidRepoUrlRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(InvalidRepoUrlRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(InvalidRepoUrlRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          filter: {
            missingRepoUrl: true
          },
          sort: '-latestVersionDate'
        });
      }
    }]);
    return InvalidRepoUrlRoute;
  }(Ember.Route);

  _exports.default = InvalidRepoUrlRoute;
});
;define("ember-observer/routes/lists/new-addons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var NewAddonsRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(NewAddonsRoute, _EmberRoute);

    function NewAddonsRoute() {
      (0, _classCallCheck2.default)(this, NewAddonsRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NewAddonsRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(NewAddonsRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          page: {
            limit: 100
          },
          sort: '-publishedDate',
          include: 'categories'
        });
      }
    }]);
    return NewAddonsRoute;
  }(Ember.Route);

  _exports.default = NewAddonsRoute;
});
;define("ember-observer/routes/lists/recently-scored-addons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var RecentlyScoredAddonsRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(RecentlyScoredAddonsRoute, _EmberRoute);

    function RecentlyScoredAddonsRoute() {
      (0, _classCallCheck2.default)(this, RecentlyScoredAddonsRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RecentlyScoredAddonsRoute).apply(this, arguments));
    }

    (0, _createClass2.default)(RecentlyScoredAddonsRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          page: {
            limit: 100
          },
          filter: {
            recentlyReviewed: true
          },
          include: 'categories'
        });
      }
    }]);
    return RecentlyScoredAddonsRoute;
  }(Ember.Route);

  _exports.default = RecentlyScoredAddonsRoute;
});
;define("ember-observer/routes/lists/top-addons", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "ember-observer/utils/measure"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _measure) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var TopAddonsRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(TopAddonsRoute, _EmberRoute);

    function TopAddonsRoute() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TopAddonsRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TopAddonsRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.afterModel = _measure.default;
      return _this;
    }

    (0, _createClass2.default)(TopAddonsRoute, [{
      key: "model",
      value: function model() {
        return this.get('store').query('addon', {
          page: {
            limit: 100
          },
          filter: {
            top: true
          },
          sort: 'ranking',
          include: 'categories'
        });
      }
    }]);
    return TopAddonsRoute;
  }(Ember.Route);

  _exports.default = TopAddonsRoute;
});
;define("ember-observer/routes/login", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var LoginRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(LoginRoute, _EmberRoute);

    function LoginRoute() {
      (0, _classCallCheck2.default)(this, LoginRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LoginRoute).apply(this, arguments));
    }

    return LoginRoute;
  }(Ember.Route);

  _exports.default = LoginRoute;
});
;define("ember-observer/routes/maintainers", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var MaintainersRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(MaintainersRoute, _EmberRoute);

    function MaintainersRoute() {
      (0, _classCallCheck2.default)(this, MaintainersRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaintainersRoute).apply(this, arguments));
    }

    return MaintainersRoute;
  }(Ember.Route);

  _exports.default = MaintainersRoute;
});
;define("ember-observer/routes/maintainers/show", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "@ember-decorators/object"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ShowRoute = (0, _decorate2.default)(null, function (_initialize, _EmberRoute) {
    var ShowRoute =
    /*#__PURE__*/
    function (_EmberRoute2) {
      (0, _inherits2.default)(ShowRoute, _EmberRoute2);

      function ShowRoute() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ShowRoute);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ShowRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ShowRoute;
    }(_EmberRoute);

    return {
      F: ShowRoute,
      d: [{
        kind: "method",
        key: "model",
        value: function model(params) {
          return this.get('store').query('maintainer', {
            filter: {
              name: params.name
            }
          }).then(function (maintainers) {
            return maintainers.get('firstObject');
          });
        }
      }, {
        kind: "method",
        key: "titleToken",
        value: function titleToken(model) {
          return model.get('name');
        }
      }, {
        kind: "method",
        decorators: [_object.action],
        key: "error",
        value: function error() {
          this.replaceWith('model-not-found');
        }
      }]
    };
  }, Ember.Route);
  _exports.default = ShowRoute;
});
;define("ember-observer/routes/model-not-found", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var ModelNotFoundRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(ModelNotFoundRoute, _EmberRoute);

    function ModelNotFoundRoute() {
      (0, _classCallCheck2.default)(this, ModelNotFoundRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModelNotFoundRoute).apply(this, arguments));
    }

    return ModelNotFoundRoute;
  }(Ember.Route);

  _exports.default = ModelNotFoundRoute;
});
;define("ember-observer/routes/not-found", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var NotFoundRoute =
  /*#__PURE__*/
  function (_EmberRoute) {
    (0, _inherits2.default)(NotFoundRoute, _EmberRoute);

    function NotFoundRoute() {
      (0, _classCallCheck2.default)(this, NotFoundRoute);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NotFoundRoute).apply(this, arguments));
    }

    return NotFoundRoute;
  }(Ember.Route);

  _exports.default = NotFoundRoute;
});
;define("ember-observer/serializers/addon", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPISerializer.extend({
    attrs: {
      name: {
        serialize: false
      },
      description: {
        serialize: false
      },
      repositoryUrl: {
        serialize: false
      },
      latestVersionDate: {
        serialize: false
      },
      publishedDate: {
        serialize: false
      },
      license: {
        serialize: false
      },
      score: {
        serialize: false
      },
      ranking: {
        serialize: false
      },
      githubUsers: {
        serialize: false
      },
      lastMonthDownloads: {
        serialize: false
      },
      isTopDownloaded: {
        serialize: false
      },
      isTopStarred: {
        serialize: false
      },
      demoUrl: {
        serialize: false
      },
      githubStats: {
        serialize: false
      },
      keywords: {
        serialize: false
      },
      versions: {
        serialize: false
      },
      maintainers: {
        serialize: false
      },
      readme: {
        serialize: false
      },
      latestAddonVersion: {
        serialize: false
      },
      updatedAt: {
        serialize: false
      }
    }
  });

  _exports.default = _default;
});
;define("ember-observer/serializers/category", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPISerializer.extend({
    attrs: {
      addonCount: {
        serialize: false
      }
    },
    normalize: function normalize(modelClass, responseHash) {
      if (responseHash.relationships) {
        if (responseHash.relationships.parent.links) {
          delete responseHash.relationships.parent.links;
        }

        if (responseHash.relationships.subcategories.links) {
          delete responseHash.relationships.subcategories.links;
        }
      }

      return this._super.apply(this, arguments);
    }
  });

  _exports.default = _default;
});
;define("ember-observer/serializers/ember-versions", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPISerializer.extend({
    modelNameFromPayloadKey: function modelNameFromPayloadKey(key) {
      return key;
    }
  });

  _exports.default = _default;
});
;define("ember-observer/serializers/review", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPISerializer.extend({
    attrs: {
      createdAt: {
        serialize: false
      }
    }
  });

  _exports.default = _default;
});
;define("ember-observer/services/admin-lists", ["exports", "ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.lists = void 0;
  var lists = {
    hidden: {
      method: 'hiddenAddons',
      title: 'Hidden Addons'
    },
    'needing-categorization': {
      method: 'addonsNeedingCategorization',
      title: 'Addons needing categorization'
    },
    'needing-rereview': {
      method: 'addonsNeedingReReview',
      title: 'Addons needing re-review'
    },
    'needing-review': {
      method: 'addonsNeedingReview',
      title: 'Addons needing review'
    },
    'wip': {
      method: 'addonsWip',
      title: 'Addons marked WIP'
    },
    'missing-repo-url': {
      method: 'missingRepoUrl',
      title: 'Addons without a repo url set'
    }
  };
  _exports.lists = lists;

  var _default = Ember.Service.extend({
    store: Ember.inject.service(),
    find: (0, _emberConcurrency.task)(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(listParam) {
      var list, addons;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              list = lists[listParam];
              _context.next = 3;
              return this[list.method]();

            case 3:
              addons = _context.sent;
              return _context.abrupt("return", {
                addons: addons,
                title: list.title,
                key: listParam
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })),
    addonsNeedingCategorization: function addonsNeedingCategorization() {
      return this.get('store').query('addon', {
        filter: {
          isWip: false,
          notCategorized: true,
          hasRepoUrl: true
        },
        sort: '-latestVersionDate'
      });
    },
    hiddenAddons: function hiddenAddons() {
      return this.get('store').query('addon', {
        filter: {
          hidden: true
        },
        sort: '-latestVersionDate'
      });
    },
    addonsNeedingReReview: function addonsNeedingReReview() {
      return this.get('store').query('addon', {
        filter: {
          needsReReview: true,
          hasRepoUrl: true
        },
        sort: '-latestVersionDate'
      });
    },
    addonsNeedingReview: function addonsNeedingReview() {
      return this.get('store').query('addon', {
        filter: {
          notReviewed: true,
          isWip: false,
          hasRepoUrl: true
        },
        sort: '-latestVersionDate'
      });
    },
    addonsWip: function addonsWip() {
      return this.get('store').query('addon', {
        filter: {
          isWip: true
        },
        sort: '-latestVersionDate'
      });
    },
    missingRepoUrl: function missingRepoUrl() {
      return this.get('store').query('addon', {
        filter: {
          missingRepoUrl: true
        },
        sort: '-latestVersionDate'
      });
    }
  });

  _exports.default = _default;
});
;define("ember-observer/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ajax.default;
    }
  });
});
;define("ember-observer/services/api-ajax", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-ajax/services/ajax"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var ApiAjaxService = (0, _decorate2.default)(null, function (_initialize, _AjaxService) {
    var ApiAjaxService =
    /*#__PURE__*/
    function (_AjaxService2) {
      (0, _inherits2.default)(ApiAjaxService, _AjaxService2);

      function ApiAjaxService() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, ApiAjaxService);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ApiAjaxService)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return ApiAjaxService;
    }(_AjaxService);

    return {
      F: ApiAjaxService,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "session",
        value: void 0
      }, {
        kind: "field",
        key: "namespace",
        value: function value() {
          return 'api/v2';
        }
      }, {
        kind: "get",
        decorators: [Ember.computed('session.{isAuthenticated,header}')],
        key: "headers",
        value: function headers() {
          if (this.get('session.isAuthenticated')) {
            return this.get('session.header');
          }
        }
      }]
    };
  }, _ajax.default);
  _exports.default = ApiAjaxService;
});
;define("ember-observer/services/code-search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-concurrency", "ember-observer/config/environment"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _emberConcurrency, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var PageSize = _environment.default.codeSearchPageSize;
  var CodeSearchService = (0, _decorate2.default)(null, function (_initialize, _EmberService) {
    var CodeSearchService =
    /*#__PURE__*/
    function (_EmberService2) {
      (0, _inherits2.default)(CodeSearchService, _EmberService2);

      function CodeSearchService() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, CodeSearchService);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CodeSearchService)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return CodeSearchService;
    }(_EmberService);

    return {
      F: CodeSearchService,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "apiAjax",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(query, regex) {
          var addons, _ref, results, idsParam;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.get('apiAjax').request('/search/addons', {
                    data: {
                      query: query,
                      regex: regex
                    }
                  });

                case 2:
                  _ref = _context.sent;
                  results = _ref.results;

                  if (!(results.length < 4 * PageSize)) {
                    _context.next = 11;
                    break;
                  }

                  idsParam = results.map(function (r) {
                    return r.addon;
                  }).join(',');
                  _context.next = 8;
                  return this.get('store').query('addon', {
                    filter: {
                      id: idsParam
                    },
                    include: 'categories'
                  });

                case 8:
                  addons = _context.sent;
                  _context.next = 14;
                  break;

                case 11:
                  _context.next = 13;
                  return this.get('store').query('addon', {
                    filter: {
                      codeSearch: true
                    },
                    page: {
                      limit: 10000
                    }
                  });

                case 13:
                  addons = _context.sent;

                case 14:
                  return _context.abrupt("return", results.map(function (result) {
                    var addon = addons.find(function (a) {
                      return a.get('id') === result.addon;
                    });

                    if (addon) {
                      return {
                        addon: addon,
                        count: result.count,
                        files: result.files
                      };
                    }
                  }).compact());

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))],
        key: "addons",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(addon, query, regex) {
          var response;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.get('apiAjax').request('/search/source', {
                    data: {
                      addon: addon,
                      query: query,
                      regex: regex
                    }
                  });

                case 2:
                  response = _context2.sent;
                  return _context2.abrupt("return", response.results);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))],
        key: "usages",
        value: void 0
      }]
    };
  }, Ember.Service);
  _exports.default = CodeSearchService;
});
;define("ember-observer/services/ember-versions", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var EmberVersionsService = (0, _decorate2.default)(null, function (_initialize, _EmberService) {
    var EmberVersionsService =
    /*#__PURE__*/
    function (_EmberService2) {
      (0, _inherits2.default)(EmberVersionsService, _EmberService2);

      function EmberVersionsService() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EmberVersionsService);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EmberVersionsService)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return EmberVersionsService;
    }(_EmberService);

    return {
      F: EmberVersionsService,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "ajax",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "features",
        value: void 0
      }, {
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "store",
        value: void 0
      }, {
        kind: "field",
        key: "data",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "url",
        value: function value() {
          return 'https://api.github.com/repos/emberjs/ember.js/releases?per_page=100';
        }
      }, {
        kind: "field",
        decorators: [Ember.computed.notEmpty('data')],
        key: "isLoaded",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('isLoaded', 'data')],
        key: "versionData",
        value: function versionData() {
          if (!this.get('isLoaded')) {
            return [];
          }

          var data = this.get('data');
          return data.map(dataForVersion).compact();
        }
      }, {
        kind: "method",
        key: "fetch",
        value: function fetch() {
          var _this2 = this;

          if (this.get('isLoaded')) {
            return;
          }

          if (this.get('features').isEnabled('ember-versions-model')) {
            this.get('store').queryRecord('ember-versions', {}).then(function (response) {
              _this2.set('data', response.get('githubResponse'));
            }).catch(function () {
              _this2.set('data', null);
            });
          } else {
            this.get('ajax').request(this.url).then(function (response) {
              _this2.set('data', response);
            }).catch(function () {
              _this2.set('data', null);
            });
          }
        }
      }]
    };
  }, Ember.Service);
  _exports.default = EmberVersionsService;
  var betaRegex = /beta/;
  var majorOrMinorRegex = /\.0$/;

  function dataForVersion(version) {
    if (!version.tag_name || !version.published_at) {
      return null;
    }

    if (version.tag_name.match(betaRegex)) {
      return null;
    }

    if (!version.tag_name.match(majorOrMinorRegex)) {
      return null;
    }

    return {
      version: "Ember ".concat(version.tag_name),
      released: new Date(version.published_at),
      isEmber: true
    };
  }
});
;define("ember-observer/services/features", ["exports", "ember-feature-flags/services/features", "ember-observer/config/environment"], function (_exports, _features, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _features.default.extend({
    config: _environment.default,
    init: function init() {
      this._super.apply(this, arguments);

      if (_environment.default.featureFlags) {
        this.setup(_environment.default.featureFlags);
      }
    }
  });

  _exports.default = _default;
});
;define("ember-observer/services/metrics", ["exports", "ember-metrics/services/metrics"], function (_exports, _metrics) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _metrics.default;
    }
  });
});
;define("ember-observer/services/moment", ["exports", "ember-moment/services/moment", "ember-observer/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _Ember = Ember,
      get = _Ember.get;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("ember-observer/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _routerScroll.default;
    }
  });
});
;define("ember-observer/services/routing", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits"], function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var RoutingService =
  /*#__PURE__*/
  function (_EmberService) {
    (0, _inherits2.default)(RoutingService, _EmberService);

    function RoutingService() {
      (0, _classCallCheck2.default)(this, RoutingService);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RoutingService).apply(this, arguments));
    }

    (0, _createClass2.default)(RoutingService, [{
      key: "transitionTo",
      value: function transitionTo() {
        var _EmberGetOwner$looku;

        return (_EmberGetOwner$looku = Ember.getOwner(this).lookup('router:main')).transitionTo.apply(_EmberGetOwner$looku, arguments);
      }
    }]);
    return RoutingService;
  }(Ember.Service);

  _exports.default = RoutingService;
});
;define("ember-observer/services/search", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-concurrency"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SearchService = (0, _decorate2.default)(null, function (_initialize, _EmberService) {
    var SearchService =
    /*#__PURE__*/
    function (_EmberService2) {
      (0, _inherits2.default)(SearchService, _EmberService2);

      function SearchService() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SearchService);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SearchService)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SearchService;
    }(_EmberService);

    return {
      F: SearchService,
      d: [{
        kind: "field",
        decorators: [Ember.inject.service()],
        key: "ajax",
        value: void 0
      }, {
        kind: "field",
        key: "_autocompleteData",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        key: "_latestSearchResults",
        value: function value() {
          return null;
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.get('_autocompleteData')) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return this.get('ajax').request('/api/v2/autocomplete_data');

                case 3:
                  data = _context.sent;
                  this.set('_autocompleteData', {
                    addons: data.addons.sortBy('score').reverse(),
                    categories: data.categories,
                    maintainers: data.maintainers
                  });

                case 5:
                  return _context.abrupt("return", this.get('_autocompleteData'));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))],
        key: "_fetchAutocompleteData",
        value: void 0
      }, {
        kind: "method",
        key: "_searchAddons",
        value: function _searchAddons(query, possibleAddons) {
          var addonResultsMatchingOnName = findMatches(query, 'name', possibleAddons);
          var addonResultsMatchingOnDescription = findMatches(query, 'description', possibleAddons);
          var addonIds = [].concat(addonResultsMatchingOnName, addonResultsMatchingOnDescription).uniq().mapBy('id');
          return {
            matchIds: addonIds,
            matchCount: addonIds.length
          };
        }
      }, {
        kind: "method",
        key: "_searchCategories",
        value: function _searchCategories(query, possibleCategories) {
          var categoryIds = findMatches(query, 'name', possibleCategories).mapBy('id');
          return {
            matchIds: categoryIds,
            matchCount: categoryIds.length
          };
        }
      }, {
        kind: "method",
        key: "_searchMaintainers",
        value: function _searchMaintainers(query, possibleMaintainers) {
          var maintainerIds = findMatches(query, 'name', possibleMaintainers).mapBy('id');
          return {
            matchIds: maintainerIds,
            matchCount: maintainerIds.length
          };
        }
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(query) {
          var results, addonMatchMap;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.get('ajax').request('/api/v2/search', {
                    data: {
                      query: query
                    }
                  });

                case 2:
                  results = _context2.sent;
                  addonMatchMap = {};
                  results.search.forEach(function (result) {
                    addonMatchMap[result.addon_id] = result.matches;
                  });
                  return _context2.abrupt("return", {
                    matchIds: Object.keys(addonMatchMap),
                    matchMap: addonMatchMap,
                    matchCount: results.search.length
                  });

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }))],
        key: "_searchReadmes",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(query) {
          var data, trimmed, addonResultsMatchingOnName;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.get('_fetchAutocompleteData').perform();

                case 2:
                  data = _context3.sent;
                  trimmed = query.trim();
                  addonResultsMatchingOnName = findAddonNameMatches(trimmed, data.addons);
                  return _context3.abrupt("return", addonResultsMatchingOnName.mapBy('name'));

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }))],
        key: "searchAddonNames",
        value: void 0
      }, {
        kind: "field",
        decorators: [(0, _emberConcurrency.task)(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4(query, options) {
          var data, addonResults, categoryResults, maintainerResults, readmeResults, results;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.get('_fetchAutocompleteData').perform();

                case 2:
                  data = _context4.sent;
                  addonResults = this._searchAddons(query, data.addons);
                  categoryResults = this._searchCategories(query, data.categories);
                  maintainerResults = this._searchMaintainers(query, data.maintainers);
                  readmeResults = {
                    matchIds: [],
                    matchMap: {},
                    matchCount: 0
                  };

                  if (!options.includeReadmes) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 10;
                  return this.get('_searchReadmes').perform(query);

                case 10:
                  readmeResults = _context4.sent;

                case 11:
                  results = {
                    query: query,
                    addonResults: addonResults,
                    maintainerResults: maintainerResults,
                    categoryResults: categoryResults,
                    readmeResults: readmeResults,
                    length: addonResults.matchCount + maintainerResults.matchCount + categoryResults.matchCount + readmeResults.matchCount
                  };
                  this.set('_latestSearchResults', results);
                  return _context4.abrupt("return", results);

                case 14:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))],
        key: "search",
        value: void 0
      }]
    };
  }, Ember.Service);
  _exports.default = SearchService;

  function findMatches(query, prop, items) {
    query = escapeForRegex(query);
    var matcher = new RegExp(query, 'i');
    var results = items.filter(function (item) {
      return matcher.test(item[prop]);
    });
    return results;
  }

  function findAddonNameMatches(searchTerm, addons) {
    var query = escapeForRegex(stripEmberPrefixes(searchTerm));
    var matcher = new RegExp(query, 'i');
    var matches = addons.map(function (item) {
      var trimmedName = stripEmberPrefixes(item.name);
      var match = matcher.exec(trimmedName);

      if (match) {
        return {
          item: item,
          match: match
        };
      }

      return null;
    }).compact();

    var sortByMatchIndexThenScoreThenAddonName = function sortByMatchIndexThenScoreThenAddonName(a, b) {
      if (a.match.index < b.match.index) {
        return -1;
      }

      if (a.match.index > b.match.index) {
        return 1;
      }

      if (a.item.score > b.item.score) {
        return -1;
      }

      if (a.item.score < b.item.score) {
        return 1;
      } // match indexes are equal, scores are equal, so sort by addon name


      if (a.item.name < b.item.name) {
        return -1;
      }

      if (a.item.name > b.item.name) {
        return 1;
      }

      return 0;
    };

    return matches.sort(sortByMatchIndexThenScoreThenAddonName).mapBy('item');
  }

  function stripEmberPrefixes(str) {
    return str.replace('ember-cli-', '').replace('ember-', '');
  }

  function escapeForRegex(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
});
;define("ember-observer/services/session", ["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/decorate", "ember-observer/utils/local-storage"], function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _decorate2, _localStorage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var SessionService = (0, _decorate2.default)(null, function (_initialize, _EmberService) {
    var SessionService =
    /*#__PURE__*/
    function (_EmberService2) {
      (0, _inherits2.default)(SessionService, _EmberService2);

      function SessionService() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, SessionService);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SessionService)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

        return _this;
      }

      return SessionService;
    }(_EmberService);

    return {
      F: SessionService,
      d: [{
        kind: "method",
        key: "open",
        value: function open(email, password) {
          var session = this;
          return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
              type: 'POST',
              url: '/api/v2/authentication/login.json',
              data: {
                email: email,
                password: password
              },
              dataType: 'json',
              success: Ember.run.bind(null, resolve),
              error: Ember.run.bind(null, reject)
            });
          }).then(function (response) {
            return new Ember.RSVP.Promise(function (resolve, reject) {
              if (response.token) {
                session.set('token', response.token);

                _localStorage.default.save('sessionToken', response.token);

                resolve();
              } else {
                reject();
              }
            });
          }).catch(function () {
            session.clearToken();
            console.log('Failed logging in'); // eslint-disable-line no-console
          });
        }
      }, {
        kind: "method",
        key: "fetch",
        value: function fetch() {
          var token = _localStorage.default.fetch('sessionToken');

          if (token) {
            this.set('token', token);
          }
        }
      }, {
        kind: "method",
        key: "close",
        value: function close() {
          var session = this;
          return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.ajax({
              type: 'POST',
              url: '/api/authentication/logout.json',
              dataType: 'json',
              headers: session.get('header'),
              success: Ember.run.bind(null, resolve),
              error: Ember.run.bind(null, reject)
            });
          }).finally(function () {
            session.clearToken();
          });
        }
      }, {
        kind: "method",
        key: "clearToken",
        value: function clearToken() {
          this.set('token', null);

          _localStorage.default.remove('sessionToken');
        }
      }, {
        kind: "field",
        decorators: [isPresent('token')],
        key: "isAuthenticated",
        value: void 0
      }, {
        kind: "get",
        decorators: [Ember.computed('token')],
        key: "header",
        value: function header() {
          return {
            Authorization: "Token token=".concat(this.get('token'))
          };
        }
      }]
    };
  }, Ember.Service);
  _exports.default = SessionService;

  function isPresent(strProp) {
    return Ember.computed(strProp, function () {
      var str = this.get(strProp);
      return typeof str !== 'undefined' && !/^\s*$/.test(str) && str !== null;
    });
  }
});
;define("ember-observer/services/text-measurer", ["exports", "ember-text-measurer/services/text-measurer"], function (_exports, _textMeasurer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _textMeasurer.default;
    }
  });
});
;define("ember-observer/snippets/perf-utils", [], function () {
  "use strict";

  window.performance = window.performance || {};

  if (!performance.mark) {
    performance.mark = function () {};

    performance.measure = function () {};
  } // WebKit bug: https://bugs.webkit.org/show_bug.cgi?id=137407


  window._performance = window.performance;
  /* eslint-disable no-console */

  if (!console.profile) {
    console.profile = function () {};

    console.profileEnd = function () {};
  }
  /* eslint-enable no-console */

});
;define("ember-observer/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/BhlZeQQ",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[true]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"about-index\"],[9],[0,\"\\n    \"],[7,\"article\"],[9],[0,\"\\n      \"],[7,\"h1\"],[9],[0,\"What is Ember Observer?\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        We built this site to provide a better way to discover and compare ember-cli addons.\\n        The site has a secondary goal of promoting quality and sustainability in addon development.\\n        Ember Observer is heavily inspired by \"],[7,\"a\"],[11,\"href\",\"https://www.ruby-toolbox.com/\"],[9],[0,\"Ruby Toolbox\"],[10],[0,\".\\n        We've attempted to achieve these goals through a number of features:\\n      \"],[10],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"Categorization\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Every addon is categorized. The first pass at categorization is a bit rough.\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        Addons that do not provide reusable functionality or that we were unable to evaluate do not appear on the site.\\n        We will regularly re-review these to see if they can be listed.\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[9],[0,\"\\\"Reviews\\\"\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        Every addon that is published has been and will be \\\"reviewed\\\", though \\\"evaluated\\\" would perhaps be a better\\n        term. The review consists of five questions:\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Is the source accessible?\"],[10],[0,\" - This one is straightforward: can the source be found? In practice this has\\n        turned out to not be a terribly useful question and will probably be removed at some point.\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Is it more than an empty addon?\"],[10],[0,\" - Is the addon more than the base generated addon? Another question\\n        that turns out to not be very useful. It will probably be removed in favor of hiding addons from the site until\\n        they are more than an empty addon.\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Are there meaningful tests?\"],[10],[0,\" - The key word here is \\\"meaningful\\\", in reviewing we took this to mean\\n        \"],[7,\"em\"],[9],[0,\"any\"],[10],[0,\" tests beyond the tests provided by generators.\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Is the README filled out?\"],[10],[0,\" - Does the README have content that is not the default generated content?\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Does the addon have a build?\"],[10],[0,\" - Is there a continuous integration build? We answered N/A if there were\\n        not meaningful tests but there was a build.\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[9],[0,\"Score\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Every addon has a score, based on the following conditions:\"],[10],[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for every 'Yes' answer in the review.\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for a recent release (within last 3 months).\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for more than 1 commit within the last 3 months.\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for having more than 1 contributor.\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for having a download count in the last 30 days that is in the top 10% for all addons.\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"1 point is given for having a Github star count in the top 10% of all addons.\"],[10],[0,\"\\n        \"],[7,\"li\"],[9],[0,\"The total score is out of 10.\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        This score is far from perfect. Currently it is biased against any addon not hosted on Github or with an\\n        incorrect repo url. To fix this we are thinking about averaging the Github-reliant portion of the score with\\n        portion provided by npm info and the review.\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[9],[0,\"Actions for addon maintainers\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        In the course of reviewing every ember addon, we opened 52 pull requests to update or fix the repository url in\\n        package.json.\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\"Please fill out your package.json files. Make sure the repo URL is correct and set a good description.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[9],[0,\"Building this site\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        This site, is, itself, an Ember app! It is now open source and available\\n        \"],[7,\"a\"],[11,\"href\",\"https://github.com/emberobserver/client\"],[11,\"rel\",\"noopener\"],[11,\"target\",\"_blank\"],[9],[0,\"here\"],[10],[0,\".\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[9],[0,\"Future goals\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        We have many ideas for where to take this project, but the first step is opening it up to the community. We\\n        expect to hear many great ideas.\\n        One idea that we are sure we will have to tackle, for sustainability, is making the reviews and categorization\\n        community-sourced. More thoughts on that soon, and input is welcome.\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\"\\n        -Katie Gengler, Louis Simons & Phil Gengler\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/addons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "S6ZwK88q",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/addons.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/addons/correct", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZssDzA5W",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-correct with-default-styling\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"isOfficial\"]]],null,{\"statements\":[[0,\"      \"],[1,[21,\"official-icon\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"isCliDependency\"]]],null,{\"statements\":[[0,\"      \"],[1,[21,\"dependency-icon\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[23,[\"model\",\"name\"]],false],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"description\"],[9],[1,[23,[\"model\",\"description\"]],false],[10],[0,\"\\n\\n  \"],[7,\"h2\"],[9],[0,\"Suggest a correction\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Ember Observer is an index of Ember addons. We do not maintain \"],[1,[23,[\"model\",\"name\"]],false],[0,\".\"],[10],[0,\"\\n  \"],[7,\"form\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[23,[\"name\"]],\"Your name\"]]],false],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[23,[\"email\"]],\"Your email address\"]]],false],[0,\"\\n    \"],[1,[27,\"textarea\",null,[[\"value\",\"placeholder\"],[[23,[\"correction\"]],\"Describe what needs correcting\"]]],false],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      \"],[7,\"strong\"],[9],[0,\"Note:\"],[10],[0,\"\\n      Most of the data (other than the reviews) presented for an addon comes from NPM.\\n      If you've updated the \"],[7,\"code\"],[9],[0,\"package.json\"],[10],[0,\" file for an addon, you'll need to push a new release to NPM for\\n      the information to update.\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      A new NPM release also means the addon will be queued up for a new review.\\n    \"],[10],[0,\"\\n    \"],[7,\"input\"],[11,\"class\",\"button\"],[11,\"value\",\"Submit\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"button cancel\"],[11,\"type\",\"button\"],[9],[0,\"Cancel\"],[3,\"action\",[[22,0,[]],\"cancel\"]],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"submitCorrection\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/addons/correct.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/addons/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Hvvv1qRa",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"loading\"],[9],[0,\"\\n  \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/addons/loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/addons/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4OTPBKrb",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-show with-default-styling\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"addon-info\"],[9],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"test-addon-header\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isDeprecated\"]]],null,{\"statements\":[[0,\"        \"],[7,\"label\"],[11,\"class\",\"alert test-addon-flag-deprecation\"],[9],[0,\"DEPRECATED\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isNewAddon\"]]],null,{\"statements\":[[0,\"        \"],[7,\"small\"],[11,\"class\",\"test-addon-flag-new\"],[9],[0,\"NEW!\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[7,\"h1\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isOfficial\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"official-icon\",null,[[\"class\"],[\"test-addon-flag-official\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isCliDependency\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"dependency-icon\",null,[[\"class\"],[\"test-addon-flag-cli-dependency\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[1,[23,[\"addon\",\"name\"]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"p\"],[9],[1,[23,[\"addon\",\"description\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"note\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"addon-note\",null,[[\"content\"],[[23,[\"addon\",\"note\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"ranking\"]]],null,{\"statements\":[[0,\"      \"],[7,\"span\"],[9],[4,\"link-to\",[\"addons.top\"],null,{\"statements\":[[0,\"Ranks #\"],[1,[23,[\"addon\",\"ranking\"]],false],[0,\" of the top 100 addons!\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[1,[27,\"score-detail\",null,[[\"addon\",\"latestReview\",\"hasGithubData\",\"isLatestReleaseInLast3Months\"],[[23,[\"addon\"]],[23,[\"latestReview\"]],[23,[\"hasGithubData\"]],[23,[\"isLatestReleaseInLast3Months\"]]]]],false],[0,\"\\n\\n    \"],[7,\"section\"],[11,\"class\",\"categories\"],[9],[0,\"\\n      \"],[7,\"h4\"],[9],[0,\"Categories\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"inline-category-list\",null,[[\"categories\"],[[23,[\"addon\",\"categories\"]]]]],false],[0,\"\\n\"],[4,\"unless\",[[23,[\"addon\",\"categories\"]]],null,{\"statements\":[[0,\"          This addon hasn't been categorized yet.\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"hasGithubData\"]]],null,{\"statements\":[[0,\"      \"],[7,\"section\"],[11,\"class\",\"repo-info test-github-data\"],[9],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Github\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"addon\",\"isTopStarred\"]]],null,{\"statements\":[[0,\"          \"],[7,\"small\"],[9],[0,\"TOP 10% STARRED\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\"],[11,\"class\",\"stats\"],[9],[0,\"\\n          \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"test-open-issues\"],[9],[1,[23,[\"addon\",\"githubStats\",\"openIssues\"]],false],[7,\"span\"],[9],[1,[27,\"pluralize\",[[23,[\"addon\",\"githubStats\",\"openIssues\"]],\"Open Issue\"],null],false],[10],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"test-forks\"],[9],[1,[23,[\"addon\",\"githubStats\",\"forks\"]],false],[7,\"span\"],[9],[1,[27,\"pluralize\",[[23,[\"addon\",\"githubStats\",\"forks\"]],\"Fork\"],null],false],[10],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"test-stars\"],[9],[1,[23,[\"addon\",\"githubStats\",\"stars\"]],false],[7,\"span\"],[9],[0,\"Starred\"],[10],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"test-contributors\"],[9],[1,[23,[\"addon\",\"githubUsers\",\"length\"]],false],[7,\"span\"],[9],[1,[27,\"pluralize\",[[23,[\"addon\",\"githubUsers\",\"length\"]],\"Contributor\"],null],false],[10],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"commit-stats\"],[9],[0,\"\\n          \"],[7,\"strong\"],[9],[0,\"latest commit\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"test-latest-commit\"],[9],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"addon\",\"githubStats\",\"latestCommitDate\"]]]]],false],[10],[0,\"\\n\\n          \"],[7,\"strong\"],[9],[0,\"first commit\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"test-first-commit\"],[9],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"addon\",\"githubStats\",\"firstCommitDate\"]]]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"latest-review\"],[9],[0,\"\\n      \"],[7,\"h4\"],[9],[0,\"Review\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"latestReview\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"isLatestReviewForLatestVersion\"]]],null,{\"statements\":[[0,\"          \"],[7,\"em\"],[11,\"class\",\"test-review-new-version-warning\"],[9],[1,[27,\"svg-icon\",[\"new-releases\"],null],false],[0,\" New versions of this addon have been released since this review was undertaken.\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[27,\"addon-review\",null,[[\"review\"],[[23,[\"latestReview\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"p\"],[11,\"class\",\"no-review test-no-review\"],[9],[0,\"This addon has not yet been reviewed.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"addon\",\"readme\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"addon\",\"hasInvalidGithubRepo\"]]],null,{\"statements\":[[0,\"        \"],[7,\"section\"],[11,\"class\",\"readme\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"header\"],[9],[0,\"README.md\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"test-addon-readme contents\"],[9],[0,\"\\n            \"],[1,[27,\"markdown-to-sanitized-html\",null,[[\"markdown\",\"tables\",\"ghCodeBlocks\",\"tasklists\",\"simplifiedAutoLink\"],[[23,[\"addon\",\"readme\",\"contents\"]],true,true,true,true]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"addon-stats\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"admin.review.addon\",[23,[\"addon\",\"name\"]]],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"button\"],[9],[0,\"Edit\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n    \"],[1,[27,\"stats-bar\",null,[[\"addon\",\"latestVersion\",\"testResult\",\"isTestResultForLatestVersion\",\"sortedAddonVersions\"],[[23,[\"addon\"]],[23,[\"latestVersion\"]],[23,[\"model\",\"latestTestResult\"]],[23,[\"isTestResultForLatestVersion\"]],[23,[\"sortedAddonVersions\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/addons/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wCQdAan3",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3v8UoSY7",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists/addons-hidden", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "30uWOUjW",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Hidden addons\"],[10],[0,\"\\n\"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists/addons-hidden.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists/addons-needing-categorization", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Qz3kQXPU",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Addons needing categorization\"],[10],[0,\"\\n\"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists/addons-needing-categorization.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists/addons-needing-rereview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fmJCnuPj",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Addons with new updates since their last review\"],[10],[0,\"\\n\"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists/addons-needing-rereview.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists/addons-needing-review", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CX54AWNU",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Addons needing review\"],[10],[0,\"\\n\"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists/addons-needing-review.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/addon-lists/addons-wip", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "98eIFDPL",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"WIP Addons\"],[10],[0,\"\\n\"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/addon-lists/addons-wip.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/build-results", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sPYFYhgm",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/build-results.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/build-results/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7rRJCO7h",
    "block": "{\"symbols\":[\"testResult\"],\"statements\":[[7,\"section\"],[11,\"class\",\"admin-build-result-nav\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"admin.build-results.index\",[27,\"query-params\",null,[[\"date\"],[[23,[\"formattedPreviousDate\"]]]]]],[[\"class\"],[\"previous-day\"]],{\"statements\":[[0,\"    « previous day\\n\"]],\"parameters\":[]},null],[0,\"\\n  Builds for \"],[1,[21,\"formattedDisplayDate\"],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"showFollowingDayLink\"]]],null,{\"statements\":[[4,\"link-to\",[\"admin.build-results.index\",[27,\"query-params\",null,[[\"date\"],[[23,[\"formattedFollowingDate\"]]]]]],[[\"class\"],[\"next-day\"]],{\"statements\":[[0,\"      next day »\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"table\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Addon\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Version\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Date/time\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Result\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Semver string\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\" \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"sortedBuildResults\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[11,\"class\",\"test-build-result\"],[12,\"data-testResultId\",[22,1,[\"id\"]]],[9],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"addons.show\",[22,1,[\"version\",\"addon\",\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,1,[\"version\",\"addon\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[1,[22,1,[\"version\",\"version\"]],false],[10],[0,\"\\n        \"],[7,\"td\"],[9],[1,[27,\"moment-format\",[[22,1,[\"testsRunAt\"]],\"YYYY-MM-DD HH:mm\"],[[\"allowEmpty\"],[true]]],false],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"succeeded\"]]],null,{\"statements\":[[0,\"            succeeded\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            failed - \"],[1,[22,1,[\"statusMessage\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"if\",[[22,1,[\"canary\"]],\"canary\",[22,1,[\"semverString\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"admin.build-results.show\",[22,1,[\"id\"]]],null,{\"statements\":[[0,\"            details\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/build-results/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/build-results/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0qxu8wHO",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"admin-build-result\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"\\n    Build #\"],[1,[23,[\"buildResult\",\"id\"]],false],[0,\"\\n    (\"],[7,\"span\"],[11,\"class\",\"test-addon-name\"],[9],[4,\"link-to\",[\"addons.show\",[23,[\"addon\",\"name\"]]],null,{\"statements\":[[1,[23,[\"addon\",\"name\"]],false]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"test-addon-version\"],[9],[1,[23,[\"addonVersion\",\"version\"]],false],[10],[0,\")\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    Status: \"],[7,\"span\"],[11,\"class\",\"test-build-status\"],[9],[1,[21,\"buildStatus\"],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"canRetryBuild\"]]],null,{\"statements\":[[0,\"      \"],[7,\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"retryBuild\"],null]],[11,\"class\",\"test-retry-build\"],[11,\"type\",\"button\"],[9],[0,\"Retry\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    Tests run at: \"],[7,\"span\"],[11,\"class\",\"test-run-date\"],[9],[1,[27,\"moment-format\",[[23,[\"buildResult\",\"testsRunAt\"]],\"YYYY-MM-DD HH:mm\"],[[\"allowEmpty\"],[true]]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    Semver string:\\n    \"],[7,\"span\"],[11,\"class\",\"test-semver-string\"],[9],[0,\"\\n      \"],[1,[27,\"if\",[[23,[\"buildResult\",\"canary\"]],\"canary\",[23,[\"buildResult\",\"semverString\"]]],null],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"h2\"],[9],[0,\"Output\"],[10],[0,\"\\n  \"],[7,\"pre\"],[11,\"class\",\"test-output\"],[9],[1,[23,[\"buildResult\",\"output\"]],false],[10],[0,\"\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/build-results/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/build-servers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ez6pRmAl",
    "block": "{\"symbols\":[\"buildServer\"],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[7,\"table\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Name\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Token\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[11,\"class\",\"test-build-server-row\"],[9],[0,\"\\n          \"],[7,\"td\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n          \"],[7,\"td\"],[9],[1,[22,1,[\"token\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"form\"],[9],[0,\"\\n    \"],[7,\"fieldset\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"name\"],[9],[0,\"\\n        Name:\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"id\",\"class\"],[\"text\",[23,[\"newBuildServerName\"]],\"name\",\"test-new-build-server-name\"]]],false],[0,\"\\n      \"],[7,\"input\"],[11,\"value\",\"Add\"],[11,\"class\",\"test-add-new-build-server\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"addBuildServer\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/build-servers.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/categories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AJLJOZTW",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/categories.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/categories/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "A1XQhLbN",
    "block": "{\"symbols\":[\"category\",\"category\"],\"statements\":[[7,\"div\"],[11,\"class\",\"admin-categories-edit with-default-styling\"],[9],[0,\"\\n  \"],[7,\"form\"],[9],[0,\"\\n    \"],[7,\"fieldset\"],[9],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"name\"],[9],[0,\"\\n        Name:\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"name\",[23,[\"categoryName\"]]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"description\"],[9],[0,\"\\n        Description:\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"description\",[23,[\"categoryDescription\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"hasSiblingCategories\"]]],null,{\"statements\":[[0,\"        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"position\"],[9],[0,\"\\n          Position:\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"category-position-dropdown\",null,[[\"name\",\"position\",\"updatePosition\",\"categories\"],[\"position\",[23,[\"categoryPosition\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"categoryPosition\"]]],null]],null],[23,[\"sortedSiblingCategories\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"hidden\",\"position\",[23,[\"categoryPosition\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"parent\"],[9],[0,\"\\n        Parent category:\\n      \"],[10],[0,\"\\n\"],[4,\"x-select\",null,[[\"name\",\"value\"],[\"parent\",[23,[\"categoryParent\"]]]],{\"statements\":[[0,\"        \"],[4,\"x-option\",null,null,{\"statements\":[[0,\"(none)\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[23,[\"alphabeticTopLevelCategories\"]]],null,{\"statements\":[[0,\"          \"],[4,\"x-option\",null,[[\"value\"],[[22,2,[\"id\"]]]],{\"statements\":[[1,[22,2,[\"name\"]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"input\"],[11,\"value\",\"Save category\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"updateCategory\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"isTopLevelCategory\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h4\"],[9],[0,\"Subcategories\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"subcategories\"]]],null,{\"statements\":[[0,\"      \"],[7,\"ol\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"subcategories\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.categories.edit\",[22,1,[\"slug\"]]],null,{\"statements\":[[1,[22,1,[\"name\"]],false]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      This category has no subcategories.\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[7,\"form\"],[9],[0,\"\\n      \"],[7,\"fieldset\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"subcategoryName\"],[9],[0,\"\\n          Name:\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"subcategoryName\",[23,[\"newCategoryName\"]]]]],false],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"subcategoryDescription\"],[9],[0,\"\\n          Description:\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"subcategoryDescription\",[23,[\"newCategoryDescription\"]]]]],false],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"subcategoryPosition\"],[9],[0,\"\\n          Position:\\n        \"],[10],[0,\"\\n        \"],[1,[27,\"category-position-dropdown\",null,[[\"name\",\"position\",\"categories\"],[\"subcategoryPosition\",[23,[\"newCategoryPosition\"]],[23,[\"subcategories\"]]]]],false],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"input\"],[11,\"value\",\"Add category\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[3,\"action\",[[22,0,[]],\"addSubcategory\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/categories/edit.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/categories/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZgmKXdUa",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Admin\"],[10],[0,\"\\n\"],[7,\"fieldset\"],[9],[0,\"\\n  \"],[4,\"link-to\",[\"admin.categories.new\"],null,{\"statements\":[[0,\"Add category\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"category-finder\",null,[[\"class\",\"categoryLinkRoute\",\"categories\"],[\"categories-list\",\"admin.categories.edit\",[23,[\"model\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/categories/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/categories/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OkH0nyWd",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\"],[11,\"class\",\"with-default-styling\"],[9],[0,\"\\n  \"],[7,\"fieldset\"],[9],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"name\"],[9],[0,\"\\n      Name:\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"name\",[23,[\"newCategoryName\"]]]]],false],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"description\"],[9],[0,\"\\n      Description:\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"value\"],[\"text\",\"description\",[23,[\"newCategoryDescription\"]]]]],false],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"label\"],[11,\"for\",\"position\"],[9],[0,\"\\n      Position:\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"category-position-dropdown\",null,[[\"name\",\"position\",\"updatePosition\",\"categories\"],[\"position\",[23,[\"newCategoryPosition\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"newCategoryPosition\"]]],null]],null],[23,[\"sortedTopLevelCategories\"]]]]],false],[0,\"\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n    \"],[7,\"input\"],[11,\"class\",\"button\"],[11,\"value\",\"Add category\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"addCategory\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/categories/new.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QsgJ6uMT",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"admin-index\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"Admin\"],[10],[0,\"\\n\\n    \"],[7,\"nav\"],[9],[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.review\"],null,{\"statements\":[[0,\"Review & categorize addons\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.categories.index\"],null,{\"statements\":[[0,\"Categories\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.addon-lists.addons-needing-categorization\"],null,{\"statements\":[[0,\"Addons needing categorization\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.addon-lists.addons-needing-review\"],null,{\"statements\":[[0,\"Addons needing review\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.addon-lists.addons-needing-rereview\"],null,{\"statements\":[[0,\"Addons with new updates since their last review\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.addon-lists.addons-wip\"],null,{\"statements\":[[0,\"WIP Addons\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.addon-lists.addons-hidden\"],null,{\"statements\":[[0,\"Hidden Addons\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.build-results\"],null,{\"statements\":[[0,\"Build results\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"admin.build-servers\"],null,{\"statements\":[[0,\"Manage build servers\"]],\"parameters\":[]},null],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/review", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0YB4RSsB",
    "block": "{\"symbols\":[\"addon\",\"option\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"route-admin-review \",[27,\"if\",[[23,[\"list\"]],\"with-index\"],null]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"review-index test-review-index\"],[9],[0,\"\\n    \"],[7,\"header\"],[11,\"class\",\"list-header\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"test-list-select\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"searchField\",\"dropdownClass\",\"onchange\"],[[23,[\"possibleLists\"]],[23,[\"selectedList\"]],\"title\",\"test-list-select-dropdown\",[27,\"action\",[[22,0,[]],[23,[\"selectList\"]]],null]]],{\"statements\":[[0,\"          \"],[1,[22,2,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"adminLists\",\"find\",\"isRunning\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"addon-count note test-addon-count\"],[9],[1,[23,[\"addons\",\"length\"]],false],[0,\" matching addons\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"adminLists\",\"find\",\"isIdle\"]]],null,{\"statements\":[[0,\"      \"],[7,\"ul\"],[11,\"class\",\"review-addon-list\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"addons\"]]],null,{\"statements\":[[4,\"link-to\",[\"admin.review.addon\",[22,1,[\"name\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[11,\"class\",\"test-review-list-item\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"isDeprecated\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\"],[11,\"class\",\"score deprecated\"],[9],[0,\"x\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"isWip\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\"],[11,\"class\",\"score wip\"],[9],[0,\"WIP\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"score\"]]],null,{\"statements\":[[0,\"                \"],[7,\"span\"],[11,\"class\",\"score\"],[12,\"data-score\",[28,[[22,1,[\"score\"]]]]],[9],[1,[22,1,[\"score\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[7,\"span\"],[11,\"class\",\"score\"],[9],[0,\"?\"],[10],[0,\"\\n              \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"              \"],[7,\"span\"],[11,\"class\",\"review-addon-list-name\"],[9],[0,\"\\n                \"],[1,[22,1,[\"name\"]],false],[0,\"\\n\"],[4,\"if\",[[22,1,[\"isDeprecated\"]]],null,{\"statements\":[[0,\"                  \"],[7,\"span\"],[11,\"class\",\"notice\"],[9],[0,\"(Deprecated)\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"addon-container\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/review.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/admin/review/addon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9i1xy0cX",
    "block": "{\"symbols\":[\"nav\"],\"statements\":[[7,\"nav\"],[11,\"class\",\"nav-previous-next\"],[9],[0,\"\\n\"],[4,\"with\",[[27,\"hash\",null,[[\"previous\",\"next\"],[[27,\"previous-item\",[[23,[\"model\",\"list\",\"addons\"]],[23,[\"model\",\"addon\"]]],null],[27,\"next-item\",[[23,[\"model\",\"list\",\"addons\"]],[23,[\"model\",\"addon\"]]],null]]]]],null,{\"statements\":[[4,\"if\",[[22,1,[\"previous\"]]],null,{\"statements\":[[0,\"      \"],[4,\"link-to\",[\"admin.review.addon\",[22,1,[\"previous\",\"name\"]]],[[\"class\"],[\"previous\"]],{\"statements\":[[0,\"« Previous \"],[7,\"span\"],[11,\"class\",\"nav-detail\"],[9],[0,\"(\"],[1,[22,1,[\"previous\",\"name\"]],false],[0,\")\"],[10]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"previous\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[22,1,[\"next\"]]],null,{\"statements\":[[0,\"      \"],[4,\"link-to\",[\"admin.review.addon\",[22,1,[\"next\",\"name\"]]],[[\"class\"],[\"next\"]],{\"statements\":[[7,\"span\"],[11,\"class\",\"nav-detail\"],[9],[0,\"(\"],[1,[22,1,[\"next\",\"name\"]],false],[0,\")\"],[10],[0,\" Next »\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"next\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addon-area\"],[9],[0,\"\\n  \"],[1,[27,\"admin-addon\",null,[[\"addon\",\"categories\"],[[23,[\"model\",\"addon\"]],[23,[\"model\",\"categories\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/admin/review/addon.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RwAemjv5",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"svg-icons\"],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[7,\"footer\"],[11,\"class\",\"footer\"],[11,\"role\",\"contentinfo\"],[9],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"sponsor\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Sponsored by\"],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"http://www.codeallday.com\"],[9],[7,\"img\"],[11,\"src\",\"/cad-split-lines.png\"],[11,\"alt\",\"Code All Day\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      Created by \"],[7,\"a\"],[11,\"href\",\"http://www.codeallday.com\"],[9],[0,\"Katie Gengler\"],[10],[0,\", \"],[7,\"a\"],[11,\"href\",\"http://louissimons.com/\"],[9],[0,\"Louis Simons\"],[10],[0,\" and \"],[7,\"a\"],[11,\"href\",\"http://pgengler.net\"],[9],[0,\"Phil Gengler\"],[10],[0,\".\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"An open source project hosted on \"],[7,\"a\"],[11,\"href\",\"https://github.com/emberobserver/client\"],[9],[0,\"Github\"],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/canary-test-results", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+UfLrnpG",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/canary-test-results.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/canary-test-results/date", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Nlws+E5F",
    "block": "{\"symbols\":[\"testResult\"],\"statements\":[[7,\"section\"],[11,\"class\",\"admin-build-result-nav\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"canary-test-results.date\",[23,[\"formattedPreviousDate\"]]],[[\"class\"],[\"previous-day\"]],{\"statements\":[[0,\"    « previous day\\n\"]],\"parameters\":[]},null],[0,\"\\n  Canary test results for \"],[1,[21,\"formattedDisplayDate\"],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"showFollowingDayLink\"]]],null,{\"statements\":[[4,\"link-to\",[\"canary-test-results.date\",[23,[\"formattedFollowingDate\"]]],[[\"class\"],[\"next-day\"]],{\"statements\":[[0,\"      next day »\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[1,[27,\"canary-test-result-summary\",null,[[\"testResults\"],[[23,[\"model\",\"testResults\"]]]]],false],[0,\"\\n\\n\"],[7,\"table\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Addon\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Addon Version\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Ember Version\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Result\"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"Details\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"testResults\"]]],null,{\"statements\":[[0,\"      \"],[7,\"tr\"],[11,\"class\",\"canary-test-result\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"addons.show\",[22,1,[\"version\",\"addon\",\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[22,1,[\"version\",\"addon\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[22,1,[\"version\",\"version\"]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[22,1,[\"emberVersionCompatibilities\",\"firstObject\",\"emberVersion\"]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[12,\"class\",[28,[\"test-result \",[27,\"test-result-status-class\",[[22,1,[]]],null]]]],[9],[0,\"\\n          \"],[1,[27,\"test-result-status\",null,[[\"testResult\"],[[22,1,[]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"canary-test-results.detail\",[22,1,[\"id\"]]],null,{\"statements\":[[0,\"            View\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/canary-test-results/date.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/canary-test-results/detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3Ud1B1K5",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"test-result-detail\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"\\n    \"],[1,[23,[\"addon\",\"name\"]],false],[0,\" \"],[1,[23,[\"addonVersion\",\"version\"]],false],[0,\"\\n    against \"],[1,[27,\"canary-version\",[[23,[\"testResult\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    Status: \"],[1,[27,\"test-result-status\",null,[[\"testResult\"],[[23,[\"testResult\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[9],[0,\"\\n    Tests run at: \"],[7,\"span\"],[11,\"class\",\"test-run-date\"],[9],[1,[27,\"moment-format\",[[23,[\"testResult\",\"testsRunAt\"]],\"YYYY-MM-DD HH:mm\"],[[\"allowEmpty\"],[true]]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"h2\"],[9],[0,\"Output\"],[10],[0,\"\\n  \"],[7,\"pre\"],[11,\"class\",\"test-output\"],[9],[1,[23,[\"testResult\",\"output\"]],false],[10],[0,\"\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/canary-test-results/detail.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/categories", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hMycb/iI",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[true]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/categories.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/categories/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "094ypk0O",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"loading\"],[9],[0,\"\\n  \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/categories/loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/categories/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ebfa+OnK",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"categories-show\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"details\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"category-details\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"test-category-header\"],[9],[1,[23,[\"category\",\"name\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"description test-category-description\"],[9],[0,\"\\n        \"],[1,[23,[\"category\",\"description\"]],false],[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"category\",\"parent\"]]],null,{\"statements\":[[0,\"          Subcategory of \"],[4,\"link-to\",[\"categories.show\",[23,[\"category\",\"parent\",\"slug\"]]],[[\"class\"],[\"test-parent-category-link\"]],{\"statements\":[[1,[23,[\"category\",\"parent\",\"name\"]],false],[0,\" (\"],[1,[23,[\"category\",\"parent\",\"totalAddonCount\"]],false],[0,\")\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"hasSubcategories\"]]],null,{\"statements\":[[0,\"        \"],[7,\"h6\"],[9],[0,\"Subcategories\"],[10],[0,\"\\n        \"],[1,[27,\"inline-category-list\",null,[[\"categories\",\"showAddonCount\",\"showWithoutParent\"],[[23,[\"category\",\"subcategories\"]],true,true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"sort-controls\"],[9],[0,\"\\n      Sort by:\\n      \"],[7,\"div\"],[11,\"class\",\"button-select\"],[9],[0,\"\\n        \"],[1,[27,\"sort-option\",null,[[\"name\",\"key\",\"selectedSort\",\"sortBy\"],[\"Score\",\"score\",[23,[\"addonSortKey\"]],\"sortBy\"]]],false],[0,\"\\n        \"],[1,[27,\"sort-option\",null,[[\"name\",\"key\",\"selectedSort\",\"sortBy\"],[\"Name\",\"name\",[23,[\"addonSortKey\"]],\"sortBy\"]]],false],[0,\"\\n        \"],[1,[27,\"sort-option\",null,[[\"name\",\"key\",\"selectedSort\",\"sortBy\"],[\"Updated\",\"latestVersionDate\",[23,[\"addonSortKey\"]],\"sortBy\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"addons\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"addon-count test-addon-table-count\"],[9],[0,\"Displaying \"],[1,[27,\"pluralize-this\",[[23,[\"sortedAddons\",\"length\"]],\"addon\"],null],false],[10],[0,\"\\n    \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"sortedAddons\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/categories/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/code-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5Ytzfo4d",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[1,[27,\"code-search\",null,[[\"codeQuery\",\"sort\",\"sortAscending\",\"regex\",\"fileFilter\"],[[23,[\"codeQuery\"]],[23,[\"sort\"]],[23,[\"sortAscending\"]],[23,[\"regex\"]],[23,[\"fileFilter\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/code-search.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tcZJCqyF",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"showRanking\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\"],[11,\"class\",\"ranking\"],[9],[0,\"#\"],[1,[23,[\"addon\",\"ranking\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"addon\",\"isDeprecated\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score deprecated\"],[9],[0,\"x\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"addon\",\"isWip\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score wip\"],[9],[0,\"WIP\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"addon\",\"score\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score\"],[12,\"data-score\",[28,[[23,[\"addon\",\"score\"]]]]],[9],[1,[23,[\"addon\",\"score\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score\"],[9],[0,\"?\"],[10],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[7,\"div\"],[11,\"class\",\"desc\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"addons.show\",[23,[\"addon\",\"name\"]]],[[\"class\"],[\"addon-link test-addon-name\"]],{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"addon-name\"],[9],[0,\"\\n      \"],[1,[23,[\"addon\",\"name\"]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isDeprecated\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"notice\"],[9],[0,\"\\n          (Deprecated)\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isOfficial\"]]],null,{\"statements\":[[0,\"      \"],[1,[21,\"official-icon\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"addon\",\"isCliDependency\"]]],null,{\"statements\":[[0,\"      \"],[1,[21,\"dependency-icon\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"small\"],[9],[0,\"- \"],[1,[23,[\"addon\",\"description\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"small\"],[9],[1,[27,\"inline-category-list\",null,[[\"categories\"],[[23,[\"addon\",\"categories\"]]]]],false],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"last-updated\"],[9],[0,\"Last updated \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"addon\",\"latestVersionDate\"]]]]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-details.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+N2JvJcy",
    "block": "{\"symbols\":[\"addon\",\"&default\"],\"statements\":[[7,\"ul\"],[11,\"class\",\"addon-list\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"addons\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[11,\"class\",\"test-addon-row\"],[9],[0,\"\\n      \"],[1,[27,\"addon-details\",null,[[\"addon\",\"showRanking\"],[[22,1,[]],[23,[\"showRanking\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[14,2],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-list.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-note", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "j4grYS4V",
    "block": "{\"symbols\":[],\"statements\":[[7,\"legend\"],[9],[0,\"Note\"],[10],[0,\"\\n\"],[1,[27,\"markdown-to-sanitized-html\",null,[[\"markdown\",\"tables\",\"ghCodeBlocks\",\"tasklists\",\"simplifiedAutoLink\"],[[23,[\"content\"]],true,true,true,true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-note.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-review-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "An1JPueO",
    "block": "{\"symbols\":[\"question\"],\"statements\":[[7,\"h4\"],[9],[0,\"Review this addon\"],[10],[0,\"\\n\"],[7,\"form\"],[11,\"class\",\"review-form\"],[9],[0,\"\\n  \"],[7,\"fieldset\"],[9],[0,\"\\n    \"],[7,\"ol\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"questions\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"question\"],[9],[1,[22,1,[\"text\"]],false],[10],[0,\"\\n          \"],[1,[27,\"radio-button-set\",null,[[\"selectOption\",\"valueField\",\"options\",\"class\"],[[27,\"action\",[[22,0,[]],\"selectOption\"],null],[22,1,[\"fieldName\"]],[23,[\"questionOptions\"]],\"question-radio-buttons test-question-buttons\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n    \"],[1,[27,\"textarea\",null,[[\"value\",\"class\"],[[23,[\"review\",\"review\"]],\"test-addon-review-notes\"]]],false],[0,\"\\n    \"],[7,\"input\"],[11,\"class\",\"button test-addon-review-save\"],[11,\"value\",\"Create Review\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"save\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"review\",\"review\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"markdown-to-html\",null,[[\"markdown\"],[[23,[\"review\",\"review\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-review-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-review", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "2ZCbT09u",
    "block": "{\"symbols\":[\"question\"],\"statements\":[[4,\"if\",[[23,[\"review\"]]],null,{\"statements\":[[0,\"  \"],[7,\"p\"],[11,\"class\",\"review-date\"],[9],[0,\"\\n    Manually reviewed on \"],[1,[27,\"moment-format\",[[23,[\"review\",\"createdAt\"]],\"MMMM Do YYYY\"],[[\"allowEmpty\"],[true]]],false],[0,\" for version \"],[1,[23,[\"review\",\"version\",\"version\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"ol\"],[11,\"class\",\"questions\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"answeredQuestions\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[11,\"class\",\"test-review-question\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"question\"],[9],[1,[22,1,[\"text\"]],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"answer\"],[9],[1,[22,1,[\"answer\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"review\",\"review\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h6\"],[9],[0,\"Comments\"],[10],[0,\"\\n    \"],[7,\"fieldset\"],[11,\"class\",\"test-review-notes\"],[9],[0,\"\\n      \"],[1,[27,\"markdown-to-html\",null,[[\"markdown\"],[[23,[\"review\",\"review\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-review.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-source-usages", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ja7hwV1C",
    "block": "{\"symbols\":[\"usage\",\"line\"],\"statements\":[[7,\"div\"],[11,\"class\",\"usage-count\"],[9],[0,\"\\n  \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"test-usage-count\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showUsages\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"svg-icon\",[\"expand-more\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"svg-icon\",[\"chevron-right\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[1,[21,\"count\"],false],[0,\" \"],[1,[27,\"pluralize\",[[23,[\"count\"]],\"usage\"],null],false],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],\"toggleUsages\"]],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showUsages\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"usages\"]]],null,{\"statements\":[[4,\"each\",[[23,[\"visibleUsages\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"usage test-usage\"],[9],[0,\"\\n          \"],[7,\"a\"],[11,\"class\",\"filename\"],[12,\"href\",[28,[[27,\"clean-repo-url\",[[23,[\"addon\",\"repositoryUrl\"]]],null],\"/tree/master/\",[22,1,[\"filename\"]],\"#L\",[22,1,[\"line_number\"]]]]],[9],[0,\"\\n            \"],[1,[22,1,[\"filename\"]],false],[0,\":\"],[1,[22,1,[\"line_number\"]],false],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"each\",[[22,1,[\"lines\"]]],null,{\"statements\":[[0,\"            \"],[7,\"pre\"],[11,\"class\",\"line\"],[9],[7,\"span\"],[11,\"class\",\"number\"],[9],[1,[27,\"pad-line-number\",[[22,2,[\"number\"]],[22,1,[\"lines\"]]],null],false],[10],[7,\"span\"],[12,\"class\",[28,[[27,\"if\",[[27,\"is-equal\",[[22,1,[\"line_number\"]],[22,2,[\"number\"]]],null],\"match\"],null]]]],[9],[1,[22,2,[\"text\"]],false],[10],[10],[0,\"\"]],\"parameters\":[2]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"moreUsages\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"view-more\"],[9],[0,\"\\n          See more usages\\n        \"],[3,\"action\",[[22,0,[]],\"viewMore\"]],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"fetchUsages\",\"isRunning\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"usage\"],[9],[0,\"\\n        \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-source-usages.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-version-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KDGpbzIN",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"moment-format\",[[23,[\"version\",\"released\"]],\"YYYY-MMM-DD\"],[[\"allowEmpty\"],[true]]],false],[0,\" \"],[7,\"span\"],[11,\"class\",\"version-number\"],[9],[1,[23,[\"version\",\"version\"]],false],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-version-item.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/addon-version-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gpjZ+adB",
    "block": "{\"symbols\":[\"version\"],\"statements\":[[7,\"ul\"],[11,\"class\",\"versions test-addon-versions\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"combinedVersions\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"isEmber\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"ember-version-item\",null,[[\"version\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"addon-version-item\",null,[[\"version\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"thereAreHiddenVersions\"]]],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"Show all versions\"],[3,\"action\",[[22,0,[]],\"showAllVersions\"]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/addon-version-list.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/admin-addon-review-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "r0BKY+yL",
    "block": "{\"symbols\":[\"question\",\"btn\"],\"statements\":[[7,\"h5\"],[9],[0,\"Review this addon\"],[10],[0,\"\\n\"],[7,\"form\"],[11,\"class\",\"review-form\"],[9],[0,\"\\n  \"],[7,\"ol\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"questions\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[11,\"class\",\"test-review-question\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"question\"],[9],[1,[22,1,[\"text\"]],false],[10],[0,\"\\n\"],[4,\"exclusive-button-group\",null,[[\"selectedValue\",\"updateSelectedValue\"],[[27,\"get\",[[23,[\"reviewProperties\"]],[22,1,[\"fieldName\"]]],null],[27,\"action\",[[22,0,[]],[23,[\"selectOption\"]],[22,1,[\"fieldName\"]]],null]]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,2,[]]],[[\"value\",\"label\"],[1,\"Yes\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[]]],[[\"value\",\"label\"],[2,\"No\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[]]],[[\"value\",\"label\"],[3,\"N/A\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[]]],[[\"value\",\"label\"],[4,\"Unknown\"]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n  \"],[1,[27,\"textarea\",null,[[\"value\",\"class\"],[[23,[\"reviewText\"]],\"test-addon-review-notes\"]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"reviewText\"]]],null,{\"statements\":[[0,\"    \"],[7,\"fieldset\"],[9],[0,\"\\n      \"],[1,[27,\"markdown-to-html\",null,[[\"markdown\"],[[23,[\"reviewText\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"saveReview\",\"isIdle\"]]],null,{\"statements\":[[0,\"    \"],[7,\"input\"],[11,\"class\",\"button test-addon-review-save\"],[11,\"value\",\"Create Review\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"input\"],[11,\"class\",\"button\"],[11,\"value\",\"Saving...\"],[11,\"disabled\",\"\"],[11,\"type\",\"submit\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"recentlySaved\"]]],null,{\"statements\":[[0,\"    \"],[7,\"b\"],[9],[0,\"Saved!\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[3,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"saveReview\"]]],null]],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/admin-addon-review-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/admin-addon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FvYdwmk2",
    "block": "{\"symbols\":[\"val\",\"keyword\",\"value\",\"separator\"],\"statements\":[[7,\"h2\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"addons.show\",[23,[\"addon\",\"name\"]]],[[\"class\"],[\"test-addon-link\"]],{\"statements\":[[0,\"    \"],[1,[23,[\"addon\",\"name\"]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isOfficial\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"official-icon\",null,[[\"class\"],[\"test-official-icon\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"addon\",\"isCliDependency\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"dependency-icon\",null,[[\"class\"],[\"test-cli-dep-icon\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"addon-info\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"test-last-updated\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[1,[23,[\"addon\",\"latestAddonVersion\",\"version\"]],false],[10],[0,\" from \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"addon\",\"latestVersionDate\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"test-description\"],[9],[7,\"b\"],[9],[0,\"description\"],[10],[0,\" \"],[1,[23,[\"addon\",\"description\"]],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"demoUrl\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"test-addon-demo-url\"],[9],[0,\"\\n      \"],[7,\"b\"],[9],[0,\"demo\"],[10],[0,\" \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"addon\",\"demoUrl\"]]]]],[9],[1,[23,[\"addon\",\"demoUrl\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[11,\"class\",\"test-addon-package-url\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"package\"],[10],[0,\" \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"addon\",\"npmUrl\"]]]]],[9],[1,[23,[\"addon\",\"npmUrl\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"test-addon-license\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"license\"],[10],[0,\" \"],[1,[23,[\"addon\",\"license\"]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"npm keywords\"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"addon\",\"keywords\"]]],null,{\"statements\":[[4,\"comma-separated\",null,[[\"list\",\"item\"],[[23,[\"addon\",\"keywords\"]],[22,2,[]]]],{\"statements\":[[0,\"        \"],[1,[22,3,[\"keyword\"]],false],[1,[22,4,[]],false],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"ranking\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[9],[4,\"link-to\",[\"addons.top\"],null,{\"statements\":[[0,\"Ranks #\"],[1,[23,[\"addon\",\"ranking\"]],false],[0,\" of the top 100 addons!\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"score-display\",null,[[\"addon\"],[[23,[\"addon\"]]]],{\"statements\":[[0,\"    Score \"],[7,\"b\"],[11,\"class\",\"test-score\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[7,\"label\"],[9],[0,\"Repo URL\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"repositoryUrl\"]]],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[12,\"href\",[28,[[23,[\"addon\",\"repositoryUrl\"]]]]],[11,\"target\",\"repo\"],[11,\"class\",\"test-repo-url\"],[9],[1,[23,[\"addon\",\"repositoryUrl\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"em\"],[9],[0,\"Missing\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"a\"],[12,\"href\",[28,[\"https://www.google.com/search?q=%22\",[23,[\"addon\",\"name\"]],\"%22\"]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[11,\"title\",\"Search Google\"],[9],[0,\" \"],[1,[27,\"svg-icon\",[\"google\"],null],false],[10],[0,\"\\n  |\\n  \"],[7,\"a\"],[12,\"href\",[28,[\"https://github.com/search?q=%22\",[23,[\"addon\",\"name\"]],\"%22\"]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noopener\"],[11,\"title\",\"Search GitHub\"],[9],[1,[27,\"svg-icon\",[\"github\"],null],false],[10],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"name\",\"class\"],[[27,\"if\",[[23,[\"addon\",\"hasInvalidGithubRepo\"]],\"Has invalid Repo URL\",\"Has valid Repo URL\"],null],[27,\"not\",[[23,[\"addon\",\"hasInvalidGithubRepo\"]]],null],[27,\"action\",[[22,0,[]],[23,[\"updateInvalidRepoFlag\"]]],null],\"repo\",\"test-toggle-repo-validity\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"toggles\"],[9],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"name\",\"class\"],[[27,\"if\",[[23,[\"addon\",\"isWip\"]],\"Is a WIP\",\"Not a WIP\"],null],[27,\"not\",[[23,[\"addon\",\"isWip\"]]],null],[27,\"action\",[[22,0,[]],[23,[\"updateIsWipFlag\"]]],null],\"wip\",\"test-toggle-is-wip\"]]],false],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"name\",\"class\"],[[27,\"if\",[[23,[\"addon\",\"isDeprecated\"]],\"Deprecated\",\"Active\"],null],[27,\"not\",[[23,[\"addon\",\"isDeprecated\"]]],null],[27,\"action\",[[22,0,[]],[23,[\"updateIsDeprecatedFlag\"]]],null],\"deprecated\",\"test-toggle-is-deprecated\"]]],false],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"class\",\"name\"],[[27,\"if\",[[23,[\"addon\",\"isHidden\"]],\"Hidden\",\"Visible\"],null],[27,\"not\",[[23,[\"addon\",\"isHidden\"]]],null],[27,\"action\",[[22,0,[]],[23,[\"updateIsHiddenFlag\"]]],null],\"hidden-toggle test-toggle-is-hidden\",\"hidden\"]]],false],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"name\",\"class\"],[\"Is Official?\",[23,[\"addon\",\"isOfficial\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"addon\",\"isOfficial\"]]],null]],null],\"official\",\"test-toggle-is-official\"]]],false],[0,\"\\n  \"],[1,[27,\"toggle-switch\",null,[[\"label\",\"isChecked\",\"onToggle\",\"name\",\"class\"],[\"Is CLI Dependency?\",[23,[\"addon\",\"isCliDependency\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"addon\",\"isCliDependency\"]]],null]],null],\"cli-dep\",\"test-toggle-is-cli-dep\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"with-default-styling\"],[9],[0,\"\\n  \"],[7,\"label\"],[9],[0,\"Note\"],[10],[0,\"\\n  \"],[1,[27,\"textarea\",null,[[\"value\",\"rows\",\"class\"],[[23,[\"addon\",\"note\"]],\"3\",\"note-input test-note-input\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n  \"],[1,[27,\"category-chooser\",null,[[\"categories\",\"addon\",\"onchange\"],[[23,[\"categories\"]],[23,[\"addon\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"addon\",\"categories\"]]],null]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"saveAddon\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"button\"],[11,\"disabled\",\"\"],[9],[0,\"Saving...\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"button test-save-addon\"],[9],[0,\"Save\"],[3,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"saveAddon\"]]],null]]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"div\"],[11,\"class\",\"note\"],[9],[0,\"Last saved \"],[1,[27,\"moment-from-now\",[[23,[\"addon\",\"updatedAt\"]]],[[\"allowEmpty\"],[true]]],false],[0,\" (\"],[1,[27,\"moment-format\",[[23,[\"addon\",\"updatedAt\"]],\"MMMM DD, YYYY h:mm:ss\"],[[\"allowEmpty\"],[true]]],false],[0,\")\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"latest-review\"],[9],[0,\"\\n  \"],[7,\"h5\"],[11,\"class\",\"header\"],[9],[0,\"Latest Review\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"contents\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"latestReview\"]]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"addon\",\"latestReview\",\"version\",\"version\"]],[23,[\"addon\",\"latestAddonVersion\",\"version\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"em\"],[11,\"class\",\"test-review-new-version-warning\"],[9],[1,[27,\"svg-icon\",[\"new-releases\"],null],false],[0,\" New versions of this addon have been released since this review was undertaken.\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[27,\"addon-review\",null,[[\"review\"],[[23,[\"addon\",\"latestReview\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"renewLatestReview\",\"isIdle\"]]],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"button test-renew-latest-review\"],[9],[0,\"Renew Review\"],[3,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"renewLatestReview\"]]],null]]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"disabled\",\"\"],[11,\"class\",\"button\"],[9],[0,\"Saving...\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"recentlyRenewed\"]]],null,{\"statements\":[[0,\"        \"],[7,\"b\"],[9],[0,\"Saved!\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"no-review test-no-review\"],[9],[0,\"This addon has not yet been reviewed.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"with-default-styling\"],[9],[0,\"\\n      \"],[1,[27,\"admin-addon-review-form\",null,[[\"addon\"],[[23,[\"addon\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"readme\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"addon\",\"hasInvalidGithubRepo\"]]],null,{\"statements\":[[0,\"      \"],[7,\"section\"],[11,\"class\",\"readme\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"header\"],[9],[0,\"README.md\"],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"test-addon-readme contents\"],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-sanitized-html\",null,[[\"markdown\",\"tables\",\"ghCodeBlocks\",\"tasklists\",\"simplifiedAutoLink\"],[[23,[\"addon\",\"readme\",\"contents\"]],true,true,true,true]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/admin-addon.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/canary-test-result-summary", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "KQgX7pr9",
    "block": "{\"symbols\":[],\"statements\":[[7,\"table\"],[11,\"class\",\"test-result-summary-table\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"\\n        Status\\n      \"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"\\n        Number of builds\\n      \"],[10],[0,\"\\n      \"],[7,\"th\"],[9],[0,\"\\n        Percent of builds\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"test-result passed\"],[9],[0,\"\\n        Passed\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"numberOfPassedBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"formattedPercentOfPassedBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"test-result failed\"],[9],[0,\"\\n        Failed\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"numberOfFailedBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"formattedPercentOfFailedBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"test-result error\"],[9],[0,\"\\n        Error\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"numberOfErrorBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"\\n        \"],[1,[21,\"formattedPercentOfErrorBuilds\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/canary-test-result-summary.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/category-chooser", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oYmDbeld",
    "block": "{\"symbols\":[\"category\",\"option\"],\"statements\":[[7,\"div\"],[11,\"class\",\"test-category-chooser\"],[9],[0,\"\\n\"],[4,\"power-select-multiple\",null,[[\"options\",\"selected\",\"searchField\",\"dropdownClass\",\"placeholder\",\"onchange\"],[[23,[\"sortedCategories\"]],[23,[\"addon\",\"categories\"]],\"displayName\",\"test-category-chooser-dropdown\",\"Select categories\",[23,[\"onchange\"]]]],{\"statements\":[[0,\"    \"],[1,[22,1,[\"displayName\"]],false],[0,\" \"],[4,\"if\",[[27,\"not\",[[27,\"includes\",[[22,2,[\"selected\"]],[22,1,[]]],null]],null]],null,{\"statements\":[[4,\"if\",[[22,1,[\"description\"]]],null,{\"statements\":[[0,\"· \"],[7,\"span\"],[11,\"class\",\"category-chooser-description\"],[9],[1,[22,1,[\"description\"]],false],[10]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1,2]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/category-chooser.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/category-finder", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BxK5I1rl",
    "block": "{\"symbols\":[\"category\",\"subcategory\"],\"statements\":[[7,\"h2\"],[11,\"id\",\"title\"],[9],[0,\"Categories\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"sortedTopLevelCategories\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[12,\"title\",[28,[[22,1,[\"description\"]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"categoryLinkRoute\"]],[22,1,[\"slug\"]]],[[\"class\"],[\"test-category\"]],{\"statements\":[[0,\"        \"],[1,[22,1,[\"name\"]],false],[0,\" (\"],[1,[22,1,[\"totalAddonCount\"]],false],[0,\")\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[22,1,[\"subcategories\"]]],null,{\"statements\":[[4,\"each\",[[22,1,[\"subcategories\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"indent\"],[12,\"title\",[28,[[22,2,[\"description\"]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"categoryLinkRoute\"]],[22,2,[\"slug\"]]],[[\"class\"],[\"test-subcategory\"]],{\"statements\":[[0,\"            \"],[7,\"span\"],[11,\"class\",\"bullet\"],[9],[0,\"■\"],[10],[0,\"\\n            \"],[1,[22,2,[\"name\"]],false],[0,\" (\"],[1,[22,2,[\"totalAddonCount\"]],false],[0,\")\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/category-finder.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/category-position-dropdown", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "e16KZQ+X",
    "block": "{\"symbols\":[\"xs\",\"category\"],\"statements\":[[4,\"x-select\",null,[[\"value\",\"action\"],[[23,[\"position\"]],[23,[\"updatePosition\"]]]],{\"statements\":[[0,\"  \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"option\"]],\"expected `xs.option` to be a contextual component but found a string. Did you mean `(component xs.option)`? ('ember-observer/templates/components/category-position-dropdown.hbs' @ L2:C5) \"],null]],[[\"value\"],[-1]],{\"statements\":[[0,\"At end\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[23,[\"categories\"]]],null,{\"statements\":[[0,\"    \"],[4,\"component\",[[27,\"-assert-implicit-component-helper-argument\",[[22,1,[\"option\"]],\"expected `xs.option` to be a contextual component but found a string. Did you mean `(component xs.option)`? ('ember-observer/templates/components/category-position-dropdown.hbs' @ L4:C7) \"],null]],[[\"value\"],[[22,2,[\"position\"]]]],{\"statements\":[[0,\"Before \\\"\"],[1,[22,2,[\"name\"]],false],[0,\"\\\"\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/category-position-dropdown.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/code-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Nw5Ig3Pq",
    "block": "{\"symbols\":[\"result\"],\"statements\":[[7,\"h1\"],[9],[0,\"Code Search\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"search-wrapper with-default-styling\"],[9],[0,\"\\n  \"],[7,\"form\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"search-wrapper-inner\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"placeholder\",\"autocomplete\",\"id\",\"spellcheck\",\"value\"],[\"search\",\"Search for addons containing code\",\"off\",\"code-search-input\",\"false\",[23,[\"searchInput\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"codeQuery\"]]],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"close-button test-clear-search\"],[11,\"type\",\"button\"],[9],[1,[27,\"svg-icon\",[\"close\"],null],false],[3,\"action\",[[22,0,[]],[23,[\"clearSearch\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"search-actions\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"id\",\"class\",\"checked\"],[\"checkbox\",\"regex-toggle\",\"test-regex-search\",[23,[\"regex\"]]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"regex-toggle\"],[9],[0,\"Regex search\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"regex\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"https://github.com/google/re2/wiki/Syntax\"],[11,\"class\",\"regex-help test-regex-help\"],[11,\"rel\",\"noopener\"],[11,\"target\",\"_blank\"],[9],[0,\"(re2 syntax)\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"test-submit-search button\"],[11,\"type\",\"submit\"],[9],[0,\"Search\"],[10],[0,\"\\n  \"],[3,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"search\"]]],null]],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"results\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"result-details\"],[9],[0,\"\\n    \"],[7,\"h5\"],[11,\"class\",\"test-last-search test-result-info\"],[9],[0,\"\\n      Results for \"],[1,[21,\"quotedLastSearch\"],false],[0,\" — Found \"],[1,[27,\"pluralize-this\",[[23,[\"results\",\"length\"]],\"addon\"],null],false],[0,\" (\"],[1,[27,\"pluralize-this\",[[23,[\"totalUsageCount\"]],\"usage\"],null],false],[0,\")\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"result-controls\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"filter-controls\"],[9],[0,\"\\n      \"],[7,\"h6\"],[9],[0,\"Filter by file path\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"filter-input\"],[9],[0,\"\\n        \"],[7,\"input\"],[12,\"value\",[21,\"fileFilter\"]],[12,\"oninput\",[27,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"applyFileFilter\"]]],null]],[[\"value\"],[\"target.value\"]]]],[11,\"class\",\"test-file-filter-input\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"isFilterApplied\"]]],null,{\"statements\":[[0,\"          \"],[7,\"button\"],[11,\"class\",\"close-button test-clear-file-filter\"],[11,\"type\",\"button\"],[9],[1,[27,\"svg-icon\",[\"close\"],[[\"alignBaseline\"],[false]]],false],[3,\"action\",[[22,0,[]],[23,[\"clearFileFilter\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"isDisplayingFilteredResults\"]]],null,{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"filter-results test-filtered-result-info\"],[9],[0,\"\\n          Filtered to \"],[1,[27,\"pluralize-this\",[[23,[\"filteredResults\",\"length\"]],\"addon\"],null],false],[0,\" (\"],[1,[27,\"pluralize-this\",[[23,[\"totalFilteredUsageCount\"]],\"usage\"],null],false],[0,\")\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"sort-controls\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"button-select test-sort\"],[9],[0,\"\\n\"],[4,\"sort-order-option\",null,[[\"key\",\"selectedSort\",\"sortAscending\",\"sortBy\"],[\"name\",[23,[\"sort\"]],[23,[\"sortAscending\"]],[27,\"action\",[[22,0,[]],[23,[\"sortBy\"]]],null]]],{\"statements\":[[0,\"          Name\\n\"]],\"parameters\":[]},null],[4,\"sort-order-option\",null,[[\"key\",\"selectedSort\",\"sortAscending\",\"sortBy\"],[\"usages\",[23,[\"sort\"]],[23,[\"sortAscending\"]],[27,\"action\",[[22,0,[]],[23,[\"sortBy\"]]],null]]],{\"statements\":[[0,\"          Usages\\n\"]],\"parameters\":[]},null],[4,\"sort-order-option\",null,[[\"key\",\"selectedSort\",\"sortAscending\",\"sortBy\"],[\"score\",[23,[\"sort\"]],[23,[\"sortAscending\"]],[27,\"action\",[[22,0,[]],[23,[\"sortBy\"]]],null]]],{\"statements\":[[0,\"          Score\\n\"]],\"parameters\":[]},null],[4,\"sort-order-option\",null,[[\"key\",\"selectedSort\",\"sortAscending\",\"sortBy\"],[\"updated\",[23,[\"sort\"]],[23,[\"sortAscending\"]],[27,\"action\",[[22,0,[]],[23,[\"sortBy\"]]],null]]],{\"statements\":[[0,\"          Updated\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"ul\"],[11,\"class\",\"addon-list\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isUpdatingResults\"]]],null,{\"statements\":[[0,\"      \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[23,[\"displayingResults\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[12,\"data-id\",[28,[[22,1,[\"addon\",\"id\"]]]]],[9],[0,\"\\n          \"],[1,[27,\"addon-details\",null,[[\"addon\"],[[22,1,[\"addon\"]]]]],false],[0,\"\\n          \"],[1,[27,\"addon-source-usages\",null,[[\"addon\",\"count\",\"query\",\"regex\",\"fileFilter\"],[[22,1,[\"addon\"]],[22,1,[\"count\"]],[23,[\"codeQuery\"]],[23,[\"regex\"]],[23,[\"fileFilter\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"canViewMore\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"view-more test-view-more\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"See more results\"],[10],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],[23,[\"viewMore\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"search\",\"isRunning\"]]],null,{\"statements\":[[0,\"  \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"hasSearchedAndNoResults\"]]],null,{\"statements\":[[0,\"  \"],[7,\"h4\"],[11,\"class\",\"result-info\"],[9],[0,\"No addons found containing \"],[1,[21,\"quotedLastSearch\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/code-search.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/comma-separated", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6hu8uA4U",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,[\"item\"]],[23,[\"separator\"]]]],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/comma-separated.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/dependency-icon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QWyX02TO",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"svg-icon\",[\"stars\"],[[\"class\",\"title\"],[[27,\"concat\",[\"dependency \",[23,[\"class\"]]],null],\"Dependency of newly generated Ember-CLI applications\"]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/dependency-icon.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/dot-spinner", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PAfqnmN7",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"spinner\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"bounce1\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"bounce2\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"bounce3\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/dot-spinner.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/ember-version-compatibility-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0spAZq6O",
    "block": "{\"symbols\":[\"versionCompatibility\"],\"statements\":[[7,\"p\"],[9],[0,\"\\n  \"],[7,\"table\"],[11,\"class\",\"ember-version-compatibility-list test-ember-version-compatibility-list\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Ember Version\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Compatible?\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"versionCompatibilities\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[11,\"class\",\"test-ember-version-compatibility-item\"],[9],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"test-ember-version-compatibility-ember-version\"],[9],[1,[22,1,[\"emberVersion\"]],false],[10],[0,\"\\n          \"],[7,\"td\"],[11,\"class\",\"test-ember-version-compatibility-test-result\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"compatible\"]]],null,{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"result-passed\"],[9],[0,\"yes\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"result-failed\"],[9],[0,\"no\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/ember-version-compatibility-list.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/ember-version-compatibility", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cM+1dPZy",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"ember-version-compatibility test-ember-version-compatibility-section\"],[9],[0,\"\\n  \"],[7,\"h6\"],[9],[0,\"ember compatibility\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"testResult\",\"succeeded\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"allTestsPassed\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"test-ember-version-compatibility-semver-compat\"],[9],[0,\"\\n          All tests pass with Ember \"],[1,[21,\"compatibilitySemverString\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"br\"],[9],[10],[0,\"\\n        \"],[7,\"em\"],[11,\"class\",\"test-ember-version-compatibility-timestamp\"],[9],[0,\"\\n          last ran \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"testResult\",\"testsRunAt\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showTable\"]]],null,{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"info-action test-ember-version-compatibility-show-table\"],[9],[0,\"Hide results\"],[3,\"action\",[[22,0,[]],\"toggleShowTable\"]],[10],[0,\"\\n        \"],[1,[27,\"ember-version-compatibility-list\",null,[[\"versionCompatibilities\"],[[23,[\"sortedVersionCompatibilities\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"info-action test-ember-version-compatibility-show-table\"],[9],[0,\"Show detailed results\"],[3,\"action\",[[22,0,[]],\"toggleShowTable\"]],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"      Tests run against Ember \"],[1,[21,\"compatibilitySemverString\"],false],[0,\" but not all tests passed.\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"em\"],[11,\"class\",\"test-ember-version-compatibility-timestamp\"],[9],[0,\"\\n        last ran \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"testResult\",\"testsRunAt\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"ember-version-compatibility-list\",null,[[\"versionCompatibilities\"],[[23,[\"sortedVersionCompatibilities\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"test-ember-version-compatibility-unknown\"],[9],[0,\"\\n        We were unable to run this addon's tests.\\n      \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"em\"],[11,\"class\",\"test-ember-version-compatibility-timestamp\"],[9],[0,\"\\n        last tried \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"testResult\",\"testsRunAt\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/ember-version-compatibility.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/ember-version-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ou+iyQxD",
    "block": "{\"symbols\":[],\"statements\":[[7,\"small\"],[9],[7,\"span\"],[11,\"class\",\"version-number\"],[9],[1,[23,[\"version\",\"version\"]],false],[10],[0,\" released\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/ember-version-item.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/exclusive-button-group", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zZuav6AO",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n  \"],[14,1,[[27,\"component\",[\"exclusive-button\"],[[\"selectedValue\",\"updateSelectedValue\"],[[23,[\"selectedValue\"]],[23,[\"updateSelectedValue\"]]]]]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/exclusive-button-group.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/exclusive-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4SZjeJvy",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[12,\"class\",[28,[[27,\"if\",[[27,\"eq\",[[23,[\"selectedValue\"]],[23,[\"value\"]]],null],\"selected\"],null]]]],[9],[1,[21,\"label\"],false],[3,\"action\",[[22,0,[]],[23,[\"updateSelectedValue\"]],[23,[\"value\"]]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/exclusive-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/gravatar-avatar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "J+JMfjEu",
    "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/gravatar-avatar.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/human-url", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iRCc1P0l",
    "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[12,\"href\",[28,[[21,\"url\"]]]],[9],[7,\"b\"],[9],[1,[21,\"domain\"],false],[10],[1,[21,\"pathname\"],false],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/human-url.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/inline-category-list", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "F2RhLxFP",
    "block": "{\"symbols\":[\"category\",\"value\",\"separator\"],\"statements\":[[4,\"each\",[[23,[\"categoriesSortedByAddonCount\"]]],null,{\"statements\":[[4,\"comma-separated\",null,[[\"list\",\"item\"],[[23,[\"categoriesSortedByAddonCount\"]],[22,1,[]]]],{\"statements\":[[4,\"link-to\",[\"categories.show\",[22,2,[\"slug\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"showWithoutParent\"]]],null,{\"statements\":[[0,\"        \"],[1,[22,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,2,[\"parent\"]]],null,{\"statements\":[[0,\"          \"],[1,[22,2,[\"parent\",\"name\"]],false],[0,\" >\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[22,2,[\"name\"]],false]],\"parameters\":[]}],[4,\"if\",[[23,[\"showAddonCount\"]]],null,{\"statements\":[[0,\"        (\"],[1,[22,2,[\"totalAddonCount\"]],false],[0,\")\"]],\"parameters\":[]},null],[1,[22,3,[]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2,3]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/inline-category-list.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/large-search", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nd3HV98z",
    "block": "{\"symbols\":[\"maintainer\",\"category\",\"addon\",\"match\"],\"statements\":[[7,\"div\"],[11,\"class\",\"large-search with-default-styling\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"search\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"search-wrapper\"],[9],[0,\"\\n      \"],[7,\"input\"],[11,\"placeholder\",\"Search for addons, maintainers and categories\"],[11,\"autocomplete\",\"off\"],[11,\"id\",\"search-input\"],[11,\"spellcheck\",\"false\"],[12,\"value\",[21,\"query\"]],[12,\"oninput\",[27,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"search\"]]],null]],[[\"value\"],[\"target.value\"]]]],[11,\"type\",\"search\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"query\"]]],null,{\"statements\":[[0,\"        \"],[7,\"button\"],[11,\"class\",\"close-button test-clear-search\"],[9],[0,\"\\n          \"],[1,[27,\"svg-icon\",[\"close\"],null],false],[0,\"\\n        \"],[3,\"action\",[[22,0,[]],[23,[\"clearSearch\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"readme-toggle\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"id\",\"checked\",\"change\"],[\"checkbox\",\"test-search-readmes\",\"search-readmes\",[23,[\"searchReadmes\"]],[27,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"toggleReadmeSearch\"]]],null]],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"search-readmes\"],[9],[0,\"Search readmes\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"h6\"],[12,\"class\",[28,[\"no-results \",[27,\"if\",[[23,[\"hasSearchedAndNoResults\"]],\"showing\"],null]]]],[9],[0,\"No results found for \\\"\"],[1,[21,\"query\"],false],[0,\"\\\"\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"results\",\"length\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h4\"],[11,\"class\",\"result-info test-result-info\"],[9],[0,\"Results for \\\"\"],[1,[21,\"query\"],false],[0,\"\\\"\"],[10],[0,\"\\n\"],[4,\"search-result-set\",null,[[\"results\",\"totalCount\",\"fetchMore\",\"title\",\"resultClass\"],[[23,[\"results\",\"displayingReadmes\"]],[23,[\"results\",\"totalReadmeCount\"]],[23,[\"fetchMoreReadmes\"]],\"Readmes\",\"readme-results\"]],{\"statements\":[[0,\"      \"],[7,\"ul\"],[11,\"class\",\"readme-list\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"results\",\"displayingReadmes\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[0,\"\\n            \"],[1,[27,\"addon-details\",null,[[\"addon\"],[[22,3,[]]]]],false],[0,\"\\n\"],[4,\"each\",[[27,\"get\",[[23,[\"_results\",\"readmeMatchMap\"]],[22,3,[\"id\"]]],null]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"test-readme-match text-match\"],[9],[0,\"\\n                ...\"],[1,[27,\"dom-purify\",[[22,4,[]]],[[\"use-profiles\",\"hook\"],[[27,\"hash\",null,[[\"html\"],[true]]],\"target-blank\"]]],false],[0,\"...\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"search-result-set\",null,[[\"results\",\"totalCount\",\"fetchMore\",\"title\",\"resultClass\"],[[23,[\"results\",\"displayingCategories\"]],[23,[\"results\",\"totalCategoriesCount\"]],[23,[\"fetchMoreCategories\"]],\"Categories\",\"category-results\"]],{\"statements\":[[0,\"      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"results\",\"displayingCategories\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"categories.show\",[22,2,[\"slug\"]]],null,{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"bullet\"],[9],[0,\"■\"],[10],[0,\"\\n              \"],[7,\"div\"],[9],[1,[22,2,[\"name\"]],false],[0,\" (\"],[1,[22,2,[\"totalAddonCount\"]],false],[0,\")\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"search-result-set\",null,[[\"results\",\"totalCount\",\"fetchMore\",\"title\",\"resultClass\"],[[23,[\"results\",\"displayingAddons\"]],[23,[\"results\",\"totalAddonsCount\"]],[23,[\"fetchMoreAddons\"]],\"Addons\",\"addon-results\"]],{\"statements\":[[0,\"      \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"results\",\"displayingAddons\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"search-result-set\",null,[[\"results\",\"totalCount\",\"fetchMore\",\"title\",\"resultClass\"],[[23,[\"results\",\"displayingMaintainers\"]],[23,[\"results\",\"totalMaintainersCount\"]],[23,[\"fetchMoreMaintainers\"]],\"Maintainers\",\"maintainer-results\"]],{\"statements\":[[0,\"      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"results\",\"displayingMaintainers\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"maintainers.show\",[22,1,[\"name\"]]],null,{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"bullet\"],[9],[0,\"■\"],[10],[0,\"\\n              \"],[7,\"div\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"search\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/large-search.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/login-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6g+nb18h",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"for\",\"email\"],[9],[0,\"Email\"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"value\",\"name\",\"class\"],[[23,[\"email\"]],\"email\",\"test-email\"]]],false],[0,\"\\n  \"],[7,\"label\"],[11,\"for\",\"password\"],[9],[0,\"Password\"],[10],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"name\",\"class\"],[\"password\",[23,[\"password\"]],\"password\",\"test-password\"]]],false],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"type\",\"value\",\"class\"],[\"submit\",\"Log in\",\"button test-log-in\"]]],false],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"login\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/login-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/markdown-to-sanitized-html", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9K+d+lSx",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"dom-purify\",[[23,[\"html\"]]],null],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/markdown-to-sanitized-html.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/official-icon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "otOCIRaN",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"svg-icon\",[\"stars\"],[[\"title\",\"class\"],[\"Official Ember-CLI addon\",[27,\"concat\",[\"official \",[23,[\"class\"]]],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/official-icon.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/page-layout", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9wP7/lzE",
    "block": "{\"symbols\":[\"addonName\",\"options\",\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"page-layout \",[27,\"unless\",[[23,[\"showCategories\"]],\"categories-collapsed\"],null]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"main\"],[9],[0,\"\\n    \"],[7,\"header\"],[11,\"class\",\"navigation\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\",[27,\"query-params\",null,[[\"query\"],[\"\"]]]],[[\"class\"],[\"name\"]],{\"statements\":[[0,\"        \"],[7,\"img\"],[11,\"alt\",\"telescope\"],[11,\"src\",\"/telescope.png\"],[9],[10],[0,\"\\n        Ember Observer\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"showHeaderSearch\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"search with-default-styling test-header-search\"],[9],[0,\"\\n\"],[4,\"power-select-typeahead\",null,[[\"search\",\"selected\",\"placeholder\",\"dropdownClass\",\"noMatchesMessage\",\"onchange\"],[[27,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"searchForAddons\"]]],null]],null],[23,[\"selectedAddon\"]],\"Search\",\"test-header-search-dropdown\",\"No matching addon names, try another search!\",[27,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"goToAddon\"]]],null]],null]]],{\"statements\":[[4,\"if\",[[22,1,[\"isFullSearchLink\"]]],null,{\"statements\":[[4,\"link-to\",[\"index\",[27,\"query-params\",null,[[\"query\"],[[22,2,[\"searchText\"]]]]]],[[\"class\"],[\"jump-to-full-search test-search-result-jump-to-full-search-link\"]],{\"statements\":[[4,\"if\",[[22,1,[\"noResults\"]]],null,{\"statements\":[[0,\"                  No matching addons (by name). Try a full search »\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  Perform full search »\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[4,\"link-to\",[\"addons.show\",[22,1,[]]],[[\"class\"],[\"test-search-result-addon-link\"]],{\"statements\":[[1,[22,1,[]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1,2]},null],[4,\"if\",[[23,[\"searchForAddons\",\"isRunning\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"svg-icon\",[\"spinner\"],[[\"class\"],[\"circle-spinner\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"nav\"],[11,\"class\",\"links\"],[9],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[4,\"link-to\",[\"code-search\"],null,{\"statements\":[[0,\"Code Search\"]],\"parameters\":[]},null],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"li\"],[9],[0,\"\\n            \"],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"logout\"],[9],[0,\"Log out\"],[3,\"action\",[[22,0,[]],[23,[\"logoutUser\"]]]],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"content\"],[9],[0,\"\\n      \"],[14,3],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showCategories\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"category-finder\",null,[[\"class\",\"categories\"],[\"categories-list\",[23,[\"categories\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/page-layout.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/radio-button-set", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iKAzLuTG",
    "block": "{\"symbols\":[\"option\"],\"statements\":[[4,\"each\",[[23,[\"options\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"radio-button\",null,[[\"onSelect\",\"option\",\"selected\"],[[27,\"action\",[[22,0,[]],[23,[\"select\"]]],null],[22,1,[]],[23,[\"selected\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/radio-button-set.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/radio-button", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HAlOtQ3d",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[12,\"class\",[27,\"if\",[[23,[\"isSelected\"]],\"selected\"],null]],[9],[0,\"\\n  \"],[1,[23,[\"option\",\"label\"]],false],[0,\"\\n\"],[3,\"action\",[[22,0,[]],[23,[\"onSelect\"]],[23,[\"option\"]]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/radio-button.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/relative-time", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZwZGL9uU",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"moment-from-now\",[[23,[\"date\"]]],[[\"allowEmpty\"],[true]]],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/relative-time.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/route-index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "l2xSjcpx",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"top-addons\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Top addons\"],[10],[0,\"\\n\"],[4,\"addon-list\",null,[[\"addons\",\"showRanking\"],[[23,[\"topAddons\"]],true]],{\"statements\":[[4,\"link-to\",[\"lists.top-addons\"],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[11,\"class\",\"more\"],[9],[0,\"\\n        See all top 100 addons\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"recently-scored-addons\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Recently scored addons\"],[10],[0,\"\\n\"],[4,\"addon-list\",null,[[\"addons\"],[[23,[\"recentlyScoredAddons\"]]]],{\"statements\":[[4,\"link-to\",[\"lists.recently-scored-addons\"],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[11,\"class\",\"more\"],[9],[0,\"\\n        See all recently scored addons\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"new-addons\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"New addons\"],[10],[0,\"\\n\"],[4,\"addon-list\",null,[[\"addons\"],[[23,[\"newAddons\"]]]],{\"statements\":[[4,\"link-to\",[\"lists.new-addons\"],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[11,\"class\",\"more\"],[9],[0,\"\\n        See all new addons\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/route-index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/score-detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DybdEkej",
    "block": "{\"symbols\":[\"val\"],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[7,\"h4\"],[9],[0,\"\\n\"],[4,\"score-display\",null,[[\"addon\"],[[23,[\"addon\"]]]],{\"statements\":[[0,\"      Score \"],[7,\"b\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showExplanation\"]]],null,{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"info-action\"],[9],[0,\"Hide This\"],[3,\"action\",[[22,0,[]],\"toggleExplainScore\"]],[10],[0,\"\\n\\n\"],[4,\"unless\",[[23,[\"addon\",\"score\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[9],[7,\"em\"],[9],[0,\"N/A - This addon has not yet been reviewed, the following will contribute to its score once it has been reviewed:\"],[10],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"latestReview\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"test-latest-review-score\"],[9],[1,[27,\"pluralize-this\",[[23,[\"latestReview\",\"score\"]],\"point\"],null],false],[0,\" from review\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"addon\",\"isTopDownloaded\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"1 point for having a download count in the last 30 days that is in the top 10% for all addons.\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"0 points - Download count for the last 30 days that is NOT in the top 10% for all addons.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"isLatestReleaseInLast3Months\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"test-release-published-in-last-three-months\"],[9],[0,\"1 point for having published a release within the last 3 months\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"0 points - Most recent release is older than 3 months.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"hasGithubData\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"test-has-github-data\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"githubStats\",\"committedToRecently\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"1 point for more than 1 commit within the last 3 months\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"0 points - Fewer than 2 commits within the last 3 months\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[23,[\"addon\",\"hasMoreThan1Contributor\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"1 point for having more than 1 contributor\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"0 points - Fewer than 2 contributors\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isTopStarred\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"1 point for having a Github star count in the top 10% of all addons.\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"0 points - Star count on Github is NOT in the top 10% of all addons.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"No Github info is available, so 3 of the available points could not be evaluated. Is the repo url correct in the package.json?\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"info-action\"],[9],[0,\"Explain This\"],[3,\"action\",[[22,0,[]],\"toggleExplainScore\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/score-detail.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/score-display", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Ga3GGniS",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"addon\",\"isWip\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\"],[11,\"class\",\"score\"],[9],[0,\"\\n    \"],[14,1,[\"WIP\"]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"hasNumericScore\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score\"],[12,\"data-score\",[28,[[23,[\"addon\",\"score\"]]]]],[9],[0,\"\\n      \"],[14,1,[[23,[\"addon\",\"score\"]]]],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"score\"],[9],[0,\"\\n      \"],[14,1,[\"N/A\"]],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/score-display.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/search-result-set", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dKJW3po8",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"results\",\"length\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[\"results \",[21,\"resultClass\"]]]],[9],[0,\"\\n    \"],[7,\"h5\"],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"resultsCollapsed\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"svg-icon\",[\"chevron-right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"svg-icon\",[\"expand-more\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[1,[21,\"title\"],false],[0,\" (\"],[1,[21,\"totalCount\"],false],[0,\")\\n      \"],[3,\"action\",[[22,0,[]],[23,[\"toggleResultsExpansion\"]]]],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"resultsCollapsed\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"results-content\"],[9],[0,\"\\n        \"],[14,1],[0,\"\\n\"],[4,\"if\",[[27,\"less-than\",[[23,[\"results\",\"length\"]],[23,[\"totalCount\"]]],null]],null,{\"statements\":[[4,\"if\",[[23,[\"fetchMore\",\"isRunning\"]]],null,{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"class\",\"button more-results\"],[9],[0,\"Fetching more...\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"button\"],[11,\"class\",\"button more-results\"],[9],[0,\"Show more\"],[3,\"action\",[[22,0,[]],[27,\"perform\",[[23,[\"fetchMore\"]]],null]]],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/search-result-set.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/sort-option", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OpegVTny",
    "block": "{\"symbols\":[],\"statements\":[[7,\"button\"],[12,\"class\",[28,[\"button-option \",[27,\"if\",[[23,[\"isSelected\"]],\"selected\"],null]]]],[9],[1,[21,\"name\"],false],[3,\"action\",[[22,0,[]],\"sortBy\",[23,[\"key\"]]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/sort-option.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/sort-order-option", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bXP0NQuC",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"button\"],[12,\"class\",[28,[\"button-option \",[27,\"if\",[[27,\"is-equal\",[[23,[\"selectedSort\"]],[23,[\"key\"]]],null],\"selected\"],null]]]],[9],[0,\"\\n  \"],[14,1],[0,\"\\n\"],[4,\"if\",[[27,\"is-equal\",[[23,[\"selectedSort\"]],[23,[\"key\"]]],null]],null,{\"statements\":[[4,\"if\",[[23,[\"sortAscending\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"svg-icon\",[\"expand-less\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"svg-icon\",[\"expand-more\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[3,\"action\",[[22,0,[]],[23,[\"sortBy\"]],[23,[\"key\"]]]],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/sort-order-option.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/stats-bar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5TEp5TlX",
    "block": "{\"symbols\":[\"maintainer\",\"keyword\",\"value\",\"separator\"],\"statements\":[[7,\"h4\"],[11,\"class\",\"single-column-header\"],[9],[0,\"Stats\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"class\",\"addon-install test-addon-install-command\"],[9],[0,\"\\n  \"],[1,[21,\"installCommandText\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"ul\"],[11,\"class\",\"stats-list\"],[9],[0,\"\\n  \"],[7,\"li\"],[11,\"class\",\"test-addon-latest-version\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[1,[23,[\"latestVersion\",\"version\"]],false],[10],[0,\" from \"],[1,[27,\"relative-time\",null,[[\"date\"],[[23,[\"addon\",\"latestVersionDate\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[11,\"class\",\"test-addon-top-downloaded\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"isTopDownloaded\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"small\"],[9],[0,\"TOP 10%!\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"b\"],[9],[1,[27,\"commify\",[[23,[\"addon\",\"lastMonthDownloads\"]]],null],false],[10],[0,\" downloads in last month\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"demoUrl\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[11,\"class\",\"test-addon-demo-url\"],[9],[0,\"\\n      \"],[7,\"b\"],[9],[0,\"demo\"],[10],[0,\" \"],[1,[27,\"human-url\",null,[[\"url\"],[[23,[\"addon\",\"demoUrl\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"li\"],[11,\"class\",\"test-addon-repo-url\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"repo\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"addon\",\"hasInvalidGithubRepo\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n        Unavailable\\n        \"],[1,[27,\"svg-icon\",[\"help\"],[[\"class\",\"title\"],[\"test-addon-flag-invalid-repo\",[27,\"concat\",[\"This addon has an incorrect repo URL in its package.json: \",[23,[\"addon\",\"repositoryUrl\"]]],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"human-url\",null,[[\"url\"],[[23,[\"addon\",\"repositoryUrl\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"li\"],[11,\"class\",\"test-addon-package-url\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"package\"],[10],[0,\" \"],[1,[27,\"human-url\",null,[[\"url\"],[[23,[\"addon\",\"npmUrl\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[11,\"class\",\"test-addon-license\"],[9],[0,\"\\n    \"],[7,\"b\"],[9],[0,\"license\"],[10],[0,\" \"],[7,\"a\"],[12,\"href\",[21,\"licenseUrl\"]],[9],[1,[23,[\"addon\",\"license\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"testResult\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"isTestResultForLatestVersion\"]]],null,{\"statements\":[[0,\"    \"],[7,\"em\"],[11,\"class\",\"test-ember-version-compatibility-new-version-warning\"],[9],[0,\"\\n      \"],[1,[27,\"svg-icon\",[\"new-releases\"],null],false],[0,\" New\\n      versions of this addon have been released since these tests ran.\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[27,\"ember-version-compatibility\",null,[[\"testResult\"],[[23,[\"testResult\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"h6\"],[9],[0,\"npm keywords\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[11,\"class\",\"keywords test-addon-keywords\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"addon\",\"keywords\"]]],null,{\"statements\":[[4,\"comma-separated\",null,[[\"list\",\"item\"],[[23,[\"addon\",\"keywords\"]],[22,2,[]]]],{\"statements\":[[0,\"      \"],[1,[22,3,[\"keyword\"]],false],[1,[22,4,[]],false],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null],[10],[0,\"\\n\\n\"],[7,\"h6\"],[9],[0,\"maintainers\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"class\",\"test-addon-maintainers\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"addon\",\"maintainers\"]]],null,{\"statements\":[[4,\"link-to\",[\"maintainers.show\",[22,1,[\"name\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"gravatar-avatar\",null,[[\"gravatarId\",\"title\",\"alt\"],[[22,1,[\"gravatar\"]],[22,1,[\"name\"]],[22,1,[\"name\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"latestVersion\",\"emberCliVersion\"]]],null,{\"statements\":[[0,\"  \"],[7,\"h6\"],[9],[0,\"ember-cli version\"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"test-addon-ember-cli-version\"],[9],[1,[23,[\"latestVersion\",\"emberCliVersion\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"h6\"],[11,\"class\",\"test-addon-version-count\"],[9],[0,\"versions (\"],[1,[23,[\"sortedAddonVersions\",\"length\"]],false],[0,\")\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"\\n  \"],[1,[27,\"addon-version-list\",null,[[\"versions\"],[[23,[\"sortedAddonVersions\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"section\"],[11,\"class\",\"badge test-addon-badge\"],[9],[0,\"\\n  \"],[7,\"img\"],[11,\"alt\",\"Addon Badge\"],[12,\"src\",[27,\"badge-path\",[[23,[\"addon\",\"name\"]]],null]],[9],[10],[0,\"\\n  \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"copy-to-clipboard test-show-badge-markdown\"],[11,\"title\",\"Show badge markdown to copy\"],[9],[1,[27,\"svg-icon\",[\"content-paste\"],null],false],[3,\"action\",[[22,0,[]],\"toggleBadgeText\"]],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showBadgeText\"]]],null,{\"statements\":[[0,\"    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"code\"],[11,\"class\",\"test-badge-markdown\"],[9],[0,\"\\n      [![Ember Observer Score](https://emberobserver.com\"],[1,[27,\"badge-path\",[[23,[\"addon\",\"name\"]]],null],false],[0,\")](https://emberobserver.com/addons/\"],[1,[23,[\"addon\",\"name\"]],false],[0,\")\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"],[4,\"link-to\",[\"addons.correct\",[23,[\"addon\",\"name\"]]],[[\"class\"],[\"test-addon-correction-link\"]],{\"statements\":[[0,\"  Suggest a correction\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/stats-bar.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/svg-icon", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kBqiIrlX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"svg\"],[12,\"class\",[28,[\"icon icon-\",[21,\"iconName\"],\" \",[27,\"if\",[[23,[\"alignBaseline\"]],\"baseline\"],null],\" \",[21,\"class\"]]]],[9],[7,\"title\"],[9],[1,[21,\"title\"],false],[10],[7,\"use\"],[12,\"xlink:href\",[28,[\"#icon-\",[21,\"iconName\"]]],\"http://www.w3.org/1999/xlink\"],[9],[10],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/svg-icon.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/svg-icons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RUODw8ea",
    "block": "{\"symbols\":[],\"statements\":[[7,\"svg\"],[11,\"aria-hidden\",\"true\"],[11,\"style\",\"position: absolute; width: 0; height: 0; overflow: hidden;\"],[11,\"version\",\"1.1\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[9],[0,\"\\n  \"],[7,\"defs\"],[9],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-google\"],[11,\"viewBox\",\"0 0 32 32\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-github\"],[11,\"viewBox\",\"0 0 32 32\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-spinner\"],[11,\"viewBox\",\"0 0 32 32\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M13 29c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM0 16c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM26 16c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM3.808 6.808c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM22.192 25.192c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM3.808 25.192c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM22.192 6.808c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-help\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 19h-2v-2h2v2zM15.065 11.255l-0.895 0.92c-0.72 0.72-1.17 1.325-1.17 2.825h-2v-0.5c0-1.105 0.45-2.105 1.17-2.83l1.245-1.26c0.36-0.36 0.585-0.86 0.585-1.41 0-1.105-0.895-2-2-2s-2 0.895-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 0.88-0.355 1.675-0.935 2.255z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-info\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 17h-2v-6h2v6zM13 9h-2v-2h2v2z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-stars\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M11.995 2c-5.525 0-9.995 4.475-9.995 10s4.47 10 9.995 10c5.525 0 10.005-4.475 10.005-10s-4.48-10-10.005-10zM16.23 18l-4.23-2.55-4.23 2.55 1.12-4.81-3.73-3.235 4.92-0.42 1.92-4.535 1.92 4.535 4.92 0.42-3.73 3.235 1.12 4.81z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-trending-down\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M16 18l2.295-2.295-4.88-4.875-4 4-7.415-7.415 1.415-1.415 6 6 4-4 6.29 6.295 2.295-2.295v6z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-trending-neutral\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M22 12l-4-4v3h-15v2h15v3z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-trending-up\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M16 6l2.295 2.295-4.88 4.875-4-4-7.415 7.415 1.415 1.415 6-6 4 4 6.29-6.295 2.295 2.295v-6z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-new-releases\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M23 12l-2.44-2.78 0.34-3.685-3.61-0.815-1.89-3.18-3.4 1.46-3.4-1.46-1.89 3.18-3.61 0.815 0.34 3.685-2.44 2.78 2.44 2.78-0.34 3.685 3.61 0.815 1.89 3.18 3.4-1.46 3.4 1.46 1.89-3.18 3.61-0.815-0.34-3.685 2.44-2.78zM13 17h-2v-2h2v2zM13 13h-2v-6h2v6z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-content-paste\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M19 2h-4.185c-0.41-1.16-1.51-2-2.815-2s-2.405 0.84-2.815 2h-4.185c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h14c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2zM12 2c0.55 0 1 0.445 1 1s-0.45 1-1 1-1-0.445-1-1 0.45-1 1-1zM19 20h-14v-16h2v3h10v-3h2v16z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-chevron-right\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M10 6l-1.415 1.415 4.585 4.585-4.585 4.585 1.415 1.415 6-6z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-close\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M19 6.415l-1.415-1.415-5.585 5.585-5.585-5.585-1.415 1.415 5.585 5.585-5.585 5.585 1.415 1.415 5.585-5.585 5.585 5.585 1.415-1.415-5.585-5.585z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-expand-less\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M12 8l-6 6 1.415 1.415 4.585-4.585 4.585 4.585 1.415-1.415z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-expand-more\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M16.585 8.585l-4.585 4.585-4.585-4.585-1.415 1.415 6 6 6-6z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-more-horiz\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M6 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM18 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"symbol\"],[11,\"id\",\"icon-more-vert\"],[11,\"viewBox\",\"0 0 24 24\"],[9],[0,\"\\n\\n      \"],[7,\"path\"],[11,\"d\",\"M12 8c1.105 0 2-0.895 2-2s-0.895-2-2-2-2 0.895-2 2 0.895 2 2 2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 16c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/svg-icons.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/test-result-status", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bZBuVcYj",
    "block": "{\"symbols\":[],\"statements\":[[7,\"span\"],[11,\"class\",\"status\"],[9],[1,[21,\"statusText\"],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"statusDetail\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\"],[11,\"class\",\"status-detail\"],[9],[1,[21,\"statusDetail\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/test-result-status.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/toggle-switch", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bbPXTjbG",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"component-toggle-switch \",[21,\"class\"]]]],[9],[0,\"\\n  \"],[7,\"input\"],[12,\"name\",[28,[\"toggle-switch-\",[21,\"name\"]]]],[12,\"id\",[28,[\"toggle-switch-\",[21,\"name\"]]]],[12,\"onchange\",[27,\"action\",[[22,0,[]],[23,[\"onToggle\"]]],[[\"value\"],[\"target.checked\"]]]],[12,\"checked\",[21,\"isChecked\"]],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n  \"],[7,\"label\"],[12,\"for\",[28,[\"toggle-switch-\",[21,\"name\"]]]],[9],[1,[21,\"label\"],false],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/components/toggle-switch.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/components/x-select", ["exports", "emberx-select/templates/components/x-select"], function (_exports, _xSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _xSelect.default;
    }
  });
});
;define("ember-observer/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7WVi1GK7",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\",\"showHeaderSearch\"],[true,false]],{\"statements\":[[0,\"  \"],[1,[27,\"large-search\",null,[[\"query\",\"searchReadmes\"],[[23,[\"query\"]],[23,[\"searchReadmes\"]]]]],false],[0,\"\\n  \"],[1,[27,\"route-index\",null,[[\"class\",\"topAddons\",\"newAddons\",\"recentlyScoredAddons\"],[\"route-index\",[23,[\"model\",\"topAddons\"]],[23,[\"model\",\"newAddons\"]],[23,[\"model\",\"recentlyScoredAddons\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Bt762TkO",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[true]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists/invalid-repo-url", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "gJ3/W+QT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-index\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Addons with incorrect or missing repository urls\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"The following addons have an incorrect or missing repository url in the package.json of the latest published version.\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Help the maintainers out: find the repo and make a PR to update package.json!\"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[9],[7,\"small\"],[9],[0,\"Displaying \"],[1,[23,[\"model\",\"length\"]],false],[0,\" addons\"],[10],[10],[0,\"\\n  \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists/invalid-repo-url.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RuQ9BjyI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"loading\"],[9],[0,\"\\n  \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists/loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists/new-addons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mjptBd6n",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-index\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"New Addons\"],[10],[0,\"\\n\\n  \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists/new-addons.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists/recently-scored-addons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "l3p1G98t",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-index\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Recently Scored Addons\"],[10],[0,\"\\n\\n  \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists/recently-scored-addons.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/lists/top-addons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PC4Fy7e3",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addons-index\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Top Addons\"],[10],[0,\"\\n\\n  \"],[1,[27,\"addon-list\",null,[[\"addons\",\"showRanking\"],[[23,[\"model\"]],true]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/lists/top-addons.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dbJHGhKd",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[true]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"container login with-default-styling\"],[9],[0,\"\\n    \"],[1,[27,\"login-form\",null,[[\"loginAction\"],[\"login\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/maintainers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VFWd7Gpo",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[true]],{\"statements\":[[0,\"  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/maintainers.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/maintainers/loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EYIykQIg",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"loading\"],[9],[0,\"\\n  \"],[1,[21,\"dot-spinner\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/maintainers/loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/maintainers/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/yfMPuhw",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"maintainers-show\"],[9],[0,\"\\n  \"],[7,\"header\"],[9],[0,\"\\n    \"],[1,[27,\"gravatar-avatar\",null,[[\"gravatarId\",\"title\",\"alt\"],[[23,[\"model\",\"gravatar\"]],[23,[\"model\",\"name\"]],[23,[\"model\",\"name\"]]]]],false],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"\\n      \"],[1,[23,[\"model\",\"name\"]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"pluralize-this\",[[23,[\"model\",\"addons\",\"length\"]],\"addon\"],null],false],[0,\" maintained by \"],[1,[23,[\"model\",\"name\"]],false],[0,\".\"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[1,[27,\"addon-list\",null,[[\"addons\"],[[23,[\"model\",\"addons\"]]]]],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/maintainers/show.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/model-not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "OL0EKEoG",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"not-found test-not-found\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"Oops! We can't find what you were looking for. Try searching above?\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/model-not-found.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/templates/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QVEmg17s",
    "block": "{\"symbols\":[],\"statements\":[[4,\"page-layout\",null,[[\"showCategories\"],[false]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"not-found test-not-found\"],[9],[0,\"\\n    \"],[7,\"h1\"],[9],[0,\"Oops! We can't find what you were looking for. Try searching above?\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-observer/templates/not-found.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-observer/transforms/array", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      var type = Ember.typeOf(serialized);

      if (type === 'array') {
        return serialized;
      } else {
        return [];
      }
    },
    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });

  _exports.default = _default;
});
;define("ember-observer/utils/can-use-dom", ["exports", "ember-metrics/utils/can-use-dom"], function (_exports, _canUseDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _canUseDom.default;
    }
  });
});
;define("ember-observer/utils/computed-percent", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = computedPercent;

  function computedPercent(dividendName, divisorName) {
    return Ember.computed(dividendName, divisorName, function () {
      var divisor = this.get(divisorName);

      if (!divisor) {
        return null;
      }

      return this.get(dividendName) / divisor * 100;
    });
  }
});
;define("ember-observer/utils/local-storage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    storage: function storage() {
      return window.localStorage;
    },
    save: function save(item, value) {
      if (this.storage()) {
        return this.storage().setItem(item, value);
      }
    },
    fetch: function fetch(item) {
      if (this.storage()) {
        return this.storage().getItem(item);
      }
    },
    remove: function remove(item) {
      if (this.storage()) {
        return this.storage().removeItem(item);
      }
    }
  };
  _exports.default = _default;
});
;define("ember-observer/utils/measure", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = measure;
  _exports.renderEnd = renderEnd;

  function shouldMeasure() {
    var _location = location,
        search = _location.search;
    return search === '?perf.tracing' || search === '?perf.profile';
  }
  /*
    Invoke this from the afterModel hook of leafmost routes.
  */


  function measure() {
    performance.mark('dataLoaded');
    Ember.run.schedule('afterRender', renderEnd);
  }
  /*
    This provides two additional benchmarking modes `?perf.profile` and
    `?perf.tracing`. The former wraps the initial render in a CPU profile. The
    latter is intended to be used with `chrome-tracing` where it redirects to
    `about:blank` after the initial render as the termination signal.
  */


  function renderEnd() {
    requestAnimationFrame(function () {
      performance.mark('beforePaint');
      requestAnimationFrame(function () {
        performance.mark('afterPaint');

        if (!shouldMeasure()) {
          return;
        }

        performance.measure('assets', 'domLoading', 'beforeVendor');
        performance.measure('evalVendor', 'beforeVendor', 'beforeApp');
        performance.measure('evalApp', 'beforeApp', 'afterApp');
        performance.measure('boot', 'beforeVendor', 'willTransition');
        performance.measure('routing', 'willTransition', 'didTransition');
        performance.measure('render', 'didTransition', 'beforePaint');
        performance.measure('paint', 'beforePaint', 'afterPaint');
        performance.measure('data', 'willTransition', 'dataLoaded');
        performance.measure('afterData', 'dataLoaded', 'beforePaint');

        if (location.search === '?perf.tracing') {
          document.location.href = 'about:blank';
        } else if (location.search === '?perf.profile') {
          console.profileEnd('initialRender'); // eslint-disable-line no-console
        }
      });
    });
  }
});
;define("ember-observer/utils/object-transforms", ["exports", "ember-metrics/utils/object-transforms"], function (_exports, _objectTransforms) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _objectTransforms.default;
    }
  });
});
;define("ember-observer/utils/pad", ["exports", "ember-pad/utils/pad"], function (_exports, _pad) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pad.default;
    }
  });
  Object.defineProperty(_exports, "padStart", {
    enumerable: true,
    get: function get() {
      return _pad.padStart;
    }
  });
  Object.defineProperty(_exports, "padEnd", {
    enumerable: true,
    get: function get() {
      return _pad.padEnd;
    }
  });
  Object.defineProperty(_exports, "padTpl", {
    enumerable: true,
    get: function get() {
      return _pad.padTpl;
    }
  });
  Object.defineProperty(_exports, "padStartTpl", {
    enumerable: true,
    get: function get() {
      return _pad.padStartTpl;
    }
  });
  Object.defineProperty(_exports, "padEndTpl", {
    enumerable: true,
    get: function get() {
      return _pad.padEndTpl;
    }
  });
});
;

;define('ember-observer/config/environment', [], function() {
  var prefix = 'ember-observer';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-observer/app")["default"].create({"name":"ember-observer","version":"0.0.0+da985a90"});
          }
        
