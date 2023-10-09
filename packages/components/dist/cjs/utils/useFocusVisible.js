"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusVisible = exports.focusVisibleCSSWrapper = void 0;
var _react = require("react");
var _styledComponents = require("styled-components");
var _templateObject;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var focusVisibleCSSWrapper = function focusVisibleCSSWrapper(styleFn) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:focus-visible {\n    ", "\n  }\n  ", "\n"])), styleFn, function (_ref) {
    var focusVisible = _ref.focusVisible;
    return focusVisible && styleFn;
  });
};
exports.focusVisibleCSSWrapper = focusVisibleCSSWrapper;
var useFocusVisible = function useFocusVisible(_ref2) {
  var _onBlur = _ref2.onBlur,
    _onKeyUp = _ref2.onKeyUp;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocusVisible = _useState2[0],
    setFocusVisible = _useState2[1];
  return (0, _react.useMemo)(function () {
    return {
      focusVisible: isFocusVisible,
      onBlur: function onBlur(e) {
        setFocusVisible(false);
        _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
      },
      onKeyUp: function onKeyUp(e) {
        if (e.currentTarget === e.target) {
          setFocusVisible(true);
        }
        _onKeyUp === null || _onKeyUp === void 0 ? void 0 : _onKeyUp(e);
      }
    };
  }, [isFocusVisible, _onBlur, _onKeyUp]);
};
exports.useFocusVisible = useFocusVisible;
//# sourceMappingURL=useFocusVisible.js.map