"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _StringFilter = require("./StringFilter");

var Template = function Template(args) {
  return _react["default"].createElement(_StringFilter.StringFilter, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  filterType: 'string',
  item: {
    id: '1',
    type: 'blank',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
var _default = {
  title: 'Filters / String Filter',
  component: _StringFilter.StringFilter
};
exports["default"] = _default;
//# sourceMappingURL=StringFilter.stories.js.map