"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShowCreate;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ShowCreate() {
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    searchTerm = _useState4[0],
    setSearchTerm = _useState4[1];
  var newOptions = (0, _react.useMemo)(function () {
    var options = [{
      value: 'Apples'
    }, {
      value: 'Bananas'
    }, {
      value: 'Oranges'
    }, {
      value: 'Pineapples'
    }, {
      value: 'Kiwis'
    }];
    if (searchTerm === '') return options;
    return options.filter(function (option) {
      return option.value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }, [searchTerm]);
  function formatCreateLabel(inputValue) {
    return "Add new fruit: ".concat(inputValue);
  }
  return _react["default"].createElement(_.Select, {
    maxWidth: 400,
    options: newOptions,
    "aria-label": "Fruits",
    placeholder: "Controlled, searchable, creatable",
    isFilterable: true,
    value: value,
    onChange: setValue,
    onFilter: setSearchTerm,
    showCreate: true,
    formatCreateLabel: formatCreateLabel
  });
}
//# sourceMappingURL=ShowCreate.js.map