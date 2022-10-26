"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HueSliderLayout = exports.HueSlider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../../utils");

var _utils2 = require("../utils");

var _Handle = require("../Handle");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var HueSliderLayout = function HueSliderLayout(_ref) {
  var _sliderRef$current;

  var className = _ref.className,
      hsv = _ref.hsv,
      setHsv = _ref.setHsv,
      width = _ref.width;
  var handlePosition = hsv.h / 360 * width;
  var sliderRef = (0, _react.useRef)(null);
  var sliderLeft = ((_sliderRef$current = sliderRef.current) === null || _sliderRef$current === void 0 ? void 0 : _sliderRef$current.getBoundingClientRect().left) || 0;

  var handleSliderClick = function handleSliderClick(event) {
    var clickEventX = event.clientX;
    var newHue = (clickEventX - sliderLeft) / width * 360;
    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      h: newHue
    }));
  };

  var _useMouseDragPosition = (0, _utils.useMouseDragPosition)(sliderRef.current),
      isMouseDown = _useMouseDragPosition.isMouseDown,
      mousePos = _useMouseDragPosition.mousePos;

  var previousIsMouseDown = (0, _utils.usePreviousValue)(isMouseDown);

  var handleHandleDrag = function handleHandleDrag() {
    var newHue = (mousePos.x - sliderLeft) / width * 360;

    if (newHue > 360) {
      newHue = 360;
    } else if (newHue < 0) {
      newHue = 0;
    }

    setHsv(_objectSpread(_objectSpread({}, hsv), {}, {
      h: newHue
    }));
  };

  (0, _react.useEffect)(function () {
    if (isMouseDown && previousIsMouseDown) {
      handleHandleDrag();
    }
  }, [mousePos]);
  var sliderHandleColor = (0, _utils2.simpleHsvToHex)(_objectSpread(_objectSpread({}, hsv), {}, {
    s: 1,
    v: 1
  }));
  return _react["default"].createElement(HueSliderTrack, {
    className: className,
    isMouseDown: isMouseDown,
    onMouseDown: handleSliderClick,
    ref: sliderRef,
    width: width
  }, _react["default"].createElement(_Handle.Handle, {
    color: sliderHandleColor,
    isMouseDown: isMouseDown,
    x: handlePosition
  }));
};

exports.HueSliderLayout = HueSliderLayout;

var HueSliderTrack = _styledComponents["default"].div.withConfig({
  displayName: "HueSlider__HueSliderTrack",
  componentId: "sc-10igbq6-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: linear-gradient(\n    90deg,\n    #f00 0,\n    #ff0 17%,\n    #0f0 33%,\n    #0ff 50%,\n    #00f 67%,\n    #f0f 83%,\n    #f00\n  );\n\n  border-radius: ", ";\n  cursor: ", ";\n  height: ", ";\n  width: ", "px;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.radii.large;
}, function (_ref3) {
  var isMouseDown = _ref3.isMouseDown;
  return isMouseDown ? 'grabbing' : 'default';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u3;
}, function (_ref5) {
  var width = _ref5.width;
  return width;
});

var HueSlider = (0, _styledComponents["default"])(HueSliderLayout).withConfig({
  displayName: "HueSlider",
  componentId: "sc-10igbq6-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.HueSlider = HueSlider;
//# sourceMappingURL=HueSlider.js.map