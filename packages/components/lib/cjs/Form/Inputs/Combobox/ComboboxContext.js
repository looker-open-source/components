"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMultiData = exports.defaultData = exports.OptionContext = exports.ComboboxMultiContext = exports.ComboboxContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultData = {
  inputValue: undefined,
  navigationOption: undefined,
  option: undefined
};
exports.defaultData = defaultData;

var defaultMultiData = _objectSpread(_objectSpread({}, (0, _omit["default"])(defaultData, 'option')), {}, {
  options: []
});

exports.defaultMultiData = defaultMultiData;
var ComboboxContext = (0, _react.createContext)({
  data: defaultData
});
exports.ComboboxContext = ComboboxContext;
var ComboboxMultiContext = (0, _react.createContext)({
  data: defaultMultiData
});
exports.ComboboxMultiContext = ComboboxMultiContext;
var OptionContext = (0, _react.createContext)(undefined);
exports.OptionContext = OptionContext;
//# sourceMappingURL=ComboboxContext.js.map