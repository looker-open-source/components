"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CreateOption;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _FieldSelect = require("../../FieldSelect");
var _options = require("../../../Inputs/Select/stories/options");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CreateOption() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    filterTerm = _useState2[0],
    setFilterTerm = _useState2[1];
  var newOptions = (0, _react.useMemo)(function () {
    return _options.options.filter(function (option) {
      return option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });
  }, [filterTerm]);
  var formatCreateLabel = function formatCreateLabel(inputValue) {
    return "Create a fruit: ".concat(inputValue);
  };
  return _react["default"].createElement(_FieldSelect.FieldSelect, {
    label: "showCreate & formatCreateLabel",
    options: newOptions,
    isFilterable: true,
    onFilter: setFilterTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel,
    width: 300
  });
}
//# sourceMappingURL=CreateOption.js.map