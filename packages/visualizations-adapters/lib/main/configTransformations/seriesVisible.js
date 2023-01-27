"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesVisible = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _set = _interopRequireDefault(require("lodash/set"));
var _utils = require("../utils");
var _excluded = ["type", "hidden_fields", "series", "plot_size_by_field", "size_by_field"];
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var seriesVisible = function seriesVisible(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var type = config.type,
    _config$hidden_fields = config.hidden_fields,
    hidden_fields = _config$hidden_fields === void 0 ? [] : _config$hidden_fields,
    _config$series = config.series,
    series = _config$series === void 0 ? {} : _config$series,
    plot_size_by_field = config.plot_size_by_field,
    size_by_field = config.size_by_field,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var measures = (0, _utils.getMeasureNames)(fields);
  var buildArraySeries = function buildArraySeries() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arraySeries = (0, _toConsumableArray2["default"])(s);
    for (var i = 0; i < measures.length; i++) {
      var _ref3 = arraySeries[i] || {},
        _ref2$visible2 = _ref3.visible,
        currentVisibility = _ref2$visible2 === void 0 ? true : _ref2$visible2;
      (0, _set["default"])(arraySeries, [i, 'visible'], currentVisibility);
    }
    return arraySeries;
  };
  var buildNamedSeries = function buildNamedSeries(s) {
    var namedSeries = _objectSpread({}, s);
    var _iterator = _createForOfIteratorHelper(measures),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        var defaultVisibility = !(type === 'scatter' && size_by_field === field && !plot_size_by_field && fields.measures.length > 1 || hidden_fields.includes(field));
        var visible = namedSeries[field].visible;
        (0, _set["default"])(namedSeries, [field, 'visible'], typeof visible === 'boolean' ? visible : defaultVisibility);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return namedSeries;
  };
  return {
    config: _objectSpread({
      series: Array.isArray(series) ? buildArraySeries(series) : buildNamedSeries(series),
      plot_size_by_field: plot_size_by_field,
      size_by_field: size_by_field,
      type: type
    }, restConfig),
    data: data,
    fields: fields
  };
};
exports.seriesVisible = seriesVisible;
//# sourceMappingURL=seriesVisible.js.map