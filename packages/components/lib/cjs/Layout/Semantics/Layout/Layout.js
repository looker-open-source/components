"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _common = require("../../utils/common");

var _utils = require("../../../utils");

var _Section = require("../Section");

var _excluded = ["children"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var hasAsideCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  flex-direction: row;\n  & > ", " {\n    width: 0;\n  }\n"])), _Section.Section);
var LayoutLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useOverflow = (0, _utils.useOverflow)(forwardedRef),
      _useOverflow2 = (0, _slicedToArray2["default"])(_useOverflow, 2),
      hasOverflow = _useOverflow2[0],
      ref = _useOverflow2[1];

  return _react["default"].createElement(_utils.OverflowShadow, (0, _extends2["default"])({
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
LayoutLayout.displayName = 'LayoutLayout';
var Layout = (0, _styledComponents["default"])(LayoutLayout).withConfig({
  displayName: "Layout",
  componentId: "sc-vtli68-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  display: flex;\n  flex: 1 1 auto;\n  overflow: ", ";\n  ", "\n"])), _common.commonLayoutCSS, function (_ref2) {
  var fixed = _ref2.fixed;
  return fixed ? 'hidden' : 'auto';
}, function (_ref3) {
  var hasAside = _ref3.hasAside;
  return hasAside ? hasAsideCSS : 'flex-direction: column;';
});
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map