"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAttributeToString = void 0;

var userAttributeToString = function userAttributeToString(_ref) {
  var attributeName = _ref.attributeName;
  return attributeName ? "{{ _user_attributes['".concat(attributeName, "'] }}") : '';
};
exports.userAttributeToString = userAttributeToString;
//# sourceMappingURL=user_attribute_to_string.js.map