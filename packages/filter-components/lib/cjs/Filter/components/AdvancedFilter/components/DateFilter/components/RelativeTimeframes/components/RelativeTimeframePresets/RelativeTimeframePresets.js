"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeframePresets = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _components = require("@looker/components");

var _Check = require("@styled-icons/material/Check");

var _ExpandMore = require("@styled-icons/material-rounded/ExpandMore");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../../../../../../../utils");

var _get_relative_timeframe_presets = require("../../utils/get_relative_timeframe_presets");

var _relative_timeframe_types = require("../../../../types/relative_timeframe_types");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RelativeTimeframePresets = function RelativeTimeframePresets(props) {
  var _useTranslation = (0, _utils.useTranslation)('RelativeTimeframePresets'),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showMore = _useState2[0],
      setShowMore = _useState2[1];

  var handleClick = function handleClick(e) {
    setShowMore(true);
    e.preventDefault();
  };

  return _react["default"].createElement(_components.MenuList, {
    density: -1,
    iconGutter: true
  }, showMore ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframesMostRecent,
    delay: "rapid"
  })), _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframesRecent,
    delay: "simple"
  })), _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframesLeastRecent,
    delay: "moderate"
  })), _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframesThis,
    delay: "complex"
  })), _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframesPrevious,
    delay: "intricate"
  }))) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(PresetTimeframeGroup, (0, _extends2["default"])({}, props, {
    presetTimeframe: _relative_timeframe_types.PresetTimeframes,
    delay: "none",
    duration: "none"
  })), _react["default"].createElement(CustomMenuItem, {
    detail: _react["default"].createElement(_components.Icon, {
      size: 28,
      color: "ui3",
      pr: "xsmall",
      icon: _react["default"].createElement(_ExpandMore.ExpandMore, null)
    }),
    onClick: handleClick
  }, t('More'))));
};

exports.RelativeTimeframePresets = RelativeTimeframePresets;

var PresetTimeframeGroup = function PresetTimeframeGroup(_ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 'simple' : _ref$duration,
      delay = _ref.delay,
      onPresetChange = _ref.onPresetChange,
      presetTimeframe = _ref.presetTimeframe,
      value = _ref.value;
  var presets = (0, _get_relative_timeframe_presets.useRelativeTimeframePresets)();

  var _useContext = (0, _react.useContext)(_components.DialogContext),
      closeModal = _useContext.closeModal;

  var handleOnClick = function handleOnClick(timeframe) {
    return function () {
      onPresetChange(timeframe);
      closeModal === null || closeModal === void 0 ? void 0 : closeModal();
    };
  };

  return _react["default"].createElement(_react["default"].Fragment, null, Object.values(presetTimeframe).map(function (timeframe, index) {
    var current = typeof value === 'string' && value === timeframe;
    return _react["default"].createElement(CustomMenuItem, {
      icon: current ? _react["default"].createElement(_Check.Check, null) : undefined,
      key: index,
      onClick: handleOnClick(timeframe),
      selected: current
    }, _react["default"].createElement(_components.FadeIn, {
      duration: duration,
      delay: delay
    }, presets[timeframe]));
  }), _react["default"].createElement(_components.MenuDivider, null));
};

var CustomMenuItem = (0, _styledComponents["default"])(_components.MenuItem).withConfig({
  displayName: "RelativeTimeframePresets__CustomMenuItem",
  componentId: "sc-1lkgww6-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  & > button {\n    &[aria-current='true'] {\n      background-color: ", ";\n      ", " {\n        color: ", ";\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.background;
}, _components.Icon, function (_ref3) {
  var colors = _ref3.theme.colors;
  return colors.key;
}, function (_ref4) {
  var colors = _ref4.theme.colors;
  return colors.keySubtle;
});
//# sourceMappingURL=RelativeTimeframePresets.js.map