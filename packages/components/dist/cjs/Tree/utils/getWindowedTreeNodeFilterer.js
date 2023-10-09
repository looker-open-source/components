"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowedTreeNodeFilterer = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var getTreeWindowIntersection = function getTreeWindowIntersection(list, index, firstIDinWindow, lastIDinWindow) {
  var tree = list[index];
  if (tree.id > lastIDinWindow) return 'after';
  var nextTree = list[index + 1];
  if (tree.id < firstIDinWindow) {
    if (!nextTree || (nextTree === null || nextTree === void 0 ? void 0 : nextTree.id) > firstIDinWindow) {
      return 'intersects';
    }
  } else if (tree.id <= lastIDinWindow) {
    return 'intersects';
  }
  return 'before';
};
var getWindowedTreeNodeFilterer = function getWindowedTreeNodeFilterer(filteredList, firstIDinWindow, lastIDinWindow) {
  return function (node, index, list) {
    var intersection = getTreeWindowIntersection(list, index, firstIDinWindow, lastIDinWindow);
    if (intersection === 'after') return false;
    if (intersection === 'intersects') {
      var treeItems = node.items;
      if (treeItems) {
        var filteredItems = [];
        treeItems.every(getWindowedTreeNodeFilterer(filteredItems, firstIDinWindow, lastIDinWindow));
        var treeWithFilteredItems = _objectSpread(_objectSpread({}, node), {}, {
          items: filteredItems
        });
        filteredList.push(treeWithFilteredItems);
      } else {
        filteredList.push(node);
      }
    }
    return true;
  };
};
exports.getWindowedTreeNodeFilterer = getWindowedTreeNodeFilterer;
//# sourceMappingURL=getWindowedTreeNodeFilterer.js.map