"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFloatingLabel = exports.getHasValue = void 0;
var _react = require("react");
var _styledComponents = require("styled-components");
var _Portal = require("../../../Portal");
var _utils = require("../../../utils");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var _useSyncedState = (0, _utils.useSyncedState)(propsHasValue),
    _useSyncedState2 = _slicedToArray(_useSyncedState, 2),
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