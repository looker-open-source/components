"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _TimeInput = require("./TimeInput");

describe('TimeInput', function () {
  it('onChange returns a properly formatted date object', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_TimeInput.TimeInput, {
      date: new Date(2010, 9, 29, 15, 26, 35),
      onChange: handleChange
    }));

    var inputBox = _react2.screen.getByDisplayValue('03:26 pm');

    _react2.fireEvent.click(inputBox);

    var newTime = _react2.screen.getByText('10:30 am');

    _react2.fireEvent.click(newTime);

    expect(handleChange.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          2010-10-29T17:30:00.000Z,\n        ],\n      ]\n    ");
  });
});
//# sourceMappingURL=TimeInput.spec.js.map