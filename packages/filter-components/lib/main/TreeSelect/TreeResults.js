"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeResults = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _NoMatchingFields = require("./NoMatchingFields");
var _ShortcutTree = require("./ShortcutTree");
var _Tree = require("./Tree");
var _utils = require("./utils");
var _react = _interopRequireDefault(require("react"));

var TreeResults = function TreeResults(_ref) {
  var searchInputValue = _ref.searchInputValue,
    tree = _ref.tree,
    shortcutTree = _ref.shortcutTree,
    onSelectedFieldChange = _ref.onSelectedFieldChange;
  var _React$useState = _react["default"].useState(tree),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    stateTree = _React$useState2[0],
    updateTree = _React$useState2[1];
  var isNoMatch = _react["default"].useMemo(function () {
    return !!searchInputValue && !(0, _utils.hasAnyVisibleEntry)(stateTree);
  }, [searchInputValue, stateTree]);
  _react["default"].useEffect(function () {
    if (stateTree) {
      updateTree((0, _utils.searchTree)(stateTree, searchInputValue));
    }
  }, [searchInputValue]);
  _react["default"].useEffect(function () {
    if (tree) {
      updateTree((0, _utils.searchTree)(tree, searchInputValue));
    }
  }, [tree]);
  var handleFieldClick = function handleFieldClick(_label, fieldData) {
    if (fieldData) {
      onSelectedFieldChange(fieldData);
    }
  };
  var onSectionClick = function onSectionClick(updateNode) {
    if (stateTree) {
      updateTree((0, _utils.openOrCloseNodes)(stateTree, updateNode));
    }
  };
  return isNoMatch ? _react["default"].createElement(_NoMatchingFields.NoMatchingFields, null) : _react["default"].createElement(_react["default"].Fragment, null, shortcutTree && _react["default"].createElement(_ShortcutTree.ShortcutTree, {
    tree: shortcutTree,
    onFieldClick: handleFieldClick
  }), _react["default"].createElement(_Tree.Tree, {
    tree: stateTree,
    onSectionClick: onSectionClick,
    onFieldClick: handleFieldClick
  }));
};
exports.TreeResults = TreeResults;
//# sourceMappingURL=TreeResults.js.map