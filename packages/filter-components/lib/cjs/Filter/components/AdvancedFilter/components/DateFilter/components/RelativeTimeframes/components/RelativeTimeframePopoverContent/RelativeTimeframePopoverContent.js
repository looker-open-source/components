"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeframePopoverContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@looker/components");

var _utils = require("../../../../../../../../../utils");

var _RelativeTimeframeCustom = require("../RelativeTimeframeCustom");

var _RelativeTimeframePresets = require("../RelativeTimeframePresets");

var RelativeTimeframePopoverContent = function RelativeTimeframePopoverContent(_ref) {
  var value = _ref.value,
      onCustomChange = _ref.onCustomChange,
      onPresetChange = _ref.onPresetChange,
      onNav = _ref.onNav;
  var defaultTabIndex = typeof value === 'string' ? 0 : 1;

  var _useTranslation = (0, _utils.useTranslation)('RelativeTimeframePopoverContent'),
      t = _useTranslation.t;

  var handleTabClick = function handleTabClick() {
    requestAnimationFrame(function () {
      onNav();
    });
  };

  return _react["default"].createElement("div", null, _react["default"].createElement(_components.Tabs, {
    onChange: handleTabClick,
    defaultIndex: defaultTabIndex
  }, _react["default"].createElement(_components.TabList, {
    pt: "xsmall",
    pl: "small"
  }, _react["default"].createElement(_components.Tab, null, t('Presets')), _react["default"].createElement(_components.Tab, null, t('Custom'))), _react["default"].createElement(_components.TabPanels, {
    pt: "none"
  }, _react["default"].createElement(_components.TabPanel, null, _react["default"].createElement(_RelativeTimeframePresets.RelativeTimeframePresets, {
    value: value,
    onPresetChange: onPresetChange
  })), _react["default"].createElement(_components.TabPanel, null, _react["default"].createElement(_RelativeTimeframeCustom.RelativeTimeframeCustom, {
    value: value,
    onCustomChange: onCustomChange
  })))));
};

exports.RelativeTimeframePopoverContent = RelativeTimeframePopoverContent;
//# sourceMappingURL=RelativeTimeframePopoverContent.js.map