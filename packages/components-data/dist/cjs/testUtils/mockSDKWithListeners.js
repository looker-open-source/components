"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sdkMethodRunQueryListener = exports.sdkMethodQueryListener = exports.sdkMethodQueryForSlugListener = exports.sdkMethodLookmlModelExploreListener = exports.sdkMethodDashboardListener = exports.sdkMethodCreateQueryListener = exports.sdkMethodColorCollectionListener = exports.mockSDKWithListeners = void 0;
var _visualizationsAdapters = require("@looker/visualizations-adapters");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var sdkMethodQueryListener = jest.fn();
exports.sdkMethodQueryListener = sdkMethodQueryListener;
var sdkMethodQueryForSlugListener = jest.fn();
exports.sdkMethodQueryForSlugListener = sdkMethodQueryForSlugListener;
var sdkMethodDashboardListener = jest.fn();
exports.sdkMethodDashboardListener = sdkMethodDashboardListener;
var sdkMethodRunQueryListener = jest.fn();
exports.sdkMethodRunQueryListener = sdkMethodRunQueryListener;
var sdkMethodLookmlModelExploreListener = jest.fn();
exports.sdkMethodLookmlModelExploreListener = sdkMethodLookmlModelExploreListener;
var sdkMethodCreateQueryListener = jest.fn();
exports.sdkMethodCreateQueryListener = sdkMethodCreateQueryListener;
var sdkMethodColorCollectionListener = jest.fn();
exports.sdkMethodColorCollectionListener = sdkMethodColorCollectionListener;
var mockSDKWithListeners = _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSDK), {}, {
  color_collection: function color_collection() {
    return _visualizationsAdapters.mockSDK.color_collection('abcdefghijklmnop').then(function (result) {
      sdkMethodColorCollectionListener(result);
      return result;
    });
  },
  create_query: function create_query() {
    return _visualizationsAdapters.mockSDK.create_query({}).then(function (result) {
      sdkMethodCreateQueryListener(result);
      return result;
    });
  },
  dashboard: function dashboard() {
    return _visualizationsAdapters.mockSDK.dashboard('1').then(function (result) {
      sdkMethodDashboardListener(result);
      return result;
    });
  },
  lookml_model_explore: function lookml_model_explore() {
    return _visualizationsAdapters.mockSDK.lookml_model_explore({
      add_drills_metadata: false,
      explore_name: 'orders',
      lookml_model_name: 'thelook'
    }).then(function (result) {
      sdkMethodLookmlModelExploreListener(result);
      return result;
    });
  },
  query: function query() {
    return _visualizationsAdapters.mockSDK.query('1').then(function (result) {
      sdkMethodQueryListener(result);
      return result;
    });
  },
  query_for_slug: function query_for_slug() {
    return _visualizationsAdapters.mockSDK.query_for_slug('qz123').then(function (result) {
      sdkMethodQueryForSlugListener(result);
      return result;
    });
  },
  run_query: function run_query() {
    return _visualizationsAdapters.mockSDK.run_query({
      query_id: '1',
      result_format: 'json_detail'
    }).then(function (result) {
      sdkMethodRunQueryListener(result);
      return result;
    });
  }
});
exports.mockSDKWithListeners = mockSDKWithListeners;
//# sourceMappingURL=mockSDKWithListeners.js.map