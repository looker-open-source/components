"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiFunctionButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MultiFunctionButton = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var alternate = _ref.alternate,
      children = _ref.children,
      alternateRef = _ref.alternateRef,
      _ref$swap = _ref.swap,
      swap = _ref$swap === void 0 ? false : _ref$swap;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      containerHeight = _useState2[0],
      setContainerHeight = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      containerWidth = _useState4[0],
      setContainerWidth = _useState4[1];

  var aRef = (0, _react.useRef)(null);
  var bRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var a = aRef.current;
    var b = bRef.current;

    if (a && b) {
      setContainerHeight(Math.max(a.offsetHeight, b.offsetHeight, 0));
      setContainerWidth(Math.max(a.offsetWidth, b.offsetWidth, 0));
    }
  }, [containerHeight, containerWidth]);
  (0, _react.useEffect)(function () {
    if (swap === true && aRef.current === document.activeElement) {
      var _bRef$current;

      (_bRef$current = bRef.current) === null || _bRef$current === void 0 ? void 0 : _bRef$current.focus();
    }

    if (swap === false && bRef.current === document.activeElement) {
      var _aRef$current;

      (_aRef$current = aRef.current) === null || _aRef$current === void 0 ? void 0 : _aRef$current.focus();
    }
  }, [swap]);
  var style = containerWidth > 0 ? {
    width: containerWidth
  } : undefined;
  return _react["default"].createElement(MultiFunctionButtonStyle, {
    swap: swap,
    height: containerHeight,
    width: containerWidth
  }, (0, _react.cloneElement)(children, {
    'aria-hidden': !!swap,
    disabled: swap === true ? true : undefined,
    ref: (0, _utils.useForkedRef)(aRef, forwardedRef),
    style: style
  }), (0, _react.cloneElement)(alternate, {
    'aria-hidden': !swap,
    disabled: swap === false ? true : undefined,
    ref: (0, _utils.useForkedRef)(bRef, alternateRef),
    style: style
  }));
});
exports.MultiFunctionButton = MultiFunctionButton;
MultiFunctionButton.displayName = 'MultiFunctionButton';

var MultiFunctionButtonStyle = _styledComponents["default"].div.withConfig({
  displayName: "MultiFunctionButton__MultiFunctionButtonStyle",
  componentId: "sc-uf1rdu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n  > * {\n    flex-shrink: 0;\n  }\n  ", "\n"])), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var swap = _ref4.swap;
  return swap ? "> *:first-child {\n        position: absolute;\n        top: -100000px;\n      }" : "> *:last-child {\n        position: absolute;\n        top: -100000px;\n      }";
});
//# sourceMappingURL=MultiFunctionButton.js.map