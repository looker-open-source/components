"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NoAnimation = exports.Measure = exports.Key = exports.Dimension = exports.Critical = exports.Calculation = exports.Bounded = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Layout = require("../Layout");

var _ = require("./");

var _excluded = ["bounded", "className", "color", "height", "width"],
    _excluded2 = ["callbacks"],
    _excluded3 = ["className", "color", "height", "width"],
    _excluded4 = ["callbacks"];

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\nalign-items: center;\n  display: flex;\n  justify-content: center;\n"])), _Layout.simpleLayoutCSS, _.rippleStyle);
var Ripple = (0, _styledComponents["default"])(function (_ref) {
  var bounded = _ref.bounded,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      width = _ref.width,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useRipple = (0, _.useRipple)({
    bounded: bounded,
    className: className,
    color: color,
    height: height,
    width: width
  }),
      callbacks = _useRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useRipple, _excluded2);

  var rippleHandlers = (0, _.useRippleHandlers)(callbacks, {});
  return _react["default"].createElement("div", (0, _extends2["default"])({
    tabIndex: 0
  }, rippleProps, rippleHandlers, props), "click me");
}).withConfig({
  displayName: "Ripplestories__Ripple",
  componentId: "sc-15a2avg-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles);
var BoundedRipple = (0, _styledComponents["default"])(function (_ref2) {
  var className = _ref2.className,
      color = _ref2.color,
      height = _ref2.height,
      width = _ref2.width,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded3);

  var _useBoundedRipple = (0, _.useBoundedRipple)({
    className: className,
    color: color
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded4);

  var rippleHandlers = (0, _.useRippleHandlers)(callbacks, {});
  return _react["default"].createElement("div", (0, _extends2["default"])({
    tabIndex: 0
  }, rippleProps, rippleHandlers, props), "click me");
}).withConfig({
  displayName: "Ripplestories__BoundedRipple",
  componentId: "sc-15a2avg-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles);

var Template = function Template(args) {
  return _react["default"].createElement(Ripple, args);
};

var BoundedTemplate = function BoundedTemplate(args) {
  return _react["default"].createElement(BoundedRipple, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  height: 80,
  width: 80
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
var Bounded = BoundedTemplate.bind({});
exports.Bounded = Bounded;
Bounded.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  width: 200
});
Bounded.parameters = {
  storyshots: {
    disable: true
  }
};
var Key = Template.bind({});
exports.Key = Key;
Key.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'key'
});
Key.parameters = {
  storyshots: {
    disable: true
  }
};
var Critical = Template.bind({});
exports.Critical = Critical;
Critical.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'critical'
});
Critical.parameters = {
  storyshots: {
    disable: true
  }
};
var Calculation = Template.bind({});
exports.Calculation = Calculation;
Calculation.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'calculation'
});
Calculation.parameters = {
  storyshots: {
    disable: true
  }
};
var Dimension = Template.bind({});
exports.Dimension = Dimension;
Dimension.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'dimension'
});
Dimension.parameters = {
  storyshots: {
    disable: true
  }
};
var Measure = Template.bind({});
exports.Measure = Measure;
Measure.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  color: 'measure'
});
Measure.parameters = {
  storyshots: {
    disable: true
  }
};

var NoAnimation = function NoAnimation() {
  return _react["default"].createElement(Ripple, {
    height: 80,
    width: 80
  });
};

exports.NoAnimation = NoAnimation;
NoAnimation.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  component: Ripple,
  title: 'Ripple'
};
exports["default"] = _default;
//# sourceMappingURL=Ripple.stories.js.map