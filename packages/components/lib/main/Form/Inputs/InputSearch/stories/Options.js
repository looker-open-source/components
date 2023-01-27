"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Options;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _2 = require("../../../../");

function Options() {
  var cheeses = [{
    description: 'Delicious cheese',
    detail: 'Netherlands ',
    value: 'Gouda'
  }, {
    value: 'Cheddar'
  }];
  var cheeses2 = [{
    value: 'Jack'
  }, {
    value: 'Swiss'
  }];
  var handleSelectOption = function handleSelectOption(option) {
    return option && alert("You picked ".concat(option.value));
  };
  return _react["default"].createElement(_2.Space, null, _react["default"].createElement(_.InputSearch, {
    options: cheeses,
    onSelectOption: handleSelectOption,
    changeOnSelect: false,
    placeholder: "Options act like results"
  }), _react["default"].createElement(_.InputSearch, {
    options: cheeses2,
    placeholder: "Options act like suggestions"
  }));
}
//# sourceMappingURL=Options.js.map