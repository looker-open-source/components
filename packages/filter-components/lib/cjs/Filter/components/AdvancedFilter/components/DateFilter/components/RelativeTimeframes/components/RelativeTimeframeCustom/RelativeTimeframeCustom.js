"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeframeCustom = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _format_date = require("../../../../utils/format_date");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultValue = {
  from: new Date(Date.now()),
  to: new Date(Date.now())
};

var RelativeTimeframeCustom = function RelativeTimeframeCustom(_ref) {
  var value = _ref.value,
      onCustomChange = _ref.onCustomChange;
  var range = typeof value === 'string' ? defaultValue : value;

  var handleCustomChange = function handleCustomChange() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var newDateRange = _objectSpread({
      from: new Date(Date.now()),
      to: new Date(Date.now())
    }, d);

    onCustomChange(newDateRange);
  };

  return _react["default"].createElement(_components.Box2, {
    p: "u3"
  }, _react["default"].createElement(_components.InputDateRange, {
    dateStringFormat: _format_date.FILTERS_DATE_FORMAT,
    value: range,
    onChange: handleCustomChange
  }));
};

exports.RelativeTimeframeCustom = RelativeTimeframeCustom;
//# sourceMappingURL=RelativeTimeframeCustom.js.map