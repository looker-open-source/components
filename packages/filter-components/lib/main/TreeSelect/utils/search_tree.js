"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchTree = exports.hasAnyVisibleEntry = exports.containsString = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var searchTree = function searchTree(trees, search, parentIsOpen) {
  return trees.map(function (tree) {
    var isOpen = !tree.isNotHighlightable && containsString(tree, search) || !!parentIsOpen;
    var match = tree.isNotHighlightable ? undefined : search;
    if (tree.children) {
      var children = searchTree(tree.children, search, isOpen);
      var childContains = children.some(function (child) {
        return child.isOpen;
      });
      return _objectSpread(_objectSpread({}, tree), {}, {
        isOpen: isOpen || childContains,
        hide: !isOpen && !childContains && search !== '',
        label: _react["default"].createElement(_components.ReplaceText, {
          match: match
        }, tree.value),
        children: children
      });
    } else {
      return _objectSpread(_objectSpread({}, tree), {}, {
        label: _react["default"].createElement(_components.ReplaceText, {
          match: match
        }, tree.value),
        isOpen: isOpen,
        hide: !isOpen && search !== ''
      });
    }
  });
};
exports.searchTree = searchTree;
var containsString = function containsString(_ref, str2) {
  var value = _ref.value;
  return !!(str2 && value.toLowerCase().includes(str2.toLowerCase()));
};

exports.containsString = containsString;
var hasAnyVisibleEntry = function hasAnyVisibleEntry(tree) {
  return (tree || []).some(function (entry) {
    return !entry.hide;
  });
};
exports.hasAnyVisibleEntry = hasAnyVisibleEntry;
//# sourceMappingURL=search_tree.js.map