const _excluded = ["left", "right"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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