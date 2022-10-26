"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RelativeTimeframes = exports.MultiConditionTier = exports.MultiConditionString = exports.MultiConditionNumber = exports.MultiConditionDate = exports.Config = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../");

var _i18n = require("../utils/i18n");

var _locales = require("../locales");

var _Filter = require("./Filter");

var _excluded = ["locale"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en' : _ref$locale,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(args.expression),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      expression = _useState2[0],
      setExpression = _useState2[1];

  var handleChange = function handleChange(value) {
    var _args$onChange;

    setExpression(value.expression);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, value);
  };

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      ready = _useState4[0],
      setReady = _useState4[1];

  (0, _react.useEffect)(function () {
    (0, _i18n.i18nInit)({
      locale: locale,
      resources: _locales.i18nResources,
      dateLocale: (0, _.getLocale)(locale)
    }).then(function () {
      setReady(true);
    });
  }, [locale]);
  return ready ? _react["default"].createElement(_Filter.Filter, (0, _extends2["default"])({}, args, {
    expression: expression,
    onChange: handleChange
  })) : _react["default"].createElement("p", null, "Loading...");
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  locale: 'en',
  expressionType: 'number',
  expression: '',
  allowMultipleValues: true
};
var MultiConditionNumber = Template.bind({});
exports.MultiConditionNumber = MultiConditionNumber;
MultiConditionNumber.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  expression: '[0,20],>30'
});
var MultiConditionDate = Template.bind({});
exports.MultiConditionDate = MultiConditionDate;
MultiConditionDate.args = {
  locale: 'en',
  expressionType: 'date',
  expression: 'this week,last week, next week',
  allowMultipleValues: true
};
var MultiConditionString = Template.bind({});
exports.MultiConditionString = MultiConditionString;
MultiConditionString.args = {
  expressionType: 'string',
  expression: '%Active%,MV Sport,-Activewear Apparel',
  allowMultipleValues: true
};
var MultiConditionTier = Template.bind({});
exports.MultiConditionTier = MultiConditionTier;
MultiConditionTier.args = {
  expressionType: 'tier',
  expression: "20 to 29,{{ _user_attributes['locale'] }}",
  allowMultipleValues: true
};
var Config = Template.bind({});
exports.Config = Config;
Config.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  config: {
    max: 100,
    min: 0,
    type: 'slider'
  },
  expression: '20'
});
var RelativeTimeframes = Template.bind({});
exports.RelativeTimeframes = RelativeTimeframes;
RelativeTimeframes.args = {
  locale: 'en',
  config: {
    type: 'relative_timeframes'
  },
  expression: 'Today',
  expressionType: 'date',
  allowMultipleValues: true
};
var _default = {
  title: 'Filters / Filter',
  component: _Filter.Filter
};
exports["default"] = _default;
//# sourceMappingURL=Filter.stories.js.map