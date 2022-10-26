"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFocusVisible = exports.focusVisibleCSSWrapper = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = require("react");

var _styledComponents = require("styled-components");

var _templateObject;

var focusVisibleCSSWrapper = function focusVisibleCSSWrapper(styleFn) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  &:focus-visible {\n    ", "\n  }\n  ", "\n"])), styleFn, function (_ref) {
    var focusVisible = _ref.focusVisible;
    return focusVisible && styleFn;
  });
};

exports.focusVisibleCSSWrapper = focusVisibleCSSWrapper;

var useFocusVisible = function useFocusVisible(_ref2) {
  var _onBlur = _ref2.onBlur,
      _onKeyUp = _ref2.onKeyUp;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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