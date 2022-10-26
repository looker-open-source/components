"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCombobox = exports.getComboboxOptions = exports.getComboboxOptionText = exports.getAllComboboxOptionText = exports.closeCombobox = void 0;

var _react = require("@testing-library/react");

var openCombobox = function openCombobox(placeholderText) {
  return _react.fireEvent.mouseDown(_react.screen.getByPlaceholderText(placeholderText));
};

exports.openCombobox = openCombobox;

var closeCombobox = function closeCombobox() {
  return _react.fireEvent.click(document);
};

exports.closeCombobox = closeCombobox;

var getComboboxOptions = function getComboboxOptions() {
  return _react.screen.getAllByRole('option');
};

exports.getComboboxOptions = getComboboxOptions;

var getComboboxOptionText = function getComboboxOptionText(el) {
  return (0, _react.getNodeText)(el.children[1]);
};

exports.getComboboxOptionText = getComboboxOptionText;

var getAllComboboxOptionText = function getAllComboboxOptionText() {
  return getComboboxOptions().map(getComboboxOptionText);
};

exports.getAllComboboxOptionText = getAllComboboxOptionText;
//# sourceMappingURL=comboboxHelpers.js.map