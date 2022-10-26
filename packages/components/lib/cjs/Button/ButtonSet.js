"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSetLayout = exports.ButtonSet = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _height = require("../Form/Inputs/height");

var _simple = require("../Layout/utils/simple");

var _utils = require("../utils");

var _ButtonSetContext = require("./ButtonSetContext");

var _ButtonItem = require("./ButtonItem");

var _templateObject;

var _excluded = ["children", "className", "disabled", "onItemClick", "options", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonSetLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      onItemClick = _ref.onItemClick,
      options = _ref.options,
      value = _ref.value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  if (children && options) {
    console.warn('Use children or options but not both at the same time.');
  }

  var context = {
    disabled: disabled,
    onItemClick: onItemClick,
    value: value
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isWrapping = _useState2[0],
      setIsWrapping = _useState2[1];

  var timeoutRef = (0, _react.useRef)();
  var measureRef = (0, _react.useCallback)(function (node) {
    if (node) {
      var _node$getBoundingClie = node.getBoundingClientRect(),
          height = _node$getBoundingClie.height;

      var getIsWrapping = function getIsWrapping() {
        var firstItem = node.childNodes[0];
        var rowHeight = firstItem ? firstItem.getBoundingClientRect().height : _height.inputHeightNumber;

        if (height >= rowHeight * 2) {
          setIsWrapping(true);
        } else {
          setIsWrapping(false);
        }
      };

      if (height > 0) {
        getIsWrapping();
      } else {
        timeoutRef.current = setTimeout(getIsWrapping, 10);
      }
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [options]);
  var ref = (0, _utils.useForkedRef)(measureRef, forwardedRef);
  var optionItems = options && options.map(function (_ref2) {
    var disabled = _ref2.disabled,
        label = _ref2.label,
        value = _ref2.value;
    return _react["default"].createElement(_ButtonItem.ButtonItem, {
      key: value,
      disabled: disabled,
      value: value
    }, label || value);
  });
  return _react["default"].createElement(_ButtonSetContext.ButtonSetContext.Provider, {
    value: context
  }, _react["default"].createElement("div", (0, _extends2["default"])({
    role: "group",
    className: "".concat(isWrapping ? 'wrapping ' : '').concat(className),
    ref: ref
  }, props), children || optionItems));
});
exports.ButtonSetLayout = ButtonSetLayout;
ButtonSetLayout.displayName = 'ButtonSetLayout';
var ButtonSet = (0, _styledComponents["default"])(ButtonSetLayout).withConfig({
  displayName: "ButtonSet",
  componentId: "sc-b1ia7f-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  align-items: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  font-size: ", ";\n  text-align: center;\n"])), _simple.simpleLayoutCSS, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
});
exports.ButtonSet = ButtonSet;
//# sourceMappingURL=ButtonSet.js.map