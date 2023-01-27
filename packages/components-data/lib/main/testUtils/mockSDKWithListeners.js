"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sdkMethodRunQueryListener = exports.sdkMethodQueryListener = exports.sdkMethodQueryForSlugListener = exports.sdkMethodLookmlModelExploreListener = exports.sdkMethodDashboardListener = exports.sdkMethodCreateQueryListener = exports.sdkMethodColorCollectionListener = exports.mockSDKWithListeners = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    return _visualizationsAdapters.mockSDK.lookml_model_explore('thelook', 'orders').then(function (result) {
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