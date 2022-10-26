"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DefaultStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _LocationFilter = require("./LocationFilter");

var DefaultStory = function DefaultStory(args) {
  return _react["default"].createElement(_LocationFilter.LocationFilter, args);
};

exports.DefaultStory = DefaultStory;
DefaultStory.args = {
  filterType: 'location',
  item: {
    id: '1',
    type: 'anyvalue',
    is: false
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false
};
var _default = {
  title: 'Filters / Location Filter',
  component: _LocationFilter.LocationFilter
};
exports["default"] = _default;
//# sourceMappingURL=LocationFilter.stories.js.map