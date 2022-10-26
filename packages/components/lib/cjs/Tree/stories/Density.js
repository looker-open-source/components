"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tree = require("../Tree");

var _TreeCollection = require("../TreeCollection");

var _TreeItem = require("../TreeItem");

var _Layout = require("../../Layout");

var DensityTree = function DensityTree(_ref) {
  var density = _ref.density;
  return _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
    defaultOpen: true,
    density: density,
    label: _react["default"].createElement("strong", null, "Cheeses")
  }, _react["default"].createElement(_Tree.Tree, {
    defaultOpen: true,
    label: _react["default"].createElement("strong", null, "French")
  }, _react["default"].createElement(_TreeItem.TreeItem, null, "Brie")), _react["default"].createElement(_TreeItem.TreeItem, null, "Cheddar"), _react["default"].createElement(_TreeItem.TreeItem, null, "Gouda"), _react["default"].createElement(_TreeItem.TreeItem, null, "Swiss")));
};

var densities = [1, 0, -1, -2, -3];

var Density = function Density() {
  return _react["default"].createElement(_Layout.Grid, {
    columns: densities.length
  }, densities.map(function (density) {
    return _react["default"].createElement(DensityTree, {
      density: density,
      key: density
    });
  }));
};

exports.Density = Density;
//# sourceMappingURL=Density.js.map