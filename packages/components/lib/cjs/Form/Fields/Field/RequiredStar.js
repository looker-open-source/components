"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequiredStar = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _templateObject;

var RequiredStarLayout = function RequiredStarLayout(_ref) {
  var className = _ref.className;

  var _useTranslation = (0, _utils.useTranslation)('RequiredStar'),
      t = _useTranslation.t;

  return _react["default"].createElement("span", {
    "aria-hidden": "true",
    className: className,
    "data-testid": "requiredStar"
  }, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, " ".concat(t('required'))));
};

var RequiredStar = (0, _styledComponents["default"])(RequiredStarLayout).withConfig({
  displayName: "RequiredStar",
  componentId: "sc-jh9e0g-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &::before {\n    color: ", ";\n    content: ' *';\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.critical;
});
exports.RequiredStar = RequiredStar;
//# sourceMappingURL=RequiredStar.js.map