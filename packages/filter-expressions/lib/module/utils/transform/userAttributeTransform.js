import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { TYPE_USER_ATTRIBUTE } from '../../types';
import { findUserAttribute } from '../user_attribute';

const updateAttributeValue = (node, userAttributes) => {
  if (node && node.type === TYPE_USER_ATTRIBUTE) {
    const userAttribute = findUserAttribute(node.attributeName, userAttributes);
    return _objectSpread(_objectSpread({}, node), {}, {
      attributeValue: userAttribute && userAttribute.value
    });
  }
  return node;
};

export const userAttributeTransform = userAttributes => root => {
  if (!userAttributes || !userAttributes.length) return root;
  const workingRoot = updateAttributeValue(root, userAttributes);
  let pointer = workingRoot;
  while (pointer.right) {
    pointer.left = pointer.left && updateAttributeValue(pointer.left, userAttributes);
    pointer.right = updateAttributeValue(pointer.right, userAttributes);
    pointer = pointer.right;
  }
  return workingRoot;
};
//# sourceMappingURL=userAttributeTransform.js.map