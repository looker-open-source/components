"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabListCSS = exports.TabList2 = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../utils");

var _TabIndicator = require("./TabIndicator");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var tabListCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  border-bottom: 1px solid ", ";\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  overflow-x: auto;\n  scrollbar-width: none; /* Firefox */\n  white-space: nowrap;\n  &::-webkit-scrollbar {\n    display: none; /* Safari and Chrome */\n  }\n  ", "\n"])), _designTokens.reset, _designTokens.padding, _designTokens.fontSize, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui2;
}, function (_ref2) {
  var distribute = _ref2.distribute;
  return distribute && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      display: grid;\n      grid-auto-columns: 1fr;\n      grid-auto-flow: column;\n      ", " {\n        border-radius: 0;\n        height: 2px;\n        left: 0;\n        right: 0;\n      }\n    "])), _TabIndicator.TabIndicator);
});
exports.tabListCSS = tabListCSS;
var TabList2 = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref3, ref) {
  var children = _ref3.children,
      className = _ref3.className;

  var _useTranslation = (0, _utils.useTranslation)('TabList'),
      t = _useTranslation.t;

  var navProps = (0, _utils.useArrowKeyNav)({
    axis: 'horizontal',
    ref: ref
  });
  return _react["default"].createElement("div", (0, _extends2["default"])({
    "aria-label": t('Tabs'),
    className: className,
    role: "tablist"
  }, navProps), children);
})).attrs(function (_ref4) {
  var _ref4$fontSize = _ref4.fontSize,
      fontSize = _ref4$fontSize === void 0 ? 'small' : _ref4$fontSize;
  return {
    fontSize: fontSize
  };
}).withConfig({
  displayName: "TabList2",
  componentId: "sc-2bxa01-0"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), tabListCSS);
exports.TabList2 = TabList2;
//# sourceMappingURL=TabList2.js.map