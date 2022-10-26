"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aside = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _common = require("../../utils/common");

var _asideWidth = require("./asideWidth");

var _templateObject;

var _excluded = ["collapse", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AsideLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var collapse = _ref.collapse,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useOverflow = (0, _utils.useOverflow)(forwardedRef),
      _useOverflow2 = (0, _slicedToArray2["default"])(_useOverflow, 2),
      hasOverflow = _useOverflow2[0],
      ref = _useOverflow2[1];

  return collapse ? null : _react["default"].createElement(_utils.OverflowShadow, (0, _extends2["default"])({
    as: "aside",
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
AsideLayout.displayName = 'AsideLayout';
var Aside = (0, _styledComponents["default"])(AsideLayout).withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop === 'collapse' || (0, _designTokens.shouldForwardProp)(prop);
  },
  displayName: "Aside",
  componentId: "sc-1t83syr-0"
}).attrs(function (_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 'sidebar' : _ref2$width;
  return {
    width: width
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n", "\n\nflex: 0 0 ", ";\nmax-width: ", ";\nmin-width: ", ";\noverflow: auto;\nwidth: 0;\n", "\n\n", ""])), _common.commonLayoutCSS, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var width = _ref4.width;
  return width;
}, function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var scrollWithin = _ref6.scrollWithin;
  return scrollWithin && 'height: fit-content;';
}, _asideWidth.asideWidth);
exports.Aside = Aside;
//# sourceMappingURL=Aside.js.map