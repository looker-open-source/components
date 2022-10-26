"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserAttributesErrorLong = exports.UserAttributesError = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _FilterErrorMessage = require("./FilterErrorMessage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  title: 'Filters / FilterErrorMessage',
  component: _FilterErrorMessage.FilterErrorMessage
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_FilterErrorMessage.FilterErrorMessage, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  filters: [{
    expression: '',
    expressionType: 'string',
    isRequired: true,
    name: 'testfilter'
  }]
};
var UserAttributesError = Template.bind({});
exports.UserAttributesError = UserAttributesError;
UserAttributesError.args = {
  filters: [{
    expression: "{{ _user_attributes['first_name'] }}",
    expressionType: 'string',
    name: 'testfilter'
  }],
  userAttributes: [{
    name: 'first_name',
    value: ''
  }]
};
var UserAttributesErrorLong = Template.bind({});
exports.UserAttributesErrorLong = UserAttributesErrorLong;
UserAttributesErrorLong.args = _objectSpread(_objectSpread({}, UserAttributesError.args), {}, {
  useLongMessageForm: true,
  userAttributes: [{
    name: 'first_name',
    value: ''
  }]
});
//# sourceMappingURL=FilterErrorMessage.stories.js.map