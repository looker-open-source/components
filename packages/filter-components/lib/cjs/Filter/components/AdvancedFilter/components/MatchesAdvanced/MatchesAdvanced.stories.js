"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DefaultStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _MatchesAdvanced = require("./MatchesAdvanced");

var DefaultStory = function DefaultStory(args) {
  return _react["default"].createElement(_MatchesAdvanced.MatchesAdvanced, args);
};

exports.DefaultStory = DefaultStory;
DefaultStory.args = {
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
  title: 'Filters / Matches Advanced',
  component: _MatchesAdvanced.MatchesAdvanced
};
exports["default"] = _default;
//# sourceMappingURL=MatchesAdvanced.stories.js.map