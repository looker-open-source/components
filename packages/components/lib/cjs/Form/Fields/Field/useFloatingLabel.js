"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFloatingLabel = exports.getHasValue = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _styledComponents = require("styled-components");

var _Portal = require("../../../Portal");

var _utils = require("../../../utils");

var defaultCheckValueOnBlur = function defaultCheckValueOnBlur(e) {
  var target = e.currentTarget;
  var input = target.querySelector('input') || target.querySelector('textarea');
  return (input === null || input === void 0 ? void 0 : input.value) !== undefined && input.value !== '';
};

var getIsInSelectList = function getIsInSelectList(nextFocusTarget, inputArea) {
  var portalRoot = (0, _Portal.getPortalRoot)();

  if (!portalRoot.contains(nextFocusTarget)) {
    return false;
  }

  if (portalRoot.contains(inputArea)) {
    return (nextFocusTarget === null || nextFocusTarget === void 0 ? void 0 : nextFocusTarget.closest('portal-child')) !== inputArea.closest('portal-child');
  }

  return true;
};

var getHasValue = function getHasValue(_ref) {
  var value = _ref.value,
      defaultValue = _ref.defaultValue;
  if (value !== undefined) return value !== '';
  if (defaultValue !== undefined) return defaultValue !== '';
  return false;
};

exports.getHasValue = getHasValue;

var useFloatingLabel = function useFloatingLabel(_ref2) {
  var _ref2$checkValueOnBlu = _ref2.checkValueOnBlur,
      checkValueOnBlur = _ref2$checkValueOnBlu === void 0 ? defaultCheckValueOnBlur : _ref2$checkValueOnBlu,
      propsHasValue = _ref2.hasValue,
      _ref2$labelOffset = _ref2.labelOffset,
      labelOffset = _ref2$labelOffset === void 0 ? '0rem' : _ref2$labelOffset;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useSyncedState = (0, _utils.useSyncedState)(propsHasValue),
      _useSyncedState2 = (0, _slicedToArray2["default"])(_useSyncedState, 2),
      hasValue = _useSyncedState2[0],
      setHasValue = _useSyncedState2[1];

  var theme = (0, _styledComponents.useTheme)();
  var style = {
    '--label-translate': "".concat(labelOffset, ", ").concat(theme.space.u4)
  };
  return {
    className: hasValue || isFocused ? 'label-up' : 'label-down',
    handlers: {
      onBlur: function onBlur(e) {
        if (checkValueOnBlur) {
          setHasValue(checkValueOnBlur(e));
        }

        var nextFocusTarget = e.relatedTarget;
        var isInSelectList = getIsInSelectList(nextFocusTarget, e.currentTarget);

        if (nextFocusTarget && !e.currentTarget.contains(nextFocusTarget) && !isInSelectList) {
          setIsFocused(false);
        }
      },
      onFocus: function onFocus() {
        setIsFocused(true);
      }
    },
    isFocused: isFocused,
    style: style
  };
};

exports.useFloatingLabel = useFloatingLabel;
//# sourceMappingURL=useFloatingLabel.js.map