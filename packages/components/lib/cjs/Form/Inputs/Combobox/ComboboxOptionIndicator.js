"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxOptionIndicator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Layout = require("../../../Layout");

var _ComboboxContext = require("./ComboboxContext");

var _excluded = ["children", "indicator", "isActive", "isSelected", "isMulti"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function isIndicatorFunction(children) {
  return typeof children === 'function';
}

var ComboboxOptionIndicator = function ComboboxOptionIndicator(_ref) {
  var children = _ref.children,
      propsIndicator = _ref.indicator,
      isActive = _ref.isActive,
      isSelected = _ref.isSelected,
      isMulti = _ref.isMulti,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
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
  return _react["default"].createElement(_Layout.Flex, (0, _extends2["default"])({
    width: content ? 'small' : 'none',
    alignItems: "flex-start",
    flexShrink: 0,
    justifyContent: "center",
    mr: "xsmall"
  }, props), content);
};

exports.ComboboxOptionIndicator = ComboboxOptionIndicator;
//# sourceMappingURL=ComboboxOptionIndicator.js.map