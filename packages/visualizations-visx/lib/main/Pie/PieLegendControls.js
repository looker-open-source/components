"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieLegendControls = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@styled-icons/material");
var _components = require("@looker/components");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PieLegendControls = function PieLegendControls(_ref) {
  var orientation = _ref.orientation,
    contentRect = _ref.contentRect,
    containerRect = _ref.containerRect,
    page = _ref.page,
    totalPages = _ref.totalPages,
    handleNextClick = _ref.handleNextClick,
    handlePrevClick = _ref.handlePrevClick;
  var _useTranslation = (0, _utils.useTranslation)('PieLegendControls'),
    t = _useTranslation.t;
  return _react["default"].createElement(_react["default"].Fragment, null, contentRect.height > containerRect.height && orientation === 'vertical' && _react["default"].createElement(LegendControls, {
    orientation: orientation
  }, _react["default"].createElement(CondensedIconButton, {
    shape: "square",
    p: "small",
    icon: _react["default"].createElement(_material.KeyboardArrowUp, null),
    onClick: handlePrevClick,
    disabled: page === 0,
    size: "large",
    label: t('Previous page')
  }), _react["default"].createElement("span", null, page + 1, "/", totalPages + 1), _react["default"].createElement(CondensedIconButton, {
    shape: "square",
    icon: _react["default"].createElement(_material.KeyboardArrowDown, null),
    onClick: handleNextClick,
    disabled: page === totalPages,
    p: "small",
    size: "large",
    label: t('Next page')
  })), contentRect.width > containerRect.width && orientation === 'horizontal' && _react["default"].createElement(LegendControls, {
    orientation: orientation
  }, _react["default"].createElement(CondensedIconButton, {
    shape: "square",
    p: "small",
    icon: _react["default"].createElement(_material.KeyboardArrowRight, null),
    onClick: handleNextClick,
    disabled: page === totalPages,
    size: "large",
    label: t('Next page')
  }), _react["default"].createElement("span", null, page + 1, "/", totalPages + 1), _react["default"].createElement(CondensedIconButton, {
    shape: "square",
    icon: _react["default"].createElement(_material.KeyboardArrowLeft, null),
    onClick: handlePrevClick,
    disabled: page === 0,
    p: "small",
    size: "large",
    label: t('Previous page')
  })));
};
exports.PieLegendControls = PieLegendControls;
var LegendControls = _styledComponents["default"].div.withConfig({
  displayName: "PieLegendControls__LegendControls",
  componentId: "sc-x61jcd-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: grid;\n  grid-gap: ", ";\n  justify-items: center;\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.xxsmall;
}, function (_ref3) {
  var orientation = _ref3.orientation,
    theme = _ref3.theme;
  if (orientation === 'horizontal') {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        border-left: 1px solid ", ";\n        grid-template-rows: auto auto auto;\n        padding-left: ", ";\n      "])), theme.colors.ui2, theme.space.xxsmall);
  } else {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        border-top: 1px solid ", ";\n        grid-template-columns: auto auto auto 1fr;\n        padding-top: ", ";\n      "])), theme.colors.ui2, theme.space.xxsmall);
  }
});
var CondensedIconButton = (0, _styledComponents["default"])(_components.IconButton).withConfig({
  displayName: "PieLegendControls__CondensedIconButton",
  componentId: "sc-x61jcd-1"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  height: auto;\n  padding: 0;\n"])));
//# sourceMappingURL=PieLegendControls.js.map