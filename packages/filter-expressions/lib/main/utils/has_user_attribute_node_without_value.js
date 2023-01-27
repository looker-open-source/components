"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasUserAttributeNodeWithoutValue = void 0;
var _any = _interopRequireDefault(require("lodash/fp/any"));
var _allPass = _interopRequireDefault(require("lodash/fp/allPass"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _types = require("../types");
var _tree = require("./tree");

var isUserAttributeNode = function isUserAttributeNode(_ref) {
  var type = _ref.type;
  return type === _types.TYPE_USER_ATTRIBUTE;
};
var hasNoAttributeValue = function hasNoAttributeValue(_ref2) {
  var attributeValue = _ref2.attributeValue;
  return !attributeValue;
};

var hasUserAttributeNodeWithoutValue = (0, _flow["default"])([_tree.treeToList, (0, _any["default"])((0, _allPass["default"])([isUserAttributeNode, hasNoAttributeValue]))]);
exports.hasUserAttributeNodeWithoutValue = hasUserAttributeNodeWithoutValue;
//# sourceMappingURL=has_user_attribute_node_without_value.js.map