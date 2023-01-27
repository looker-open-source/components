"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMatchesAdvancedNode = void 0;
var _any = _interopRequireDefault(require("lodash/fp/any"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _tree = require("./tree");

var isMatchesAdvancedItem = function isMatchesAdvancedItem(subTypes) {
  return function (_ref) {
    var type = _ref.type;
    return type === 'matchesAdvanced' || subTypes.indexOf(type) === -1;
  };
};

var hasMatchesAdvancedNode = function hasMatchesAdvancedNode(subTypes) {
  return (0, _flow["default"])([_tree.treeToList, (0, _any["default"])(isMatchesAdvancedItem(subTypes))]);
};
exports.hasMatchesAdvancedNode = hasMatchesAdvancedNode;
//# sourceMappingURL=has_matches_advanced_node.js.map