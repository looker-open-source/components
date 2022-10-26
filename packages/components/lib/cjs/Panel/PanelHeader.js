"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _ArrowBack = require("@styled-icons/material-rounded/ArrowBack");

var _Text = require("../Text");

var _utils = require("../utils");

var _Layout = require("../Layout");

var _Button = require("../Button");

var PanelHeader = function PanelHeader(_ref) {
  var closeLabel = _ref.closeLabel,
      onClose = _ref.onClose,
      _ref$iconToggle = _ref.iconToggle,
      iconToggle = _ref$iconToggle === void 0 ? false : _ref$iconToggle,
      title = _ref.title;

  var _useTranslation = (0, _utils.useTranslation)('PanelHeader'),
      t = _useTranslation.t;

  var defaultLabel = t('CloseTitle', {
    title: title
  });

  var _useTheme = (0, _styledComponents.useTheme)(),
      space = _useTheme.space;

  return _react["default"].createElement(_Layout.Space, {
    as: "header",
    height: space.u10,
    px: "large",
    gap: "u3",
    mt: "small",
    mb: "1.5rem",
    flexShrink: 0
  }, _react["default"].createElement(_Button.IconButton, {
    icon: _react["default"].createElement(_ArrowBack.ArrowBack, null),
    label: closeLabel || defaultLabel,
    onClick: onClose,
    toggle: iconToggle,
    toggleBackground: iconToggle,
    shape: "round",
    size: "small"
  }), _react["default"].createElement(_Text.Heading, {
    fontSize: "xlarge"
  }, title));
};

exports.PanelHeader = PanelHeader;
//# sourceMappingURL=PanelHeader.js.map