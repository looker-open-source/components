"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncateOptionally = exports.Truncate = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Span = require("../Text/Span");

var _Tooltip = require("../Tooltip");

var _utils = require("../utils");

var _templateObject;

var _excluded = ["truncate"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTruncateDescription = function getTruncateDescription(truncate) {
  return (0, _typeof2["default"])(truncate) === 'object' ? truncate.description : undefined;
};

var TruncateOptionally = function TruncateOptionally(_ref) {
  var truncate = _ref.truncate,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return truncate ? _react["default"].createElement(Truncate, (0, _extends2["default"])({
    description: getTruncateDescription(truncate)
  }, props)) : _react["default"].createElement(_Span.Span, props);
};

exports.TruncateOptionally = TruncateOptionally;

var TruncateLayout = function TruncateLayout(_ref2) {
  var children = _ref2.children,
      propsClassName = _ref2.className,
      description = _ref2.description;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      domNode = _useState2[0],
      setDomNode = _useState2[1];

  var isTruncated = (0, _utils.useIsTruncated)(domNode);
  var textRef = (0, _react.useCallback)(function (node) {
    setDomNode(node);
  }, []);

  var _useTooltip = (0, _Tooltip.useTooltip)({
    content: _react["default"].createElement(_react["default"].Fragment, null, children, description && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("br", null), _react["default"].createElement(_Span.Span, {
      color: "text2"
    }, description))),
    disabled: !description && !isTruncated,
    invert: false,
    placement: 'top-start',
    textAlign: 'left',
    triggerElement: domNode,
    width: 'auto'
  }),
      tooltip = _useTooltip.tooltip,
      domProps = _useTooltip.domProps;

  return _react["default"].createElement(_react["default"].Fragment, null, tooltip, _react["default"].createElement("span", (0, _extends2["default"])({}, domProps, {
    className: (0, _utils.mergeClassNames)([domProps.className, propsClassName]),
    ref: textRef
  }), children));
};

var Truncate = (0, _styledComponents["default"])(TruncateLayout).attrs(function (_ref3) {
  var _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '100%' : _ref3$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "Truncate",
  componentId: "sc-1y9fe07-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ", "\n  ", "\n  ", "\n\n  :focus-within {\n    a {\n      outline: none;\n    }\n  }\n"])), _designTokens.textColor, _designTokens.typography, _designTokens.width);
exports.Truncate = Truncate;
//# sourceMappingURL=Truncate.js.map