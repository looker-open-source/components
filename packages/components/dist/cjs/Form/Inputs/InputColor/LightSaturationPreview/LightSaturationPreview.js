"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightSaturationPreview = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../../utils");
var _utils2 = require("../utils");
var _Handle = require("../Handle");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LightSaturationPreviewLayout = function LightSaturationPreviewLayout(_ref) {
  var _previewRef$current, _previewRef$current2;
  var className = _ref.className,
    hsv = _ref.hsv,
    setHsv = _ref.setHsv,
    previewWidth = _ref.width;
  var previewHeight = previewWidth * 0.75;
  var handleX = hsv.s * previewWidth;
  var handleY = previewHeight - hsv.v * previewHeight;
  var previewRef = (0, _react.useRef)(null);
  var previewLeft = ((_previewRef$current = previewRef.current) === null || _previewRef$current === void 0 ? void 0 : _previewRef$current.getBoundingClientRect().left) || 0;
  var previewTop = ((_previewRef$current2 = previewRef.current) === null || _previewRef$current2 === void 0 ? void 0 : _previewRef$current2.getBoundingClientRect().top) || 0;
  var handleMouseDown = function handleMouseDown(event) {
    var clickEventX = event.clientX;
    var clickEventY = event.clientY;
    var newSaturation = (clickEventX - previewLeft) / previewWidth;
    var newValue = (previewHeight - (clickEventY - previewTop)) / previewHeight;
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      s: newSaturation,
      v: newValue
    }));
  };
  var _useMouseDragPosition = (0, _utils.useMouseDragPosition)(previewRef.current),
    isMouseDown = _useMouseDragPosition.isMouseDown,
    mousePos = _useMouseDragPosition.mousePos;
  var previousIsMouseDown = (0, _utils.usePreviousValue)(isMouseDown);
  var handleHandleDrag = function handleHandleDrag() {
    var newSaturation = (mousePos.x - previewLeft) / previewWidth;
    if (newSaturation > 1) {
      newSaturation = 1;
    } else if (newSaturation < 0) {
      newSaturation = 0;
    }
    var newValue = (previewHeight - (mousePos.y - previewTop)) / previewHeight;
    if (newValue > 1) {
      newValue = 1;
    } else if (newValue < 0) {
      newValue = 0;
    }
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      s: newSaturation,
      v: newValue
    }));
  };
  (0, _react.useEffect)(function () {
    if (isMouseDown && previousIsMouseDown) {
      handleHandleDrag();
    }
  }, [mousePos]);
  var backgroundColor = (0, _utils2.simpleHsvToHex)({
    h: hsv.h,
    s: 1,
    v: 1
  });
  var color = (0, _utils2.simpleHsvToHex)(_objectSpread({}, hsv));
  return _react["default"].createElement(LightSaturationPreviewContainer, {
    backgroundColor: backgroundColor,
    className: className,
    isMouseDown: isMouseDown,
    onMouseDown: handleMouseDown,
    height: previewHeight,
    ref: previewRef,
    width: previewWidth,
    "data-testid": "light-saturation-preview"
  }, _react["default"].createElement(_Handle.Handle2d, {
    color: color,
    isMouseDown: isMouseDown,
    x: handleX,
    y: handleY
  }));
};
var LightSaturationPreviewContainer = _styledComponents["default"].div.attrs(function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return {
    style: {
      backgroundColor: backgroundColor
    }
  };
}).withConfig({
  displayName: "LightSaturationPreview__LightSaturationPreviewContainer",
  componentId: "sc-crmpxu-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-image: linear-gradient(0deg, #000, transparent),\n    linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));\n  border-radius: ", ";\n  cursor: ", ";\n  height: ", "px;\n  width: ", "px;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.medium;
}, function (_ref4) {
  var isMouseDown = _ref4.isMouseDown;
  return isMouseDown ? 'grabbing' : 'default';
}, function (_ref5) {
  var height = _ref5.height;
  return height;
}, function (_ref6) {
  var width = _ref6.width;
  return width;
});
var LightSaturationPreview = (0, _styledComponents["default"])(LightSaturationPreviewLayout).withConfig({
  displayName: "LightSaturationPreview",
  componentId: "sc-crmpxu-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.LightSaturationPreview = LightSaturationPreview;
//# sourceMappingURL=LightSaturationPreview.js.map