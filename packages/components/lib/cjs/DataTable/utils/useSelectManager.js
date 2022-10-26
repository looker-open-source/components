"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectManager = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useSelectManager = function useSelectManager(possibilities) {
  var defaultSelections = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0, _react.useState)(defaultSelections),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selections = _useState2[0],
      setSelections = _useState2[1];

  var onSelect = function onSelect(selectionId) {
    setSelections(selections.includes(selectionId) ? selections.filter(function (itemId) {
      return possibilities.includes(itemId) && itemId !== selectionId;
    }) : [].concat((0, _toConsumableArray2["default"])(selections), [selectionId]));
  };

  var onSelectAll = function onSelectAll() {
    setSelections(selections.length ? [] : possibilities);
  };

  return {
    onSelect: onSelect,
    onSelectAll: onSelectAll,
    selections: selections,
    setSelections: setSelections
  };
};

exports.useSelectManager = useSelectManager;
//# sourceMappingURL=useSelectManager.js.map