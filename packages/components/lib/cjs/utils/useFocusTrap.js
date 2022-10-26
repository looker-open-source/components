"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusTrap = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _componentsProviders = require("@looker/components-providers");

var _useTrapStack = require("./useTrapStack");

var _excluded = ["clickOutsideDeactivates"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useFocusTrap = function useFocusTrap(_ref) {
  var clickOutsideDeactivates = _ref.clickOutsideDeactivates,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var returnFocusRef = (0, _react.useRef)(null);
  var options = (0, _react.useMemo)(function () {
    return {
      clickOutsideDeactivates: clickOutsideDeactivates,
      returnFocusRef: returnFocusRef
    };
  }, [returnFocusRef, clickOutsideDeactivates]);
  return (0, _useTrapStack.useTrapStack)(_objectSpread({
    context: _componentsProviders.FocusTrapContext,
    options: options
  }, props));
};

exports.useFocusTrap = useFocusTrap;
//# sourceMappingURL=useFocusTrap.js.map