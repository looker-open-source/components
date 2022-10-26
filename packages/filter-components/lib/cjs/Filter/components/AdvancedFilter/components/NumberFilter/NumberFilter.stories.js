"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GreaterThanError = exports.GreaterThan = exports.Error = exports.BetweenError = exports.Between = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../utils");

var _NumberFilter = require("./NumberFilter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

(0, _utils.i18nInit)();

var Template = function Template(args) {
  return _react["default"].createElement(_NumberFilter.NumberFilter, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  allowMultipleOptions: true,
  filterType: 'number',
  name: 'filtername',
  item: {
    id: '1',
    type: '=',
    is: true,
    value: []
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    type: 'error'
  }
});
var GreaterThan = Template.bind({});
exports.GreaterThan = GreaterThan;
GreaterThan.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: '>',
    value: [99]
  }
});
var GreaterThanError = Template.bind({});
exports.GreaterThanError = GreaterThanError;
GreaterThanError.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: '>',
    value: []
  },
  validationMessage: {
    type: 'error'
  }
});
var Between = Template.bind({});
exports.Between = Between;
Between.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    high: 10,
    id: '1',
    is: true,
    low: 5,
    type: 'between'
  }
});
var BetweenError = Template.bind({});
exports.BetweenError = BetweenError;
BetweenError.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: true,
    type: 'between'
  },
  validationMessage: {
    type: 'error'
  }
});
var _default = {
  title: 'Filters / Number Filter',
  component: _NumberFilter.NumberFilter
};
exports["default"] = _default;
//# sourceMappingURL=NumberFilter.stories.js.map