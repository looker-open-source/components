"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useThisNextUnits = exports.useLastUnits = exports.useFiscalThisNextUnits = exports.useFiscalLastUnits = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _date_units = require("./date_units");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var singularizeLabel = function singularizeLabel(option) {
  return _objectSpread(_objectSpread({}, option), {}, {
    label: option.singular || option.label
  });
};

var useLastUnits = function useLastUnits() {
  var dateUnits = (0, _date_units.useDateUnits)();
  return dateUnits.map(singularizeLabel);
};

exports.useLastUnits = useLastUnits;

var useThisNextUnits = function useThisNextUnits() {
  var lastUnits = useLastUnits();
  return lastUnits.filter(function (option) {
    return ['second', 'minute', 'hour'].indexOf(option.value) === -1;
  });
};

exports.useThisNextUnits = useThisNextUnits;

var useFiscalLastUnits = function useFiscalLastUnits() {
  var dateUnits = (0, _date_units.useDateUnits)();
  var fiscalDateUnits = (0, _date_units.useFiscalDateUnits)();
  return [].concat((0, _toConsumableArray2["default"])(dateUnits), (0, _toConsumableArray2["default"])(fiscalDateUnits)).map(singularizeLabel);
};

exports.useFiscalLastUnits = useFiscalLastUnits;

var useFiscalThisNextUnits = function useFiscalThisNextUnits() {
  var thisNextUnits = useThisNextUnits();
  var fiscalDateUnits = (0, _date_units.useFiscalDateUnits)();
  return [].concat((0, _toConsumableArray2["default"])(thisNextUnits), (0, _toConsumableArray2["default"])(fiscalDateUnits)).map(singularizeLabel);
};

exports.useFiscalThisNextUnits = useFiscalThisNextUnits;
//# sourceMappingURL=this_next_last_units.js.map