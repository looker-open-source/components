"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAttributeTransform = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("../../types");
var _user_attribute = require("../user_attribute");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var updateAttributeValue = function updateAttributeValue(node, userAttributes) {
  if (node && node.type === _types.TYPE_USER_ATTRIBUTE) {
    var userAttribute = (0, _user_attribute.findUserAttribute)(node.attributeName, userAttributes);
    return _objectSpread(_objectSpread({}, node), {}, {
      attributeValue: userAttribute && userAttribute.value
    });
  }
  return node;
};

var userAttributeTransform = function userAttributeTransform(userAttributes) {
  return function (root) {
    if (!userAttributes || !userAttributes.length) return root;
    var workingRoot = updateAttributeValue(root, userAttributes);
    var pointer = workingRoot;
    while (pointer.right) {
      pointer.left = pointer.left && updateAttributeValue(pointer.left, userAttributes);
      pointer.right = updateAttributeValue(pointer.right, userAttributes);
      pointer = pointer.right;
    }
    return workingRoot;
  };
};
exports.userAttributeTransform = userAttributeTransform;
//# sourceMappingURL=userAttributeTransform.js.map