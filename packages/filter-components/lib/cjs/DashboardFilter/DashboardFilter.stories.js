"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Validation = exports.Suggestions = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _DashboardFilter = require("./DashboardFilter");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  var _useState = (0, _react.useState)(args.expression),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      expression = _useState2[0],
      setExpression = _useState2[1];

  var handleChange = function handleChange(newExpression) {
    var _args$onChange;

    setExpression(newExpression);
    (_args$onChange = args.onChange) === null || _args$onChange === void 0 ? void 0 : _args$onChange.call(args, newExpression);
  };

  return _react["default"].createElement(_DashboardFilter.DashboardFilter, (0, _extends2["default"])({}, args, {
    expression: expression,
    onChange: handleChange
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  expression: '',
  filter: {
    field: {
      is_numeric: true
    },
    name: 'Cost',
    type: 'field_filter',
    allow_multiple_values: true
  }
};
var Suggestions = Template.bind({});
exports.Suggestions = Suggestions;
Suggestions.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  filter: {
    field: {
      suggestable: typeof jest === 'undefined'
    },
    name: 'Status',
    type: 'field_filter',
    ui_config: {
      type: 'button_group'
    },
    allow_multiple_values: true
  },
  sdk: {
    ok: function ok(value) {
      return value;
    },
    get: function get() {
      return {
        suggestions: ['complete', 'pending', 'cancelled']
      };
    }
  }
});
var Validation = Template.bind({});
exports.Validation = Validation;
Validation.args = _objectSpread(_objectSpread({}, Suggestions.args), {}, {
  filter: _objectSpread(_objectSpread({}, Suggestions.args.filter), {}, {
    required: true,
    allow_multiple_values: true
  })
});
var _default = {
  title: 'Filters / DashboardFilter',
  component: _DashboardFilter.DashboardFilter
};
exports["default"] = _default;
//# sourceMappingURL=DashboardFilter.stories.js.map