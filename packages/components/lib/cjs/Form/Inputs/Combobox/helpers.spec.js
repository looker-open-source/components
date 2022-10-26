"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = require("./");

describe('Combobox helpers', function () {
  var renderCombobox = function renderCombobox() {
    return (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_.Combobox, {
      onChange: jest.fn()
    }, _react2["default"].createElement(_.ComboboxInput, {
      placeholder: "Type here"
    }), _react2["default"].createElement(_.ComboboxList, null, _react2["default"].createElement(_.ComboboxOption, {
      label: "Foo",
      value: "101",
      onClick: jest.fn()
    }), _react2["default"].createElement(_.ComboboxOption, {
      label: "Bar",
      value: "102"
    }))));
  };

  test('openCombobox opens the combobox using the provided placeholder text', function () {
    renderCombobox();
    (0, _componentsTestUtils.openCombobox)('Type here');
    expect(_react.screen.getByText('Foo')).toBeVisible();
    (0, _componentsTestUtils.closeCombobox)();
  });
  test('closeCombobox closes any open comboboxes', function () {
    renderCombobox();
    (0, _componentsTestUtils.openCombobox)('Type here');
    expect(_react.screen.getByText('Foo')).toBeVisible();
    (0, _componentsTestUtils.closeCombobox)();
    expect(_react.screen.queryByText('Foo')).not.toBeInTheDocument();
  });
  test('getComboboxOptions returns the expected number of options for an open Combobox', function () {
    renderCombobox();
    (0, _componentsTestUtils.openCombobox)('Type here');
    expect((0, _componentsTestUtils.getComboboxOptions)()).toHaveLength(2);
    (0, _componentsTestUtils.closeCombobox)();
  });
  test('getComboboxOptionText returns the expected text content of the provided option element', function () {
    renderCombobox();
    (0, _componentsTestUtils.openCombobox)('Type here');
    var options = (0, _componentsTestUtils.getComboboxOptions)();
    expect((0, _componentsTestUtils.getComboboxOptionText)(options[0])).toEqual('Foo');
    expect((0, _componentsTestUtils.getComboboxOptionText)(options[1])).toEqual('Bar');
    (0, _componentsTestUtils.closeCombobox)();
  });
  test('getAllComboboxOptionText returns the expected text content of the provided option element', function () {
    renderCombobox();
    (0, _componentsTestUtils.openCombobox)('Type here');
    var optionTexts = (0, _componentsTestUtils.getAllComboboxOptionText)();
    expect(optionTexts).toMatchInlineSnapshot("\n      Array [\n        \"Foo\",\n        \"Bar\",\n      ]\n    ");
    (0, _componentsTestUtils.closeCombobox)();
  });
});
//# sourceMappingURL=helpers.spec.js.map