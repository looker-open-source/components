"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserAttribute = void 0;

var findUserAttribute = function findUserAttribute(attribute, userAttributes) {
  return userAttributes && userAttributes.find(function (_ref) {
    var name = _ref.name;
    return name === attribute;
  });
};
exports.findUserAttribute = findUserAttribute;
//# sourceMappingURL=find_user_attribute.js.map