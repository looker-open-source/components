"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanels = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _templateObject;

var _excluded = ["children", "className", "selectedIndex"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Layout = function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      selectedIndex = _ref.selectedIndex,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var tabPanelsLayoutProps = (0, _omit["default"])(props, 'onSelectTab');

  var clonedChildren = _react.Children.map(children, function (child, index) {
    return (0, _react.cloneElement)(child, {
      selected: index === selectedIndex
    });
  });

  return _react["default"].createElement("div", (0, _extends2["default"])({
    "aria-labelledby": "tab-".concat(selectedIndex),
    className: className,
    id: "panel-".concat(selectedIndex),
    role: "tabpanel"
  }, tabPanelsLayoutProps), clonedChildren);
};

var TabPanels = (0, _styledComponents["default"])(Layout).attrs(function (_ref2) {
  var _ref2$pt = _ref2.pt,
      pt = _ref2$pt === void 0 ? 'large' : _ref2$pt;
  return {
    pt: pt
  };
}).withConfig({
  displayName: "TabPanels",
  componentId: "sc-15ef4fm-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.flexbox, _designTokens.layout, _designTokens.space);
exports.TabPanels = TabPanels;
//# sourceMappingURL=TabPanels.js.map