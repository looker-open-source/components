"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeavesFromTrees = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getLeavesFromTrees = function getLeavesFromTrees(trees) {
  var fields = [];
  trees.forEach(function (tree) {
    if (tree.children) {
      fields = [].concat((0, _toConsumableArray2["default"])(fields), (0, _toConsumableArray2["default"])(getLeavesFromTrees(tree.children)));
    } else if (tree.payload) {
      fields = [].concat((0, _toConsumableArray2["default"])(fields), [_objectSpread(_objectSpread({}, tree.payload), {}, {
        label: tree.value
      })]);
    }
  });
  return fields;
};
exports.getLeavesFromTrees = getLeavesFromTrees;
//# sourceMappingURL=get_leaves_from_trees.js.map