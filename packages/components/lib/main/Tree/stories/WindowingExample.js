"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WindowingExample;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../Button");
var _Layout = require("../../Layout");
var _utils = require("../../utils");
var _2 = require("..");

function WindowingExample() {
  var _useToggle = (0, _utils.useToggle)(),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  var trees = _react["default"].useMemo(function () {
    return Array.from(Array(200), function (_, treeIndex) {
      return {
        content: _react["default"].createElement(_2.Tree, {
          label: "Tree ".concat(treeIndex)
        }),
        isOpen: value,
        items: Array.from(Array(10), function (_, itemIndex) {
          if (itemIndex === 2) {
            return {
              content: _react["default"].createElement(_2.Tree, {
                label: "Nested Tree ".concat(treeIndex, "-").concat(itemIndex)
              }),
              isOpen: value,
              items: Array.from(Array(4), function (_, nestedItemIdex) {
                return {
                  content: _react["default"].createElement(_2.TreeItem, null, "Nested TreeItem ", treeIndex, "-", itemIndex, "-", nestedItemIdex)
                };
              })
            };
          }
          return {
            content: _react["default"].createElement(_2.TreeItem, null, "TreeItem ", treeIndex, "-", itemIndex)
          };
        })
      };
    });
  }, [value]);
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Toggle all ", value ? 'closed' : 'open'), _react["default"].createElement(_2.WindowedTreeCollection, {
    height: 300,
    width: 500,
    trees: trees
  }));
}
//# sourceMappingURL=WindowingExample.js.map