"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowedTreeNodeFilterer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getTreeWindowIntersection = function getTreeWindowIntersection(list, index, firstIDinWindow, lastIDinWindow) {
  var tree = list[index];
  if (tree.id > lastIDinWindow) return 'after';
  var nextTree = list[index + 1];

  if (tree.id < firstIDinWindow) {
    if (nextTree && nextTree.id > firstIDinWindow) {
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