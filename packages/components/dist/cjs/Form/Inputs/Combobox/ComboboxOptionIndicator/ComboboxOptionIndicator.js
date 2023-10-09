"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxOptionIndicator = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Layout = require("../../../../Layout");
var _ComboboxContext = require("../ComboboxContext");
var _excluded = ["children", "indicator", "isActive", "isSelected", "isMulti"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isIndicatorFunction(children) {
  return typeof children === 'function';
}
var ComboboxOptionIndicator = function ComboboxOptionIndicator(_ref) {
  var children = _ref.children,
    propsIndicator = _ref.indicator,
    isActive = _ref.isActive,
    isSelected = _ref.isSelected,
    isMulti = _ref.isMulti,
    props = _objectWithoutProperties(_ref, _excluded);
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = isMulti ? contextMulti : context;
  var indicatorPropRef = contextToUse.indicatorPropRef;
  var indicatorToUse = propsIndicator !== undefined ? propsIndicator : indicatorPropRef && indicatorPropRef.current;
  var option = (0, _react.useContext)(_ComboboxContext.OptionContext) || {
    value: ''
  };
  var label = option.label,
    value = option.value;
  var indicator = (0, _react.useMemo)(function () {
    var indicatorProps = {
      isActive: isActive,
      isSelected: isSelected,
      label: label,
      value: value
    };
    if ((0, _react.isValidElement)(indicatorToUse)) {
      return (0, _react.cloneElement)(indicatorToUse, indicatorProps);
    } else if (isIndicatorFunction(indicatorToUse)) {
      return indicatorToUse(indicatorProps);
    }
    return indicatorToUse;
  }, [indicatorToUse, isActive, isSelected, value, label]);
  var content = indicator === undefined ? children : indicator;
  return _react["default"].createElement(_Layout.Flex, _extends({
    width: content ? 'small' : 'none',
    alignItems: "flex-start",
    flexShrink: 0,
    justifyContent: "center",
    mr: "xsmall"
  }, props), content);
};
exports.ComboboxOptionIndicator = ComboboxOptionIndicator;
//# sourceMappingURL=ComboboxOptionIndicator.js.map