"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Relative = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("./../../../../../utils");

var _DateFilter = require("./DateFilter");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

(0, _utils.i18nInit)();

var Template = function Template(args) {
  return _react["default"].createElement(_DateFilter.DateFilter, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  filterType: 'date',
  name: 'filtername',
  item: {
    id: '1',
    type: 'after',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
var Relative = Template.bind({});
exports.Relative = Relative;
Relative.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  item: {
    id: '1',
    is: false,
    endInterval: {
      type: 'interval',
      value: 3,
      unit: 'week'
    },
    intervalType: 'ago',
    startInterval: {
      type: 'interval',
      value: 3,
      unit: 'month'
    },
    type: 'relative'
  }
});
var _default = {
  title: 'Filters / Date Filter',
  component: _DateFilter.DateFilter
};
exports["default"] = _default;
//# sourceMappingURL=DateFilter.stories.js.map