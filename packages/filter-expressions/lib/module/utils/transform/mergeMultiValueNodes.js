import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
const _excluded = ["left", "right"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import union from 'lodash/union';
const mergeNodes = (left = {}, right = {}) => _objectSpread(_objectSpread({}, left), {}, {
  type: left.type,
  value: union(left.value, right.value),
  is: left.is && right.is
});

const canMergeLeftNodes = ({
  left,
  right
}, compareType, allowDifferentIsValue) => left && right && right.left && left.type === right.left.type && left.type === compareType && (left.is === right.left.is || allowDifferentIsValue);

const canMergeEndNodes = ({
  left,
  right
}, compareType, allowDifferentIsValue) => left && right && left.type === right.type && left.type === compareType && (left.is === right.is || allowDifferentIsValue);

const mergeNodesWithSameType = (root, compareType, allowDifferentIsValue = false) => {
  let node = root;
  while (canMergeLeftNodes(node, compareType, allowDifferentIsValue)) {
    const {
        left,
        right
      } = node,
      rest = _objectWithoutProperties(node, _excluded);
    const newLeft = mergeNodes(left, right === null || right === void 0 ? void 0 : right.left);
    const newRight = right === null || right === void 0 ? void 0 : right.right;
    node = _objectSpread(_objectSpread({}, rest), {}, {
      left: newLeft,
      right: newRight
    });
  }
  if (canMergeEndNodes(node, compareType, allowDifferentIsValue)) {
    node = mergeNodes(node.left, node.right);
  }
  return node;
};

export const mergeMultiValueNodes = (root, type, mergeDifferentIsValue = false) => {
  const workingRoot = mergeNodesWithSameType(root, type, mergeDifferentIsValue);
  let pointer = workingRoot;
  while (pointer.right) {
    pointer.right = mergeNodesWithSameType(pointer.right, type, mergeDifferentIsValue);
    pointer = pointer.right;
  }
  return workingRoot;
};
//# sourceMappingURL=mergeMultiValueNodes.js.map