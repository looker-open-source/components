"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasUserAttributeNode = void 0;
var _any = _interopRequireDefault(require("lodash/fp/any"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _types = require("../types");
var _tree = require("./tree");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var hasUserAttributeNode = (0, _flow["default"])([_tree.treeToList, (0, _any["default"])({
  type: _types.TYPE_USER_ATTRIBUTE
})]);
exports.hasUserAttributeNode = hasUserAttributeNode;
//# sourceMappingURL=has_user_attribute_node.js.map