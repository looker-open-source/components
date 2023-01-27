"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeUserAttribute = void 0;
var _describe_is_item = require("../summary/describe_is_item");

var describeUserAttribute = function describeUserAttribute(_ref) {
  var attributeValue = _ref.attributeValue;
  return attributeValue ? (0, _describe_is_item.describeIsItem)(true, attributeValue) : '';
};
exports.describeUserAttribute = describeUserAttribute;
//# sourceMappingURL=describe_user_attribute.js.map